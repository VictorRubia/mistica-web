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
import { jsx as j } from "react/jsx-runtime";
import * as f from "react";
import { useFieldProps as k } from "./form-context.js";
import { TextFieldBaseAutosuggest as w } from "./text-field-base.js";
import { combineRefs as C } from "./utils/common.js";
import { createChangeEvent as H } from "./utils/dom.js";
import { useIsomorphicLayoutEffect as I } from "./hooks.js";
const K = (i, t, r, c)=>{
    I(()=>{
        i && t && r && t.length > r && c && c(H(i, t.slice(0, r)));
    }, [
        c,
        t,
        r,
        i
    ]);
}, M = /*#__PURE__*/ f.forwardRef((_param, b)=>{
    var { disabled: i, error: t, helperText: r, name: c, label: m, optional: a, validate: d, validateOnBlurInsideForm: p, onChangeValue: T, onChange: x, value: R, defaultValue: F, onBlur: n, onFocus: u, onPress: g, dataAttributes: v } = _param, s = _object_without_properties(_param, [
        "disabled",
        "error",
        "helperText",
        "name",
        "label",
        "optional",
        "validate",
        "validateOnBlurInsideForm",
        "onChangeValue",
        "onChange",
        "value",
        "defaultValue",
        "onBlur",
        "onFocus",
        "onPress",
        "dataAttributes"
    ]);
    const e = f.useRef(null), h = (o)=>o, y = (o)=>{
        s.multiline && e.current && (e.current.scrollTop = 0), n == null || n(o);
    }, A = (o)=>{
        s.multiline && setTimeout(()=>{
            if (e.current) {
                const E = e.current.value;
                e.current.value = "", e.current.value = E, e.current.scrollTop = e.current.scrollHeight;
            }
        }, 0), u == null || u(o);
    }, l = k({
        name: c,
        label: m,
        value: R,
        defaultValue: F,
        processValue: h,
        helperText: r,
        optional: a,
        error: t,
        disabled: i,
        onBlur: y,
        validate: d,
        validateOnBlurInsideForm: p,
        onChange: x,
        onChangeValue: T
    });
    return K(e.current, l.value, s.maxLength, l.onChange), /* @__PURE__ */ j(w, _object_spread_props(_object_spread({}, s, l), {
        onClick: g,
        inputRef: C(e, l.inputRef, b),
        onFocus: A,
        type: "text",
        dataAttributes: _object_spread({
            "component-name": "TextField",
            testid: "TextField"
        }, v)
    }));
}), J = M;
export { J as default };
