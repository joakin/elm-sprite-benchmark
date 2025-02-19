(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.aZ.ac === region.be.ac)
	{
		return 'on line ' + region.aZ.ac;
	}
	return 'on lines ' + region.aZ.ac + ' through ' + region.be.ac;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**_UNUSED/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? elm$core$Result$Ok(value)
		: (value instanceof String)
			? elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList === 'function' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.cH,
		impl.c0,
		impl.cT,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


var _Texture_guid = 0;

// eslint-disable-next-line no-unused-vars
var _Texture_load = F6(function (magnify, mininify, horizontalWrap, verticalWrap, flipY, url) {
  var isMipmap = mininify !== 9728 && mininify !== 9729;
  return _Scheduler_binding(function (callback) {
    var img = new Image();
    function createTexture(gl) {
      var texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, flipY);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magnify);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, mininify);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, horizontalWrap);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, verticalWrap);
      if (isMipmap) {
        gl.generateMipmap(gl.TEXTURE_2D);
      }
      gl.bindTexture(gl.TEXTURE_2D, null);
      return texture;
    }
    img.onload = function () {
      var width = img.width;
      var height = img.height;
      var widthPowerOfTwo = (width & (width - 1)) === 0;
      var heightPowerOfTwo = (height & (height - 1)) === 0;
      var isSizeValid = (widthPowerOfTwo && heightPowerOfTwo) || (
        !isMipmap
        && horizontalWrap === 33071 // clamp to edge
        && verticalWrap === 33071
      );
      if (isSizeValid) {
        callback(_Scheduler_succeed({
          $: 0,
          id: _Texture_guid++,
          ba: createTexture,
          a: width,
          b: height
        }));
      } else {
        callback(_Scheduler_fail(A2(
          elm_explorations$webgl$WebGL$Texture$SizeError,
          width,
          height
        )));
      }
    };
    img.onerror = function () {
      callback(_Scheduler_fail(elm_explorations$webgl$WebGL$Texture$LoadError));
    };
    if (url.slice(0, 5) !== 'data:') {
      img.crossOrigin = 'Anonymous';
    }
    img.src = url;
  });
});

