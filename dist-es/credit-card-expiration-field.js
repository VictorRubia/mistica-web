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
import { jsx as w } from "react/jsx-runtime";
import * as b from "react";
import { useForm as j, useFieldProps as A } from "./form-context.js";
import { useTheme as T } from "./hooks.js";
import { TextFieldBaseAutosuggest as B } from "./text-field-base.js";
import { expirationDatePlaceholder as K, formCreditCardExpirationError as F } from "./text-tokens.js";
const N = (_param)=>{
    var { inputRef: m, defaultValue: s, value: l } = _param, c = _object_without_properties(_param, [
        "inputRef",
        "defaultValue",
        "value"
    ]);
    const { texts: f, t: g } = T(), i = b.useRef(""), u = (r)=>{
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
    return /* @__PURE__ */ w("input", _object_spread_props(_object_spread({}, c), {
        placeholder: f.expirationDatePlaceholder || g(K),
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
    const { texts: h, t: E } = T(), { setFormError: v, jumpToNext: R } = j(), p = (t, n)=>{
        const { month: a, year: o } = t;
        if (!a || !o) return h.formCreditCardExpirationError || E(F);
        const d = /* @__PURE__ */ new Date(), V = d.getMonth() + 1, $ = d.getFullYear();
        return o < $ ? h.formCreditCardExpirationError || E(F) : o === $ && a < V ? h.formCreditCardExpirationError || E(F) : i == null ? void 0 : i(t, n);
    }, y = (t)=>{
        const [n, a] = String(t).split("/").map((d)=>parseInt(d)), o = Number.isInteger(a) ? 2e3 + a : null;
        return {
            month: n || null,
            year: o,
            raw: t
        };
    }, D = A({
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
    return /* @__PURE__ */ w(B, _object_spread_props(_object_spread({}, k, D), {
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
export { J as default };
