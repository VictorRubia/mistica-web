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
import { jsx as o, Fragment as k, jsxs as d } from "react/jsx-runtime";
import * as D from "react";
import { useTheme as V } from "./hooks.js";
import N from "./icons/icon-cvv-visa-mc.js";
import q from "./icons/icon-cvv-amex.js";
import G from "./popover.js";
import J from "./generated/mistica-icons/icon-information-regular.js";
import { useForm as K, useFieldProps as P } from "./form-context.js";
import { TextFieldBaseAutosuggest as Q } from "./text-field-base.js";
import { IntegerInput as U } from "./integer-field.js";
import I from "./inline.js";
import W from "./stack.js";
import X from "./box.js";
import Y from "./divider.js";
import F from "./text.js";
import { vars as Z } from "./skins/skin-contract.css-mistica.js";
import { pxToRem as _ } from "./utils/css.js";
import { iconButtonSize as m } from "./text-field-base.css-mistica.js";
import L from "./touchable.js";
import { formCreditCardCvvTooltipVisaMcButtonClose as oo, formCreditCardCvvTooltipVisaMcButtonOpen as ro, formCreditCardCvvTooltipVisaMc as to, formCreditCardCvvTooltipAmex as eo, formCreditCardCvvError as io } from "./text-tokens.js";
const no = (param)=>{
    let { acceptedCards: t } = param;
    const { texts: i, t: n } = V();
    return /* @__PURE__ */ o(k, {
        children: /* @__PURE__ */ o(X, {
            padding: 8,
            children: /* @__PURE__ */ d(W, {
                space: 8,
                children: [
                    /* @__PURE__ */ d(I, {
                        space: 16,
                        alignItems: "center",
                        children: [
                            /* @__PURE__ */ o(N, {
                                size: 48,
                                role: "img"
                            }),
                            /* @__PURE__ */ o(F, {
                                children: i.formCreditCardCvvTooltipVisaMc || n(to)
                            })
                        ]
                    }),
                    /* @__PURE__ */ o(Y, {}),
                    (t == null ? void 0 : t.americanExpress) && /* @__PURE__ */ d(I, {
                        space: 16,
                        alignItems: "center",
                        children: [
                            /* @__PURE__ */ o(q, {
                                size: 48,
                                role: "img"
                            }),
                            /* @__PURE__ */ o(F, {
                                children: i.formCreditCardCvvTooltipAmex || n(eo)
                            })
                        ]
                    })
                ]
            })
        })
    });
}, so = (_param)=>{
    var { disabled: t, error: i, helperText: n, name: l, label: M, optional: B, validate: c, validateOnBlurInsideForm: z, onChange: A, onChangeValue: E, onBlur: $, acceptedCards: j = {
        americanExpress: !0,
        visa: !0,
        masterCard: !0
    }, maxLength: p = 4, value: y, autoComplete: O = "cc-csc", defaultValue: S, dataAttributes: b } = _param, w = _object_without_properties(_param, [
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
        "maxLength",
        "value",
        "autoComplete",
        "defaultValue",
        "dataAttributes"
    ]);
    const { texts: a, t: C } = V(), { setFormError: R, jumpToNext: H } = K(), [f, v] = D.useState(!1), u = (r, s)=>r.length !== p ? a.formCreditCardCvvError || C(io) : c == null ? void 0 : c(r, s), h = (r)=>r, g = P({
        name: l,
        label: M,
        value: y,
        defaultValue: S,
        processValue: h,
        helperText: n,
        optional: B,
        error: i,
        disabled: t,
        onBlur: $,
        validate: u,
        validateOnBlurInsideForm: z,
        onChange: A,
        onChangeValue: E
    }), e = _(16);
    return /* @__PURE__ */ o(Q, _object_spread_props(_object_spread({}, w, g), {
        maxLength: p,
        onChange: (r)=>{
            g.onChange(r);
            const s = r.currentTarget.value, T = h(s);
            if (T.length === p) {
                const x = u(T, s);
                x ? R({
                    name: l,
                    error: x
                }) : H(l);
            }
        },
        endIcon: /* @__PURE__ */ o(G, {
            position: "top",
            open: f,
            children: /* @__PURE__ */ o(no, {
                acceptedCards: j
            }),
            onClose: ()=>v(!1),
            target: /* @__PURE__ */ o("div", {
                style: {
                    width: e,
                    height: e
                },
                children: /* @__PURE__ */ o(L, {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: m,
                        height: m,
                        position: "relative",
                        left: `calc(-1 * (${m} - ${e}) / 2)`,
                        top: `calc(-1 * (${m} - ${e}) / 2)`
                    },
                    onPress: ()=>v(!f),
                    "aria-label": f ? a.formCreditCardCvvTooltipVisaMcButtonClose || C(oo) : a.formCreditCardCvvTooltipVisaMcButtonOpen || C(ro),
                    children: /* @__PURE__ */ o(J, {
                        size: e,
                        color: Z.colors.neutralMedium
                    })
                })
            })
        }),
        autoComplete: O,
        inputComponent: U,
        dataAttributes: _object_spread({
            "component-name": "CvvField",
            testid: "CvvField"
        }, b)
    }));
}, Ao = so;
export { Ao as default };