// eslint-disable-next-line no-unused-vars
var _Texture_size = function (texture) {
  return _Utils_Tuple2(texture.a, texture.b);
};



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		y: func(record.y),
		a_: record.a_,
		aP: record.aP
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.y;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.a_;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.aP) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.cH,
		impl.c0,
		impl.cT,
		function(sendToApp, initialModel) {
			var view = impl.c2;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.cH,
		impl.c0,
		impl.cT,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.ae && impl.ae(sendToApp)
			var view = impl.c2;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.cn);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.cW) && (_VirtualDom_doc.title = title = doc.cW);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.cN;
	var onUrlRequest = impl.cO;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		ae: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.bW === next.bW
							&& curr.bl === next.bl
							&& curr.bS.a === next.bS.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		cH: function(flags)
		{
			return A3(impl.cH, flags, _Browser_getUrl(), key);
		},
		c2: impl.c2,
		c0: impl.c0,
		cT: impl.cT
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { cF: 'hidden', cr: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { cF: 'mozHidden', cr: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { cF: 'msHidden', cr: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { cF: 'webkitHidden', cr: 'webkitvisibilitychange' }
		: { cF: 'hidden', cr: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		b2: _Browser_getScene(),
		cd: {
			p: _Browser_window.pageXOffset,
			q: _Browser_window.pageYOffset,
			c4: _Browser_doc.documentElement.clientWidth,
			cD: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		c4: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		cD: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			b2: {
				c4: node.scrollWidth,
				cD: node.scrollHeight
			},
			cd: {
				p: node.scrollLeft,
				q: node.scrollTop,
				c4: node.clientWidth,
				cD: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			b2: _Browser_getScene(),
			cd: {
				p: x,
				q: y,
				c4: _Browser_doc.documentElement.clientWidth,
				cD: _Browser_doc.documentElement.clientHeight
			},
			cw: {
				p: x + rect.left,
				q: y + rect.top,
				c4: rect.width,
				cD: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}


/*
 * Copyright (c) 2010 Mozilla Corporation
 * Copyright (c) 2010 Vladimir Vukicevic
 * Copyright (c) 2013 John Mayer
 * Copyright (c) 2018 Andrey Kuzmin
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

// Vector2

var _MJS_v2 = F2(function(x, y) {
    return new Float64Array([x, y]);
});

var _MJS_v2getX = function(a) {
    return a[0];
};

var _MJS_v2getY = function(a) {
    return a[1];
};

var _MJS_v2setX = F2(function(x, a) {
    return new Float64Array([x, a[1]]);
});

var _MJS_v2setY = F2(function(y, a) {
    return new Float64Array([a[0], y]);
});

var _MJS_v2toRecord = function(a) {
    return { p: a[0], q: a[1] };
};

var _MJS_v2fromRecord = function(r) {
    return new Float64Array([r.p, r.q]);
};

var _MJS_v2add = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    return r;
});

var _MJS_v2sub = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    return r;
});

var _MJS_v2negate = function(a) {
    var r = new Float64Array(2);
    r[0] = -a[0];
    r[1] = -a[1];
    return r;
};

var _MJS_v2direction = F2(function(a, b) {
    var r = new Float64Array(2);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    var im = 1.0 / _MJS_v2lengthLocal(r);
    r[0] = r[0] * im;
    r[1] = r[1] * im;
    return r;
});

function _MJS_v2lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}
var _MJS_v2length = _MJS_v2lengthLocal;

var _MJS_v2lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1];
};

var _MJS_v2distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return Math.sqrt(dx * dx + dy * dy);
});

var _MJS_v2distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    return dx * dx + dy * dy;
});

var _MJS_v2normalize = function(a) {
    var r = new Float64Array(2);
    var im = 1.0 / _MJS_v2lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    return r;
};

var _MJS_v2scale = F2(function(k, a) {
    var r = new Float64Array(2);
    r[0] = a[0] * k;
    r[1] = a[1] * k;
    return r;
});

var _MJS_v2dot = F2(function(a, b) {
    return a[0] * b[0] + a[1] * b[1];
});

// Vector3

var _MJS_v3temp1Local = new Float64Array(3);
var _MJS_v3temp2Local = new Float64Array(3);
var _MJS_v3temp3Local = new Float64Array(3);

var _MJS_v3 = F3(function(x, y, z) {
    return new Float64Array([x, y, z]);
});

var _MJS_v3getX = function(a) {
    return a[0];
};

var _MJS_v3getY = function(a) {
    return a[1];
};

var _MJS_v3getZ = function(a) {
    return a[2];
};

var _MJS_v3setX = F2(function(x, a) {
    return new Float64Array([x, a[1], a[2]]);
});

var _MJS_v3setY = F2(function(y, a) {
    return new Float64Array([a[0], y, a[2]]);
});

var _MJS_v3setZ = F2(function(z, a) {
    return new Float64Array([a[0], a[1], z]);
});

var _MJS_v3toRecord = function(a) {
    return { p: a[0], q: a[1], c6: a[2] };
};

var _MJS_v3fromRecord = function(r) {
    return new Float64Array([r.p, r.q, r.c6]);
};

var _MJS_v3add = F2(function(a, b) {
    var r = new Float64Array(3);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    r[2] = a[2] + b[2];
    return r;
});

function _MJS_v3subLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    return r;
}
var _MJS_v3sub = F2(_MJS_v3subLocal);

var _MJS_v3negate = function(a) {
    var r = new Float64Array(3);
    r[0] = -a[0];
    r[1] = -a[1];
    r[2] = -a[2];
    return r;
};

function _MJS_v3directionLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    return _MJS_v3normalizeLocal(_MJS_v3subLocal(a, b, r), r);
}
var _MJS_v3direction = F2(_MJS_v3directionLocal);

function _MJS_v3lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
}
var _MJS_v3length = _MJS_v3lengthLocal;

var _MJS_v3lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
};

var _MJS_v3distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
});

var _MJS_v3distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    return dx * dx + dy * dy + dz * dz;
});

function _MJS_v3normalizeLocal(a, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    var im = 1.0 / _MJS_v3lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    r[2] = a[2] * im;
    return r;
}
var _MJS_v3normalize = _MJS_v3normalizeLocal;

var _MJS_v3scale = F2(function(k, a) {
    return new Float64Array([a[0] * k, a[1] * k, a[2] * k]);
});

var _MJS_v3dotLocal = function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};
var _MJS_v3dot = F2(_MJS_v3dotLocal);

function _MJS_v3crossLocal(a, b, r) {
    if (r === undefined) {
        r = new Float64Array(3);
    }
    r[0] = a[1] * b[2] - a[2] * b[1];
    r[1] = a[2] * b[0] - a[0] * b[2];
    r[2] = a[0] * b[1] - a[1] * b[0];
    return r;
}
var _MJS_v3cross = F2(_MJS_v3crossLocal);

var _MJS_v3mul4x4 = F2(function(m, v) {
    var w;
    var tmp = _MJS_v3temp1Local;
    var r = new Float64Array(3);

    tmp[0] = m[3];
    tmp[1] = m[7];
    tmp[2] = m[11];
    w = _MJS_v3dotLocal(v, tmp) + m[15];
    tmp[0] = m[0];
    tmp[1] = m[4];
    tmp[2] = m[8];
    r[0] = (_MJS_v3dotLocal(v, tmp) + m[12]) / w;
    tmp[0] = m[1];
    tmp[1] = m[5];
    tmp[2] = m[9];
    r[1] = (_MJS_v3dotLocal(v, tmp) + m[13]) / w;
    tmp[0] = m[2];
    tmp[1] = m[6];
    tmp[2] = m[10];
    r[2] = (_MJS_v3dotLocal(v, tmp) + m[14]) / w;
    return r;
});

// Vector4

var _MJS_v4 = F4(function(x, y, z, w) {
    return new Float64Array([x, y, z, w]);
});

var _MJS_v4getX = function(a) {
    return a[0];
};

var _MJS_v4getY = function(a) {
    return a[1];
};

var _MJS_v4getZ = function(a) {
    return a[2];
};

var _MJS_v4getW = function(a) {
    return a[3];
};

var _MJS_v4setX = F2(function(x, a) {
    return new Float64Array([x, a[1], a[2], a[3]]);
});

var _MJS_v4setY = F2(function(y, a) {
    return new Float64Array([a[0], y, a[2], a[3]]);
});

var _MJS_v4setZ = F2(function(z, a) {
    return new Float64Array([a[0], a[1], z, a[3]]);
});

var _MJS_v4setW = F2(function(w, a) {
    return new Float64Array([a[0], a[1], a[2], w]);
});

var _MJS_v4toRecord = function(a) {
    return { p: a[0], q: a[1], c6: a[2], ce: a[3] };
};

var _MJS_v4fromRecord = function(r) {
    return new Float64Array([r.p, r.q, r.c6, r.ce]);
};

var _MJS_v4add = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] + b[0];
    r[1] = a[1] + b[1];
    r[2] = a[2] + b[2];
    r[3] = a[3] + b[3];
    return r;
});

var _MJS_v4sub = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    r[3] = a[3] - b[3];
    return r;
});

var _MJS_v4negate = function(a) {
    var r = new Float64Array(4);
    r[0] = -a[0];
    r[1] = -a[1];
    r[2] = -a[2];
    r[3] = -a[3];
    return r;
};

var _MJS_v4direction = F2(function(a, b) {
    var r = new Float64Array(4);
    r[0] = a[0] - b[0];
    r[1] = a[1] - b[1];
    r[2] = a[2] - b[2];
    r[3] = a[3] - b[3];
    var im = 1.0 / _MJS_v4lengthLocal(r);
    r[0] = r[0] * im;
    r[1] = r[1] * im;
    r[2] = r[2] * im;
    r[3] = r[3] * im;
    return r;
});

function _MJS_v4lengthLocal(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3]);
}
var _MJS_v4length = _MJS_v4lengthLocal;

var _MJS_v4lengthSquared = function(a) {
    return a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3];
};

var _MJS_v4distance = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    var dw = a[3] - b[3];
    return Math.sqrt(dx * dx + dy * dy + dz * dz + dw * dw);
});

var _MJS_v4distanceSquared = F2(function(a, b) {
    var dx = a[0] - b[0];
    var dy = a[1] - b[1];
    var dz = a[2] - b[2];
    var dw = a[3] - b[3];
    return dx * dx + dy * dy + dz * dz + dw * dw;
});

var _MJS_v4normalize = function(a) {
    var r = new Float64Array(4);
    var im = 1.0 / _MJS_v4lengthLocal(a);
    r[0] = a[0] * im;
    r[1] = a[1] * im;
    r[2] = a[2] * im;
    r[3] = a[3] * im;
    return r;
};

var _MJS_v4scale = F2(function(k, a) {
    var r = new Float64Array(4);
    r[0] = a[0] * k;
    r[1] = a[1] * k;
    r[2] = a[2] * k;
    r[3] = a[3] * k;
    return r;
});

var _MJS_v4dot = F2(function(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
});

// Matrix4

var _MJS_m4x4temp1Local = new Float64Array(16);
var _MJS_m4x4temp2Local = new Float64Array(16);

var _MJS_m4x4identity = new Float64Array([
    1.0, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
]);

var _MJS_m4x4fromRecord = function(r) {
    var m = new Float64Array(16);
    m[0] = r.bu;
    m[1] = r.by;
    m[2] = r.bC;
    m[3] = r.bG;
    m[4] = r.bv;
    m[5] = r.bz;
    m[6] = r.bD;
    m[7] = r.bH;
    m[8] = r.bw;
    m[9] = r.bA;
    m[10] = r.bE;
    m[11] = r.bI;
    m[12] = r.bx;
    m[13] = r.bB;
    m[14] = r.bF;
    m[15] = r.bJ;
    return m;
};

var _MJS_m4x4toRecord = function(m) {
    return {
        bu: m[0], by: m[1], bC: m[2], bG: m[3],
        bv: m[4], bz: m[5], bD: m[6], bH: m[7],
        bw: m[8], bA: m[9], bE: m[10], bI: m[11],
        bx: m[12], bB: m[13], bF: m[14], bJ: m[15]
    };
};

var _MJS_m4x4inverse = function(m) {
    var r = new Float64Array(16);

    r[0] = m[5] * m[10] * m[15] - m[5] * m[11] * m[14] - m[9] * m[6] * m[15] +
        m[9] * m[7] * m[14] + m[13] * m[6] * m[11] - m[13] * m[7] * m[10];
    r[4] = -m[4] * m[10] * m[15] + m[4] * m[11] * m[14] + m[8] * m[6] * m[15] -
        m[8] * m[7] * m[14] - m[12] * m[6] * m[11] + m[12] * m[7] * m[10];
    r[8] = m[4] * m[9] * m[15] - m[4] * m[11] * m[13] - m[8] * m[5] * m[15] +
        m[8] * m[7] * m[13] + m[12] * m[5] * m[11] - m[12] * m[7] * m[9];
    r[12] = -m[4] * m[9] * m[14] + m[4] * m[10] * m[13] + m[8] * m[5] * m[14] -
        m[8] * m[6] * m[13] - m[12] * m[5] * m[10] + m[12] * m[6] * m[9];
    r[1] = -m[1] * m[10] * m[15] + m[1] * m[11] * m[14] + m[9] * m[2] * m[15] -
        m[9] * m[3] * m[14] - m[13] * m[2] * m[11] + m[13] * m[3] * m[10];
    r[5] = m[0] * m[10] * m[15] - m[0] * m[11] * m[14] - m[8] * m[2] * m[15] +
        m[8] * m[3] * m[14] + m[12] * m[2] * m[11] - m[12] * m[3] * m[10];
    r[9] = -m[0] * m[9] * m[15] + m[0] * m[11] * m[13] + m[8] * m[1] * m[15] -
        m[8] * m[3] * m[13] - m[12] * m[1] * m[11] + m[12] * m[3] * m[9];
    r[13] = m[0] * m[9] * m[14] - m[0] * m[10] * m[13] - m[8] * m[1] * m[14] +
        m[8] * m[2] * m[13] + m[12] * m[1] * m[10] - m[12] * m[2] * m[9];
    r[2] = m[1] * m[6] * m[15] - m[1] * m[7] * m[14] - m[5] * m[2] * m[15] +
        m[5] * m[3] * m[14] + m[13] * m[2] * m[7] - m[13] * m[3] * m[6];
    r[6] = -m[0] * m[6] * m[15] + m[0] * m[7] * m[14] + m[4] * m[2] * m[15] -
        m[4] * m[3] * m[14] - m[12] * m[2] * m[7] + m[12] * m[3] * m[6];
    r[10] = m[0] * m[5] * m[15] - m[0] * m[7] * m[13] - m[4] * m[1] * m[15] +
        m[4] * m[3] * m[13] + m[12] * m[1] * m[7] - m[12] * m[3] * m[5];
    r[14] = -m[0] * m[5] * m[14] + m[0] * m[6] * m[13] + m[4] * m[1] * m[14] -
        m[4] * m[2] * m[13] - m[12] * m[1] * m[6] + m[12] * m[2] * m[5];
    r[3] = -m[1] * m[6] * m[11] + m[1] * m[7] * m[10] + m[5] * m[2] * m[11] -
        m[5] * m[3] * m[10] - m[9] * m[2] * m[7] + m[9] * m[3] * m[6];
    r[7] = m[0] * m[6] * m[11] - m[0] * m[7] * m[10] - m[4] * m[2] * m[11] +
        m[4] * m[3] * m[10] + m[8] * m[2] * m[7] - m[8] * m[3] * m[6];
    r[11] = -m[0] * m[5] * m[11] + m[0] * m[7] * m[9] + m[4] * m[1] * m[11] -
        m[4] * m[3] * m[9] - m[8] * m[1] * m[7] + m[8] * m[3] * m[5];
    r[15] = m[0] * m[5] * m[10] - m[0] * m[6] * m[9] - m[4] * m[1] * m[10] +
        m[4] * m[2] * m[9] + m[8] * m[1] * m[6] - m[8] * m[2] * m[5];

    var det = m[0] * r[0] + m[1] * r[4] + m[2] * r[8] + m[3] * r[12];

    if (det === 0) {
        return elm$core$Maybe$Nothing;
    }

    det = 1.0 / det;

    for (var i = 0; i < 16; i = i + 1) {
        r[i] = r[i] * det;
    }

    return elm$core$Maybe$Just(r);
};

var _MJS_m4x4inverseOrthonormal = function(m) {
    var r = _MJS_m4x4transposeLocal(m);
    var t = [m[12], m[13], m[14]];
    r[3] = r[7] = r[11] = 0;
    r[12] = -_MJS_v3dotLocal([r[0], r[4], r[8]], t);
    r[13] = -_MJS_v3dotLocal([r[1], r[5], r[9]], t);
    r[14] = -_MJS_v3dotLocal([r[2], r[6], r[10]], t);
    return r;
};

function _MJS_m4x4makeFrustumLocal(left, right, bottom, top, znear, zfar) {
    var r = new Float64Array(16);

    r[0] = 2 * znear / (right - left);
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 2 * znear / (top - bottom);
    r[6] = 0;
    r[7] = 0;
    r[8] = (right + left) / (right - left);
    r[9] = (top + bottom) / (top - bottom);
    r[10] = -(zfar + znear) / (zfar - znear);
    r[11] = -1;
    r[12] = 0;
    r[13] = 0;
    r[14] = -2 * zfar * znear / (zfar - znear);
    r[15] = 0;

    return r;
}
var _MJS_m4x4makeFrustum = F6(_MJS_m4x4makeFrustumLocal);

var _MJS_m4x4makePerspective = F4(function(fovy, aspect, znear, zfar) {
    var ymax = znear * Math.tan(fovy * Math.PI / 360.0);
    var ymin = -ymax;
    var xmin = ymin * aspect;
    var xmax = ymax * aspect;

    return _MJS_m4x4makeFrustumLocal(xmin, xmax, ymin, ymax, znear, zfar);
});

function _MJS_m4x4makeOrthoLocal(left, right, bottom, top, znear, zfar) {
    var r = new Float64Array(16);

    r[0] = 2 / (right - left);
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 2 / (top - bottom);
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = -2 / (zfar - znear);
    r[11] = 0;
    r[12] = -(right + left) / (right - left);
    r[13] = -(top + bottom) / (top - bottom);
    r[14] = -(zfar + znear) / (zfar - znear);
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeOrtho = F6(_MJS_m4x4makeOrthoLocal);

var _MJS_m4x4makeOrtho2D = F4(function(left, right, bottom, top) {
    return _MJS_m4x4makeOrthoLocal(left, right, bottom, top, -1, 1);
});

function _MJS_m4x4mulLocal(a, b) {
    var r = new Float64Array(16);
    var a11 = a[0];
    var a21 = a[1];
    var a31 = a[2];
    var a41 = a[3];
    var a12 = a[4];
    var a22 = a[5];
    var a32 = a[6];
    var a42 = a[7];
    var a13 = a[8];
    var a23 = a[9];
    var a33 = a[10];
    var a43 = a[11];
    var a14 = a[12];
    var a24 = a[13];
    var a34 = a[14];
    var a44 = a[15];
    var b11 = b[0];
    var b21 = b[1];
    var b31 = b[2];
    var b41 = b[3];
    var b12 = b[4];
    var b22 = b[5];
    var b32 = b[6];
    var b42 = b[7];
    var b13 = b[8];
    var b23 = b[9];
    var b33 = b[10];
    var b43 = b[11];
    var b14 = b[12];
    var b24 = b[13];
    var b34 = b[14];
    var b44 = b[15];

    r[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    r[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    r[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    r[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    r[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    r[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    r[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    r[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    r[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    r[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    r[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    r[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
    r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
    r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
    r[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

    return r;
}
var _MJS_m4x4mul = F2(_MJS_m4x4mulLocal);

var _MJS_m4x4mulAffine = F2(function(a, b) {
    var r = new Float64Array(16);
    var a11 = a[0];
    var a21 = a[1];
    var a31 = a[2];
    var a12 = a[4];
    var a22 = a[5];
    var a32 = a[6];
    var a13 = a[8];
    var a23 = a[9];
    var a33 = a[10];
    var a14 = a[12];
    var a24 = a[13];
    var a34 = a[14];

    var b11 = b[0];
    var b21 = b[1];
    var b31 = b[2];
    var b12 = b[4];
    var b22 = b[5];
    var b32 = b[6];
    var b13 = b[8];
    var b23 = b[9];
    var b33 = b[10];
    var b14 = b[12];
    var b24 = b[13];
    var b34 = b[14];

    r[0] = a11 * b11 + a12 * b21 + a13 * b31;
    r[1] = a21 * b11 + a22 * b21 + a23 * b31;
    r[2] = a31 * b11 + a32 * b21 + a33 * b31;
    r[3] = 0;
    r[4] = a11 * b12 + a12 * b22 + a13 * b32;
    r[5] = a21 * b12 + a22 * b22 + a23 * b32;
    r[6] = a31 * b12 + a32 * b22 + a33 * b32;
    r[7] = 0;
    r[8] = a11 * b13 + a12 * b23 + a13 * b33;
    r[9] = a21 * b13 + a22 * b23 + a23 * b33;
    r[10] = a31 * b13 + a32 * b23 + a33 * b33;
    r[11] = 0;
    r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14;
    r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24;
    r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34;
    r[15] = 1;

    return r;
});

var _MJS_m4x4makeRotate = F2(function(angle, axis) {
    var r = new Float64Array(16);
    axis = _MJS_v3normalizeLocal(axis, _MJS_v3temp1Local);
    var x = axis[0];
    var y = axis[1];
    var z = axis[2];
    var c = Math.cos(angle);
    var c1 = 1 - c;
    var s = Math.sin(angle);

    r[0] = x * x * c1 + c;
    r[1] = y * x * c1 + z * s;
    r[2] = z * x * c1 - y * s;
    r[3] = 0;
    r[4] = x * y * c1 - z * s;
    r[5] = y * y * c1 + c;
    r[6] = y * z * c1 + x * s;
    r[7] = 0;
    r[8] = x * z * c1 + y * s;
    r[9] = y * z * c1 - x * s;
    r[10] = z * z * c1 + c;
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
});

var _MJS_m4x4rotate = F3(function(angle, axis, m) {
    var r = new Float64Array(16);
    var im = 1.0 / _MJS_v3lengthLocal(axis);
    var x = axis[0] * im;
    var y = axis[1] * im;
    var z = axis[2] * im;
    var c = Math.cos(angle);
    var c1 = 1 - c;
    var s = Math.sin(angle);
    var xs = x * s;
    var ys = y * s;
    var zs = z * s;
    var xyc1 = x * y * c1;
    var xzc1 = x * z * c1;
    var yzc1 = y * z * c1;
    var t11 = x * x * c1 + c;
    var t21 = xyc1 + zs;
    var t31 = xzc1 - ys;
    var t12 = xyc1 - zs;
    var t22 = y * y * c1 + c;
    var t32 = yzc1 + xs;
    var t13 = xzc1 + ys;
    var t23 = yzc1 - xs;
    var t33 = z * z * c1 + c;
    var m11 = m[0], m21 = m[1], m31 = m[2], m41 = m[3];
    var m12 = m[4], m22 = m[5], m32 = m[6], m42 = m[7];
    var m13 = m[8], m23 = m[9], m33 = m[10], m43 = m[11];
    var m14 = m[12], m24 = m[13], m34 = m[14], m44 = m[15];

    r[0] = m11 * t11 + m12 * t21 + m13 * t31;
    r[1] = m21 * t11 + m22 * t21 + m23 * t31;
    r[2] = m31 * t11 + m32 * t21 + m33 * t31;
    r[3] = m41 * t11 + m42 * t21 + m43 * t31;
    r[4] = m11 * t12 + m12 * t22 + m13 * t32;
    r[5] = m21 * t12 + m22 * t22 + m23 * t32;
    r[6] = m31 * t12 + m32 * t22 + m33 * t32;
    r[7] = m41 * t12 + m42 * t22 + m43 * t32;
    r[8] = m11 * t13 + m12 * t23 + m13 * t33;
    r[9] = m21 * t13 + m22 * t23 + m23 * t33;
    r[10] = m31 * t13 + m32 * t23 + m33 * t33;
    r[11] = m41 * t13 + m42 * t23 + m43 * t33;
    r[12] = m14,
    r[13] = m24;
    r[14] = m34;
    r[15] = m44;

    return r;
});

function _MJS_m4x4makeScale3Local(x, y, z) {
    var r = new Float64Array(16);

    r[0] = x;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = y;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = z;
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeScale3 = F3(_MJS_m4x4makeScale3Local);

var _MJS_m4x4makeScale = function(v) {
    return _MJS_m4x4makeScale3Local(v[0], v[1], v[2]);
};

var _MJS_m4x4scale3 = F4(function(x, y, z, m) {
    var r = new Float64Array(16);

    r[0] = m[0] * x;
    r[1] = m[1] * x;
    r[2] = m[2] * x;
    r[3] = m[3] * x;
    r[4] = m[4] * y;
    r[5] = m[5] * y;
    r[6] = m[6] * y;
    r[7] = m[7] * y;
    r[8] = m[8] * z;
    r[9] = m[9] * z;
    r[10] = m[10] * z;
    r[11] = m[11] * z;
    r[12] = m[12];
    r[13] = m[13];
    r[14] = m[14];
    r[15] = m[15];

    return r;
});

var _MJS_m4x4scale = F2(function(v, m) {
    var r = new Float64Array(16);
    var x = v[0];
    var y = v[1];
    var z = v[2];

    r[0] = m[0] * x;
    r[1] = m[1] * x;
    r[2] = m[2] * x;
    r[3] = m[3] * x;
    r[4] = m[4] * y;
    r[5] = m[5] * y;
    r[6] = m[6] * y;
    r[7] = m[7] * y;
    r[8] = m[8] * z;
    r[9] = m[9] * z;
    r[10] = m[10] * z;
    r[11] = m[11] * z;
    r[12] = m[12];
    r[13] = m[13];
    r[14] = m[14];
    r[15] = m[15];

    return r;
});

function _MJS_m4x4makeTranslate3Local(x, y, z) {
    var r = new Float64Array(16);

    r[0] = 1;
    r[1] = 0;
    r[2] = 0;
    r[3] = 0;
    r[4] = 0;
    r[5] = 1;
    r[6] = 0;
    r[7] = 0;
    r[8] = 0;
    r[9] = 0;
    r[10] = 1;
    r[11] = 0;
    r[12] = x;
    r[13] = y;
    r[14] = z;
    r[15] = 1;

    return r;
}
var _MJS_m4x4makeTranslate3 = F3(_MJS_m4x4makeTranslate3Local);

var _MJS_m4x4makeTranslate = function(v) {
    return _MJS_m4x4makeTranslate3Local(v[0], v[1], v[2]);
};

var _MJS_m4x4translate3 = F4(function(x, y, z, m) {
    var r = new Float64Array(16);
    var m11 = m[0];
    var m21 = m[1];
    var m31 = m[2];
    var m41 = m[3];
    var m12 = m[4];
    var m22 = m[5];
    var m32 = m[6];
    var m42 = m[7];
    var m13 = m[8];
    var m23 = m[9];
    var m33 = m[10];
    var m43 = m[11];

    r[0] = m11;
    r[1] = m21;
    r[2] = m31;
    r[3] = m41;
    r[4] = m12;
    r[5] = m22;
    r[6] = m32;
    r[7] = m42;
    r[8] = m13;
    r[9] = m23;
    r[10] = m33;
    r[11] = m43;
    r[12] = m11 * x + m12 * y + m13 * z + m[12];
    r[13] = m21 * x + m22 * y + m23 * z + m[13];
    r[14] = m31 * x + m32 * y + m33 * z + m[14];
    r[15] = m41 * x + m42 * y + m43 * z + m[15];

    return r;
});

var _MJS_m4x4translate = F2(function(v, m) {
    var r = new Float64Array(16);
    var x = v[0];
    var y = v[1];
    var z = v[2];
    var m11 = m[0];
    var m21 = m[1];
    var m31 = m[2];
    var m41 = m[3];
    var m12 = m[4];
    var m22 = m[5];
    var m32 = m[6];
    var m42 = m[7];
    var m13 = m[8];
    var m23 = m[9];
    var m33 = m[10];
    var m43 = m[11];

    r[0] = m11;
    r[1] = m21;
    r[2] = m31;
    r[3] = m41;
    r[4] = m12;
    r[5] = m22;
    r[6] = m32;
    r[7] = m42;
    r[8] = m13;
    r[9] = m23;
    r[10] = m33;
    r[11] = m43;
    r[12] = m11 * x + m12 * y + m13 * z + m[12];
    r[13] = m21 * x + m22 * y + m23 * z + m[13];
    r[14] = m31 * x + m32 * y + m33 * z + m[14];
    r[15] = m41 * x + m42 * y + m43 * z + m[15];

    return r;
});

var _MJS_m4x4makeLookAt = F3(function(eye, center, up) {
    var z = _MJS_v3directionLocal(eye, center, _MJS_v3temp1Local);
    var x = _MJS_v3normalizeLocal(_MJS_v3crossLocal(up, z, _MJS_v3temp2Local), _MJS_v3temp2Local);
    var y = _MJS_v3normalizeLocal(_MJS_v3crossLocal(z, x, _MJS_v3temp3Local), _MJS_v3temp3Local);
    var tm1 = _MJS_m4x4temp1Local;
    var tm2 = _MJS_m4x4temp2Local;

    tm1[0] = x[0];
    tm1[1] = y[0];
    tm1[2] = z[0];
    tm1[3] = 0;
    tm1[4] = x[1];
    tm1[5] = y[1];
    tm1[6] = z[1];
    tm1[7] = 0;
    tm1[8] = x[2];
    tm1[9] = y[2];
    tm1[10] = z[2];
    tm1[11] = 0;
    tm1[12] = 0;
    tm1[13] = 0;
    tm1[14] = 0;
    tm1[15] = 1;

    tm2[0] = 1; tm2[1] = 0; tm2[2] = 0; tm2[3] = 0;
    tm2[4] = 0; tm2[5] = 1; tm2[6] = 0; tm2[7] = 0;
    tm2[8] = 0; tm2[9] = 0; tm2[10] = 1; tm2[11] = 0;
    tm2[12] = -eye[0]; tm2[13] = -eye[1]; tm2[14] = -eye[2]; tm2[15] = 1;

    return _MJS_m4x4mulLocal(tm1, tm2);
});


function _MJS_m4x4transposeLocal(m) {
    var r = new Float64Array(16);

    r[0] = m[0]; r[1] = m[4]; r[2] = m[8]; r[3] = m[12];
    r[4] = m[1]; r[5] = m[5]; r[6] = m[9]; r[7] = m[13];
    r[8] = m[2]; r[9] = m[6]; r[10] = m[10]; r[11] = m[14];
    r[12] = m[3]; r[13] = m[7]; r[14] = m[11]; r[15] = m[15];

    return r;
}
var _MJS_m4x4transpose = _MJS_m4x4transposeLocal;

var _MJS_m4x4makeBasis = F3(function(vx, vy, vz) {
    var r = new Float64Array(16);

    r[0] = vx[0];
    r[1] = vx[1];
    r[2] = vx[2];
    r[3] = 0;
    r[4] = vy[0];
    r[5] = vy[1];
    r[6] = vy[2];
    r[7] = 0;
    r[8] = vz[0];
    r[9] = vz[1];
    r[10] = vz[2];
    r[11] = 0;
    r[12] = 0;
    r[13] = 0;
    r[14] = 0;
    r[15] = 1;

    return r;
});


function _WebGL_log(/* msg */) {
  // console.log(msg);
}

var _WebGL_guid = 0;

function _WebGL_listEach(fn, list) {
  for (; list.b; list = list.b) {
    fn(list.a);
  }
}

function _WebGL_listLength(list) {
  var length = 0;
  for (; list.b; list = list.b) {
    length++;
  }
  return length;
}

var _WebGL_rAF = typeof requestAnimationFrame !== 'undefined' ?
  requestAnimationFrame :
  function (cb) { setTimeout(cb, 1000 / 60); };

// eslint-disable-next-line no-unused-vars
var _WebGL_entity = F5(function (settings, vert, frag, mesh, uniforms) {

  if (!mesh.id) {
    mesh.id = _WebGL_guid++;
  }

  return {
    $: 0,
    a: settings,
    b: vert,
    c: frag,
    d: mesh,
    e: uniforms
  };

});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableBlend = F2(function (gl, setting) {
  gl.enable(gl.BLEND);
  // a   b   c   d   e   f   g h i j
  // eq1 f11 f12 eq2 f21 f22 r g b a
  gl.blendEquationSeparate(setting.a, setting.d);
  gl.blendFuncSeparate(setting.b, setting.c, setting.e, setting.f);
  gl.blendColor(setting.g, setting.h, setting.i, setting.j);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableDepthTest = F2(function (gl, setting) {
  gl.enable(gl.DEPTH_TEST);
  // a    b    c    d
  // func mask near far
  gl.depthFunc(setting.a);
  gl.depthMask(setting.b);
  gl.depthRange(setting.c, setting.d);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableStencilTest = F2(function (gl, setting) {
  gl.enable(gl.STENCIL_TEST);
  // a   b    c         d     e     f      g      h     i     j      k
  // ref mask writeMask test1 fail1 zfail1 zpass1 test2 fail2 zfail2 zpass2
  gl.stencilFuncSeparate(gl.FRONT, setting.d, setting.a, setting.b);
  gl.stencilOpSeparate(gl.FRONT, setting.e, setting.f, setting.g);
  gl.stencilMaskSeparate(gl.FRONT, setting.c);
  gl.stencilFuncSeparate(gl.BACK, setting.h, setting.a, setting.b);
  gl.stencilOpSeparate(gl.BACK, setting.i, setting.j, setting.k);
  gl.stencilMaskSeparate(gl.BACK, setting.c);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableScissor = F2(function (gl, setting) {
  gl.enable(gl.SCISSOR_TEST);
  gl.scissor(setting.a, setting.b, setting.c, setting.d);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableColorMask = F2(function (gl, setting) {
  gl.colorMask(setting.a, setting.b, setting.c, setting.d);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableCullFace = F2(function (gl, setting) {
  gl.enable(gl.CULL_FACE);
  gl.cullFace(setting.a);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enablePolygonOffset = F2(function (gl, setting) {
  gl.enable(gl.POLYGON_OFFSET_FILL);
  gl.polygonOffset(setting.a, setting.b);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableSampleCoverage = F2(function (gl, setting) {
  gl.enable(gl.SAMPLE_COVERAGE);
  gl.sampleCoverage(setting.a, setting.b);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableSampleAlphaToCoverage = F2(function (gl, setting) {
  gl.enable(gl.SAMPLE_ALPHA_TO_COVERAGE);
});

// eslint-disable-next-line no-unused-vars
var _WebGL_disableBlend = function (gl) {
  gl.disable(gl.BLEND);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disableDepthTest = function (gl) {
  gl.disable(gl.DEPTH_TEST);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disableStencilTest = function (gl) {
  gl.disable(gl.STENCIL_TEST);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disableScissor = function (gl) {
  gl.disable(gl.SCISSOR_TEST);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disableColorMask = function (gl) {
  gl.colorMask(true, true, true, true);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disableCullFace = function (gl) {
  gl.disable(gl.CULL_FACE);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disablePolygonOffset = function (gl) {
  gl.disable(gl.POLYGON_OFFSET_FILL);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disableSampleCoverage = function (gl) {
  gl.disable(gl.SAMPLE_COVERAGE);
};

// eslint-disable-next-line no-unused-vars
var _WebGL_disableSampleAlphaToCoverage = function (gl) {
  gl.disable(gl.SAMPLE_ALPHA_TO_COVERAGE);
};

function _WebGL_doCompile(gl, src, type) {

  var shader = gl.createShader(type);
  _WebGL_log('Created shader');

  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw gl.getShaderInfoLog(shader);
  }

  return shader;

}

function _WebGL_doLink(gl, vshader, fshader) {

  var program = gl.createProgram();
  _WebGL_log('Created program');

  gl.attachShader(program, vshader);
  gl.attachShader(program, fshader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw gl.getProgramInfoLog(program);
  }

  return program;

}

function _WebGL_getAttributeInfo(gl, type) {
  switch (type) {
    case gl.FLOAT:
      return { size: 1, type: Float32Array, baseType: gl.FLOAT };
    case gl.FLOAT_VEC2:
      return { size: 2, type: Float32Array, baseType: gl.FLOAT };
    case gl.FLOAT_VEC3:
      return { size: 3, type: Float32Array, baseType: gl.FLOAT };
    case gl.FLOAT_VEC4:
      return { size: 4, type: Float32Array, baseType: gl.FLOAT };
    case gl.INT:
      return { size: 1, type: Int32Array, baseType: gl.INT };
    case gl.INT_VEC2:
      return { size: 2, type: Int32Array, baseType: gl.INT };
    case gl.INT_VEC3:
      return { size: 3, type: Int32Array, baseType: gl.INT };
    case gl.INT_VEC4:
      return { size: 4, type: Int32Array, baseType: gl.INT };
  }
}

/**
 *  Form the buffer for a given attribute.
 *
 *  @param {WebGLRenderingContext} gl context
 *  @param {WebGLActiveInfo} attribute the attribute to bind to.
 *         We use its name to grab the record by name and also to know
 *         how many elements we need to grab.
 *  @param {Mesh} mesh The mesh coming in from Elm.
 *  @param {Object} attributes The mapping between the attribute names and Elm fields
 *  @return {WebGLBuffer}
 */
function _WebGL_doBindAttribute(gl, attribute, mesh, attributes) {
  // The length of the number of vertices that
  // complete one 'thing' based on the drawing mode.
  // ie, 2 for Lines, 3 for Triangles, etc.
  var elemSize = mesh.a.r;

  var idxKeys = [];
  for (var i = 0; i < elemSize; i++) {
    idxKeys.push(String.fromCharCode(97 + i));
  }

  function dataFill(data, cnt, fillOffset, elem, key) {
    var i;
    if (elemSize === 1) {
      for (i = 0; i < cnt; i++) {
        data[fillOffset++] = cnt === 1 ? elem[key] : elem[key][i];
      }
    } else {
      idxKeys.forEach(function (idx) {
        for (i = 0; i < cnt; i++) {
          data[fillOffset++] = cnt === 1 ? elem[idx][key] : elem[idx][key][i];
        }
      });
    }
  }

  var attributeInfo = _WebGL_getAttributeInfo(gl, attribute.type);

  if (attributeInfo === undefined) {
    throw new Error('No info available for: ' + attribute.type);
  }

  var dataIdx = 0;
  var array = new attributeInfo.type(_WebGL_listLength(mesh.b) * attributeInfo.size * elemSize);

  _WebGL_listEach(function (elem) {
    dataFill(array, attributeInfo.size, dataIdx, elem, attributes[attribute.name] || attribute.name);
    dataIdx += attributeInfo.size * elemSize;
  }, mesh.b);

  var buffer = gl.createBuffer();
  _WebGL_log('Created attribute buffer ' + attribute.name);

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
  return buffer;
}

/**
 *  This sets up the binding caching buffers.
 *
 *  We don't actually bind any buffers now except for the indices buffer.
 *  The problem with filling the buffers here is that it is possible to
 *  have a buffer shared between two webgl shaders;
 *  which could have different active attributes. If we bind it here against
 *  a particular program, we might not bind them all. That final bind is now
 *  done right before drawing.
 *
 *  @param {WebGLRenderingContext} gl context
 *  @param {Mesh} mesh a mesh object from Elm
 *  @return {Object} buffer - an object with the following properties
 *  @return {Number} buffer.numIndices
 *  @return {WebGLBuffer} buffer.indexBuffer
 *  @return {Object} buffer.buffers - will be used to buffer attributes
 */
function _WebGL_doBindSetup(gl, mesh) {
  _WebGL_log('Created index buffer');
  var indexBuffer = gl.createBuffer();
  var indices = (mesh.a.s === 0)
    ? _WebGL_makeSequentialBuffer(mesh.a.r * _WebGL_listLength(mesh.b))
    : _WebGL_makeIndexedBuffer(mesh.c, mesh.a.s);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

  return {
    numIndices: indices.length,
    indexBuffer: indexBuffer,
    buffers: {}
  };
}

/**
 *  Create an indices array and fill it with 0..n
 *
 *  @param {Number} numIndices The number of indices
 *  @return {Uint16Array} indices
 */
function _WebGL_makeSequentialBuffer(numIndices) {
  var indices = new Uint16Array(numIndices);
  for (var i = 0; i < numIndices; i++) {
    indices[i] = i;
  }
  return indices;
}

/**
 *  Create an indices array and fill it from indices
 *  based on the size of the index
 *
 *  @param {List} indicesList the list of indices
 *  @param {Number} indexSize the size of the index
 *  @return {Uint16Array} indices
 */
function _WebGL_makeIndexedBuffer(indicesList, indexSize) {
  var indices = new Uint16Array(_WebGL_listLength(indicesList) * indexSize);
  var fillOffset = 0;
  var i;
  _WebGL_listEach(function (elem) {
    if (indexSize === 1) {
      indices[fillOffset++] = elem;
    } else {
      for (i = 0; i < indexSize; i++) {
        indices[fillOffset++] = elem[String.fromCharCode(97 + i)];
      }
    }
  }, indicesList);
  return indices;
}

function _WebGL_getProgID(vertID, fragID) {
  return vertID + '#' + fragID;
}

var _WebGL_drawGL = F2(function (model, domNode) {

  var gl = model.f.gl;

  if (!gl) {
    return domNode;
  }

  gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
  _WebGL_log('Drawing');

  function drawEntity(entity) {
    if (!entity.d.b.b) {
      return; // Empty list
    }

    var progid;
    var program;
    if (entity.b.id && entity.c.id) {
      progid = _WebGL_getProgID(entity.b.id, entity.c.id);
      program = model.f.programs[progid];
    }

    if (!program) {

      var vshader;
      if (entity.b.id) {
        vshader = model.f.shaders[entity.b.id];
      } else {
        entity.b.id = _WebGL_guid++;
      }

      if (!vshader) {
        vshader = _WebGL_doCompile(gl, entity.b.src, gl.VERTEX_SHADER);
        model.f.shaders[entity.b.id] = vshader;
      }

      var fshader;
      if (entity.c.id) {
        fshader = model.f.shaders[entity.c.id];
      } else {
        entity.c.id = _WebGL_guid++;
      }

      if (!fshader) {
        fshader = _WebGL_doCompile(gl, entity.c.src, gl.FRAGMENT_SHADER);
        model.f.shaders[entity.c.id] = fshader;
      }

      var glProgram = _WebGL_doLink(gl, vshader, fshader);

      program = {
        glProgram: glProgram,
        attributes: Object.assign({}, entity.b.attributes, entity.c.attributes),
        uniformSetters: _WebGL_createUniformSetters(
          gl,
          model,
          glProgram,
          Object.assign({}, entity.b.uniforms, entity.c.uniforms)
        )
      };

      progid = _WebGL_getProgID(entity.b.id, entity.c.id);
      model.f.programs[progid] = program;

    }

    gl.useProgram(program.glProgram);

    _WebGL_setUniforms(program.uniformSetters, entity.e);

    var buffer = model.f.buffers[entity.d.id];

    if (!buffer) {
      buffer = _WebGL_doBindSetup(gl, entity.d);
      model.f.buffers[entity.d.id] = buffer;
    }

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer.indexBuffer);

    var numAttributes = gl.getProgramParameter(program.glProgram, gl.ACTIVE_ATTRIBUTES);

    for (var i = 0; i < numAttributes; i++) {
      var attribute = gl.getActiveAttrib(program.glProgram, i);

      var attribLocation = gl.getAttribLocation(program.glProgram, attribute.name);
      gl.enableVertexAttribArray(attribLocation);

      if (buffer.buffers[attribute.name] === undefined) {
        buffer.buffers[attribute.name] = _WebGL_doBindAttribute(gl, attribute, entity.d, program.attributes);
      }
      var attributeBuffer = buffer.buffers[attribute.name];
      var attributeInfo = _WebGL_getAttributeInfo(gl, attribute.type);

      gl.bindBuffer(gl.ARRAY_BUFFER, attributeBuffer);
      gl.vertexAttribPointer(attribLocation, attributeInfo.size, attributeInfo.baseType, false, 0, 0);
    }

    _WebGL_listEach(function (setting) {
      return A2(elm_explorations$webgl$WebGL$Internal$enableSetting, gl, setting);
    }, entity.a);

    gl.drawElements(entity.d.a.u, buffer.numIndices, gl.UNSIGNED_SHORT, 0);

    _WebGL_listEach(function (setting) {
      return A2(elm_explorations$webgl$WebGL$Internal$disableSetting, gl, setting);
    }, entity.a);

  }

  _WebGL_listEach(drawEntity, model.g);
  return domNode;
});

function _WebGL_createUniformSetters(gl, model, program, uniformsMap) {
  var textureCounter = 0;
  function createUniformSetter(program, uniform) {
    var uniformLocation = gl.getUniformLocation(program, uniform.name);
    switch (uniform.type) {
      case gl.INT:
        return function (value) {
          gl.uniform1i(uniformLocation, value);
        };
      case gl.FLOAT:
        return function (value) {
          gl.uniform1f(uniformLocation, value);
        };
      case gl.FLOAT_VEC2:
        return function (value) {
          gl.uniform2fv(uniformLocation, new Float32Array(value));
        };
      case gl.FLOAT_VEC3:
        return function (value) {
          gl.uniform3fv(uniformLocation, new Float32Array(value));
        };
      case gl.FLOAT_VEC4:
        return function (value) {
          gl.uniform4fv(uniformLocation, new Float32Array(value));
        };
      case gl.FLOAT_MAT4:
        return function (value) {
          gl.uniformMatrix4fv(uniformLocation, false, new Float32Array(value));
        };
      case gl.SAMPLER_2D:
        var currentTexture = textureCounter++;
        return function (texture) {
          gl.activeTexture(gl.TEXTURE0 + currentTexture);
          var tex = model.f.textures[texture.id];
          if (!tex) {
            _WebGL_log('Created texture');
            tex = texture.ba(gl);
            model.f.textures[texture.id] = tex;
          }
          gl.bindTexture(gl.TEXTURE_2D, tex);
          gl.uniform1i(uniformLocation, currentTexture);
        };
      case gl.BOOL:
        return function (value) {
          gl.uniform1i(uniformLocation, value);
        };
      default:
        _WebGL_log('Unsupported uniform type: ' + uniform.type);
        return function () {};
    }
  }

  var uniformSetters = {};
  var numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  for (var i = 0; i < numUniforms; i++) {
    var uniform = gl.getActiveUniform(program, i);
    uniformSetters[uniformsMap[uniform.name] || uniform.name] = createUniformSetter(program, uniform);
  }

  return uniformSetters;
}

function _WebGL_setUniforms(setters, values) {
  Object.keys(values).forEach(function (name) {
    var setter = setters[name];
    if (setter) {
      setter(values[name]);
    }
  });
}

// VIRTUAL-DOM WIDGET

// eslint-disable-next-line no-unused-vars
var _WebGL_toHtml = F3(function (options, factList, entities) {
  return _VirtualDom_custom(
    factList,
    {
      g: entities,
      f: {},
      h: options
    },
    _WebGL_render,
    _WebGL_diff
  );
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableAlpha = F2(function (options, option) {
  options.contextAttributes.alpha = true;
  options.contextAttributes.premultipliedAlpha = option.a;
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableDepth = F2(function (options, option) {
  options.contextAttributes.depth = true;
  options.sceneSettings.push(function (gl) {
    gl.clearDepth(option.a);
  });
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableStencil = F2(function (options, option) {
  options.contextAttributes.stencil = true;
  options.sceneSettings.push(function (gl) {
    gl.clearStencil(option.a);
  });
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableAntialias = F2(function (options, option) {
  options.contextAttributes.antialias = true;
});

// eslint-disable-next-line no-unused-vars
var _WebGL_enableClearColor = F2(function (options, option) {
  options.sceneSettings.push(function (gl) {
    gl.clearColor(option.a, option.b, option.c, option.d);
  });
});

/**
 *  Creates canvas and schedules initial _WebGL_drawGL
 *  @param {Object} model
 *  @param {Object} model.f that may contain the following properties:
           gl, shaders, programs, buffers, textures
 *  @param {List<Option>} model.h list of options coming from Elm
 *  @param {List<Entity>} model.g list of entities coming from Elm
 *  @return {HTMLElement} <canvas> if WebGL is supported, otherwise a <div>
 */
function _WebGL_render(model) {
  var options = {
    contextAttributes: {
      alpha: false,
      depth: false,
      stencil: false,
      antialias: false,
      premultipliedAlpha: false
    },
    sceneSettings: []
  };

  _WebGL_listEach(function (option) {
    return A2(elm_explorations$webgl$WebGL$Internal$enableOption, options, option);
  }, model.h);

  _WebGL_log('Render canvas');
  var canvas = _VirtualDom_doc.createElement('canvas');
  var gl = canvas.getContext && (
    canvas.getContext('webgl', options.contextAttributes) ||
    canvas.getContext('experimental-webgl', options.contextAttributes)
  );

  if (gl) {
    options.sceneSettings.forEach(function (sceneSetting) {
      sceneSetting(gl);
    });
  } else {
    canvas = _VirtualDom_doc.createElement('div');
    canvas.innerHTML = '<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!';
  }

  model.f.gl = gl;
  model.f.shaders = [];
  model.f.programs = {};
  model.f.buffers = [];
  model.f.textures = [];

  // Render for the first time.
  // This has to be done in animation frame,
  // because the canvas is not in the DOM yet
  _WebGL_rAF(function () {
    return A2(_WebGL_drawGL, model, canvas);
  });

  return canvas;
}

function _WebGL_diff(oldModel, newModel) {
  newModel.f = oldModel.f;
  return _WebGL_drawGL(newModel);
}
var Zinggi$elm_game_resources$Game$Resources$R = elm$core$Basics$identity;
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var Zinggi$elm_game_resources$Game$Resources$init = elm$core$Dict$empty;
var Zinggi$elm_game_resources$Game$Resources$LoadedTexture = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$EQ = 1;
var elm$core$Basics$LT = 0;
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = 2;
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0;
	return elm$core$Dict$keys(dict);
};
var elm$core$List$cons = _List_cons;
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Basics$False = 1;
var elm$core$Basics$True = 0;
var elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.e) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.g),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.g);
		} else {
			var treeLen = builder.e * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.h) : builder.h;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.e);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.g) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.g);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{h: nodeList, e: (len / elm$core$Array$branchFactor) | 0, g: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var elm$core$Maybe$Nothing = {$: 1};
var elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 1) {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$core$Task$Perform = elm$core$Basics$identity;
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(0);
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return 0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0;
		return A2(elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$onError = _Scheduler_onError;
var elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return elm$core$Task$command(
			A2(
				elm$core$Task$onError,
				A2(
					elm$core$Basics$composeL,
					A2(elm$core$Basics$composeL, elm$core$Task$succeed, resultToMessage),
					elm$core$Result$Err),
				A2(
					elm$core$Task$andThen,
					A2(
						elm$core$Basics$composeL,
						A2(elm$core$Basics$composeL, elm$core$Task$succeed, resultToMessage),
						elm$core$Result$Ok),
					task)));
	});
var elm_explorations$webgl$WebGL$Texture$Resize = elm$core$Basics$identity;
var elm_explorations$webgl$WebGL$Texture$linear = 9729;
var elm_explorations$webgl$WebGL$Texture$nearestMipmapLinear = 9986;
var elm_explorations$webgl$WebGL$Texture$Wrap = elm$core$Basics$identity;
var elm_explorations$webgl$WebGL$Texture$repeat = 10497;
var elm_explorations$webgl$WebGL$Texture$defaultOptions = {ar: true, as: elm_explorations$webgl$WebGL$Texture$repeat, cK: elm_explorations$webgl$WebGL$Texture$linear, cL: elm_explorations$webgl$WebGL$Texture$nearestMipmapLinear, aw: elm_explorations$webgl$WebGL$Texture$repeat};
var elm_explorations$webgl$WebGL$Texture$LoadError = {$: 0};
var elm_explorations$webgl$WebGL$Texture$SizeError = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm_explorations$webgl$WebGL$Texture$loadWith = F2(
	function (_n0, url) {
		var magnify = _n0.cK;
		var minify = _n0.cL;
		var horizontalWrap = _n0.as;
		var verticalWrap = _n0.aw;
		var flipY = _n0.ar;
		var expand = F4(
			function (_n1, _n2, _n3, _n4) {
				var mag = _n1;
				var min = _n2;
				var hor = _n3;
				var vert = _n4;
				return A6(_Texture_load, mag, min, hor, vert, flipY, url);
			});
		return A4(expand, magnify, minify, horizontalWrap, verticalWrap);
	});
var elm_explorations$webgl$WebGL$Texture$load = elm_explorations$webgl$WebGL$Texture$loadWith(elm_explorations$webgl$WebGL$Texture$defaultOptions);
var Zinggi$elm_game_resources$Game$Resources$loadTextures = function (urls) {
	return elm$core$Platform$Cmd$batch(
		A2(
			elm$core$List$map,
			function (url) {
				return A2(
					elm$core$Task$attempt,
					Zinggi$elm_game_resources$Game$Resources$LoadedTexture(url),
					elm_explorations$webgl$WebGL$Texture$load(url));
			},
			urls));
};
var author$project$Main$HtmlTopLeft = 0;
var author$project$Main$Resources = function (a) {
	return {$: 8, a: a};
};
var author$project$Main$TextureError = {$: 7};
var author$project$Main$TextureLoaded = function (a) {
	return {$: 6, a: a};
};
var author$project$Main$height = 400;
var author$project$Main$width = 600;
var elm$core$Basics$pi = _Basics_pi;
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var elm$core$Bitwise$and = _Bitwise_and;
var elm$random$Random$Generator = elm$core$Basics$identity;
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$random$Random$next = function (_n0) {
	var state0 = _n0.a;
	var incr = _n0.b;
	return A2(elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var elm$core$Bitwise$xor = _Bitwise_xor;
var elm$random$Random$peel = function (_n0) {
	var state = _n0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var elm$random$Random$float = F2(
	function (a, b) {
		return function (seed0) {
			var seed1 = elm$random$Random$next(seed0);
			var range = elm$core$Basics$abs(b - a);
			var n1 = elm$random$Random$peel(seed1);
			var n0 = elm$random$Random$peel(seed0);
			var lo = (134217727 & n1) * 1.0;
			var hi = (67108863 & n0) * 1.0;
			var val = ((hi * 1.34217728e8) + lo) / 9.007199254740992e15;
			var scaled = (val * range) + a;
			return _Utils_Tuple2(
				scaled,
				elm$random$Random$next(seed1));
		};
	});
var elm$random$Random$map4 = F5(
	function (func, _n0, _n1, _n2, _n3) {
		var genA = _n0;
		var genB = _n1;
		var genC = _n2;
		var genD = _n3;
		return function (seed0) {
			var _n4 = genA(seed0);
			var a = _n4.a;
			var seed1 = _n4.b;
			var _n5 = genB(seed1);
			var b = _n5.a;
			var seed2 = _n5.b;
			var _n6 = genC(seed2);
			var c = _n6.a;
			var seed3 = _n6.b;
			var _n7 = genD(seed3);
			var d = _n7.a;
			var seed4 = _n7.b;
			return _Utils_Tuple2(
				A4(func, a, b, c, d),
				seed4);
		};
	});
var author$project$Main$spriteGenerator = A5(
	elm$random$Random$map4,
	F4(
		function (x, y, angle, speed) {
			return {Z: angle, af: speed, p: x, q: y};
		}),
	A2(elm$random$Random$float, 0, author$project$Main$width),
	A2(elm$random$Random$float, 0, author$project$Main$height),
	A2(elm$random$Random$float, 0, 2 * elm$core$Basics$pi),
	A2(elm$random$Random$float, 1.0e-2, 1));
var elm$core$Basics$round = _Basics_round;
var elm$core$Platform$Cmd$map = _Platform_map;
var elm$random$Random$initialSeed = function (x) {
	var _n0 = elm$random$Random$next(
		A2(elm$random$Random$Seed, 0, 1013904223));
	var state1 = _n0.a;
	var incr = _n0.b;
	var state2 = (state1 + x) >>> 0;
	return elm$random$Random$next(
		A2(elm$random$Random$Seed, state2, incr));
};
var elm$random$Random$listHelp = F4(
	function (revList, n, gen, seed) {
		listHelp:
		while (true) {
			if (n < 1) {
				return _Utils_Tuple2(revList, seed);
			} else {
				var _n0 = gen(seed);
				var value = _n0.a;
				var newSeed = _n0.b;
				var $temp$revList = A2(elm$core$List$cons, value, revList),
					$temp$n = n - 1,
					$temp$gen = gen,
					$temp$seed = newSeed;
				revList = $temp$revList;
				n = $temp$n;
				gen = $temp$gen;
				seed = $temp$seed;
				continue listHelp;
			}
		}
	});
var elm$random$Random$list = F2(
	function (n, _n0) {
		var gen = _n0;
		return function (seed) {
			return A4(elm$random$Random$listHelp, _List_Nil, n, gen, seed);
		};
	});
var elm$random$Random$step = F2(
	function (_n0, seed) {
		var generator = _n0;
		return generator(seed);
	});
var elm_explorations$webgl$WebGL$Texture$nearest = 9728;
var author$project$Main$init = function (flags) {
	var seed = elm$random$Random$initialSeed(
		elm$core$Basics$round(flags.a0));
	var _n0 = A2(
		elm$random$Random$step,
		A2(elm$random$Random$list, 100, author$project$Main$spriteGenerator),
		seed);
	var newSprites = _n0.a;
	var newSeed = _n0.b;
	return _Utils_Tuple2(
		{ap: elm$core$Maybe$Nothing, ab: elm$core$Maybe$Nothing, S: 0, ad: Zinggi$elm_game_resources$Game$Resources$init, C: newSeed, av: elm$core$Maybe$Nothing, d: newSprites, U: 55, I: elm$core$Maybe$Nothing},
		elm$core$Platform$Cmd$batch(
			_List_fromArray(
				[
					A2(
					elm$core$Task$attempt,
					function (result) {
						if (!result.$) {
							var texture = result.a;
							return author$project$Main$TextureLoaded(texture);
						} else {
							return author$project$Main$TextureError;
						}
					},
					A2(
						elm_explorations$webgl$WebGL$Texture$loadWith,
						_Utils_update(
							elm_explorations$webgl$WebGL$Texture$defaultOptions,
							{cK: elm_explorations$webgl$WebGL$Texture$linear, cL: elm_explorations$webgl$WebGL$Texture$nearest}),
						'cat.png')),
					A2(
					elm$core$Platform$Cmd$map,
					author$project$Main$Resources,
					Zinggi$elm_game_resources$Game$Resources$loadTextures(
						_List_fromArray(
							['cat.png'])))
				])));
};
var author$project$Main$Tick = function (a) {
	return {$: 0, a: a};
};
var elm$browser$Browser$AnimationManager$Delta = function (a) {
	return {$: 1, a: a};
};
var elm$browser$Browser$AnimationManager$State = F3(
	function (subs, request, oldTime) {
		return {aM: oldTime, b_: request, b7: subs};
	});
var elm$browser$Browser$AnimationManager$init = elm$core$Task$succeed(
	A3(elm$browser$Browser$AnimationManager$State, _List_Nil, elm$core$Maybe$Nothing, 0));
var elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var elm$browser$Browser$Dom$NotFound = elm$core$Basics$identity;
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			A2(elm$core$Task$map, toMessage, task));
	});
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var elm$core$String$length = _String_length;
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = 0;
var elm$url$Url$Https = 1;
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$contains = _String_contains;
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {bj: fragment, bl: host, bO: path, bS: port_, bW: protocol, bX: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 1) {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		0,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		1,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$AnimationManager$now = _Browser_now(0);
var elm$browser$Browser$AnimationManager$rAF = _Browser_rAF(0);
var elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var elm$core$Process$kill = _Scheduler_kill;
var elm$core$Process$spawn = _Scheduler_spawn;
var elm$browser$Browser$AnimationManager$onEffects = F3(
	function (router, subs, _n0) {
		var request = _n0.b_;
		var oldTime = _n0.aM;
		var _n1 = _Utils_Tuple2(request, subs);
		if (_n1.a.$ === 1) {
			if (!_n1.b.b) {
				var _n2 = _n1.a;
				return elm$browser$Browser$AnimationManager$init;
			} else {
				var _n4 = _n1.a;
				return A2(
					elm$core$Task$andThen,
					function (pid) {
						return A2(
							elm$core$Task$andThen,
							function (time) {
								return elm$core$Task$succeed(
									A3(
										elm$browser$Browser$AnimationManager$State,
										subs,
										elm$core$Maybe$Just(pid),
										time));
							},
							elm$browser$Browser$AnimationManager$now);
					},
					elm$core$Process$spawn(
						A2(
							elm$core$Task$andThen,
							elm$core$Platform$sendToSelf(router),
							elm$browser$Browser$AnimationManager$rAF)));
			}
		} else {
			if (!_n1.b.b) {
				var pid = _n1.a.a;
				return A2(
					elm$core$Task$andThen,
					function (_n3) {
						return elm$browser$Browser$AnimationManager$init;
					},
					elm$core$Process$kill(pid));
			} else {
				return elm$core$Task$succeed(
					A3(elm$browser$Browser$AnimationManager$State, subs, request, oldTime));
			}
		}
	});
var elm$time$Time$Posix = elm$core$Basics$identity;
var elm$time$Time$millisToPosix = elm$core$Basics$identity;
var elm$browser$Browser$AnimationManager$onSelfMsg = F3(
	function (router, newTime, _n0) {
		var subs = _n0.b7;
		var oldTime = _n0.aM;
		var send = function (sub) {
			if (!sub.$) {
				var tagger = sub.a;
				return A2(
					elm$core$Platform$sendToApp,
					router,
					tagger(
						elm$time$Time$millisToPosix(newTime)));
			} else {
				var tagger = sub.a;
				return A2(
					elm$core$Platform$sendToApp,
					router,
					tagger(newTime - oldTime));
			}
		};
		return A2(
			elm$core$Task$andThen,
			function (pid) {
				return A2(
					elm$core$Task$andThen,
					function (_n1) {
						return elm$core$Task$succeed(
							A3(
								elm$browser$Browser$AnimationManager$State,
								subs,
								elm$core$Maybe$Just(pid),
								newTime));
					},
					elm$core$Task$sequence(
						A2(elm$core$List$map, send, subs)));
			},
			elm$core$Process$spawn(
				A2(
					elm$core$Task$andThen,
					elm$core$Platform$sendToSelf(router),
					elm$browser$Browser$AnimationManager$rAF)));
	});
var elm$browser$Browser$AnimationManager$Time = function (a) {
	return {$: 0, a: a};
};
var elm$browser$Browser$AnimationManager$subMap = F2(
	function (func, sub) {
		if (!sub.$) {
			var tagger = sub.a;
			return elm$browser$Browser$AnimationManager$Time(
				A2(elm$core$Basics$composeL, func, tagger));
		} else {
			var tagger = sub.a;
			return elm$browser$Browser$AnimationManager$Delta(
				A2(elm$core$Basics$composeL, func, tagger));
		}
	});
_Platform_effectManagers['Browser.AnimationManager'] = _Platform_createManager(elm$browser$Browser$AnimationManager$init, elm$browser$Browser$AnimationManager$onEffects, elm$browser$Browser$AnimationManager$onSelfMsg, 0, elm$browser$Browser$AnimationManager$subMap);
var elm$browser$Browser$AnimationManager$subscription = _Platform_leaf('Browser.AnimationManager');
var elm$browser$Browser$AnimationManager$onAnimationFrameDelta = function (tagger) {
	return elm$browser$Browser$AnimationManager$subscription(
		elm$browser$Browser$AnimationManager$Delta(tagger));
};
var elm$browser$Browser$Events$onAnimationFrameDelta = elm$browser$Browser$AnimationManager$onAnimationFrameDelta;
var elm$core$Platform$Sub$batch = _Platform_batch;
var author$project$Main$subscriptions = function (model) {
	return elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				elm$browser$Browser$Events$onAnimationFrameDelta(author$project$Main$Tick)
			]));
};
var elm$core$Dict$Black = 1;
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = 0;
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1) {
				case 0:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === -1) && (!_n0.a)) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var Zinggi$elm_game_resources$Game$Resources$update = F2(
	function (_n0, _n1) {
		var url = _n0.a;
		var result = _n0.b;
		var res = _n1;
		if (!result.$) {
			var tex = result.a;
			return A3(elm$core$Dict$insert, url, tex, res);
		} else {
			var err = result.a;
			return res;
		}
	});
var author$project$Main$spriteSize = 32;
var elm$json$Json$Encode$float = _Json_wrap;
var elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var author$project$Main$encodeSprites = function (sprites) {
	return A2(
		elm$json$Json$Encode$list,
		function (sprite) {
			return elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'x',
						elm$json$Json$Encode$float(sprite.p + (0.5 * author$project$Main$spriteSize))),
						_Utils_Tuple2(
						'y',
						elm$json$Json$Encode$float(sprite.q + (0.5 * author$project$Main$spriteSize)))
					]));
		},
		sprites);
};
var author$project$Main$sendSprites = _Platform_outgoingPort('sendSprites', elm$core$Basics$identity);
var elm$core$Basics$cos = _Basics_cos;
var elm$core$Basics$sin = _Basics_sin;
var elm$core$Basics$fromPolar = function (_n0) {
	var radius = _n0.a;
	var theta = _n0.b;
	return _Utils_Tuple2(
		radius * elm$core$Basics$cos(theta),
		radius * elm$core$Basics$sin(theta));
};
var elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var msDelta = msg.a;
				var spritesLength = elm$core$List$length(model.d);
				var minTick = 1 / model.U;
				var gravity = 5;
				var delta = msDelta / 1000;
				var _n1 = function () {
					var _n2 = model.av;
					if (!_n2.$) {
						var limit = _n2.a;
						return (_Utils_cmp(spritesLength, limit) < 0) ? function (increaseAmt) {
							return function (_n3) {
								var generatedSprites = _n3.a;
								var s = _n3.b;
								return _Utils_Tuple2(
									_Utils_ap(generatedSprites, model.d),
									s);
							}(
								A2(
									elm$random$Random$step,
									A2(elm$random$Random$list, increaseAmt, author$project$Main$spriteGenerator),
									model.C));
						}(limit - spritesLength) : ((_Utils_cmp(spritesLength, limit) > 0) ? _Utils_Tuple2(
							A2(elm$core$List$drop, spritesLength - limit, model.d),
							model.C) : _Utils_Tuple2(model.d, model.C));
					} else {
						return (_Utils_cmp(delta, minTick) > 0) ? function (decreaseAmt) {
							return _Utils_Tuple2(
								A2(elm$core$List$drop, decreaseAmt, model.d),
								model.C);
						}(
							A2(
								elm$core$Basics$min,
								spritesLength - 1,
								elm$core$Basics$ceiling((2 * minTick) * spritesLength))) : function (increaseAmt) {
							return function (_n4) {
								var generatedSprites = _n4.a;
								var s = _n4.b;
								return _Utils_Tuple2(
									_Utils_ap(generatedSprites, model.d),
									s);
							}(
								A2(
									elm$random$Random$step,
									A2(elm$random$Random$list, increaseAmt, author$project$Main$spriteGenerator),
									model.C));
						}(
							elm$core$Basics$ceiling(1.0e-2 * spritesLength));
					}
				}();
				var newSprites = _n1.a;
				var newSeed = _n1.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							C: newSeed,
							d: A2(
								elm$core$List$map,
								function (sprite) {
									var minWidth = (-0.5) * author$project$Main$spriteSize;
									var minHeight = -author$project$Main$spriteSize;
									var maxWidth = author$project$Main$width + (0.5 * author$project$Main$spriteSize);
									var maxHeight = author$project$Main$height;
									var _n5 = function (_n6) {
										var x = _n6.a;
										var y = _n6.b;
										return _Utils_Tuple2(sprite.p + x, sprite.q + y);
									}(
										elm$core$Basics$fromPolar(
											_Utils_Tuple2(sprite.af, sprite.Z)));
									var newX = _n5.a;
									var newY = _n5.b;
									var wrappedX = (_Utils_cmp(newX, minWidth) < 0) ? maxWidth : ((_Utils_cmp(newX, maxWidth) > 0) ? minWidth : newX);
									var wrappedY = (_Utils_cmp(newY, minHeight) < 0) ? maxHeight : ((_Utils_cmp(newY, maxHeight) > 0) ? minHeight : newY);
									return {Z: sprite.Z, af: sprite.af, p: wrappedX, q: wrappedY};
								},
								newSprites)
						}),
					function () {
						var _n7 = model.S;
						if (_n7 === 8) {
							return author$project$Main$sendSprites(
								author$project$Main$encodeSprites(model.d));
						} else {
							return elm$core$Platform$Cmd$none;
						}
					}());
			case 1:
				var renderer = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{S: renderer}),
					elm$core$Platform$Cmd$none);
			case 2:
				var renderer = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							ab: elm$core$Maybe$Just(renderer)
						}),
					elm$core$Platform$Cmd$none);
			case 3:
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ab: elm$core$Maybe$Nothing}),
					elm$core$Platform$Cmd$none);
			case 4:
				var isChecked = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							av: isChecked ? elm$core$Maybe$Just(100) : elm$core$Maybe$Nothing
						}),
					elm$core$Platform$Cmd$none);
			case 5:
				var fpsStr = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							U: A2(
								elm$core$Maybe$withDefault,
								model.U,
								elm$core$String$toInt(fpsStr))
						}),
					elm$core$Platform$Cmd$none);
			case 8:
				var resourcesMsg = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							ad: A2(Zinggi$elm_game_resources$Game$Resources$update, resourcesMsg, model.ad)
						}),
					elm$core$Platform$Cmd$none);
			case 6:
				var texture = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							I: elm$core$Maybe$Just(texture)
						}),
					elm$core$Platform$Cmd$none);
			case 7:
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			default:
				var texture = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{ap: texture}),
					elm$core$Platform$Cmd$none);
		}
	});
