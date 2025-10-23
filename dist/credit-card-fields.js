"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return q;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _formcontext = require("./form-context.js");
const _hooks = require("./hooks.js");
const _creditcard = require("./utils/credit-card.js");
const _doublefield = /*#__PURE__*/ _interop_require_default(require("./double-field.js"));
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _creditcardexpirationfield = /*#__PURE__*/ _interop_require_default(require("./credit-card-expiration-field.js"));
const _creditcardnumberfield = /*#__PURE__*/ _interop_require_default(require("./credit-card-number-field.js"));
const _cvvfield = /*#__PURE__*/ _interop_require_default(require("./cvv-field.js"));
const _texttokens = require("./text-tokens.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const F = (param)=>{
    let { numberFieldName: o = "ccNum", expirationFieldName: a = "ccExp", cvvFieldName: d = "ccCvv", acceptedCards: i } = param;
    const { values: C } = (0, _formcontext.useForm)(), { texts: r, t: e } = (0, _hooks.useTheme)(), l = (0, _creditcard.getCvvLength)(String(C[o]));
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
        space: 16,
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_creditcardnumberfield.default, {
                acceptedCards: i,
                name: o,
                label: r.formCreditCardNumberLabel || e(_texttokens.formCreditCardNumberLabel)
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsxs)(_doublefield.default, {
                layout: "60/40",
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsx)(_creditcardexpirationfield.default, {
                        name: a,
                        label: r.formCreditCardExpirationLabel || e(_texttokens.formCreditCardExpirationLabel)
                    }),
                    /* @__PURE__ */ (0, _jsxruntime.jsx)(_cvvfield.default, {
                        acceptedCards: i,
                        name: d,
                        label: r.formCreditCardCvvLabel || e(_texttokens.formCreditCardCvvLabel),
                        maxLength: l
                    })
                ]
            })
        ]
    });
}, q = F;
