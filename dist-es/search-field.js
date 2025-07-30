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
import { jsx as a } from "react/jsx-runtime";
import * as r from "react";
import { useFieldProps as j } from "./form-context.js";
import { TextFieldBaseAutosuggest as V, FieldEndIcon as $ } from "./text-field-base.js";
import q from "./generated/mistica-icons/icon-search-regular.js";
import w from "./generated/mistica-icons/icon-close-regular.js";
import { useTheme as D } from "./hooks.js";
import { createChangeEvent as G } from "./utils/dom.js";
import { combineRefs as H } from "./utils/common.js";
import { iconSize as J } from "./icon-button.css-mistica.js";
import { formSearchClear as K } from "./text-tokens.js";
const L = /*#__PURE__*/ r.forwardRef((_param, P)=>{
    var { disabled: m, error: d, helperText: u, name: p, label: n, optional: S, validate: F, validateOnBlurInsideForm: I, onChange: e, onChangeValue: t, onBlur: R, value: l, defaultValue: b, withStartIcon: h = !0, dataAttributes: v } = _param, x = _object_without_properties(_param, [
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
        "withStartIcon",
        "dataAttributes"
    ]);
    const { texts: y, t: k } = D(), o = r.useRef(), [z, A] = r.useState(b || ""), s = typeof l < "u", f = s ? l : z, i = r.useCallback((c, T)=>{
        s || A(c), t == null || t(c, T);
    }, [
        s,
        t
    ]), B = r.useCallback(()=>{
        i("", ""), o.current && (e == null || e(G(o.current, "")), o.current.focus());
    }, [
        i,
        e
    ]), E = j({
        name: p,
        label: n,
        value: f,
        defaultValue: void 0,
        processValue: (c)=>c,
        helperText: u,
        optional: S,
        error: d,
        disabled: m,
        onBlur: R,
        validate: F,
        validateOnBlurInsideForm: I,
        onChange: e,
        onChangeValue: i
    });
    return /* @__PURE__ */ a(V, _object_spread_props(_object_spread({
        ref: H(o, P),
        startIcon: h ? /* @__PURE__ */ a(q, {
            size: J.default
        }) : void 0,
        endIcon: f ? /* @__PURE__ */ a($, {
            Icon: w,
            "aria-label": y.formSearchClear || k(K),
            onPress: B
        }) : void 0
    }, x, E), {
        type: "search",
        dataAttributes: _object_spread({
            "component-name": "SearchField",
            testid: "SearchField"
        }, v)
    }));
}), C = L;
export { C as default };