var author$project$Main$ButtonEnter = function (a) {
	return {$: 2, a: a};
};
var author$project$Main$ButtonLeave = {$: 3};
var author$project$Main$CanvasRenderer = 10;
var author$project$Main$ChangeRenderer = function (a) {
	return {$: 1, a: a};
};
var author$project$Main$ChangeTargetFps = function (a) {
	return {$: 5, a: a};
};
var author$project$Main$CheckLockSpriteCount = function (a) {
	return {$: 4, a: a};
};
var author$project$Main$DataAttrs = 4;
var author$project$Main$DataProp = 5;
var author$project$Main$HtmlTransformTranslate = 1;
var author$project$Main$None = 2;
var author$project$Main$PixiJsDataAttrs = 6;
var author$project$Main$PixiJsDataProp = 7;
var author$project$Main$PixiJsPorts = 8;
var author$project$Main$WebGLRenderer = 9;
var author$project$Main$Zinggi = 3;
var author$project$Main$canvasMargin = 10;
var elm$html$Html$code = _VirtualDom_node('code');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var author$project$Main$code = function (str) {
	return A2(
		elm$html$Html$code,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'background', '#eee'),
				A2(elm$html$Html$Attributes$style, 'padding', '2px')
			]),
		_List_fromArray(
			[
				elm$html$Html$text(str)
			]));
};
var elm$core$String$fromFloat = _String_fromNumber;
var author$project$Main$px = function (num) {
	return elm$core$String$fromFloat(num) + 'px';
};
var author$project$Main$CanvasTextureLoaded = function (a) {
	return {$: 9, a: a};
};
var avh4$elm_color$Color$RgbaSpace = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var avh4$elm_color$Color$white = A4(avh4$elm_color$Color$RgbaSpace, 255 / 255, 255 / 255, 255 / 255, 1.0);
var joakin$elm_canvas$Canvas$Internal$Canvas$Rect = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var joakin$elm_canvas$Canvas$rect = F3(
	function (pos, width, height) {
		return A3(joakin$elm_canvas$Canvas$Internal$Canvas$Rect, pos, width, height);
	});
