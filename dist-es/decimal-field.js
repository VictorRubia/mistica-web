"use client";
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
import { jsx as S } from "react/jsx-runtime";
import * as D from "react";
import { useFieldProps as F } from "./form-context.js";
import { useTheme as V } from "./hooks.js";
import { TextFieldBaseAutosuggest as x } from "./text-field-base.js";
import { createChangeEvent as P } from "./utils/dom.js";
import { useRifm as R } from "rifm";
import { combineRefs as b } from "./utils/common.js";
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
    const { i18n: u } = V(), m = v(u.locale), p = (n)=>String(n !== null && n !== void 0 ? n : "").replace(/[.,]/g, m), [f, d] = D.useState(i !== null && i !== void 0 ? i : ""), c = D.useRef(null), s = typeof t < "u", g = s ? t : f, h = D.useCallback((n)=>{
        s || d(n), c.current && (e == null || e(P(c.current, n)));
    }, [
        s,
        e
    ]), l = R({
        format: (n)=>j(n, r),
        replace: p,
        value: g,
        onChange: h,
        accept: /[\d.,]+/g
    });
    return /* @__PURE__ */ S("input", _object_spread_props(_object_spread({}, a), {
        type: "text",
        inputMode: "decimal",
        value: l.value,
        onChange: l.onChange,
        ref: b(o, c)
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
    const y = F({
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
    return /* @__PURE__ */ S(x, _object_spread_props(_object_spread({}, l, y), {
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
export { A as DecimalInput, _ as default };
