"use client";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import * as l from "react";
import { useIsInverseOrMediaVariant as h } from "./theme-variant-context.js";
import { vars as r } from "./skins/skin-contract.css-mistica.js";
import v from "./inline.js";
import { moreItems as b } from "./stacking-group.css-mistica.js";
import { vars as C } from "./image.css-mistica.js";
import { applyCssVars as y } from "./utils/css.js";
import { renderText as g } from "./avatar.js";
const x = (param)=>{
    let { moreItemsStyle: s, stacked: t = !0, maxItems: o = 1 / 0, children: n } = param;
    const c = h(), e = l.Children.count(n), m = e - o + 1, p = t ? -8 : 8, i = s.size, a = s.type === "circle" ? "50%" : r.borderRadii.mediaSmall, u = c ? r.colors.textPrimaryInverse : r.colors.textBrand;
    return /* @__PURE__ */ d("div", {
        style: y({
            [C.mediaBorderRadius]: a
        }),
        children: /* @__PURE__ */ f(v, {
            space: p,
            children: [
                l.Children.toArray(n).slice(0, e > o ? o - 1 : o),
                e > o && /* @__PURE__ */ d("div", {
                    className: b,
                    style: {
                        width: i,
                        height: i,
                        color: u,
                        borderRadius: a,
                        backgroundColor: c ? r.colors.brandHigh : r.colors.brandLow,
                        border: t ? `1px solid ${r.colors.borderLow}` : "none"
                    },
                    children: g(i, `+${m}`)
                })
            ]
        })
    });
}, G = x;
export { G as default };
