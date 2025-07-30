"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getCreditCardNumberLength: function() {
        return i;
    },
    getCvvLength: function() {
        return a;
    },
    isAmericanExpress: function() {
        return n;
    },
    isMasterCard: function() {
        return g;
    },
    isValidCreditCardNumber: function() {
        return c;
    },
    isVisa: function() {
        return o;
    }
});
const t = (s)=>(e)=>!!e && s.test(e), n = t(/^3[47]/), o = t(/^4/), g = t(/^5/), a = (s)=>n(s) ? 4 : 3, i = (s)=>n(s) ? 15 : 16, c = (s)=>!s || !n(s) && !g(s) && !o(s) ? !1 : i(s) === s.length;
