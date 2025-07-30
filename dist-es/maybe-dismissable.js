"use client";
import { jsx as t, Fragment as c, jsxs as u } from "react/jsx-runtime";
import * as o from "react";
import b from "./generated/mistica-icons/icon-close-regular.js";
import { useTheme as f } from "./hooks.js";
import { IconButton as d } from "./icon-button.js";
import { dismissableContainer as p, dismissableButton as x } from "./maybe-dismissable.css-mistica.js";
import { ThemeVariant as h } from "./theme-variant-context.js";
import { closeButtonLabel as B } from "./text-tokens.js";
const a = /*#__PURE__*/ o.createContext(!1), M = ()=>o.useContext(a), C = (param)=>{
    let { children: e, width: r, onClose: s, "aria-label": i, variant: m } = param;
    const { texts: l, t: n } = f();
    return s ? /* @__PURE__ */ u("section", {
        className: p,
        "aria-label": i,
        style: {
            width: r || "100%",
            minHeight: "100%"
        },
        children: [
            /* @__PURE__ */ t(a.Provider, {
                value: !0,
                children: e
            }),
            /* @__PURE__ */ t(h, {
                variant: m,
                children: /* @__PURE__ */ t("div", {
                    className: x,
                    children: /* @__PURE__ */ t(d, {
                        dataAttributes: {
                            testid: "closeButton"
                        },
                        onPress: s,
                        "aria-label": l.closeButtonLabel || n(B),
                        small: !0,
                        Icon: b
                    })
                })
            })
        ]
    }) : /* @__PURE__ */ t(c, {
        children: e
    });
}, N = C;
export { N as default, M as useIsDismissable };