var joakin$elm_canvas$Canvas$Renderable = elm$core$Basics$identity;
var joakin$elm_canvas$Canvas$Internal$Canvas$Fill = function (a) {
	return {$: 1, a: a};
};
var joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var joakin$elm_canvas$Canvas$Internal$Canvas$Stroke = function (a) {
	return {$: 2, a: a};
};
var joakin$elm_canvas$Canvas$mergeDrawOp = F2(
	function (op1, op2) {
		var _n0 = _Utils_Tuple2(op1, op2);
		_n0$7:
		while (true) {
			switch (_n0.b.$) {
				case 3:
					var _n1 = _n0.b;
					var c = _n1.a;
					var sc = _n1.b;
					return A2(joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c, sc);
				case 1:
					switch (_n0.a.$) {
						case 1:
							var c = _n0.b.a;
							return joakin$elm_canvas$Canvas$Internal$Canvas$Fill(c);
						case 2:
							var c1 = _n0.a.a;
							var c2 = _n0.b.a;
							return A2(joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c2, c1);
						case 3:
							var _n2 = _n0.a;
							var c = _n2.a;
							var sc = _n2.b;
							var c2 = _n0.b.a;
							return A2(joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c2, sc);
						default:
							break _n0$7;
					}
				case 2:
					switch (_n0.a.$) {
						case 2:
							var c = _n0.b.a;
							return joakin$elm_canvas$Canvas$Internal$Canvas$Stroke(c);
						case 1:
							var c1 = _n0.a.a;
							var c2 = _n0.b.a;
							return A2(joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c1, c2);
						case 3:
							var _n3 = _n0.a;
							var c = _n3.a;
							var sc = _n3.b;
							var sc2 = _n0.b.a;
							return A2(joakin$elm_canvas$Canvas$Internal$Canvas$FillAndStroke, c, sc2);
						default:
							break _n0$7;
					}
				default:
					if (!_n0.a.$) {
						break _n0$7;
					} else {
						var whatever = _n0.a;
						var _n5 = _n0.b;
						return whatever;
					}
			}
		}
		var _n4 = _n0.a;
		var whatever = _n0.b;
		return whatever;
	});
