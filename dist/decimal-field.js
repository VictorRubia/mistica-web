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
    DecimalInput: function() {
        return A;
    },
    default: function() {
        return _;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _formcontext = require("./form-context.js");
const _hooks = require("./hooks.js");
const _textfieldbase = require("./text-field-base.js");
const _dom = require("./utils/dom.js");
const _rifm = require("rifm");
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
const v = (o)=>{
    try {
        return 1.1.toLocaleString(o.replace("_", "-"))[1];
    } catch (e) {
        return ".";
    }
}, j = (o, t)=>{
    const i = String(o !== null && o !== void 0 ? o : "").replace(/[^.,\d]/g, ""), e = /[.,]/.exec(i), r = i.split(/[.,]/);
    return r.length === 0 ? "" : e && t > 0 ? r.shift() + e[0] + r.join("").slice(0, t) : r[0];
}, A = (_param)=>{
    var { inputRef: o, value: t, defaultValue: i, onChange: e, maxDecimals: r } = _param, a = _object_without_properties(_param, [
        "inputRef",
        "value",
        "defaultValue",
        "onChange",
        "maxDecimals"
    ]);
    const { i18n: u } = (0, _hooks.useTheme)(), m = v(u.locale), p = (n)=>String(n !== null && n !== void 0 ? n : "").replace(/[.,]/g, m), [f, d] = _react.useState(i !== null && i !== void 0 ? i : ""), c = _react.useRef(null), s = typeof t < "u", g = s ? t : f, h = _react.useCallback((n)=>{
        s || d(n), c.current && (e == null || e((0, _dom.createChangeEvent)(c.current, n)));
    }, [
        s,
        e
    ]), l = (0, _rifm.useRifm)({
        format: (n)=>j(n, r),
        replace: p,
        value: g,
        onChange: h,
        accept: /[\d.,]+/g
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("input", _object_spread_props(_object_spread({}, a), {
        type: "text",
        inputMode: "decimal",
        value: l.value,
        onChange: l.onChange,
        ref: (0, _common.combineRefs)(o, c)
    }));
}, B = (_param)=>{
    var { disabled: o, error: t, helperText: i, name: e, label: r, optional: a, validate: u, validateOnBlurInsideForm: m, onChange: p, onChangeValue: f, onBlur: d, value: c, defaultValue: s, maxDecimals: g = 1 / 0, dataAttributes: h } = _param, l = _object_without_properties(_param, [
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
        "maxDecimals",
        "dataAttributes"
    ]);
    const y = (0, _formcontext.useFieldProps)({
        name: e,
        label: r,
        value: c,
        defaultValue: s,
        processValue: (C)=>C.trim(),
        helperText: i,
        optional: a,
        error: t,
        disabled: o,
        onBlur: d,
        validate: u,
        validateOnBlurInsideForm: m,
        onChange: p,
        onChangeValue: f
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldbase.TextFieldBaseAutosuggest, _object_spread_props(_object_spread({}, l, y), {
        inputComponent: A,
        inputProps: {
            maxDecimals: g
        },
        dataAttributes: _object_spread({
            "component-name": "DecimalField",
            testid: "DecimalField"
        }, h)
    }));
}, _ = B;
