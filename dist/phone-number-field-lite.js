"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return A;
    },
    formatPhoneLite: function() {
        return G;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _rifm = require("rifm");
const _formcontext = require("./form-context.js");
const _textfieldbase = require("./text-field-base.js");
const _hooks = require("./hooks.js");
const _dom = require("./utils/dom.js");
const _common = require("./utils/common.js");
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
const O = {
    "+34": "ES",
    "+55": "BR",
    "+49": "DE",
    "+44": "GB"
}, h = Object.fromEntries(Object.entries(O).map((param)=>{
    let [r, s] = param;
    return [
        s,
        r
    ];
})), C = (r)=>r.trim().replace(/[^\d\+]/g, ""), d = (r, s)=>{
    if (r.startsWith("+")) return r;
    switch(s){
        case "ES":
            return `${h[s]} ${r}`;
        case "BR":
            return `${h[s]} ${r.replace(/[\(\)]/g, "")}`;
        case "DE":
            return `${h[s]} ${r.replace(/^0/, "")}`;
        case "GB":
            return `${h[s]} ${r.replace(/^0/, "")}`;
        default:
            return r;
    }
}, G = (r, s)=>{
    const o = C(s), i = o.startsWith("+");
    let e = o.replace(/\D/g, ""), n = "", l = r;
    if (i) if (n = Object.keys(O).find((t)=>o.startsWith(t)) || "", n) e = o.slice(n.length), l = O[n];
    else return "+" + e;
    if (l === "ES") {
        if (e.length <= 9) return `${n} ${e.slice(0, 3)} ${e.slice(3, 5)} ${e.slice(5, 7)} ${e.slice(7)}`.trim();
    } else if (l === "BR") {
        let t;
        if (e.length === 11 ? t = `(${e.slice(0, 2)}) ${e.slice(2, 7)}-${e.slice(7)}`.replace(/\D+$/, "") : e.length > 2 && e.length <= 11 && e[2] <= "5" && (t = `(${e.slice(0, 2)}) ${e.slice(2, 6)}-${e.slice(6)}`.replace(/\D+$/, "")), t) return i ? d(t, l) : t;
    } else if (l === "DE") {
        const t = i ? "0" + e : e;
        if (t.length >= 4 && t.match(/^(015|016|017)/)) {
            let c;
            return t.length <= 12 && t.startsWith("015") ? c = `${t.slice(0, 5)} ${t.slice(5)}`.trim() : c = `${n} ${t.slice(0, 4)} ${t.slice(4)}`.trim(), i ? d(c, l) : c;
        }
    } else if (l === "GB") {
        const t = i ? "0" + e : e;
        if (t.length <= 11 && t.startsWith("07")) {
            const c = `${t.slice(0, 5)} ${t.slice(5)}`.trim();
            return i ? d(c, l) : c;
        }
    }
    return i ? `${n} ${e}` : e;
}, S = (_param)=>{
    var { inputRef: r, value: s, defaultValue: o, onChange: i, prefix: e, format: n } = _param, l = _object_without_properties(_param, [
        "inputRef",
        "value",
        "defaultValue",
        "onChange",
        "prefix",
        "format"
    ]);
    const [t, c] = _react.useState(o || ""), f = _react.useRef(null), { i18n: { phoneNumberFormattingRegionCode: m } } = (0, _hooks.useTheme)(), u = typeof s < "u", g = u ? s : t, E = _react.useCallback((a)=>{
        u || c(a), f.current && (i == null || i((0, _dom.createChangeEvent)(f.current, a)));
    }, [
        u,
        i
    ]), R = _react.useCallback((a)=>n ? n(a) : G(m, a), [
        n,
        m
    ]), p = (0, _rifm.useRifm)({
        format: R,
        value: g,
        accept: /[\d\+]+/g,
        onChange: E
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("input", _object_spread_props(_object_spread({}, l), {
        value: p.value,
        onChange: p.onChange,
        type: "tel",
        ref: (0, _common.combineRefs)(r, f)
    }));
}, V = (_param)=>{
    var { disabled: r, error: s, helperText: o, name: i, label: e, optional: n, validate: l, validateOnBlurInsideForm: t, onChange: c, onChangeValue: f, onBlur: m, value: u, defaultValue: g, dataAttributes: E, e164: R } = _param, p = _object_without_properties(_param, [
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
        "dataAttributes",
        "e164"
    ]);
    const { i18n: { phoneNumberFormattingRegionCode: a } } = (0, _hooks.useTheme)(), B = (0, _formcontext.useFieldProps)({
        name: i,
        label: e,
        value: u,
        defaultValue: g,
        processValue: (D)=>C(R ? d(D, a) : D),
        helperText: o,
        optional: n,
        error: s,
        disabled: r,
        onBlur: m,
        validate: l,
        validateOnBlurInsideForm: t,
        onChange: c,
        onChangeValue: f
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldbase.TextFieldBaseAutosuggest, _object_spread_props(_object_spread({}, p, B), {
        type: "phone",
        inputProps: {
            prefix: p.prefix
        },
        inputComponent: S,
        dataAttributes: _object_spread({
            "component-name": "PhoneNumberFieldLite"
        }, E)
    }));
}, A = V;
