"use client";
import { jsx as s, Fragment as d, jsxs as u } from "react/jsx-runtime";
import * as l from "react";
import { useTheme as a } from "./hooks.js";
import { createNestableContext as i } from "./nestable-context.js";
import { getPlatform as f } from "./utils/platform.js";
import { isCssVar as p, getCssVarValue as C } from "./utils/dom.js";
const { Provider: h, useSetValue: g, useValue: c } = i({}), V = c, v = (o)=>f(o) === "ios", b = ()=>{
    const { topColor: o } = c(), { isDarkMode: r } = a();
    return l.useEffect(()=>{
        if (!o) return;
        const t = document.head.querySelectorAll("meta[name=theme-color]");
        t.forEach((n)=>{
            n.remove();
        });
        const e = document.createElement("meta");
        return e.name = "theme-color", e.media = r ? "(prefers-color-scheme: dark)" : "(prefers-color-scheme: light)", e.content = p(o) ? C(o) : o, document.head.appendChild(e), ()=>{
            e.remove(), t.forEach((n)=>{
                document.head.appendChild(n);
            });
        };
    }, [
        r,
        o
    ]), null;
}, k = ()=>{
    const [o, r] = l.useState("transparent");
    return l.useEffect(()=>{
        const t = window.matchMedia("(prefers-color-scheme: dark)");
        let e;
        const n = ()=>{
            e = requestAnimationFrame(()=>{
                const m = getComputedStyle(document.body).backgroundColor;
                r(m);
            });
        };
        return t.addListener(n), n(), ()=>{
            t.removeListener(n), cancelAnimationFrame(e);
        };
    }, []), o;
}, y = ()=>{
    const { topColor: o, bottomColor: r } = c(), t = k();
    if (!r && !o) return null;
    const e = r !== null && r !== void 0 ? r : t;
    return e === o || e === "transparent" ? null : /* @__PURE__ */ s("div", {
        style: {
            position: "fixed",
            zIndex: -1,
            background: e,
            width: "100%",
            height: 300,
            left: 0,
            right: 0,
            bottom: 0
        }
    });
}, A = (param)=>{
    let { children: o } = param;
    const { platformOverrides: r } = a();
    return v(r) ? /* @__PURE__ */ u(h, {
        children: [
            /* @__PURE__ */ s(b, {}),
            o,
            /* @__PURE__ */ s(y, {})
        ]
    }) : /* @__PURE__ */ s(d, {
        children: o
    });
}, T = (o)=>{
    g(o);
};
export { A as OverscrollColorProvider, V as useOverScrollColor, T as useSetOverscrollColor };
