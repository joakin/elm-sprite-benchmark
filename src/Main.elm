port module Main exposing (Model, Msg(..), init, main, subscriptions, update, view)

import Browser
import Browser.Events
import Game.Resources
import Game.TwoD
import Game.TwoD.Camera
import Game.TwoD.Render
import Html exposing (Html)
import Html.Attributes
import Html.Events
import Json.Encode
import Math.Matrix4 as Mat4 exposing (Mat4)
import Math.Vector3 as Vec3 exposing (Vec3, vec3)
import Random
import WebGL exposing (Mesh, Shader)


width =
    600


height =
    400


canvasMargin =
    10


spriteSize =
    32


port sendSprites : Json.Encode.Value -> Cmd msg


main : Program Flags Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


type alias Flags =
    { timestamp : Float
    }


type alias Model =
    { sprites : List Sprite
    , seed : Random.Seed
    , renderer : Renderer

    -- Zinggi's Game 2D library
    , resources : Game.Resources.Resources
    }


type Renderer
    = HtmlTopLeft -- 1000
    | HtmlTransformTranslate -- 900
    | None -- 30,000
    | Zinggi -- 1000
    | DataAttrs -- 8000
    | PixiJsDataAttrs -- 6000
    | PixiJsPorts -- 14,000
    | WebGLRenderer -- ???


type alias Sprite =
    { x : Float
    , y : Float
    , angle : Float
    , speed : Float
    }


type Msg
    = Tick Float
    | ChangeRenderer Renderer
    | Resources Game.Resources.Msg


init : Flags -> ( Model, Cmd Msg )
init flags =
    let
        seed =
            Random.initialSeed (round flags.timestamp)

        ( newSprites, newSeed ) =
            Random.step
                (Random.list 100 spriteGenerator)
                seed
    in
    ( { sprites = newSprites
      , seed = newSeed
      , renderer = HtmlTransformTranslate -- WebGLRenderer --HtmlTopLeft
      , resources = Game.Resources.init
      }
    , Game.Resources.loadTextures [ "cat.png" ]
        |> Cmd.map Resources
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Tick msDelta ->
            let
                delta =
                    msDelta / 1000

                gravity =
                    5

                minTick =
                    1 / 55

                ( newSprites, newSeed ) =
                    if delta > minTick then
                        -- too slow! remove some sprites (down to 1 sprite)
                        model.sprites
                            |> List.length
                            |> toFloat
                            |> (*) (2 * minTick)
                            |> ceiling
                            |> min (List.length model.sprites - 1)
                            |> (\decreaseAmt ->
                                    ( List.drop decreaseAmt model.sprites, model.seed )
                               )

                    else
                        -- so fast, add more sprites!
                        model.sprites
                            |> List.length
                            |> toFloat
                            |> (*) 0.01
                            |> round
                            |> (\increaseAmt ->
                                    Random.step
                                        (Random.list increaseAmt spriteGenerator)
                                        model.seed
                                        |> (\( generatedSprites, s ) -> ( generatedSprites ++ model.sprites, s ))
                               )
            in
            ( { model
                | sprites =
                    newSprites
                        --|> always model.sprites
                        |> List.map
                            (\sprite ->
                                let
                                    ( newX, newY ) =
                                        ( sprite.speed, sprite.angle )
                                            |> fromPolar
                                            |> (\( x, y ) ->
                                                    ( sprite.x + x
                                                    , sprite.y + y
                                                    )
                                               )

                                    -- could be better :/
                                    min =
                                        -0.1

                                    max =
                                        1.0

                                    diff =
                                        max - min

                                    wrappedX =
                                        if newX < min then
                                            max

                                        else if newX > max then
                                            min

                                        else
                                            newX

                                    wrappedY =
                                        if newY < min then
                                            max

                                        else if newY > max then
                                            min

                                        else
                                            newY
                                in
                                { x = wrappedX
                                , y = wrappedY
                                , angle = sprite.angle
                                , speed = sprite.speed
                                }
                            )
                , seed = newSeed
              }
            , case model.renderer of
                PixiJsPorts ->
                    sendSprites (encodeSprites model.sprites)

                _ ->
                    Cmd.none
            )

        ChangeRenderer renderer ->
            ( { model
                | renderer = renderer
              }
            , Cmd.none
            )

        Resources resourcesMsg ->
            ( { model
                | resources =
                    Game.Resources.update resourcesMsg model.resources
              }
            , Cmd.none
            )


spriteGenerator : Random.Generator Sprite
spriteGenerator =
    Random.map4
        (\x y angle speed ->
            { x = x
            , y = y
            , angle = angle
            , speed = speed
            }
        )
        (Random.float 0 1)
        (Random.float 0 1)
        (Random.float 0 (2 * pi))
        (Random.float 0.0001 0.005)


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Browser.Events.onAnimationFrameDelta Tick
        ]


