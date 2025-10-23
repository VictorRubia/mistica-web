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
import { jsx as T } from "react/jsx-runtime";
import { useFieldProps as V } from "./form-context.js";
import { useTheme as $ } from "./hooks.js";
import { TextFieldBaseAutosuggest as b } from "./text-field-base.js";
import { formEmailError as h } from "./text-tokens.js";
const j = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, y = (_param)=>{
    var { disabled: r, error: s, helperText: o, name: i, label: m, optional: l, validate: e, validateOnBlurInsideForm: a, onChange: n, onChangeValue: u, onBlur: c, value: d, autoComplete: f = "email", defaultValue: E, dataAttributes: p } = _param, F = _object_without_properties(_param, [
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
    const { texts: x, t: A } = $(), g = V({
        name: i,
        label: m,
        value: d,
        defaultValue: E,
        processValue: (t)=>t.trim(),
        helperText: o,
        optional: l,
        error: s,
        disabled: r,
        onBlur: c,
        validate: (t, M)=>j.test(t !== null && t !== void 0 ? t : "") ? e == null ? void 0 : e(t, M) : x.formEmailError || A(h),
        validateOnBlurInsideForm: a,
        onChange: n,
        onChangeValue: u
    });
    return /* @__PURE__ */ T(b, _object_spread_props(_object_spread({}, F, g), {
        type: "email",
        inputMode: "email",
        autoComplete: f,
        dataAttributes: _object_spread({
            "component-name": "EmailField",
            testid: "EmailField"
        }, p)
    }));
}, w = y;
export { w as default };
