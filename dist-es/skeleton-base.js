"use client";
import { jsx as n } from "react/jsx-runtime";
import { useIsInverseOrMediaVariant as m } from "./theme-variant-context.js";
import d from "classnames";
import { background as e } from "./skeletons.css-mistica.js";
import { vars as f } from "./skins/skin-contract.css-mistica.js";
const l = (param)=>{
    let { width: r = "100%", height: s = 8, radius: a = f.borderRadii.container, className: o, noBorderRadius: t = !1 } = param;
    const i = m();
    return /* @__PURE__ */ n("div", {
        className: d(o, i ? e.inverse : e.default),
        style: {
            borderRadius: t ? 0 : a,
            width: r,
            height: s
        },
        "aria-hidden": !0
    });
}, k = l;
export { k as default };