view : Model -> Html Msg
view model =
    Html.div
        [ Html.Attributes.style "display" "flex"
        , Html.Attributes.style "margin" (px canvasMargin)
        ]
        [ -- canvases
          Html.div
            [ Html.Attributes.style "width" (px width)
            , Html.Attributes.style "height" (px height)

            --, Html.Attributes.style "padding-right" (px spriteSize)
            , Html.Attributes.style "border" "1px solid black"
            , Html.Attributes.style "position" "relative"

            --, Html.Attributes.style "background" "rgba(0,255,255,0.1)"
            , Html.Attributes.style "overflow" "hidden"
            ]
            (case model.renderer of
                HtmlTopLeft ->
                    viewHtmlTopLeft model.sprites
                        |> withWhiteBg

                HtmlTransformTranslate ->
                    viewHtmlTransformTranslate model.sprites
                        |> withWhiteBg

                None ->
                    []
                        |> withWhiteBg

                Zinggi ->
                    viewZinggi model.resources model.sprites
                        |> withWhiteBg

                DataAttrs ->
                    viewDataAttrs model.sprites
                        |> withWhiteBg

                PixiJsDataAttrs ->
                    viewPixiJsDataAttrs model.sprites

                PixiJsPorts ->
                    []

                WebGLRenderer ->
                    viewWebGL model.sprites
                        |> withWhiteBg
            )
        , -- buttons
          Html.div
            [ Html.Attributes.style "margin" "10px"
            , Html.Attributes.style "display" "flex"
            , Html.Attributes.style "flex-direction" "column"
            ]
            (List.map
                (\( renderer, str ) ->
                    Html.button
                        [ Html.Attributes.style "font-size" "16px"
                        , Html.Attributes.style "margin" "2px 0"
                        , if model.renderer == renderer then
                            Html.Attributes.disabled True

                          else
                            Html.Events.onClick (ChangeRenderer renderer)
                        ]
                        [ Html.text str ]
                )
                [ ( HtmlTopLeft, "HTML: top, left" )
                , ( HtmlTransformTranslate, "HTML: transform" )
                , ( Zinggi, "Zinggi Game.TwoD" )
                , ( DataAttrs, "Just data attrs" )
                , ( PixiJsDataAttrs, "PixiJS with data attrs" )
                , ( PixiJsPorts, "PixiJS ports" )
                , ( None, "None" )
                , ( WebGLRenderer, "WebGL" )
                ]
            )

        -- count
        , Html.div
            [ Html.Attributes.style "position" "absolute"
            , Html.Attributes.style "bottom" "0"
            ]
            [ Html.text ("Total sprites: " ++ String.fromInt (List.length model.sprites)) ]
        ]


withWhiteBg : List (Html Msg) -> List (Html Msg)
withWhiteBg elements =
    [ Html.div
        [ Html.Attributes.style "background" "white"
        , Html.Attributes.style "width" "100%"
        , Html.Attributes.style "height" "100%"
        ]
        elements
    ]


viewHtmlTopLeft : List Sprite -> List (Html Msg)
viewHtmlTopLeft sprites =
    -- around 800
    sprites
        |> List.map
            (\sprite ->
                Html.img
                    [ Html.Attributes.src "cat.png"
                    , Html.Attributes.style "width" (px spriteSize)
                    , Html.Attributes.style "height" (px spriteSize)
                    , Html.Attributes.style "position" "absolute"
                    , Html.Attributes.style "left" (width * sprite.x |> px)
                    , Html.Attributes.style "bottom" (height * sprite.y |> px)
                    ]
                    []
            )


viewHtmlTransformTranslate : List Sprite -> List (Html Msg)
viewHtmlTransformTranslate sprites =
    -- around 700
    sprites
        |> List.map
            (\sprite ->
                Html.img
                    [ Html.Attributes.src "cat.png"
                    , Html.Attributes.style "width" (px spriteSize)
                    , Html.Attributes.style "height" (px spriteSize)
                    , Html.Attributes.style "position" "absolute"
                    , Html.Attributes.style "transform"
                        ("translate("
                            ++ (width * sprite.x |> px)
                            ++ ","
                            ++ (height - spriteSize + (height * -sprite.y) |> px)
                        )
                    , Html.Attributes.style "will-change" "transform"
                    ]
                    []
            )


