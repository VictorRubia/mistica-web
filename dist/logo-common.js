"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "calcInlineVars", {
    enumerable: true,
    get: function() {
        return p;
    }
});
const _logocssmistica = require("./logo.css-mistica.js");
const p = (t)=>{
    if (typeof t == "number") return {
        [_logocssmistica.vars.size]: `${t}px`
    };
    const r = {
        [_logocssmistica.vars.sizeMobile]: `${t.mobile}px`,
        [_logocssmistica.vars.sizeDesktop]: `${t.desktop}px`
    };
    return t.tablet && (r[_logocssmistica.vars.sizeTablet] = `${t.tablet}px`), r;
};