var joakin$elm_canvas$Canvas$addSettingsToRenderable = F2(
	function (settings, renderable) {
		var addSetting = F2(
			function (setting, _n1) {
				var r = _n1;
				switch (setting.$) {
					case 0:
						var cmd = setting.a;
						return _Utils_update(
							r,
							{
								x: A2(elm$core$List$cons, cmd, r.x)
							});
					case 1:
						var cmds = setting.a;
						return _Utils_update(
							r,
							{
								x: A3(elm$core$List$foldl, elm$core$List$cons, r.x, cmds)
							});
					case 3:
						var f = setting.a;
						return _Utils_update(
							r,
							{
								N: f(r.N)
							});
					default:
						var op = setting.a;
						return _Utils_update(
							r,
							{
								M: A2(joakin$elm_canvas$Canvas$mergeDrawOp, r.M, op)
							});
				}
			});
		return A3(elm$core$List$foldl, addSetting, renderable, settings);
	});
var joakin$elm_canvas$Canvas$Internal$Canvas$DrawableShapes = function (a) {
	return {$: 1, a: a};
};
var joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified = {$: 0};
var joakin$elm_canvas$Canvas$shapes = F2(
	function (settings, ss) {
		return A2(
			joakin$elm_canvas$Canvas$addSettingsToRenderable,
			settings,
			{
				x: _List_Nil,
				M: joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
				N: joakin$elm_canvas$Canvas$Internal$Canvas$DrawableShapes(ss)
			});
	});
var joakin$elm_canvas$Canvas$Internal$Canvas$DrawableText = function (a) {
	return {$: 0, a: a};
};
var joakin$elm_canvas$Canvas$text = F3(
	function (settings, point, str) {
		return A2(
			joakin$elm_canvas$Canvas$addSettingsToRenderable,
			settings,
			{
				x: _List_Nil,
				M: joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
				N: joakin$elm_canvas$Canvas$Internal$Canvas$DrawableText(
					{aG: elm$core$Maybe$Nothing, bR: point, a$: str})
			});
	});
var joakin$elm_canvas$Canvas$Internal$Canvas$DrawableTexture = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var joakin$elm_canvas$Canvas$texture = F3(
	function (settings, p, t) {
		return A2(
			joakin$elm_canvas$Canvas$addSettingsToRenderable,
			settings,
			{
				x: _List_Nil,
				M: joakin$elm_canvas$Canvas$Internal$Canvas$NotSpecified,
				N: A2(joakin$elm_canvas$Canvas$Internal$Canvas$DrawableTexture, p, t)
			});
	});
var elm$html$Html$Attributes$height = function (n) {
	return A2(
		_VirtualDom_attribute,
		'height',
		elm$core$String$fromInt(n));
};
var elm$html$Html$Attributes$width = function (n) {
	return A2(
		_VirtualDom_attribute,
		'width',
		elm$core$String$fromInt(n));
};
var elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var elm$html$Html$Keyed$node = elm$virtual_dom$VirtualDom$keyedNode;
var elm$html$Html$canvas = _VirtualDom_node('canvas');
var joakin$elm_canvas$Canvas$cnvs = A2(elm$html$Html$canvas, _List_Nil, _List_Nil);
var elm$json$Json$Encode$string = _Json_wrap;
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn = F2(
	function (name, args) {
		return elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					elm$json$Json$Encode$string('function')),
					_Utils_Tuple2(
					'name',
					elm$json$Json$Encode$string(name)),
					_Utils_Tuple2(
					'args',
					A2(elm$json$Json$Encode$list, elm$core$Basics$identity, args))
				]));
	});
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arcTo = F5(
	function (x1, y1, x2, y2, radius) {
		return A2(
			joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'arcTo',
			_List_fromArray(
				[
					elm$json$Json$Encode$float(x1),
					elm$json$Json$Encode$float(y1),
					elm$json$Json$Encode$float(x2),
					elm$json$Json$Encode$float(y2),
					elm$json$Json$Encode$float(radius)
				]));
	});
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$bezierCurveTo = F6(
	function (cp1x, cp1y, cp2x, cp2y, x, y) {
		return A2(
			joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'bezierCurveTo',
			_List_fromArray(
				[
					elm$json$Json$Encode$float(cp1x),
					elm$json$Json$Encode$float(cp1y),
					elm$json$Json$Encode$float(cp2x),
					elm$json$Json$Encode$float(cp2y),
					elm$json$Json$Encode$float(x),
					elm$json$Json$Encode$float(y)
				]));
	});
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineTo = F2(
	function (x, y) {
		return A2(
			joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'lineTo',
			_List_fromArray(
				[
					elm$json$Json$Encode$float(x),
					elm$json$Json$Encode$float(y)
				]));
	});
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo = F2(
	function (x, y) {
		return A2(
			joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'moveTo',
			_List_fromArray(
				[
					elm$json$Json$Encode$float(x),
					elm$json$Json$Encode$float(y)
				]));
	});
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$quadraticCurveTo = F4(
	function (cpx, cpy, x, y) {
		return A2(
			joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'quadraticCurveTo',
			_List_fromArray(
				[
					elm$json$Json$Encode$float(cpx),
					elm$json$Json$Encode$float(cpy),
					elm$json$Json$Encode$float(x),
					elm$json$Json$Encode$float(y)
				]));
	});
var joakin$elm_canvas$Canvas$renderLineSegment = F2(
	function (segment, cmds) {
		switch (segment.$) {
			case 0:
				var _n1 = segment.a;
				var x = _n1.a;
				var y = _n1.b;
				var _n2 = segment.b;
				var x2 = _n2.a;
				var y2 = _n2.b;
				var radius = segment.c;
				return A2(
					elm$core$List$cons,
					A5(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arcTo, x, y, x2, y2, radius),
					cmds);
			case 1:
				var _n3 = segment.a;
				var cp1x = _n3.a;
				var cp1y = _n3.b;
				var _n4 = segment.b;
				var cp2x = _n4.a;
				var cp2y = _n4.b;
				var _n5 = segment.c;
				var x = _n5.a;
				var y = _n5.b;
				return A2(
					elm$core$List$cons,
					A6(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$bezierCurveTo, cp1x, cp1y, cp2x, cp2y, x, y),
					cmds);
			case 2:
				var _n6 = segment.a;
				var x = _n6.a;
				var y = _n6.b;
				return A2(
					elm$core$List$cons,
					A2(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$lineTo, x, y),
					cmds);
			case 3:
				var _n7 = segment.a;
				var x = _n7.a;
				var y = _n7.b;
				return A2(
					elm$core$List$cons,
					A2(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y),
					cmds);
			default:
				var _n8 = segment.a;
				var cpx = _n8.a;
				var cpy = _n8.b;
				var _n9 = segment.b;
				var x = _n9.a;
				var y = _n9.b;
				return A2(
					elm$core$List$cons,
					A4(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$quadraticCurveTo, cpx, cpy, x, y),
					cmds);
		}
	});
var elm$json$Json$Encode$bool = _Json_wrap;
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc = F6(
	function (x, y, radius, startAngle, endAngle, anticlockwise) {
		return A2(
			joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'arc',
			_List_fromArray(
				[
					elm$json$Json$Encode$float(x),
					elm$json$Json$Encode$float(y),
					elm$json$Json$Encode$float(radius),
					elm$json$Json$Encode$float(startAngle),
					elm$json$Json$Encode$float(endAngle),
					elm$json$Json$Encode$bool(anticlockwise)
				]));
	});
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$circle = F3(
	function (x, y, r) {
		return A6(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc, x, y, r, 0, 2 * elm$core$Basics$pi, false);
	});
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$rect = F4(
	function (x, y, w, h) {
		return A2(
			joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'rect',
			_List_fromArray(
				[
					elm$json$Json$Encode$float(x),
					elm$json$Json$Encode$float(y),
					elm$json$Json$Encode$float(w),
					elm$json$Json$Encode$float(h)
				]));
	});
var joakin$elm_canvas$Canvas$renderShape = F2(
	function (shape, cmds) {
		switch (shape.$) {
			case 0:
				var _n1 = shape.a;
				var x = _n1.a;
				var y = _n1.b;
				var w = shape.b;
				var h = shape.c;
				return A2(
					elm$core$List$cons,
					A4(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$rect, x, y, w, h),
					A2(
						elm$core$List$cons,
						A2(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y),
						cmds));
			case 1:
				var _n2 = shape.a;
				var x = _n2.a;
				var y = _n2.b;
				var r = shape.b;
				return A2(
					elm$core$List$cons,
					A3(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$circle, x, y, r),
					A2(
						elm$core$List$cons,
						A2(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x + r, y),
						cmds));
			case 2:
				var _n3 = shape.a;
				var x = _n3.a;
				var y = _n3.b;
				var segments = shape.b;
				return A3(
					elm$core$List$foldl,
					joakin$elm_canvas$Canvas$renderLineSegment,
					A2(
						elm$core$List$cons,
						A2(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo, x, y),
						cmds),
					segments);
			default:
				var _n4 = shape.a;
				var x = _n4.a;
				var y = _n4.b;
				var radius = shape.b;
				var startAngle = shape.c;
				var endAngle = shape.d;
				var anticlockwise = shape.e;
				return A2(
					elm$core$List$cons,
					A6(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$arc, x, y, radius, startAngle, endAngle, anticlockwise),
					A2(
						elm$core$List$cons,
						A2(
							joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$moveTo,
							x + elm$core$Basics$cos(startAngle),
							y + elm$core$Basics$sin(startAngle)),
						cmds));
		}
	});
var avh4$elm_color$Color$black = A4(avh4$elm_color$Color$RgbaSpace, 0 / 255, 0 / 255, 0 / 255, 1.0);
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$NonZero = 0;
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillRuleToString = function (fillRule) {
	if (!fillRule) {
		return 'nonzero';
	} else {
		return 'evenodd';
	}
};
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fill = function (fillRule) {
	return A2(
		joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
		'fill',
		_List_fromArray(
			[
				elm$json$Json$Encode$string(
				joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillRuleToString(fillRule))
			]));
};
var elm$core$String$concat = function (strings) {
	return A2(elm$core$String$join, '', strings);
};
var avh4$elm_color$Color$toCssString = function (_n0) {
	var r = _n0.a;
	var g = _n0.b;
	var b = _n0.c;
	var a = _n0.d;
	var roundTo = function (x) {
		return elm$core$Basics$round(x * 1000) / 1000;
	};
	var pct = function (x) {
		return elm$core$Basics$round(x * 10000) / 100;
	};
	return elm$core$String$concat(
		_List_fromArray(
			[
				'rgba(',
				elm$core$String$fromFloat(
				pct(r)),
				'%,',
				elm$core$String$fromFloat(
				pct(g)),
				'%,',
				elm$core$String$fromFloat(
				pct(b)),
				'%,',
				elm$core$String$fromFloat(
				roundTo(a)),
				')'
			]));
};
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field = F2(
	function (name, value) {
		return elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'type',
					elm$json$Json$Encode$string('field')),
					_Utils_Tuple2(
					'name',
					elm$json$Json$Encode$string(name)),
					_Utils_Tuple2('value', value)
				]));
	});
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyle = function (color) {
	return A2(
		joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'fillStyle',
		elm$json$Json$Encode$string(
			avh4$elm_color$Color$toCssString(color)));
};
var joakin$elm_canvas$Canvas$renderShapeFill = F2(
	function (c, cmds) {
		return A2(
			elm$core$List$cons,
			joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fill(0),
			A2(
				elm$core$List$cons,
				joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyle(c),
				cmds));
	});
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$stroke = A2(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'stroke', _List_Nil);
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyle = function (color) {
	return A2(
		joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'strokeStyle',
		elm$json$Json$Encode$string(
			avh4$elm_color$Color$toCssString(color)));
};
var joakin$elm_canvas$Canvas$renderShapeStroke = F2(
	function (c, cmds) {
		return A2(
			elm$core$List$cons,
			joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$stroke,
			A2(
				elm$core$List$cons,
				joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyle(c),
				cmds));
	});
var joakin$elm_canvas$Canvas$renderShapeDrawOp = F2(
	function (drawOp, cmds) {
		switch (drawOp.$) {
			case 0:
				return A2(joakin$elm_canvas$Canvas$renderShapeFill, avh4$elm_color$Color$black, cmds);
			case 1:
				var c = drawOp.a;
				return A2(joakin$elm_canvas$Canvas$renderShapeFill, c, cmds);
			case 2:
				var c = drawOp.a;
				return A2(joakin$elm_canvas$Canvas$renderShapeStroke, c, cmds);
			default:
				var fc = drawOp.a;
				var sc = drawOp.b;
				return A2(
					joakin$elm_canvas$Canvas$renderShapeStroke,
					sc,
					A2(joakin$elm_canvas$Canvas$renderShapeFill, fc, cmds));
		}
	});
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillText = F4(
	function (text, x, y, maybeMaxWidth) {
		if (maybeMaxWidth.$ === 1) {
			return A2(
				joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'fillText',
				_List_fromArray(
					[
						elm$json$Json$Encode$string(text),
						elm$json$Json$Encode$float(x),
						elm$json$Json$Encode$float(y)
					]));
		} else {
			var maxWidth = maybeMaxWidth.a;
			return A2(
				joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'fillText',
				_List_fromArray(
					[
						elm$json$Json$Encode$string(text),
						elm$json$Json$Encode$float(x),
						elm$json$Json$Encode$float(y),
						elm$json$Json$Encode$float(maxWidth)
					]));
		}
	});
var joakin$elm_canvas$Canvas$renderTextFill = F5(
	function (txt, x, y, color, cmds) {
		return A2(
			elm$core$List$cons,
			A4(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillText, txt.a$, x, y, txt.aG),
			A2(
				elm$core$List$cons,
				joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fillStyle(color),
				cmds));
	});
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeText = F4(
	function (text, x, y, maybeMaxWidth) {
		if (maybeMaxWidth.$ === 1) {
			return A2(
				joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'strokeText',
				_List_fromArray(
					[
						elm$json$Json$Encode$string(text),
						elm$json$Json$Encode$float(x),
						elm$json$Json$Encode$float(y)
					]));
		} else {
			var maxWidth = maybeMaxWidth.a;
			return A2(
				joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
				'strokeText',
				_List_fromArray(
					[
						elm$json$Json$Encode$string(text),
						elm$json$Json$Encode$float(x),
						elm$json$Json$Encode$float(y),
						elm$json$Json$Encode$float(maxWidth)
					]));
		}
	});
var joakin$elm_canvas$Canvas$renderTextStroke = F5(
	function (txt, x, y, color, cmds) {
		return A2(
			elm$core$List$cons,
			A4(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeText, txt.a$, x, y, txt.aG),
			A2(
				elm$core$List$cons,
				joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$strokeStyle(color),
				cmds));
	});
var joakin$elm_canvas$Canvas$renderTextDrawOp = F3(
	function (drawOp, txt, cmds) {
		var _n0 = txt.bR;
		var x = _n0.a;
		var y = _n0.b;
		switch (drawOp.$) {
			case 0:
				return A5(joakin$elm_canvas$Canvas$renderTextFill, txt, x, y, avh4$elm_color$Color$black, cmds);
			case 1:
				var c = drawOp.a;
				return A5(joakin$elm_canvas$Canvas$renderTextFill, txt, x, y, c, cmds);
			case 2:
				var c = drawOp.a;
				return A5(joakin$elm_canvas$Canvas$renderTextStroke, txt, x, y, c, cmds);
			default:
				var fc = drawOp.a;
				var sc = drawOp.b;
				return A5(
					joakin$elm_canvas$Canvas$renderTextStroke,
					txt,
					x,
					y,
					sc,
					A5(joakin$elm_canvas$Canvas$renderTextFill, txt, x, y, fc, cmds));
		}
	});
var joakin$elm_canvas$Canvas$renderText = F3(
	function (drawOp, txt, cmds) {
		return A3(joakin$elm_canvas$Canvas$renderTextDrawOp, drawOp, txt, cmds);
	});
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage = F9(
	function (sx, sy, sw, sh, dx, dy, dw, dh, imageObj) {
		return A2(
			joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn,
			'drawImage',
			_List_fromArray(
				[
					imageObj,
					elm$json$Json$Encode$float(sx),
					elm$json$Json$Encode$float(sy),
					elm$json$Json$Encode$float(sw),
					elm$json$Json$Encode$float(sh),
					elm$json$Json$Encode$float(dx),
					elm$json$Json$Encode$float(dy),
					elm$json$Json$Encode$float(dw),
					elm$json$Json$Encode$float(dh)
				]));
	});
