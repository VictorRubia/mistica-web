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
import { jsx as N } from "react/jsx-runtime";
import * as a from "react";
import { useRifm as T } from "rifm";
import { getRegionCodeForCountryCode as A, formatToE164 as k, parse as B, formatAsYouType as E } from "@telefonica/libphonenumber";
import { useFieldProps as S } from "./form-context.js";
import { TextFieldBaseAutosuggest as Z } from "./text-field-base.js";
import { useTheme as x } from "./hooks.js";
import { createChangeEvent as $ } from "./utils/dom.js";
import { combineRefs as j } from "./utils/common.js";
const y = (r, n)=>E(n.replace(/[^\d+*#]/g, ""), r), I = (r)=>!!r.match(/^\+\d+$/), W = (_param)=>{
    var { inputRef: r, value: n, defaultValue: p, onChange: s, prefix: t } = _param, f = _object_without_properties(_param, [
        "inputRef",
        "value",
        "defaultValue",
        "onChange",
        "prefix"
    ]);
    const [d, g] = a.useState(p !== null && p !== void 0 ? p : ""), l = a.useRef(null), { i18n: h } = x(), i = h.phoneNumberFormattingRegionCode, u = typeof n < "u", P = u ? n : d, C = a.useCallback((e)=>{
        u || g(e), l.current && (s == null || s($(l.current, e)));
    }, [
        u,
        s
    ]), b = a.useCallback(// The final replacement of "-" to "@" is to workaround a bug in rifm library
    // otherwise the cursor position is incorrectly positioned
    // also note the "@" is replaced back to "-" in `replace` param in `useRifm`
    (e)=>{
        let o = "";
        if (t && I(t)) {
            const F = t + e;
            o = y(i, F), o.startsWith(t) ? o = o.slice(t.length).trim() : o = y(i, e);
        } else o = y(i, e);
        return o.replace(/-/g, "@");
    }, [
        i,
        t
    ]), c = T({
        format: b,
        value: P,
        onChange: C,
        accept: /[\d\-+#*]+/g,
        replace: (e)=>e.replace(/@/g, "-")
    });
    return /* @__PURE__ */ N("input", _object_spread_props(_object_spread({}, f), {
        value: c.value,
        onChange: c.onChange,
        type: "tel",
        ref: j(r, l)
    }));
}, Y = (_param)=>{
    var { disabled: r, error: n, helperText: p, name: s, label: t, optional: f, validate: d, validateOnBlurInsideForm: g, onChange: l, onChangeValue: h, onBlur: i, value: u, defaultValue: P, e164: C, dataAttributes: b } = _param, c = _object_without_properties(_param, [
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
        "e164",
        "dataAttributes"
    ]);
    const { i18n: e } = x(), F = S({
        name: s,
        label: t,
        value: u,
        defaultValue: P,
        processValue: (R)=>{
            if (C) try {
                var _c_prefix;
                const V = ((_c_prefix = c.prefix) !== null && _c_prefix !== void 0 ? _c_prefix : "").replace(/[^\d]/g, "");
                let m = A(V);
                return (!m || m === "ZZ") && (m = e.phoneNumberFormattingRegionCode), k(B(R, m));
            } catch (e) {
                return "";
            }
            else return R.replace(/[^\d]/g, "");
        },
        helperText: p,
        optional: f,
        error: n,
        disabled: r,
        onBlur: i,
        validate: d,
        validateOnBlurInsideForm: g,
        onChange: l,
        onChangeValue: h
    });
    return /* @__PURE__ */ N(Z, _object_spread_props(_object_spread({}, c, F), {
        type: "phone",
        inputProps: {
            prefix: c.prefix
        },
        inputComponent: W,
        dataAttributes: _object_spread({
            "component-name": "PhoneNumberField",
            testid: "PhoneNumberField"
        }, b)
    }));
}, L = Y;
export { L as default };
