"use client";
import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { useForm as f } from "./form-context.js";
import { useTheme as n } from "./hooks.js";
import { getCvvLength as p } from "./utils/credit-card.js";
import s from "./double-field.js";
import c from "./stack.js";
import v from "./credit-card-expiration-field.js";
import b from "./credit-card-number-field.js";
import u from "./cvv-field.js";
import { formCreditCardNumberLabel as x, formCreditCardExpirationLabel as L, formCreditCardCvvLabel as h } from "./text-tokens.js";
const F = (param)=>{
    let { numberFieldName: o = "ccNum", expirationFieldName: a = "ccExp", cvvFieldName: d = "ccCvv", acceptedCards: i } = param;
    const { values: C } = f(), { texts: r, t: e } = n(), l = p(String(C[o]));
    return /* @__PURE__ */ m(c, {
        space: 16,
        children: [
            /* @__PURE__ */ t(b, {
                acceptedCards: i,
                name: o,
                label: r.formCreditCardNumberLabel || e(x)
            }),
            /* @__PURE__ */ m(s, {
                layout: "60/40",
                children: [
                    /* @__PURE__ */ t(v, {
                        name: a,
                        label: r.formCreditCardExpirationLabel || e(L)
                    }),
                    /* @__PURE__ */ t(u, {
                        acceptedCards: i,
                        name: d,
                        label: r.formCreditCardCvvLabel || e(h),
                        maxLength: l
                    })
                ]
            })
        ]
    });
}, q = F;
export { q as default };