var joakin$elm_canvas$Canvas$Internal$Texture$drawTexture = F4(
	function (x, y, t, cmds) {
		return A2(
			elm$core$List$cons,
			function () {
				if (!t.$) {
					var image = t.a;
					return A9(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage, 0, 0, image.c4, image.cD, x, y, image.c4, image.cD, image.cJ);
				} else {
					var sprite = t.a;
					var image = t.b;
					return A9(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$drawImage, sprite.p, sprite.q, sprite.c4, sprite.cD, x, y, sprite.c4, sprite.cD, image.cJ);
				}
			}(),
			cmds);
	});
var joakin$elm_canvas$Canvas$renderTexture = F3(
	function (_n0, t, cmds) {
		var x = _n0.a;
		var y = _n0.b;
		return A4(joakin$elm_canvas$Canvas$Internal$Texture$drawTexture, x, y, t, cmds);
	});
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$beginPath = A2(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'beginPath', _List_Nil);
var joakin$elm_canvas$Canvas$renderDrawable = F3(
	function (drawable, drawOp, cmds) {
		switch (drawable.$) {
			case 0:
				var txt = drawable.a;
				return A3(joakin$elm_canvas$Canvas$renderText, drawOp, txt, cmds);
			case 1:
				var ss = drawable.a;
				return A2(
					joakin$elm_canvas$Canvas$renderShapeDrawOp,
					drawOp,
					A3(
						elm$core$List$foldl,
						joakin$elm_canvas$Canvas$renderShape,
						A2(elm$core$List$cons, joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$beginPath, cmds),
						ss));
			default:
				var p = drawable.a;
				var t = drawable.b;
				return A3(joakin$elm_canvas$Canvas$renderTexture, p, t, cmds);
		}
	});
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$restore = A2(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'restore', _List_Nil);
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$save = A2(joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$fn, 'save', _List_Nil);
var joakin$elm_canvas$Canvas$renderOne = F2(
	function (_n0, cmds) {
		var data = _n0;
		var commands = data.x;
		var drawable = data.N;
		var drawOp = data.M;
		return A2(
			elm$core$List$cons,
			joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$restore,
			A3(
				joakin$elm_canvas$Canvas$renderDrawable,
				drawable,
				drawOp,
				_Utils_ap(
					commands,
					A2(elm$core$List$cons, joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$save, cmds))));
	});
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$empty = _List_Nil;
var joakin$elm_canvas$Canvas$render = function (entities) {
	return A3(elm$core$List$foldl, joakin$elm_canvas$Canvas$renderOne, joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$empty, entities);
};
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm$html$Html$img = _VirtualDom_node('img');
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$src = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var elm$json$Json$Decode$float = _Json_decodeFloat;
var elm$json$Json$Decode$value = _Json_decodeValue;
var joakin$elm_canvas$Canvas$decodeTextureImageInfo = A2(
	elm$json$Json$Decode$andThen,
	function (target) {
		return A3(
			elm$json$Json$Decode$map2,
			F2(
				function (width, height) {
					return {cD: height, cJ: target, c4: width};
				}),
			A2(
				elm$json$Json$Decode$at,
				_List_fromArray(
					['target', 'width']),
				elm$json$Json$Decode$float),
			A2(
				elm$json$Json$Decode$at,
				_List_fromArray(
					['target', 'height']),
				elm$json$Json$Decode$float));
	},
	A2(elm$json$Json$Decode$field, 'target', elm$json$Json$Decode$value));
var joakin$elm_canvas$Canvas$Internal$Texture$TImage = function (a) {
	return {$: 0, a: a};
};
var joakin$elm_canvas$Canvas$renderTextureSource = function (textureSource) {
	var url = textureSource.a;
	var onLoad = textureSource.b;
	return _Utils_Tuple2(
		url,
		A2(
			elm$html$Html$img,
			_List_fromArray(
				[
					elm$html$Html$Attributes$src(url),
					A2(elm$html$Html$Attributes$style, 'display', 'none'),
					A2(
					elm$html$Html$Events$on,
					'load',
					A2(
						elm$json$Json$Decode$map,
						A2(
							elm$core$Basics$composeR,
							joakin$elm_canvas$Canvas$Internal$Texture$TImage,
							A2(elm$core$Basics$composeR, elm$core$Maybe$Just, onLoad)),
						joakin$elm_canvas$Canvas$decodeTextureImageInfo)),
					A2(
					elm$html$Html$Events$on,
					'error',
					elm$json$Json$Decode$succeed(
						onLoad(elm$core$Maybe$Nothing)))
				]),
			_List_Nil));
};
var elm$virtual_dom$VirtualDom$property = F2(
	function (key, value) {
		return A2(
			_VirtualDom_property,
			_VirtualDom_noInnerHtmlOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var elm$html$Html$Attributes$property = elm$virtual_dom$VirtualDom$property;
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$commands = function (list) {
	return A2(
		elm$html$Html$Attributes$property,
		'cmds',
		A2(elm$json$Json$Encode$list, elm$core$Basics$identity, list));
};
var joakin$elm_canvas$Canvas$toHtmlWith = F3(
	function (options, attrs, entities) {
		return A3(
			elm$html$Html$Keyed$node,
			'elm-canvas',
			A2(
				elm$core$List$cons,
				joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$commands(
					joakin$elm_canvas$Canvas$render(entities)),
				A2(
					elm$core$List$cons,
					elm$html$Html$Attributes$height(options.cD),
					A2(
						elm$core$List$cons,
						elm$html$Html$Attributes$width(options.c4),
						attrs))),
			A2(
				elm$core$List$cons,
				_Utils_Tuple2('__canvas', joakin$elm_canvas$Canvas$cnvs),
				A2(elm$core$List$map, joakin$elm_canvas$Canvas$renderTextureSource, options.cU)));
	});
var joakin$elm_canvas$Canvas$Internal$Canvas$SettingDrawOp = function (a) {
	return {$: 2, a: a};
};
var joakin$elm_canvas$Canvas$Settings$fill = function (color) {
	return joakin$elm_canvas$Canvas$Internal$Canvas$SettingDrawOp(
		joakin$elm_canvas$Canvas$Internal$Canvas$Fill(color));
};
var joakin$elm_canvas$Canvas$Settings$Text$Center = 2;
var joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommand = function (a) {
	return {$: 0, a: a};
};
var joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$textAlign = function (align) {
	return A2(
		joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$field,
		'textAlign',
		elm$json$Json$Encode$string(align));
};
var joakin$elm_canvas$Canvas$Settings$Text$textAlignToString = function (alignment) {
	switch (alignment) {
		case 0:
			return 'left';
		case 1:
			return 'right';
		case 2:
			return 'center';
		case 3:
			return 'start';
		default:
			return 'end';
	}
};
var joakin$elm_canvas$Canvas$Settings$Text$align = function (alignment) {
	return joakin$elm_canvas$Canvas$Internal$Canvas$SettingCommand(
		joakin$elm_canvas$Canvas$Internal$CustomElementJsonApi$textAlign(
			joakin$elm_canvas$Canvas$Settings$Text$textAlignToString(alignment)));
};
var joakin$elm_canvas$Canvas$Internal$Texture$TSImageUrl = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var joakin$elm_canvas$Canvas$Texture$loadFromImageUrl = F2(
	function (url, onLoad) {
		return A2(joakin$elm_canvas$Canvas$Internal$Texture$TSImageUrl, url, onLoad);
	});
var author$project$Main$viewCanvas = F2(
	function (maybeTex, sprites) {
		return A3(
			joakin$elm_canvas$Canvas$toHtmlWith,
			{
				cD: author$project$Main$height,
				cU: _List_fromArray(
					[
						A2(joakin$elm_canvas$Canvas$Texture$loadFromImageUrl, 'cat.png', author$project$Main$CanvasTextureLoaded)
					]),
				c4: author$project$Main$width
			},
			_List_Nil,
			A2(
				elm$core$List$cons,
				A2(
					joakin$elm_canvas$Canvas$shapes,
					_List_fromArray(
						[
							joakin$elm_canvas$Canvas$Settings$fill(avh4$elm_color$Color$white)
						]),
					_List_fromArray(
						[
							A3(
							joakin$elm_canvas$Canvas$rect,
							_Utils_Tuple2(0, 0),
							author$project$Main$width,
							author$project$Main$height)
						])),
				function () {
					if (!maybeTex.$) {
						var tex = maybeTex.a;
						return A2(
							elm$core$List$map,
							function (sprite) {
								return A3(
									joakin$elm_canvas$Canvas$texture,
									_List_Nil,
									_Utils_Tuple2(sprite.p, sprite.q),
									tex);
							},
							sprites);
					} else {
						return _List_fromArray(
							[
								A3(
								joakin$elm_canvas$Canvas$text,
								_List_fromArray(
									[
										joakin$elm_canvas$Canvas$Settings$Text$align(2)
									]),
								_Utils_Tuple2(author$project$Main$width / 2, author$project$Main$height / 2),
								'Loading')
							]);
					}
				}()));
	});
var author$project$Main$spritesToAttrVal = function (sprites) {
	return A2(
		elm$json$Json$Encode$encode,
		0,
		author$project$Main$encodeSprites(sprites));
};
var elm$html$Html$div = _VirtualDom_node('div');
var elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var elm$html$Html$Attributes$attribute = elm$virtual_dom$VirtualDom$attribute;
var elm$html$Html$Attributes$id = elm$html$Html$Attributes$stringProperty('id');
var author$project$Main$viewDataAttrs = function (sprites) {
	return _List_fromArray(
		[
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(
					elm$html$Html$Attributes$attribute,
					'data-sprites',
					author$project$Main$spritesToAttrVal(sprites)),
					elm$html$Html$Attributes$id('sprite-data')
				]),
			_List_Nil)
		]);
};
var author$project$Main$viewDataProperty = function (sprites) {
	return _List_fromArray(
		[
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(
					elm$html$Html$Attributes$property,
					'sprites',
					author$project$Main$encodeSprites(sprites)),
					elm$html$Html$Attributes$id('sprite-data')
				]),
			_List_Nil)
		]);
};
var author$project$Main$viewHtmlTopLeft = function (sprites) {
	return A2(
		elm$core$List$map,
		function (sprite) {
			return A2(
				elm$html$Html$img,
				_List_fromArray(
					[
						elm$html$Html$Attributes$src('cat.png'),
						A2(
						elm$html$Html$Attributes$style,
						'width',
						author$project$Main$px(author$project$Main$spriteSize)),
						A2(
						elm$html$Html$Attributes$style,
						'height',
						author$project$Main$px(author$project$Main$spriteSize)),
						A2(elm$html$Html$Attributes$style, 'position', 'absolute'),
						A2(
						elm$html$Html$Attributes$style,
						'left',
						author$project$Main$px(sprite.p)),
						A2(
						elm$html$Html$Attributes$style,
						'bottom',
						author$project$Main$px(sprite.q))
					]),
				_List_Nil);
		},
		sprites);
};
var author$project$Main$viewHtmlTransformTranslate = function (sprites) {
	return A2(
		elm$core$List$map,
		function (sprite) {
			return A2(
				elm$html$Html$img,
				_List_fromArray(
					[
						elm$html$Html$Attributes$src('cat.png'),
						A2(
						elm$html$Html$Attributes$style,
						'width',
						author$project$Main$px(author$project$Main$spriteSize)),
						A2(
						elm$html$Html$Attributes$style,
						'height',
						author$project$Main$px(author$project$Main$spriteSize)),
						A2(elm$html$Html$Attributes$style, 'position', 'absolute'),
						A2(
						elm$html$Html$Attributes$style,
						'transform',
						'translate(' + (author$project$Main$px(sprite.p) + (',' + author$project$Main$px((author$project$Main$height - author$project$Main$spriteSize) - sprite.q)))),
						A2(elm$html$Html$Attributes$style, 'will-change', 'transform')
					]),
				_List_Nil);
		},
		sprites);
};
var author$project$Main$viewPixiJsDataAttrs = function (sprites) {
	return _List_fromArray(
		[
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(
					elm$html$Html$Attributes$attribute,
					'data-sprites',
					author$project$Main$spritesToAttrVal(sprites)),
					elm$html$Html$Attributes$id('sprite-data-for-pixijs')
				]),
			_List_Nil)
		]);
};
var author$project$Main$viewPixiJsDataProperty = function (sprites) {
	return _List_fromArray(
		[
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(
					elm$html$Html$Attributes$property,
					'sprites',
					author$project$Main$encodeSprites(sprites)),
					elm$html$Html$Attributes$id('sprite-data-for-pixijs')
				]),
			_List_Nil)
		]);
};
var author$project$Main$fragmentShader = {
	src: '\n        precision mediump float;\n        uniform sampler2D texture;\n        varying vec2 vcoord;\n        void main () {\n          vec3 rgb = texture2D(texture, vcoord).xyz;\n          vec4 rgba = vec4(rgb, 0.5);\n          gl_FragColor = rgba;\n\n          gl_FragColor = texture2D(texture, vcoord);\n        }\n    ',
	attributes: {},
	uniforms: {texture: 'I'}
};
var elm_explorations$linear_algebra$Math$Matrix4$makeScale3 = _MJS_m4x4makeScale3;
var elm_explorations$linear_algebra$Math$Matrix4$translate3 = _MJS_m4x4translate3;
var author$project$Main$perspective = F2(
	function (x, y) {
		var mod = 1 / author$project$Main$spriteSize;
		return A4(
			elm_explorations$linear_algebra$Math$Matrix4$translate3,
			(1 + ((-1.0) * (author$project$Main$width / author$project$Main$spriteSize))) + ((2 / author$project$Main$spriteSize) * x),
			(1 + ((-1.0) * (author$project$Main$height / author$project$Main$spriteSize))) + ((2 / author$project$Main$spriteSize) * y),
			0,
			A3(elm_explorations$linear_algebra$Math$Matrix4$makeScale3, author$project$Main$spriteSize / author$project$Main$width, author$project$Main$spriteSize / author$project$Main$height, 1));
	});
var author$project$Main$Vertex = F2(
	function (position, coord) {
		return {a9: coord, aO: position};
	});
var elm_explorations$linear_algebra$Math$Vector2$vec2 = _MJS_v2;
var elm_explorations$linear_algebra$Math$Vector3$vec3 = _MJS_v3;
var elm_explorations$webgl$WebGL$Mesh3 = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var elm_explorations$webgl$WebGL$triangles = elm_explorations$webgl$WebGL$Mesh3(
	{r: 3, s: 0, u: 4});
var author$project$Main$squareMesh = function () {
	var vertex = F2(
		function (position, coord) {
			return {a9: coord, aO: position};
		});
	var topRight = A2(
		author$project$Main$Vertex,
		A3(elm_explorations$linear_algebra$Math$Vector3$vec3, 1, 1, 1),
		A2(elm_explorations$linear_algebra$Math$Vector2$vec2, 1, 1));
	var topLeft = A2(
		author$project$Main$Vertex,
		A3(elm_explorations$linear_algebra$Math$Vector3$vec3, -1, 1, 1),
		A2(elm_explorations$linear_algebra$Math$Vector2$vec2, 0, 1));
	var bottomRight = A2(
		author$project$Main$Vertex,
		A3(elm_explorations$linear_algebra$Math$Vector3$vec3, 1, -1, 1),
		A2(elm_explorations$linear_algebra$Math$Vector2$vec2, 1, 0));
	var bottomLeft = A2(
		author$project$Main$Vertex,
		A3(elm_explorations$linear_algebra$Math$Vector3$vec3, -1, -1, 1),
		A2(elm_explorations$linear_algebra$Math$Vector2$vec2, 0, 0));
	return elm_explorations$webgl$WebGL$triangles(
		_List_fromArray(
			[
				_Utils_Tuple3(topLeft, topRight, bottomLeft),
				_Utils_Tuple3(bottomLeft, topRight, bottomRight)
			]));
}();
var author$project$Main$vertexShader = {
	src: '\n        attribute vec3 position;\n        attribute vec2 coord;\n        uniform mat4 perspective;\n        varying vec2 vcoord;\n        void main () {\n          gl_Position = perspective * vec4(position, 1.0);\n          vcoord = coord.xy;\n        }\n    ',
	attributes: {coord: 'a9', position: 'aO'},
	uniforms: {perspective: 'bP'}
};
var elm_explorations$webgl$WebGL$Internal$Alpha = function (a) {
	return {$: 0, a: a};
};
var elm_explorations$webgl$WebGL$alpha = elm_explorations$webgl$WebGL$Internal$Alpha;
var elm_explorations$webgl$WebGL$Internal$Antialias = {$: 3};
var elm_explorations$webgl$WebGL$antialias = elm_explorations$webgl$WebGL$Internal$Antialias;
var elm_explorations$webgl$WebGL$Internal$disableSetting = F2(
	function (gl, setting) {
		switch (setting.$) {
			case 0:
				return _WebGL_disableBlend(gl);
			case 1:
				return _WebGL_disableDepthTest(gl);
			case 2:
				return _WebGL_disableStencilTest(gl);
			case 3:
				return _WebGL_disableScissor(gl);
			case 4:
				return _WebGL_disableColorMask(gl);
			case 5:
				return _WebGL_disableCullFace(gl);
			case 6:
				return _WebGL_disablePolygonOffset(gl);
			case 7:
				return _WebGL_disableSampleCoverage(gl);
			default:
				return _WebGL_disableSampleAlphaToCoverage(gl);
		}
	});
var elm_explorations$webgl$WebGL$Internal$enableOption = F2(
	function (ctx, option) {
		switch (option.$) {
			case 0:
				return A2(_WebGL_enableAlpha, ctx, option);
			case 1:
				return A2(_WebGL_enableDepth, ctx, option);
			case 2:
				return A2(_WebGL_enableStencil, ctx, option);
			case 3:
				return A2(_WebGL_enableAntialias, ctx, option);
			default:
				return A2(_WebGL_enableClearColor, ctx, option);
		}
	});
var elm_explorations$webgl$WebGL$Internal$enableSetting = F2(
	function (gl, setting) {
		switch (setting.$) {
			case 0:
				return A2(_WebGL_enableBlend, gl, setting);
			case 1:
				return A2(_WebGL_enableDepthTest, gl, setting);
			case 2:
				return A2(_WebGL_enableStencilTest, gl, setting);
			case 3:
				return A2(_WebGL_enableScissor, gl, setting);
			case 4:
				return A2(_WebGL_enableColorMask, gl, setting);
			case 5:
				return A2(_WebGL_enableCullFace, gl, setting);
			case 6:
				return A2(_WebGL_enablePolygonOffset, gl, setting);
			case 7:
				return A2(_WebGL_enableSampleCoverage, gl, setting);
			default:
				return A2(_WebGL_enableSampleAlphaToCoverage, gl, setting);
		}
	});
var elm_explorations$webgl$WebGL$entityWith = _WebGL_entity;
var elm_explorations$webgl$WebGL$toHtmlWith = F3(
	function (options, attributes, entities) {
		return A3(_WebGL_toHtml, options, attributes, entities);
	});
