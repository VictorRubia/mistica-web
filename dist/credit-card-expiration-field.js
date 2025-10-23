"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return J;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _formcontext = require("./form-context.js");
const _hooks = require("./hooks.js");
const _textfieldbase = require("./text-field-base.js");
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
const N = (_param)=>{
    var { inputRef: m, defaultValue: s, value: l } = _param, c = _object_without_properties(_param, [
        "inputRef",
        "defaultValue",
        "value"
    ]);
    const { texts: f, t: g } = (0, _hooks.useTheme)(), i = _react.useRef(""), u = (r)=>{
        if (r.length === 2 && i.current === "Backspace") return r[0];
        let e = "";
        return [
            ...r
        ].forEach((C)=>{
            e = (e + C).replace(/[^0-9]/g, "").replace(/^([2-9])$/g, "0$1").replace(/^(1{1})([3-9]{1})$/g, "0$1/$2").replace(/^0{1,}/g, "0").replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
        }), e.length === 2 ? e + "/" : e;
    }, x = (r)=>{
        i.current = r.key;
    };
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("input", _object_spread_props(_object_spread({}, c), {
        placeholder: f.expirationDatePlaceholder || g(_texttokens.expirationDatePlaceholder),
        type: "text",
        inputMode: "decimal",
        maxLength: "5",
        onKeyDown: x,
        onInput: (r)=>{
            const e = u(r.currentTarget.value);
            r.currentTarget.value = e;
        },
        value: l === void 0 ? void 0 : u(l),
        defaultValue: s === void 0 ? void 0 : u(s),
        ref: m
    }));
}, L = (_param)=>{
    var { disabled: m, error: s, helperText: l, name: c, label: f, optional: g, validate: i, validateOnBlurInsideForm: u, onChange: x, onChangeValue: r, onBlur: e, value: C, autoComplete: I = "cc-exp", defaultValue: M, dataAttributes: Y } = _param, k = _object_without_properties(_param, [
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
        "autoComplete",
        "defaultValue",
        "dataAttributes"
    ]);
    const { texts: h, t: E } = (0, _hooks.useTheme)(), { setFormError: v, jumpToNext: R } = (0, _formcontext.useForm)(), p = (t, n)=>{
        const { month: a, year: o } = t;
        if (!a || !o) return h.formCreditCardExpirationError || E(_texttokens.formCreditCardExpirationError);
        const d = /* @__PURE__ */ new Date(), V = d.getMonth() + 1, $ = d.getFullYear();
        return o < $ ? h.formCreditCardExpirationError || E(_texttokens.formCreditCardExpirationError) : o === $ && a < V ? h.formCreditCardExpirationError || E(_texttokens.formCreditCardExpirationError) : i == null ? void 0 : i(t, n);
    }, y = (t)=>{
        const [n, a] = String(t).split("/").map((d)=>parseInt(d)), o = Number.isInteger(a) ? 2e3 + a : null;
        return {
            month: n || null,
            year: o,
            raw: t
        };
    }, D = (0, _formcontext.useFieldProps)({
        name: c,
        label: f,
        value: C,
        defaultValue: M,
        processValue: y,
        helperText: l,
        optional: g,
        error: s,
        disabled: m,
        onBlur: e,
        validate: p,
        validateOnBlurInsideForm: u,
        onChange: x,
        onChangeValue: r
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldbase.TextFieldBaseAutosuggest, _object_spread_props(_object_spread({}, k, D), {
        onChange: (t)=>{
            D.onChange(t);
            const n = t.currentTarget.value, a = y(n);
            if (n.length === 5) {
                const o = p == null ? void 0 : p(a, n);
                o ? v({
                    name: c,
                    error: o
                }) : R(c);
            }
        },
        autoComplete: I,
        inputComponent: N,
        dataAttributes: _object_spread({
            "component-name": "CreditCardExpirationField",
            testid: "CreditCardExpirationField"
        }, Y)
    }));
}, J = L;
