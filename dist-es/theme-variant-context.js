"use client";
import { jsx as o } from "react/jsx-runtime";
import * as t from "react";
const r = /*#__PURE__*/ t.createContext("default"), c = (param)=>{
    let { isInverse: e, variant: a, children: s } = param;
    return /* @__PURE__ */ o(r.Provider, {
        value: a !== null && a !== void 0 ? a : e ? "inverse" : "default",
        children: s
    });
}, n = ()=>t.useContext(r), m = ()=>n() === "inverse", u = ()=>{
    const e = n();
    return e === "inverse" || e === "media";
};
export { c as ThemeVariant, u as useIsInverseOrMediaVariant, m as useIsInverseVariant, n as useThemeVariant };