var elm_explorations$webgl$WebGL$Internal$SampleAlphaToCoverage = {$: 8};
var elm_explorations$webgl$WebGL$Settings$sampleAlphaToCoverage = elm_explorations$webgl$WebGL$Internal$SampleAlphaToCoverage;
var author$project$Main$viewWebGL = F2(
	function (texture, sprites) {
		return _List_fromArray(
			[
				A3(
				elm_explorations$webgl$WebGL$toHtmlWith,
				_List_fromArray(
					[
						elm_explorations$webgl$WebGL$alpha(true),
						elm_explorations$webgl$WebGL$antialias
					]),
				_List_fromArray(
					[
						elm$html$Html$Attributes$width(author$project$Main$width),
						elm$html$Html$Attributes$height(author$project$Main$height),
						A2(elm$html$Html$Attributes$style, 'background', 'white')
					]),
				A2(
					elm$core$List$map,
					function (_n0) {
						var x = _n0.p;
						var y = _n0.q;
						return A5(
							elm_explorations$webgl$WebGL$entityWith,
							_List_fromArray(
								[elm_explorations$webgl$WebGL$Settings$sampleAlphaToCoverage]),
							author$project$Main$vertexShader,
							author$project$Main$fragmentShader,
							author$project$Main$squareMesh,
							{
								bP: A2(author$project$Main$perspective, x, y),
								I: texture
							});
					},
					sprites))
			]);
	});
var Zinggi$elm_2d_game$Game$TwoD$Render$toWebGl = F4(
	function (time, camera, screenSize, _n0) {
		var f = _n0;
		return f(
			{co: camera, H: screenSize, cV: time});
	});
var elm_explorations$webgl$WebGL$Internal$Depth = function (a) {
	return {$: 1, a: a};
};
var elm_explorations$webgl$WebGL$depth = elm_explorations$webgl$WebGL$Internal$Depth;
var Zinggi$elm_2d_game$Game$TwoD$renderWithOptions = F3(
	function (attributes, _n0, objects) {
		var time = _n0.cV;
		var size = _n0.b5;
		var camera = _n0.co;
		var _n1 = size;
		var w = _n1.a;
		var h = _n1.b;
		var _n2 = _Utils_Tuple2(w, h);
		var wf = _n2.a;
		var hf = _n2.b;
		return A3(
			elm_explorations$webgl$WebGL$toHtmlWith,
			_List_fromArray(
				[
					elm_explorations$webgl$WebGL$alpha(false),
					elm_explorations$webgl$WebGL$depth(1),
					elm_explorations$webgl$WebGL$antialias
				]),
			_Utils_ap(
				_List_fromArray(
					[
						elm$html$Html$Attributes$width(w),
						elm$html$Html$Attributes$height(h)
					]),
				attributes),
			A2(
				elm$core$List$map,
				A3(
					Zinggi$elm_2d_game$Game$TwoD$Render$toWebGl,
					time,
					camera,
					_Utils_Tuple2(wf, hf)),
				objects));
	});
var Zinggi$elm_2d_game$Game$TwoD$render = Zinggi$elm_2d_game$Game$TwoD$renderWithOptions(_List_Nil);
var Zinggi$elm_2d_game$Game$TwoD$Camera$Area = function (a) {
	return {$: 2, a: a};
};
var Zinggi$elm_2d_game$Game$TwoD$Camera$Camera = elm$core$Basics$identity;
var Zinggi$elm_2d_game$Game$TwoD$Camera$fixedArea = F2(
	function (a, pos) {
		return {
			aO: pos,
			b5: Zinggi$elm_2d_game$Game$TwoD$Camera$Area(a)
		};
	});
var Zinggi$elm_2d_game$Game$Helpers$v2FromTuple = function (_n0) {
	var x = _n0.a;
	var y = _n0.b;
	return A2(elm_explorations$linear_algebra$Math$Vector2$vec2, x, y);
};
var Zinggi$elm_2d_game$Game$Helpers$scale = F2(
	function (a, _n0) {
		var x = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(a * x, a * y);
	});
var elm$core$Basics$sqrt = _Basics_sqrt;
var Zinggi$elm_2d_game$Game$TwoD$Camera$getViewSize = F2(
	function (_n0, _n1) {
		var w = _n0.a;
		var h = _n0.b;
		var size = _n1.b5;
		switch (size.$) {
			case 0:
				var x = size.a;
				return _Utils_Tuple2(x, (x * h) / w);
			case 1:
				var y = size.a;
				return _Utils_Tuple2((y * w) / h, y);
			case 2:
				var a = size.a;
				return _Utils_Tuple2(
					elm$core$Basics$sqrt((a * w) / h),
					elm$core$Basics$sqrt((a * h) / w));
			default:
				var fn = size.a;
				return fn(
					_Utils_Tuple2(w, h));
		}
	});
var elm_explorations$linear_algebra$Math$Matrix4$makeOrtho2D = _MJS_m4x4makeOrtho2D;
var Zinggi$elm_2d_game$Game$TwoD$Camera$view = F2(
	function (camera, size) {
		var position = camera.aO;
		var _n0 = position;
		var x = _n0.a;
		var y = _n0.b;
		var _n1 = A2(
			Zinggi$elm_2d_game$Game$Helpers$scale,
			0.5,
			A2(Zinggi$elm_2d_game$Game$TwoD$Camera$getViewSize, size, camera));
		var w = _n1.a;
		var h = _n1.b;
		var _n2 = _Utils_Tuple2(
			_Utils_Tuple2(x - w, x + w),
			_Utils_Tuple2(y - h, y + h));
		var _n3 = _n2.a;
		var l = _n3.a;
		var r = _n3.b;
		var _n4 = _n2.b;
		var d = _n4.a;
		var u = _n4.b;
		return A4(elm_explorations$linear_algebra$Math$Matrix4$makeOrtho2D, l, r, d, u);
	});
var Zinggi$elm_2d_game$Game$TwoD$Render$Rectangle = 0;
var elm_explorations$webgl$WebGL$Internal$Blend = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return {$: 0, a: a, b: b, c: c, d: d, e: e, f: f, g: g, h: h, i: i, j: j};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var elm_explorations$webgl$WebGL$Settings$Blend$custom = function (_n0) {
	var r = _n0.cQ;
	var g = _n0.cC;
	var b = _n0.cm;
	var a = _n0.cj;
	var color = _n0.k;
	var alpha = _n0.ck;
	var expand = F2(
		function (_n1, _n2) {
			var eq1 = _n1.a;
			var f11 = _n1.b;
			var f12 = _n1.c;
			var eq2 = _n2.a;
			var f21 = _n2.b;
			var f22 = _n2.c;
			return elm_explorations$webgl$WebGL$Internal$Blend(eq1)(f11)(f12)(eq2)(f21)(f22)(r)(g)(b)(a);
		});
	return A2(expand, color, alpha);
};
var elm_explorations$webgl$WebGL$Settings$Blend$Blender = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var elm_explorations$webgl$WebGL$Settings$Blend$customAdd = F2(
	function (_n0, _n1) {
		var factor1 = _n0;
		var factor2 = _n1;
		return A3(elm_explorations$webgl$WebGL$Settings$Blend$Blender, 32774, factor1, factor2);
	});
var elm_explorations$webgl$WebGL$Settings$Blend$Factor = elm$core$Basics$identity;
var elm_explorations$webgl$WebGL$Settings$Blend$one = 1;
var elm_explorations$webgl$WebGL$Settings$Blend$oneMinusSrcAlpha = 771;
var elm_explorations$webgl$WebGL$Settings$Blend$srcAlpha = 770;
var Zinggi$elm_2d_game$Game$TwoD$Render$renderTransparent = elm_explorations$webgl$WebGL$entityWith(
	_List_fromArray(
		[
			elm_explorations$webgl$WebGL$Settings$Blend$custom(
			{
				cj: 0,
				ck: A2(elm_explorations$webgl$WebGL$Settings$Blend$customAdd, elm_explorations$webgl$WebGL$Settings$Blend$one, elm_explorations$webgl$WebGL$Settings$Blend$oneMinusSrcAlpha),
				cm: 0,
				k: A2(elm_explorations$webgl$WebGL$Settings$Blend$customAdd, elm_explorations$webgl$WebGL$Settings$Blend$srcAlpha, elm_explorations$webgl$WebGL$Settings$Blend$oneMinusSrcAlpha),
				cC: 0,
				cQ: 0
			})
		]));
var Zinggi$elm_2d_game$Game$TwoD$Shaders$vertTexturedRect = {
	src: '\nattribute vec2 position;\n\nuniform mat4 transform;\nuniform mat4 cameraProj;\n\nvarying vec2 vcoord;\nvoid main () {\n    vec4 pos = cameraProj*transform*vec4(position, 0, 1);\n    gl_Position = pos;\n    vcoord = position.xy;\n}\n',
	attributes: {position: 'aO'},
	uniforms: {cameraProj: '_', transform: 'ak'}
};
var Zinggi$elm_2d_game$Game$TwoD$Shapes$Vertex = function (position) {
	return {aO: position};
};
var Zinggi$elm_2d_game$Game$TwoD$Shapes$unitSquare = elm_explorations$webgl$WebGL$triangles(
	_List_fromArray(
		[
			_Utils_Tuple3(
			Zinggi$elm_2d_game$Game$TwoD$Shapes$Vertex(
				A2(elm_explorations$linear_algebra$Math$Vector2$vec2, 0, 0)),
			Zinggi$elm_2d_game$Game$TwoD$Shapes$Vertex(
				A2(elm_explorations$linear_algebra$Math$Vector2$vec2, 0, 1)),
			Zinggi$elm_2d_game$Game$TwoD$Shapes$Vertex(
				A2(elm_explorations$linear_algebra$Math$Vector2$vec2, 1, 0))),
			_Utils_Tuple3(
			Zinggi$elm_2d_game$Game$TwoD$Shapes$Vertex(
				A2(elm_explorations$linear_algebra$Math$Vector2$vec2, 0, 1)),
			Zinggi$elm_2d_game$Game$TwoD$Shapes$Vertex(
				A2(elm_explorations$linear_algebra$Math$Vector2$vec2, 1, 0)),
			Zinggi$elm_2d_game$Game$TwoD$Shapes$Vertex(
				A2(elm_explorations$linear_algebra$Math$Vector2$vec2, 1, 1)))
		]));
var Zinggi$elm_2d_game$Game$TwoD$Render$rectWithFragment = F2(
	function (frag, uniforms) {
		return A4(Zinggi$elm_2d_game$Game$TwoD$Render$renderTransparent, Zinggi$elm_2d_game$Game$TwoD$Shaders$vertTexturedRect, frag, Zinggi$elm_2d_game$Game$TwoD$Shapes$unitSquare, uniforms);
	});
var Zinggi$elm_2d_game$Game$TwoD$Render$Renderable = elm$core$Basics$identity;
var Zinggi$elm_2d_game$Game$TwoD$Render$veryCustom = elm$core$Basics$identity;
var avh4$elm_color$Color$toRgba = function (_n0) {
	var r = _n0.a;
	var g = _n0.b;
	var b = _n0.c;
	var a = _n0.d;
	return {ck: a, a5: b, bk: g, bY: r};
};
var Zinggi$elm_2d_game$Game$TwoD$Shaders$colorToRGBVector = function (color) {
	var _n0 = avh4$elm_color$Color$toRgba(color);
	var red = _n0.bY;
	var green = _n0.bk;
	var blue = _n0.a5;
	return A3(elm_explorations$linear_algebra$Math$Vector3$vec3, red, green, blue);
};
var Zinggi$elm_2d_game$Game$TwoD$Shaders$fragUniColor = {
	src: '\n\nprecision mediump float;\n\nuniform vec3 color;\nvarying vec2 vcoord;\n\nvoid main() {\n    gl_FragColor = vec4(color, 1);\n}\n',
	attributes: {},
	uniforms: {color: 'k'}
};
var Zinggi$elm_2d_game$Game$TwoD$Shaders$fragUniColorCircle = {
	src: '\n\nprecision mediump float;\n\nuniform vec3 color;\nvarying vec2 vcoord;\n\nvoid main () {\n  float dist = length(vec2(0.5, 0.5) - vcoord);\n\n  float alpha = smoothstep(0.5 - 0.01, 0.5, dist);\n  vec4 color = vec4(color, 1.0 - alpha);\n\n  gl_FragColor = color;\n}\n',
	attributes: {},
	uniforms: {color: 'k'}
};
var Zinggi$elm_2d_game$Game$TwoD$Shaders$fragUniColorRing = {
	src: '\n\nprecision mediump float;\n\nuniform vec3 color;\nvarying vec2 vcoord;\n\nvoid main () {\n  float dist = length(vec2(0.5, 0.5) - vcoord);\n\n  float alpha = smoothstep(0.5, 0.5 - 0.01, dist) * smoothstep(0.49 - 0.01, 0.49, dist);\n  vec4 color = vec4(color, alpha);\n\n  gl_FragColor = color;\n}\n',
	attributes: {},
	uniforms: {color: 'k'}
};
var elm_explorations$linear_algebra$Math$Matrix4$makeRotate = _MJS_m4x4makeRotate;
var elm_explorations$linear_algebra$Math$Matrix4$makeScale = _MJS_m4x4makeScale;
var elm_explorations$linear_algebra$Math$Matrix4$makeTranslate = _MJS_m4x4makeTranslate;
var elm_explorations$linear_algebra$Math$Matrix4$mul = _MJS_m4x4mul;
var Zinggi$elm_2d_game$Game$TwoD$Shaders$makeTransform = F4(
	function (_n0, rotation, _n1, _n2) {
		var x = _n0.a;
		var y = _n0.b;
		var z = _n0.c;
		var w = _n1.a;
		var h = _n1.b;
		var px = _n2.a;
		var py = _n2.b;
		var trans = elm_explorations$linear_algebra$Math$Matrix4$makeTranslate(
			A3(elm_explorations$linear_algebra$Math$Vector3$vec3, x, y, z));
		var scale = elm_explorations$linear_algebra$Math$Matrix4$makeScale(
			A3(elm_explorations$linear_algebra$Math$Vector3$vec3, w, h, 1));
		var rot = A2(
			elm_explorations$linear_algebra$Math$Matrix4$makeRotate,
			rotation,
			A3(elm_explorations$linear_algebra$Math$Vector3$vec3, 0, 0, 1));
		var pivot = elm_explorations$linear_algebra$Math$Matrix4$makeTranslate(
			A3(elm_explorations$linear_algebra$Math$Vector3$vec3, -px, -py, 0));
		return A2(
			elm_explorations$linear_algebra$Math$Matrix4$mul,
			A2(
				elm_explorations$linear_algebra$Math$Matrix4$mul,
				A2(elm_explorations$linear_algebra$Math$Matrix4$mul, trans, rot),
				scale),
			pivot);
	});
var Zinggi$elm_2d_game$Game$TwoD$Shaders$vertColoredShape = {
	src: '\nattribute vec2 position;\n\nuniform mat4 transform;\nuniform mat4 cameraProj;\nvarying vec2 vcoord;\nvoid main() {\n    gl_Position = cameraProj*transform*vec4(position, 0, 1);\n    vcoord = position.xy;\n}\n',
	attributes: {position: 'aO'},
	uniforms: {cameraProj: '_', transform: 'ak'}
};
var Zinggi$elm_2d_game$Game$TwoD$Shapes$unitTriangle = elm_explorations$webgl$WebGL$triangles(
	_List_fromArray(
		[
			_Utils_Tuple3(
			Zinggi$elm_2d_game$Game$TwoD$Shapes$Vertex(
				A2(elm_explorations$linear_algebra$Math$Vector2$vec2, 0, 0)),
			Zinggi$elm_2d_game$Game$TwoD$Shapes$Vertex(
				A2(elm_explorations$linear_algebra$Math$Vector2$vec2, 0, 1)),
			Zinggi$elm_2d_game$Game$TwoD$Shapes$Vertex(
				A2(elm_explorations$linear_algebra$Math$Vector2$vec2, 1, 0)))
		]));
var Zinggi$elm_2d_game$Game$TwoD$Render$shapeWithOptions = F2(
	function (theShape, _n0) {
		var color = _n0.k;
		var rotation = _n0.B;
		var position = _n0.aO;
		var size = _n0.b5;
		var pivot = _n0.A;
		var _n1 = function () {
			switch (theShape) {
				case 0:
					return _Utils_Tuple2(Zinggi$elm_2d_game$Game$TwoD$Shaders$fragUniColor, Zinggi$elm_2d_game$Game$TwoD$Shapes$unitSquare);
				case 1:
					return _Utils_Tuple2(Zinggi$elm_2d_game$Game$TwoD$Shaders$fragUniColor, Zinggi$elm_2d_game$Game$TwoD$Shapes$unitTriangle);
				case 2:
					return _Utils_Tuple2(Zinggi$elm_2d_game$Game$TwoD$Shaders$fragUniColorCircle, Zinggi$elm_2d_game$Game$TwoD$Shapes$unitSquare);
				default:
					return _Utils_Tuple2(Zinggi$elm_2d_game$Game$TwoD$Shaders$fragUniColorRing, Zinggi$elm_2d_game$Game$TwoD$Shapes$unitSquare);
			}
		}();
		var frag = _n1.a;
		var attribs = _n1.b;
		return Zinggi$elm_2d_game$Game$TwoD$Render$veryCustom(
			function (_n3) {
				var camera = _n3.co;
				var screenSize = _n3.H;
				return A4(
					Zinggi$elm_2d_game$Game$TwoD$Render$renderTransparent,
					Zinggi$elm_2d_game$Game$TwoD$Shaders$vertColoredShape,
					frag,
					attribs,
					{
						_: A2(Zinggi$elm_2d_game$Game$TwoD$Camera$view, camera, screenSize),
						k: Zinggi$elm_2d_game$Game$TwoD$Shaders$colorToRGBVector(color),
						ak: A4(Zinggi$elm_2d_game$Game$TwoD$Shaders$makeTransform, position, rotation, size, pivot)
					});
			});
	});
var Zinggi$elm_2d_game$Game$TwoD$Render$shapeZ = F2(
	function (theShape, _n0) {
		var color = _n0.k;
		var position = _n0.aO;
		var size = _n0.b5;
		return A2(
			Zinggi$elm_2d_game$Game$TwoD$Render$shapeWithOptions,
			theShape,
			{
				k: color,
				A: _Utils_Tuple2(0, 0),
				aO: position,
				B: 0,
				b5: size
			});
	});
