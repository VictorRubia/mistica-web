"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isBiggerHeading", {
    enumerable: true,
    get: function() {
        return t;
    }
});
const t = (r, s)=>!s || r === s ? !0 : r === "span" ? !1 : r < s;
