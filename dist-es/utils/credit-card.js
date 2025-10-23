const t = (s)=>(e)=>!!e && s.test(e), n = t(/^3[47]/), o = t(/^4/), g = t(/^5/), a = (s)=>n(s) ? 4 : 3, i = (s)=>n(s) ? 15 : 16, c = (s)=>!s || !n(s) && !g(s) && !o(s) ? !1 : i(s) === s.length;
export { i as getCreditCardNumberLength, a as getCvvLength, n as isAmericanExpress, g as isMasterCard, c as isValidCreditCardNumber, o as isVisa };
