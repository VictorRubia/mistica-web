"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return K;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _rifm = require("rifm");
const _formcontext = require("./form-context.js");
const _textfieldbase = require("./text-field-base.js");
const _dom = require("./utils/dom.js");
const _common = require("./utils/common.js");
const _hooks = require("./hooks.js");
const _texttokens = require("./text-tokens.js");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const A = {
    ES: 24,
    GB: 22,
    DE: 22,
    BR: 29
}, R = 32, S = (t, e)=>{
    let n = 0;
    for(let r = 0; r < t.length; r++)n = (n * 10 + Number(t[r])) % e;
    return n;
}, I = (t)=>/^[A-Z]{2}$/.test(t), T = (t)=>/^\d{2}$/.test(t), z = (t)=>{
    let e = t.substr(4) + t.substr(0, 4);
    const n = "A".charCodeAt(0);
    return e = Array.from(e).map((r)=>{
        if (Number.isNaN(Number(r))) {
            const s = r.charCodeAt(0);
            return String(10 + s - n);
        }
        return r;
    }).join(""), S(e, 97) === 1;
}, Z = (t)=>{
    const e = t.substr(0, 2), n = t.substr(2, 2);
    if (!I(e) || !T(n)) return !1;
    const r = A[e];
    return !(r && r !== t.length || !z(t));
}, j = (t)=>{
    var n;
    const e = t.replace(/[^\dA-Za-z]/g, "");
    var _ref;
    return (_ref = (n = e.match(/.{1,4}/g)) == null ? void 0 : n.join(" ")) !== null && _ref !== void 0 ? _ref : e;
}, D = (t)=>{
    const e = t.substr(0, 2);
    let n = R;
    if (e && I(e)) {
        const s = A[e];
        s && (n = s);
    }
    const r = Math.ceil(n / 4) - 1;
    return n + r;
}, M = (_param)=>{
    var { inputRef: t, value: e, defaultValue: n, onChange: r } = _param, s = _object_without_properties(_param, [
        "inputRef",
        "value",
        "defaultValue",
        "onChange"
    ]);
    const [m, u] = _react.useState(n !== null && n !== void 0 ? n : ""), c = _react.useRef(null), i = typeof e < "u", d = i ? e : m, g = _react.useCallback((o)=>{
        i || u(o), c.current && (r == null || r((0, _dom.createChangeEvent)(c.current, o)));
    }, [
        i,
        r
    ]), a = (0, _rifm.useRifm)({
        format: j,
        value: d,
        onChange: g,
        replace: (o)=>o.toUpperCase(),
        accept: /[\dA-Za-z]+/g
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("input", _object_spread_props(_object_spread({}, s), {
        maxLength: D(a.value),
        value: a.value,
        onChange: (o)=>{
            var f;
            const b = o.target.value, l = a.value;
            return b.length - l.length > 1 && ((f = o.nativeEvent) == null ? void 0 : f.inputType) === "insertText" && (o.target.value = l), a.onChange(o);
        },
        type: "text",
        ref: (0, _common.combineRefs)(t, c)
    }));
}, P = (_param)=>{
    var { disabled: t, error: e, helperText: n, name: r, label: s, optional: m, validate: u, validateOnBlurInsideForm: c, onChange: i, onChangeValue: d, onBlur: g, value: a, defaultValue: o, dataAttributes: b } = _param, l = _object_without_properties(_param, [
        "disabled",
        "error",
        "helperText",
        "name",
        "label",
        "optional",
        "validate",
        "validateOnBlurInsideForm",
        "onChange",
        "onChangeValue",
        "onBlur",
        "value",
        "defaultValue",
        "dataAttributes"
    ]);
    const { texts: f, t: v } = (0, _hooks.useTheme)(), y = (0, _formcontext.useFieldProps)({
        name: r,
        label: s,
        value: a,
        defaultValue: o,
        processValue: (p)=>p.replace(/[^\dA-Za-z]/g, ""),
        helperText: n,
        optional: m,
        error: e,
        disabled: t,
        onBlur: g,
        validate: (p, x)=>Z(p !== null && p !== void 0 ? p : "") ? u == null ? void 0 : u(p, x) : f.formIbanError || v(_texttokens.formIbanError),
        validateOnBlurInsideForm: c,
        onChange: i,
        onChangeValue: d
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldbase.TextFieldBaseAutosuggest, _object_spread_props(_object_spread({}, l, y), {
        inputComponent: M,
        dataAttributes: _object_spread({
            "component-name": "IbanField",
            testid: "IbanField"
        }, b)
    }));
}, K = P;
