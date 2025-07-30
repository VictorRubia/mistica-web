"use client";
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
import { jsxs as t, jsx as r, Fragment as x } from "react/jsx-runtime";
import * as $ from "react";
import { Boxed as rr } from "../boxed.js";
import ar from "../stack.js";
import { container as or, dataCard as er, MIN_HEIGHT as dr, touchable as nr, touchableCardHoverOverlay as tr, cardContentStyle as cr, minHeight as sr, topActionsWithoutIcon as ir, extra as mr, paddingX as hr, flexColumn as lr, divider as fr, actions as gr, actionsVariants as vr, marginRightButton as ur, buttonMobile as A, footerDirection as pr, marginRightAuto as yr, withPaddingTop as Nr, footerImage as xr, footerText as Br, adjustButtonLink as Tr, button as Cr, vars as wr } from "./advanced-data-card.css-mistica.js";
import { vars as Ir } from "../image.css-mistica.js";
import O from "../divider.js";
import { Text as E, Text2 as g } from "../text.js";
import { text4 as G } from "../text-props.js";
import { vars as X } from "../skins/skin-contract.css-mistica.js";
import P from "../box.js";
import Rr from "../touchable.js";
import v from "classnames";
import { useInnerText as V, CardActionsGroup as Dr } from "../card.js";
import { useTheme as Hr } from "../hooks.js";
import { getPrefixedDataAttributes as Fr } from "../utils/dom.js";
import Sr from "../inline.js";
import { applyCssVars as Y } from "../utils/css.js";
import W from "../tag.js";
import { isBiggerHeading as _ } from "../utils/headings.js";
const jr = (param)=>{
    let { headline: d, headlineRef: h, pretitle: n, pretitleAs: s, pretitleLinesMax: l, title: o, titleAs: c, titleLinesMax: f, subtitle: a, subtitleLinesMax: i, description: e, descriptionLinesMax: N } = param;
    const { textPresets: m } = Hr();
    return /** using flex instead of nested Stacks, this way we can rearrange texts so the DOM structure makes more sense for screen reader users */ /* @__PURE__ */ t("div", {
        className: lr,
        children: [
            _(c, s) ? /* @__PURE__ */ t(x, {
                children: [
                    o && /* @__PURE__ */ r("div", {
                        style: {
                            paddingBottom: a || e ? 4 : 0
                        },
                        children: /* @__PURE__ */ r(E, _object_spread_props(_object_spread({}, G), {
                            truncate: f,
                            weight: m.cardTitle.weight,
                            as: c,
                            hyphens: "auto",
                            children: o
                        }))
                    }),
                    d && /* @__PURE__ */ r("div", {
                        ref: h,
                        style: {
                            order: -2,
                            paddingBottom: n || o || a || e ? 4 : 0
                        },
                        children: typeof d == "string" ? /* @__PURE__ */ r(W, {
                            type: "promo",
                            children: d
                        }) : d
                    }),
                    n && /* @__PURE__ */ r("div", {
                        style: {
                            order: -1,
                            paddingBottom: o || a || e ? 4 : 0
                        },
                        children: /* @__PURE__ */ r(g, {
                            truncate: l,
                            as: s,
                            regular: !0,
                            hyphens: "auto",
                            children: n
                        })
                    })
                ]
            }) : /* @__PURE__ */ t(x, {
                children: [
                    n && /* @__PURE__ */ r("div", {
                        style: {
                            paddingBottom: o || a || e ? 4 : 0
                        },
                        children: /* @__PURE__ */ r(g, {
                            truncate: l,
                            as: s,
                            regular: !0,
                            hyphens: "auto",
                            children: n
                        })
                    }),
                    d && /* @__PURE__ */ r("div", {
                        ref: h,
                        style: {
                            order: -1,
                            paddingBottom: n || o || a || e ? 4 : 0
                        },
                        children: typeof d == "string" ? /* @__PURE__ */ r(W, {
                            type: "promo",
                            children: d
                        }) : d
                    }),
                    o && /* @__PURE__ */ r("div", {
                        style: {
                            paddingBottom: a || e ? 4 : 0
                        },
                        children: /* @__PURE__ */ r(E, _object_spread_props(_object_spread({}, G), {
                            truncate: f,
                            weight: m.cardTitle.weight,
                            as: c,
                            hyphens: "auto",
                            children: o
                        }))
                    })
                ]
            }),
            a && /* @__PURE__ */ r("div", {
                style: {
                    paddingBottom: e ? 4 : 0
                },
                children: /* @__PURE__ */ r(g, {
                    truncate: i,
                    as: "div",
                    regular: !0,
                    hyphens: "auto",
                    children: a
                })
            }),
            e && /* @__PURE__ */ r(g, {
                truncate: N,
                as: "div",
                regular: !0,
                color: X.colors.textSecondary,
                hyphens: "auto",
                children: e
            })
        ]
    });
}, Ar = (param)=>{
    let { button: d, footerImage: h, footerText: n, footerTextLinesMax: s, buttonLink: l } = param;
    const o = !!d, c = !!h, f = !!n, a = !!l, i = o && (c || f) && a, e = a && !i ? "178px" : "";
    return /* @__PURE__ */ t(x, {
        children: [
            /* @__PURE__ */ r("div", {
                className: fr,
                children: /* @__PURE__ */ r(O, {})
            }),
            /* @__PURE__ */ t("div", {
                className: v(gr, vr[i ? "mobile" : "default"]),
                children: [
                    o && /* @__PURE__ */ r("div", {
                        className: v(ur, A),
                        children: d
                    }),
                    /* @__PURE__ */ t("div", {
                        className: v(pr, i ? yr : Nr),
                        children: [
                            c && /* @__PURE__ */ r("div", {
                                className: xr,
                                children: /* @__PURE__ */ r("div", {
                                    style: Y({
                                        [Ir.mediaBorderRadius]: X.borderRadii.mediaSmall
                                    }),
                                    children: h
                                })
                            }),
                            f && /* @__PURE__ */ r("div", {
                                style: {
                                    maxWidth: e
                                },
                                className: Br,
                                children: /* @__PURE__ */ r(g, {
                                    truncate: s,
                                    regular: !0,
                                    children: n
                                })
                            })
                        ]
                    }),
                    a && /* @__PURE__ */ r("div", {
                        className: v(Tr, i ? Cr : A),
                        children: l
                    })
                ]
            })
        ]
    });
}, Er = /*#__PURE__*/ $.forwardRef((_param, K)=>{
    var { stackingGroup: d, headline: h, pretitle: n, pretitleAs: s, pretitleLinesMax: l, title: o, titleAs: c = "h3", titleLinesMax: f, subtitle: a, subtitleLinesMax: i, description: e, descriptionLinesMax: N, extra: m, extraDividerPadding: b = 24, noExtraDivider: k = !1, button: B, footerImage: T, footerText: C, footerTextLinesMax: q, buttonLink: w, dataAttributes: z, actions: u, "aria-label": J, onClose: I } = _param, p = _object_without_properties(_param, [
        "stackingGroup",
        "headline",
        "pretitle",
        "pretitleAs",
        "pretitleLinesMax",
        "title",
        "titleAs",
        "titleLinesMax",
        "subtitle",
        "subtitleLinesMax",
        "description",
        "descriptionLinesMax",
        "extra",
        "extraDividerPadding",
        "noExtraDivider",
        "button",
        "footerImage",
        "footerText",
        "footerTextLinesMax",
        "buttonLink",
        "dataAttributes",
        "actions",
        "aria-label",
        "onClose"
    ]);
    const y = !!p.href || !!p.onPress || !!p.to, M = {
        button: B,
        footerImage: T,
        footerText: C,
        footerTextLinesMax: q,
        buttonLink: w
    }, R = !!B || !!T || !!C || !!w, D = !!(m != null && m.length), Q = ((u == null ? void 0 : u.length) || 0) + (I ? 1 : 0), { text: H, ref: U } = V(), { text: F, ref: Z } = V(), S = J || (_(c, s) ? [
        o,
        H,
        n,
        a,
        e,
        F
    ] : [
        n,
        H,
        o,
        a,
        e,
        F
    ]).filter(Boolean).join(" ");
    return /* @__PURE__ */ t("section", _object_spread_props(_object_spread({
        className: or
    }, Fr(z, "AdvancedDataCard")), {
        ref: K,
        "aria-label": y ? void 0 : S,
        children: [
            /* @__PURE__ */ t(rr, {
                className: er,
                width: "100%",
                height: "100%",
                minHeight: dr,
                children: [
                    /* @__PURE__ */ t(Rr, _object_spread_props(_object_spread({
                        maybe: !0
                    }, p), {
                        "aria-label": y ? S : void 0,
                        className: nr,
                        children: [
                            y && /* @__PURE__ */ r("div", {
                                className: tr
                            }),
                            /* @__PURE__ */ r("div", {
                                className: v(cr, !R && !D ? sr : ""),
                                "aria-hidden": y,
                                children: /* @__PURE__ */ r(P, {
                                    paddingTop: 8,
                                    children: /* @__PURE__ */ t(Sr, {
                                        space: 0,
                                        children: [
                                            /* @__PURE__ */ t(ar, {
                                                space: 8,
                                                children: [
                                                    d,
                                                    /* @__PURE__ */ r(jr, {
                                                        headline: h,
                                                        headlineRef: U,
                                                        pretitle: n,
                                                        pretitleAs: s,
                                                        pretitleLinesMax: l,
                                                        title: o,
                                                        titleAs: c,
                                                        titleLinesMax: f,
                                                        subtitle: a,
                                                        subtitleLinesMax: i,
                                                        description: e,
                                                        descriptionLinesMax: N
                                                    })
                                                ]
                                            }),
                                            !d && /* @__PURE__ */ r("div", {
                                                style: Y({
                                                    [wr.topActionsCount]: String(Q)
                                                }),
                                                className: ir
                                            })
                                        ]
                                    })
                                })
                            }),
                            /* @__PURE__ */ r("div", {
                                style: {
                                    flexGrow: 1
                                }
                            }),
                            D && /* @__PURE__ */ r("div", {
                                className: mr,
                                ref: Z,
                                children: m.map((L, j)=>/* @__PURE__ */ t("div", {
                                        children: [
                                            /* @__PURE__ */ r("div", {
                                                className: hr,
                                                children: L
                                            }),
                                            j + 1 !== m.length && /* @__PURE__ */ r(P, {
                                                paddingY: b,
                                                children: !k && /* @__PURE__ */ r(O, {})
                                            })
                                        ]
                                    }, j))
                            })
                        ]
                    })),
                    R && /* @__PURE__ */ r(Ar, _object_spread({}, M))
                ]
            }),
            /* @__PURE__ */ r(Dr, {
                actions: u,
                onClose: I
            })
        ]
    }));
}), $r = Er;
export { Er as AdvancedDataCard, $r as default };
