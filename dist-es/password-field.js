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
import { jsx as d } from "react/jsx-runtime";
import * as i from "react";
import { useFieldProps as E } from "./form-context.js";
import { TextFieldBaseAutosuggest as S, FieldEndIcon as k } from "./text-field-base.js";
import { useTheme as T } from "./hooks.js";
import j from "./generated/mistica-icons/icon-eye-off-regular.js";
import q from "./generated/mistica-icons/icon-eye-regular.js";
import { disablePasswordVisibility as B, enablePasswordVisibility as C } from "./text-tokens.js";
const O = (param)=>{
    let { isVisible: n, setVisibility: a, focus: c } = param;
    const { texts: t, t: s } = T();
    return /* @__PURE__ */ d(k, {
        checkedProps: {
            Icon: j,
            "aria-label": t.disablePasswordVisibility || s(B)
        },
        uncheckedProps: {
            Icon: q,
            "aria-label": t.enablePasswordVisibility || s(C)
        },
        checked: n,
        onChange: (l)=>{
            a(l), c();
        }
    });
}, $ = (_param)=>{
    var { disabled: n, error: a, helperText: c, name: t, label: s, optional: l, validate: m, validateOnBlurInsideForm: p, onChange: b, onChangeValue: P, onBlur: w, value: F, autoComplete: R = "current-password", defaultValue: y, dataAttributes: I } = _param, V = _object_without_properties(_param, [
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
    const [u, g] = i.useState(!1), o = i.useRef(0), r = i.useRef(null), h = (e)=>e, x = ()=>{
        const e = r.current;
        e && (e.selectionStart !== null && (o.current = e.selectionStart), e.focus());
    };
    i.useEffect(()=>{
        const e = r.current;
        if (e) {
            const A = requestAnimationFrame(()=>{
                e.selectionStart = o.current, e.selectionEnd = o.current;
            });
            return ()=>{
                cancelAnimationFrame(A);
            };
        }
    }, [
        u,
        o,
        r
    ]);
    const f = E({
        name: t,
        label: s,
        value: F,
        defaultValue: y,
        processValue: h,
        helperText: c,
        optional: l,
        error: a,
        disabled: n,
        onBlur: w,
        validate: m,
        validateOnBlurInsideForm: p,
        onChange: b,
        onChangeValue: P
    });
    return /* @__PURE__ */ d(S, _object_spread_props(_object_spread({}, V, f), {
        type: u ? "text" : "password",
        inputRef: (e)=>{
            f.inputRef(e), r.current = e;
        },
        autoComplete: R,
        endIcon: /* @__PURE__ */ d(O, {
            focus: x,
            isVisible: u,
            setVisibility: g
        }),
        dataAttributes: _object_spread({
            "component-name": "PasswordField",
            testid: "PasswordField"
        }, I)
    }));
}, L = $;
export { L as default };
