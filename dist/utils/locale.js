"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "localeToLanguage", {
    enumerable: true,
    get: function() {
        return o;
    }
});
const t = [
    "en",
    "es",
    "pt",
    "de"
], o = (n)=>{
    const e = n.split("-")[0];
    return t.includes(e) ? e : "en";
};
