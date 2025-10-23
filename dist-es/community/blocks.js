import { jsx as r, jsxs as t } from "react/jsx-runtime";
import g from "../stack.js";
import { rightContent as v, column as p } from "./blocks.css-mistica.js";
import { vars as f } from "../image.css-mistica.js";
import { Text2 as i, Text5 as B, Text8 as x, Text3 as S } from "../text.js";
import { vars as o } from "../skins/skin-contract.css-mistica.js";
import s from "../inline.js";
import m from "../box.js";
import { ProgressBar as I } from "../progress-bar.js";
import P from "classnames";
import { applyCssVars as k } from "../utils/css.js";
const b = (param)=>{
    let { title: a, description: e } = param;
    const l = typeof e == "string" ? [
        e
    ] : e;
    return /* @__PURE__ */ t("div", {
        className: p,
        children: [
            /* @__PURE__ */ r(S, {
                regular: !0,
                color: o.colors.textPrimary,
                children: a
            }),
            l && l.map((c, n)=>/* @__PURE__ */ r(i, {
                    regular: !0,
                    color: o.colors.textSecondary,
                    as: "p",
                    children: c
                }, n))
        ]
    });
}, q = (param)=>{
    let { title: a, stackingGroup: e, description: l, "aria-label": c } = param;
    return /* @__PURE__ */ r("div", {
        "aria-label": c,
        children: /* @__PURE__ */ t(s, {
            space: "between",
            alignItems: "center",
            children: [
                a && /* @__PURE__ */ r(m, {
                    paddingRight: 32,
                    children: /* @__PURE__ */ r(i, {
                        regular: !0,
                        children: a
                    })
                }),
                e || /* @__PURE__ */ r(i, {
                    regular: !0,
                    color: o.colors.textSecondary,
                    textAlign: "right",
                    as: "div",
                    children: l
                })
            ]
        })
    });
}, z = (param)=>{
    let { image: a, description: e, "aria-label": l, rightText: c } = param;
    return /* @__PURE__ */ r("div", {
        "aria-label": l,
        children: /* @__PURE__ */ t(s, {
            space: "between",
            alignItems: "center",
            children: [
                /* @__PURE__ */ t(s, {
                    space: 16,
                    alignItems: "center",
                    children: [
                        /* @__PURE__ */ r("div", {
                            style: k({
                                [f.mediaBorderRadius]: o.borderRadii.mediaSmall
                            }),
                            children: a
                        }),
                        /* @__PURE__ */ r(i, {
                            regular: !0,
                            color: o.colors.textSecondary,
                            children: e
                        })
                    ]
                }),
                c && /* @__PURE__ */ r("div", {
                    className: v,
                    children: /* @__PURE__ */ r(i, {
                        regular: !0,
                        color: o.colors.textBrand,
                        children: c
                    })
                })
            ]
        })
    });
}, D = (param)=>{
    let { title: a, description: e, secondaryValue: l, value: c, valueColor: n = o.colors.textPrimary, "aria-label": d } = param;
    return /* @__PURE__ */ t(s, {
        space: "between",
        alignItems: "flex-end",
        "aria-label": d,
        children: [
            /* @__PURE__ */ r(b, {
                title: a,
                description: e
            }),
            /* @__PURE__ */ t("div", {
                className: P(p, v),
                children: [
                    /* @__PURE__ */ r(i, {
                        regular: !0,
                        color: o.colors.textSecondary,
                        decoration: "line-through",
                        children: l
                    }),
                    /* @__PURE__ */ r(B, {
                        color: n,
                        children: c
                    })
                ]
            })
        ]
    });
}, E = (param)=>{
    let { headline: a, headings: e, title: l, pretitle: c, description: n, strikedValue: d, "aria-label": h } = param;
    return /* @__PURE__ */ t("div", {
        "aria-label": h,
        children: [
            a && /* @__PURE__ */ r(m, {
                paddingBottom: 24,
                children: a
            }),
            /* @__PURE__ */ t(g, {
                space: 2,
                children: [
                    c && /* @__PURE__ */ r(i, {
                        regular: !0,
                        children: c
                    }),
                    d && /* @__PURE__ */ r(i, {
                        regular: !0,
                        color: o.colors.textSecondary,
                        decoration: "line-through",
                        children: d
                    })
                ]
            }),
            e && /* @__PURE__ */ r(g, {
                space: 2,
                children: e.map((u, y)=>/* @__PURE__ */ {
                    var _u_valueColor;
                    return t(s, {
                        space: 8,
                        alignItems: "baseline",
                        children: [
                            /* @__PURE__ */ r(x, {
                                color: (_u_valueColor = u.valueColor) !== null && _u_valueColor !== void 0 ? _u_valueColor : o.colors.textPrimary,
                                children: u.value
                            }),
                            /* @__PURE__ */ r(i, {
                                regular: !0,
                                color: o.colors.textSecondary,
                                children: u.text
                            })
                        ]
                    }, y);
                })
            }),
            l || n ? /* @__PURE__ */ r(m, {
                paddingTop: 8,
                children: /* @__PURE__ */ r(b, {
                    title: l,
                    description: n
                })
            }) : null
        ]
    });
}, F = (param)=>{
    let { title: a, value: e, description: l, valueColor: c = o.colors.textPrimary, "aria-label": n } = param;
    return /* @__PURE__ */ t("div", {
        "aria-label": n,
        className: p,
        children: [
            /* @__PURE__ */ r(i, {
                regular: !0,
                color: o.colors.textPrimary,
                children: a
            }),
            /* @__PURE__ */ r(x, {
                color: c,
                children: e
            }),
            /* @__PURE__ */ r(b, {
                description: l
            })
        ]
    });
}, J = (param)=>{
    let { title: a, stackingGroup: e, progressPercent: l, reverse: c, heading: n, description: d, "aria-label": h } = param;
    return /* @__PURE__ */ r("div", {
        "aria-label": h,
        children: /* @__PURE__ */ t(g, {
            space: 8,
            children: [
                /* @__PURE__ */ t(s, {
                    space: "between",
                    alignItems: "flex-end",
                    children: [
                        /* @__PURE__ */ r(m, {
                            paddingRight: 32,
                            children: /* @__PURE__ */ r(i, {
                                regular: !0,
                                children: a
                            })
                        }),
                        e
                    ]
                }),
                l !== void 0 && /* @__PURE__ */ r(I, {
                    "aria-hidden": !0,
                    progressPercent: l,
                    reverse: c
                }),
                /* @__PURE__ */ t(s, {
                    space: 8,
                    alignItems: "baseline",
                    children: [
                        /* @__PURE__ */ r(x, {
                            color: n.valueColor || o.colors.textPrimary,
                            children: n.value
                        }),
                        /* @__PURE__ */ r(i, {
                            regular: !0,
                            color: o.colors.textSecondary,
                            children: n.text
                        })
                    ]
                }),
                d && /* @__PURE__ */ r(i, {
                    regular: !0,
                    color: o.colors.textSecondary,
                    children: d
                })
            ]
        })
    });
};
export { E as HighlightedValueBlock, D as InformationBlock, J as ProgressBlock, q as RowBlock, z as SimpleBlock, F as ValueBlock };