viewZinggi : Game.Resources.Resources -> List Sprite -> List (Html Msg)
viewZinggi resources sprites =
    [ Game.TwoD.render
        { time = 0
        , size = ( round width, round height )
        , camera = Game.TwoD.Camera.fixedArea (width * height) ( 0.5 * width, 0.5 * height )
        }
        (sprites
            |> List.map
                (\sprite ->
                    Game.TwoD.Render.sprite
                        { texture = Game.Resources.getTexture "cat.png" resources
                        , position = ( sprite.x * width, sprite.y * height )
                        , size = ( spriteSize, spriteSize )
                        }
                )
        )
    ]


viewDataAttrs : List Sprite -> List (Html Msg)
viewDataAttrs sprites =
    [ Html.div
        [ Html.Attributes.attribute "data-sprites" (spritesToAttrVal sprites)
        , Html.Attributes.id "sprite-data"
        ]
        []
    ]


viewPixiJsDataAttrs : List Sprite -> List (Html Msg)
viewPixiJsDataAttrs sprites =
    [ Html.div
        [ Html.Attributes.attribute "data-sprites" (spritesToAttrVal sprites)
        , Html.Attributes.id "sprite-data-for-pixijs"
        ]
        []
    ]


spritesToAttrVal : List Sprite -> String
spritesToAttrVal sprites =
    if False then
        encodeSpritesWithString sprites

    else
        encodeSprites sprites |> Json.Encode.encode 0


encodeSprites : List Sprite -> Json.Encode.Value
encodeSprites sprites =
    sprites
        |> Json.Encode.list
            (\sprite ->
                Json.Encode.object
                    [ ( "x", Json.Encode.float sprite.x )
                    , ( "y", Json.Encode.float sprite.y )
                    ]
            )


encodeSpritesWithString : List Sprite -> String
encodeSpritesWithString sprites =
    sprites
        |> List.map
            (\sprite ->
                "{\"x\":" ++ String.fromFloat sprite.x ++ ",\"y\":" ++ String.fromFloat sprite.y ++ "}"
            )
        |> String.join ","
        |> (\str -> "[" ++ str ++ "]")


hasInit =
    False


viewWebGL : List Sprite -> List (Html Msg)
viewWebGL sprites =
    [ WebGL.toHtml
        [ Html.Attributes.width 600
        , Html.Attributes.height 400
        ]
        (sprites
            |> List.map
                (\{ x, y } ->
                    WebGL.entity
                        vertexShader
                        fragmentShader
                        cubeMesh
                        { x = x, y = y }
                )
        )
    ]


type alias Uniforms =
    { x : Float
    , y : Float
    }


type alias Vertex =
    { color : Vec3
    , position : Vec3
    }


vertexShader : Shader Vertex Uniforms { vcolor : Vec3 }
vertexShader =
    [glsl|
        attribute vec3 position;
        attribute vec3 color;
        uniform float x;
        uniform float y;
        varying vec3 vcolor;
        void main () {
            vec3 newPostion = vec3(x - 0.5, y - 0.5, 0) + position;
            gl_Position = vec4(newPostion, 1.0);
            vcolor = color;
        }
    |]


fragmentShader : Shader {} Uniforms { vcolor : Vec3 }
fragmentShader =
    [glsl|
        precision mediump float;
        varying vec3 vcolor;
        void main () {
            gl_FragColor = vec4(vcolor, 1.0);
        }
    |]


cubeMesh : Mesh Vertex
cubeMesh =
    let
        rft =
            vec3 0.1 0.1 0

        lft =
            vec3 -0.1 0.1 0

        lbt =
            vec3 -0.1 -0.1 0

        rbt =
            vec3 0.1 -0.1 0
    in
    [ face (vec3 237 212 0) rft lft lbt rbt -- yellow
    ]
        |> List.concat
        |> WebGL.triangles


face : Vec3 -> Vec3 -> Vec3 -> Vec3 -> Vec3 -> List ( Vertex, Vertex, Vertex )
face color a b c d =
    let
        vertex position =
            Vertex (Vec3.scale (1 / 255) color) position
    in
    [ ( vertex a, vertex b, vertex c )
    , ( vertex c, vertex d, vertex a )
    ]


px : Float -> String
px num =
    String.fromFloat num ++ "px"