var Zinggi$elm_2d_game$Game$TwoD$Shaders$fragTextured = {
	src: '\n\nprecision mediump float;\n\nuniform sampler2D texture;\nuniform vec2 tileWH;\nvarying vec2 vcoord;\n\nvoid main () {\n    gl_FragColor = texture2D(texture, vcoord*tileWH);\n}\n',
	attributes: {},
	uniforms: {texture: 'I', tileWH: 'ai'}
};
var avh4$elm_color$Color$grey = A4(avh4$elm_color$Color$RgbaSpace, 211 / 255, 215 / 255, 207 / 255, 1.0);
var Zinggi$elm_2d_game$Game$TwoD$Render$spriteWithOptions = function (args) {
	var texture = args.I;
	var position = args.aO;
	var size = args.b5;
	var tiling = args.ca;
	var rotation = args.B;
	var pivot = args.A;
	if (!texture.$) {
		var t = texture.a;
		return Zinggi$elm_2d_game$Game$TwoD$Render$veryCustom(
			function (_n1) {
				var camera = _n1.co;
				var screenSize = _n1.H;
				return A2(
					Zinggi$elm_2d_game$Game$TwoD$Render$rectWithFragment,
					Zinggi$elm_2d_game$Game$TwoD$Shaders$fragTextured,
					{
						_: A2(Zinggi$elm_2d_game$Game$TwoD$Camera$view, camera, screenSize),
						I: t,
						ai: Zinggi$elm_2d_game$Game$Helpers$v2FromTuple(tiling),
						ak: A4(Zinggi$elm_2d_game$Game$TwoD$Shaders$makeTransform, position, rotation, size, pivot)
					});
			});
	} else {
		return A2(
			Zinggi$elm_2d_game$Game$TwoD$Render$shapeZ,
			0,
			{k: avh4$elm_color$Color$grey, aO: position, b5: size});
	}
};
var Zinggi$elm_2d_game$Game$TwoD$Render$spriteZ = function (_n0) {
	var texture = _n0.I;
	var position = _n0.aO;
	var size = _n0.b5;
	return Zinggi$elm_2d_game$Game$TwoD$Render$spriteWithOptions(
		{
			A: _Utils_Tuple2(0, 0),
			aO: position,
			B: 0,
			b5: size,
			I: texture,
			ca: _Utils_Tuple2(1, 1)
		});
};
var Zinggi$elm_2d_game$Game$TwoD$Render$sprite = function (_n0) {
	var texture = _n0.I;
	var position = _n0.aO;
	var size = _n0.b5;
	var _n1 = position;
	var x = _n1.a;
	var y = _n1.b;
	return Zinggi$elm_2d_game$Game$TwoD$Render$spriteZ(
		{
			aO: _Utils_Tuple3(x, y, 0),
			b5: size,
			I: texture
		});
};
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var Zinggi$elm_game_resources$Game$Resources$getTexture = F2(
	function (url, _n0) {
		var res = _n0;
		return A2(elm$core$Dict$get, url, res);
	});
var author$project$Main$viewZinggi = F2(
	function (resources, sprites) {
		return _List_fromArray(
			[
				A2(
				Zinggi$elm_2d_game$Game$TwoD$render,
				{
					co: A2(
						Zinggi$elm_2d_game$Game$TwoD$Camera$fixedArea,
						author$project$Main$width * author$project$Main$height,
						_Utils_Tuple2(0.5 * author$project$Main$width, 0.5 * author$project$Main$height)),
					b5: _Utils_Tuple2(
						elm$core$Basics$round(author$project$Main$width),
						elm$core$Basics$round(author$project$Main$height)),
					cV: 0
				},
				A2(
					elm$core$List$map,
					function (sprite) {
						return Zinggi$elm_2d_game$Game$TwoD$Render$sprite(
							{
								aO: _Utils_Tuple2(sprite.p, sprite.q),
								b5: _Utils_Tuple2(author$project$Main$spriteSize, author$project$Main$spriteSize),
								I: A2(Zinggi$elm_game_resources$Game$Resources$getTexture, 'cat.png', resources)
							});
					},
					sprites))
			]);
	});
var author$project$Main$withWhiteBg = function (elements) {
	return _List_fromArray(
		[
			A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					A2(elm$html$Html$Attributes$style, 'background', 'white'),
					A2(elm$html$Html$Attributes$style, 'width', '100%'),
					A2(elm$html$Html$Attributes$style, 'height', '100%')
				]),
			elements)
		]);
};
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$br = _VirtualDom_node('br');
var elm$html$Html$button = _VirtualDom_node('button');
var elm$html$Html$input = _VirtualDom_node('input');
var elm$html$Html$label = _VirtualDom_node('label');
var elm$html$Html$span = _VirtualDom_node('span');
var elm$html$Html$strong = _VirtualDom_node('strong');
var elm$html$Html$Attributes$for = elm$html$Html$Attributes$stringProperty('htmlFor');
var elm$html$Html$Attributes$href = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var elm$html$Html$Attributes$target = elm$html$Html$Attributes$stringProperty('target');
var elm$html$Html$Attributes$type_ = elm$html$Html$Attributes$stringProperty('type');
var elm$html$Html$Attributes$value = elm$html$Html$Attributes$stringProperty('value');
var elm$json$Json$Decode$bool = _Json_decodeBool;
var elm$html$Html$Events$targetChecked = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'checked']),
	elm$json$Json$Decode$bool);
var elm$html$Html$Events$onCheck = function (tagger) {
	return A2(
		elm$html$Html$Events$on,
		'change',
		A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetChecked));
};
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var elm$json$Json$Decode$string = _Json_decodeString;
var elm$html$Html$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			elm$json$Json$Decode$map,
			elm$html$Html$Events$alwaysStop,
			A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetValue)));
};
var elm$html$Html$Events$onMouseEnter = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseenter',
		elm$json$Json$Decode$succeed(msg));
};
var elm$html$Html$Events$onMouseLeave = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseleave',
		elm$json$Json$Decode$succeed(msg));
};
var author$project$Main$view = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				A2(elm$html$Html$Attributes$style, 'display', 'flex'),
				A2(elm$html$Html$Attributes$style, 'flex-direction', 'column'),
				A2(
				elm$html$Html$Attributes$style,
				'margin',
				author$project$Main$px(author$project$Main$canvasMargin)),
				A2(elm$html$Html$Attributes$style, 'font-family', 'sans-serif')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'display', 'flex'),
						A2(elm$html$Html$Attributes$style, 'align-items', 'flex-start')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								A2(
								elm$html$Html$Attributes$style,
								'width',
								author$project$Main$px(author$project$Main$width)),
								A2(
								elm$html$Html$Attributes$style,
								'height',
								author$project$Main$px(author$project$Main$height)),
								A2(elm$html$Html$Attributes$style, 'border', '1px solid black'),
								A2(elm$html$Html$Attributes$style, 'position', 'relative'),
								A2(elm$html$Html$Attributes$style, 'overflow', 'hidden')
							]),
						function () {
							var _n0 = model.S;
							switch (_n0) {
								case 0:
									return author$project$Main$withWhiteBg(
										author$project$Main$viewHtmlTopLeft(model.d));
								case 1:
									return author$project$Main$withWhiteBg(
										author$project$Main$viewHtmlTransformTranslate(model.d));
								case 2:
									return author$project$Main$withWhiteBg(_List_Nil);
								case 3:
									return author$project$Main$withWhiteBg(
										A2(author$project$Main$viewZinggi, model.ad, model.d));
								case 4:
									return author$project$Main$withWhiteBg(
										author$project$Main$viewDataAttrs(model.d));
								case 5:
									return author$project$Main$withWhiteBg(
										author$project$Main$viewDataProperty(model.d));
								case 6:
									return author$project$Main$viewPixiJsDataAttrs(model.d);
								case 7:
									return author$project$Main$viewPixiJsDataProperty(model.d);
								case 8:
									return _List_Nil;
								case 9:
									var _n1 = model.I;
									if (!_n1.$) {
										var tex = _n1.a;
										return author$project$Main$withWhiteBg(
											A2(author$project$Main$viewWebGL, tex, model.d));
									} else {
										return author$project$Main$withWhiteBg(
											_List_fromArray(
												[
													elm$html$Html$text('Loading texture...')
												]));
									}
								default:
									return _List_fromArray(
										[
											A2(author$project$Main$viewCanvas, model.ap, model.d)
										]);
							}
						}()),
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'margin', '0 10px'),
								A2(elm$html$Html$Attributes$style, 'display', 'flex'),
								A2(elm$html$Html$Attributes$style, 'flex-direction', 'column')
							]),
						elm$core$List$concat(
							A2(
								elm$core$List$map,
								function (_n2) {
									var title = _n2.a;
									var buttons = _n2.b;
									return A2(
										elm$core$List$cons,
										A2(
											elm$html$Html$div,
											_List_fromArray(
												[
													A2(elm$html$Html$Attributes$style, 'font-size', '16px'),
													A2(elm$html$Html$Attributes$style, 'margin', '1px 0 0'),
													A2(elm$html$Html$Attributes$style, 'font-weight', 'bold'),
													A2(elm$html$Html$Attributes$style, 'text-decoration', 'underline'),
													A2(elm$html$Html$Attributes$style, 'color', '#014')
												]),
											_List_fromArray(
												[
													elm$html$Html$text(title)
												])),
										A2(
											elm$core$List$map,
											function (_n3) {
												var renderer = _n3.a;
												var str = _n3.b;
												return A2(
													elm$html$Html$button,
													_Utils_ap(
														_List_fromArray(
															[
																A2(elm$html$Html$Attributes$style, 'font-size', '16px'),
																A2(elm$html$Html$Attributes$style, 'margin', '0 0 5px'),
																A2(elm$html$Html$Attributes$style, 'padding', '5px 10px'),
																A2(elm$html$Html$Attributes$style, 'border-color', '#6cf #7bf #1af'),
																elm$html$Html$Events$onMouseEnter(
																author$project$Main$ButtonEnter(renderer)),
																elm$html$Html$Events$onMouseLeave(author$project$Main$ButtonLeave)
															]),
														_Utils_eq(model.S, renderer) ? _List_fromArray(
															[
																A2(elm$html$Html$Attributes$style, 'background', '#dff'),
																A2(elm$html$Html$Attributes$style, 'color', 'black')
															]) : _List_fromArray(
															[
																elm$html$Html$Events$onClick(
																author$project$Main$ChangeRenderer(renderer)),
																A2(elm$html$Html$Attributes$style, 'background', '#adf'),
																A2(elm$html$Html$Attributes$style, 'color', 'black'),
																A2(elm$html$Html$Attributes$style, 'cursor', 'pointer')
															])),
													_List_fromArray(
														[
															elm$html$Html$text(str)
														]));
											},
											buttons));
								},
								_List_fromArray(
									[
										_Utils_Tuple2(
										'HTML',
										_List_fromArray(
											[
												_Utils_Tuple2(0, 'top / left'),
												_Utils_Tuple2(1, 'transform: translate')
											])),
										_Utils_Tuple2(
										'WebGL',
										_List_fromArray(
											[
												_Utils_Tuple2(9, 'WebGL'),
												_Utils_Tuple2(3, 'Zinggi Game.TwoD')
											])),
										_Utils_Tuple2(
										'PixiJS',
										_List_fromArray(
											[
												_Utils_Tuple2(6, 'PixiJS with data attrs'),
												_Utils_Tuple2(7, 'PixiJS with data property'),
												_Utils_Tuple2(8, 'PixiJS ports')
											])),
										_Utils_Tuple2(
										'Canvas 2d',
										_List_fromArray(
											[
												_Utils_Tuple2(10, 'joakin/elm-canvas')
											])),
										_Utils_Tuple2(
										'Misc (non-rendering)',
										_List_fromArray(
											[
												_Utils_Tuple2(4, 'Just data attrs'),
												_Utils_Tuple2(5, 'Just data property'),
												_Utils_Tuple2(2, 'None')
											]))
									])))),
						function () {
						var _n4 = model.ab;
						if (_n4.$ === 1) {
							return elm$html$Html$text('');
						} else {
							var hoveringRenderer = _n4.a;
							return A2(
								elm$html$Html$span,
								_List_fromArray(
									[
										A2(elm$html$Html$Attributes$style, 'background', 'white'),
										A2(elm$html$Html$Attributes$style, 'border', '3px ridge #ccc'),
										A2(elm$html$Html$Attributes$style, 'padding', '10px'),
										A2(elm$html$Html$Attributes$style, 'display', 'inline-block'),
										A2(elm$html$Html$Attributes$style, 'position', 'relative'),
										A2(elm$html$Html$Attributes$style, 'width', '200px'),
										A2(elm$html$Html$Attributes$style, 'line-height', '20px')
									]),
								function () {
									switch (hoveringRenderer) {
										case 0:
											return _List_fromArray(
												[
													elm$html$Html$text('Sprites are HTML '),
													author$project$Main$code('<img>'),
													elm$html$Html$text(' elements positioned with CSS properties '),
													author$project$Main$code('top'),
													elm$html$Html$text(' and '),
													author$project$Main$code('left'),
													elm$html$Html$text('.')
												]);
										case 1:
											return _List_fromArray(
												[
													elm$html$Html$text('Sprites are HTML '),
													author$project$Main$code('<img>'),
													elm$html$Html$text(' elements positioned with CSS properties '),
													author$project$Main$code('transform: translate(x, y)'),
													elm$html$Html$text('.'),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													elm$html$Html$text('This should be faster since it uses the GPU, but it does not. Maybe it\'s better suited for fewer sprites and doesn\'t scale to hundreds? I\'m not sure!'),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													A2(
													elm$html$Html$strong,
													_List_Nil,
													_List_fromArray(
														[
															elm$html$Html$text('Warning: ')
														])),
													elm$html$Html$text('This may lock up your browser if there are already many sprites to draw!')
												]);
										case 3:
											return _List_fromArray(
												[
													elm$html$Html$text('This uses Zinggi\'s rendering engine '),
													author$project$Main$code('elm-2d-game'),
													elm$html$Html$text(' written in Elm and uses '),
													author$project$Main$code('elm-explorations/webgl'),
													elm$html$Html$text('. It gets pretty good results, but since it creates a new entity for every sprite, it doesn\'t seem scale beyond a thousand sprites.')
												]);
										case 4:
											return _List_fromArray(
												[
													elm$html$Html$text('This encodes the sprite data to a JSON string and sets it to the data attribute value of an HTML element.'),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													elm$html$Html$text('This demonstrates how slow writing to the DOM is, even for non-visible changes.')
												]);
										case 5:
											return _List_fromArray(
												[
													elm$html$Html$text('This encodes the sprite data to a JSON value and sets it to the data property value of an HTML element.'),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													elm$html$Html$text('This demonstrates how slow writing to the DOM is, even for non-visible changes.')
												]);
										case 6:
											return _List_fromArray(
												[
													elm$html$Html$text('This encodes the sprite data to a JSON string and sets it to the data attribute value of an HTML element.'),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													elm$html$Html$text('On the Javascript side, we use PixiJS to read from that data attribute and draw to its own canvas.')
												]);
										case 7:
											return _List_fromArray(
												[
													elm$html$Html$text('This encodes the sprite data to a JSON value and sets it to the data property value of an HTML element.'),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													elm$html$Html$text('On the Javascript side, we use PixiJS to read from that data property and draw to its own canvas.')
												]);
										case 8:
											return _List_fromArray(
												[
													elm$html$Html$text('This encodes the sprite data to a JSON string and sends it through a port.'),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													elm$html$Html$text('On the Javascript side, we listen to this port and use PixiJS to read the sprite data and draw to its own canvas.'),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													A2(elm$html$Html$br, _List_Nil, _List_Nil),
													elm$html$Html$text('This is fastest by a long shot!')
												]);
										case 2:
											return _List_fromArray(
												[
													elm$html$Html$text('This renders nothing! But it still calculates the positions of the sprites. It\'s just used as a max baseline.')
												]);
										case 9:
											return _List_fromArray(
												[
													elm$html$Html$text('This just uses '),
													author$project$Main$code('elm-explorations/webgl'),
													elm$html$Html$text('. It\'s fast, but can be difficult to get up and started. There may be a way to make this much faster with sprite batching, but I\'m not sure if that\'s possible at the moment.')
												]);
										default:
											return _List_fromArray(
												[
													elm$html$Html$text('This uses '),
													author$project$Main$code('joakin/elm-canvas'),
													elm$html$Html$text('. Uses the 2d canvas via a custom element passing encoded Json to it.')
												]);
									}
								}());
						}
					}()
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'margin', '10px 0')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						'Total sprites: ' + elm$core$String$fromInt(
							elm$core$List$length(model.d)))
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'margin', '10px 0')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$input,
						_List_fromArray(
							[
								elm$html$Html$Attributes$type_('checkbox'),
								A2(elm$html$Html$Attributes$style, 'top', '-2px'),
								A2(elm$html$Html$Attributes$style, 'position', 'relative'),
								A2(elm$html$Html$Attributes$style, 'margin-right', '5px'),
								elm$html$Html$Attributes$id('lockSpriteCountCheckbox'),
								elm$html$Html$Events$onCheck(author$project$Main$CheckLockSpriteCount)
							]),
						_List_Nil),
						A2(
						elm$html$Html$label,
						_List_fromArray(
							[
								elm$html$Html$Attributes$for('lockSpriteCountCheckbox')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Lock to 100 sprites')
							]))
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'margin', '10px 0')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$input,
						_List_fromArray(
							[
								A2(elm$html$Html$Attributes$style, 'margin-right', '5px'),
								A2(elm$html$Html$Attributes$style, 'width', '40px'),
								elm$html$Html$Attributes$id('targetFps'),
								elm$html$Html$Attributes$type_('number'),
								elm$html$Html$Attributes$value(
								elm$core$String$fromInt(model.U)),
								elm$html$Html$Events$onInput(author$project$Main$ChangeTargetFps)
							]),
						_List_Nil),
						A2(
						elm$html$Html$label,
						_List_fromArray(
							[
								elm$html$Html$Attributes$for('targetFps')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Target FPS (55 is good for computer monitors, 25 for TVs)')
							]))
					])),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'margin', '10px 0')
					]),
				_List_fromArray(
					[
						elm$html$Html$text('Source code at '),
						A2(
						elm$html$Html$a,
						_List_fromArray(
							[
								elm$html$Html$Attributes$href('https://github.com/jamesgary/elm-sprite-benchmark'),
								elm$html$Html$Attributes$target('_blank')
							]),
						_List_fromArray(
							[
								elm$html$Html$text('github')
							])),
						elm$html$Html$text('.')
					]))
			]));
};
var elm$browser$Browser$element = _Browser_element;
var author$project$Main$main = elm$browser$Browser$element(
	{cH: author$project$Main$init, cT: author$project$Main$subscriptions, c0: author$project$Main$update, c2: author$project$Main$view});
_Platform_export({'Main':{'init':author$project$Main$main(
	A2(
		elm$json$Json$Decode$andThen,
		function (timestamp) {
			return elm$json$Json$Decode$succeed(
				{a0: timestamp});
		},
		A2(elm$json$Json$Decode$field, 'timestamp', elm$json$Json$Decode$float)))(0)}});}(this));