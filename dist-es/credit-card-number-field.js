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
import { jsx as o, jsxs as L } from "react/jsx-runtime";
import * as l from "react";
import { useForm as O, useFieldProps as U } from "./form-context.js";
import { useTheme as _ } from "./hooks.js";
import { getCreditCardNumberLength as b, isAmericanExpress as A, isVisa as x, isMasterCard as I, isValidCreditCardNumber as P } from "./utils/credit-card.js";
import { TextFieldBaseAutosuggest as $ } from "./text-field-base.js";
import V from "./generated/mistica-icons/icon-credit-card-visa-regular.js";
import q from "./icons/icon-visa.js";
import G from "./icons/icon-mastercard.js";
import H from "./icons/icon-amex.js";
import { useRifm as J } from "rifm";
import { createChangeEvent as K } from "./utils/dom.js";
import { combineRefs as Q } from "./utils/common.js";
import { flip as W, variants as X, flipFront as Y, flipBack as Z } from "./credit-card-number-field.css-mistica.js";
import { vars as v } from "./skins/skin-contract.css-mistica.js";
import { iconSize as p } from "./icon-button.css-mistica.js";
import { formCreditCardNumberError as rr } from "./text-tokens.js";
const er = (r)=>{
    var i;
    const n = String(r !== null && r !== void 0 ? r : "").replace(/[^\d]/g, "");
    var _ref;
    return (_ref = (i = n.match(/.{1,4}/g)) == null ? void 0 : i.join(" ")) !== null && _ref !== void 0 ? _ref : n;
}, tr = (_param)=>{
    var { inputRef: r, value: n, defaultValue: i, onChange: e } = _param, c = _object_without_properties(_param, [
        "inputRef",
        "value",
        "defaultValue",
        "onChange"
    ]);
    const [N, m] = l.useState(i !== null && i !== void 0 ? i : ""), f = l.useRef(null), u = typeof n < "u", h = u ? n : N, T = l.useCallback((d)=>{
        u || m(d), f.current && (e == null || e(K(f.current, d)));
    }, [
        u,
        e
    ]), a = J({
        format: er,
        value: h,
        onChange: T,
        accept: /[\d]+/g
    });
    return /* @__PURE__ */ o("input", _object_spread_props(_object_spread({}, c), {
        type: "text",
        inputMode: "decimal",
        maxLength: b(a.value) + 3,
        onChange: a.onChange,
        value: a.value,
        ref: Q(r, f)
    }));
}, ir = (r)=>x(r) ? /* @__PURE__ */ o(q, {
        size: p.default
    }) : I(r) ? /* @__PURE__ */ o(G, {
        size: p.default
    }) : A(r) ? /* @__PURE__ */ o(H, {
        size: p.default
    }) : null, nr = {
    showBackface: !1,
    animationTarget: /* @__PURE__ */ o(V, {
        size: p.default
    }),
    isAnimating: !1
}, or = (r, param)=>{
    let { type: n, value: i } = param;
    if (n === "INPUT") {
        const e = ir(i);
        if (e && !r.showBackface) return {
            animationTarget: e,
            showBackface: !0,
            isAnimating: !0
        };
        if (!x(i) && !I(i) && !A(i) && r.showBackface) return {
            animationTarget: r.animationTarget,
            showBackface: !1,
            isAnimating: !0
        };
        if (e && r.showBackface) return _object_spread_props(_object_spread({}, r), {
            animationTarget: e
        });
    }
    return n === "TRANSITION_END" ? _object_spread_props(_object_spread({}, r), {
        isAnimating: !1
    }) : r;
}, sr = (param)=>{
    let { value: r } = param;
    const [{ showBackface: n, animationTarget: i, isAnimating: e }, c] = l.useReducer(or, nr);
    return l.useEffect(()=>{
        c({
            type: "INPUT",
            value: r
        });
    }, [
        r
    ]), /* @__PURE__ */ o("div", {
        className: W,
        children: /* @__PURE__ */ L("div", {
            className: X[n ? "backface" : "default"],
            onTransitionEnd: ()=>e && c({
                    type: "TRANSITION_END"
                }),
            children: [
                /* @__PURE__ */ o("div", {
                    className: Y,
                    children: /* @__PURE__ */ o(V, {
                        size: p.default,
                        color: v.colors.neutralMedium
                    })
                }),
                /* @__PURE__ */ o("div", {
                    className: Z,
                    children: i
                })
            ]
        })
    });
}, ar = (_param)=>{
    var { disabled: r, error: n, helperText: i, name: e, label: c, optional: N, validate: m, validateOnBlurInsideForm: f, onChange: u, onChangeValue: h, onBlur: T, acceptedCards: a = {
        americanExpress: !0,
        visa: !0,
        masterCard: !0
    }, value: d, autoComplete: w = "cc-number", defaultValue: F, dataAttributes: R } = _param, z = _object_without_properties(_param, [
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
        "acceptedCards",
        "value",
        "autoComplete",
        "defaultValue",
        "dataAttributes"
    ]);
    const { texts: S, t: j } = _(), { jumpToNext: y, rawValues: M, setFormError: D } = O(), g = (t, C)=>{
        const s = S.formCreditCardNumberError || j(rr);
        return A(t) && !a.americanExpress || x(t) && !a.visa || I(t) && !a.masterCard || !P(t) || b(t) !== (t == null ? void 0 : t.length) ? s : m == null ? void 0 : m(t, C);
    }, E = (t)=>t.replace(/\s/g, ""), k = U({
        name: e,
        label: c,
        value: d,
        defaultValue: F,
        processValue: E,
        helperText: i,
        optional: N,
        error: n,
        disabled: r,
        onBlur: T,
        validate: g,
        validateOnBlurInsideForm: f,
        onChange: u,
        onChangeValue: h
    });
    var _ref;
    return /* @__PURE__ */ o($, _object_spread_props(_object_spread({}, z, k), {
        onChange: (t)=>{
            k.onChange(t);
            const C = t.currentTarget.value, s = E(C);
            if (s.length >= b(s)) {
                const B = g == null ? void 0 : g(s, C);
                B ? D({
                    name: e,
                    error: B
                }) : y(e);
            }
        },
        inputComponent: tr,
        autoComplete: w,
        endIcon: /* @__PURE__ */ o(sr, {
            value: (_ref = d !== null && d !== void 0 ? d : M[e]) !== null && _ref !== void 0 ? _ref : ""
        }),
        dataAttributes: _object_spread({
            "component-name": "CreditCardNumberField",
            testid: "CreditCardNumberField"
        }, R)
    }));
}, Er = ar;
export { Er as default };
