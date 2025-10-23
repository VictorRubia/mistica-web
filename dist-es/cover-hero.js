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
import { jsxs as r, jsx as t, Fragment as H } from "react/jsx-runtime";
import * as J from "react";
import K from "./responsive-layout.js";
import N from "./box.js";
import O from "./button-group.js";
import S from "./stack.js";
import { Text3 as A, Text8 as Q } from "./text.js";
import { vars as n } from "./skins/skin-contract.css-mistica.js";
import { mainContent as U, flexColumn as W, sixColumns as u, coverHeroContainer as X, minHeight as Y, withAspectRatio as Z, coverHero as _, centered as E, hasSideExtra as P, sideExtra as $, vars as tt } from "./cover-hero.css-mistica.js";
import w from "classnames";
import { applyCssVars as et } from "./utils/css.js";
import { vars as rt } from "./image.css-mistica.js";
import T from "./grid-layout.js";
import { CoverHeroMedia as ot } from "./cover-hero-media.js";
import { getPrefixedDataAttributes as it } from "./utils/dom.js";
import { isBiggerHeading as at } from "./utils/headings.js";
const nt = (e)=>!e || e === "auto" ? 0 : typeof e == "number" ? e : ({
        "1:1": 1,
        "16:9": 16 / 9,
        "7:10": 7 / 10,
        "4:3": 9 / 10
    })[e], dt = /*#__PURE__*/ J.forwardRef((_param, I)=>{
    var { headline: e, pretitle: p, pretitleLinesMax: j, pretitleAs: h, title: d, titleLinesMax: G, titleAs: f = "h1", description: v, descriptionLinesMax: L, extra: b, sideExtra: o, button: M, secondaryButton: R, buttonLink: V, minHeight: z, aspectRatio: c = "auto", variant: g, centered: i, noPaddingY: x, dataAttributes: D, "aria-label": F } = _param, s = _object_without_properties(_param, [
        "headline",
        "pretitle",
        "pretitleLinesMax",
        "pretitleAs",
        "title",
        "titleLinesMax",
        "titleAs",
        "description",
        "descriptionLinesMax",
        "extra",
        "sideExtra",
        "button",
        "secondaryButton",
        "buttonLink",
        "minHeight",
        "aspectRatio",
        "variant",
        "centered",
        "noPaddingY",
        "dataAttributes",
        "aria-label"
    ]);
    const a = s.backgroundVideo || s.backgroundImage, q = a ? "none" : s.background || ({
        default: n.colors.background,
        inverse: n.colors.backgroundBrand,
        alternative: n.colors.backgroundAlternative,
        media: "none"
    })[g !== null && g !== void 0 ? g : "default"], m = a ? "0 0 15px rgba(0, 0, 0, 0.4)" : void 0, l = p ? /* @__PURE__ */ t(A, {
        regular: !0,
        as: h,
        truncate: j,
        textShadow: m,
        dataAttributes: {
            testid: "pretitle"
        },
        children: p
    }) : void 0, k = d ? /* @__PURE__ */ t(Q, {
        as: f,
        truncate: G,
        textShadow: m,
        dataAttributes: {
            testid: "title"
        },
        children: d
    }) : void 0, C = e ? /* @__PURE__ */ t("div", {
        style: {
            order: -1
        },
        children: /* @__PURE__ */ t(N, {
            dataAttributes: {
                testid: "headline"
            },
            paddingBottom: {
                desktop: 8,
                tablet: 8,
                mobile: 16
            },
            children: e
        })
    }) : void 0, y = /* @__PURE__ */ r("div", {
        className: U,
        children: [
            /* @__PURE__ */ r(S, {
                space: 16,
                children: [
                    /* @__PURE__ */ t("div", {
                        className: W,
                        children: at(f, h) ? /* @__PURE__ */ r(H, {
                            children: [
                                k,
                                C,
                                l && /* @__PURE__ */ t("div", {
                                    className: u,
                                    style: {
                                        paddingBottom: d ? 8 : 0,
                                        order: -1
                                    },
                                    children: l
                                })
                            ]
                        }) : /* @__PURE__ */ r(H, {
                            children: [
                                l && /* @__PURE__ */ t("div", {
                                    className: u,
                                    style: {
                                        paddingBottom: d ? 8 : 0
                                    },
                                    children: l
                                }),
                                C,
                                k
                            ]
                        })
                    }),
                    v && /* @__PURE__ */ t("div", {
                        className: u,
                        children: /* @__PURE__ */ t(A, {
                            as: "p",
                            regular: !0,
                            truncate: L,
                            color: a ? n.colors.textPrimary : n.colors.textSecondary,
                            textShadow: m,
                            dataAttributes: {
                                testid: "description"
                            },
                            children: v
                        })
                    })
                ]
            }),
            b && /* @__PURE__ */ t("div", {
                "data-testid": "slot",
                children: b
            })
        ]
    }), B = c && c !== "auto";
    return /* @__PURE__ */ t("section", _object_spread_props(_object_spread({}, it(D, "CoverHero")), {
        "aria-label": F,
        ref: I,
        className: w(X, {
            [Y]: !x,
            [Z]: B
        }),
        style: _object_spread({
            minHeight: B ? "auto" : z,
            boxSizing: "border-box",
            background: q
        }, et({
            [tt.aspectRatio]: String(nt(c)),
            [rt.mediaBorderRadius]: "0px"
        })),
        children: /* @__PURE__ */ r("div", {
            className: w(_, {
                [E]: i,
                [P]: o
            }),
            children: [
                a ? /* @__PURE__ */ t(ot, _object_spread({}, s)) : null,
                /* @__PURE__ */ t(K, {
                    variant: a ? "media" : g,
                    children: /* @__PURE__ */ t(N, {
                        paddingY: x ? 0 : {
                            desktop: 56,
                            tablet: 56,
                            mobile: 24
                        },
                        children: /* @__PURE__ */ r(S, {
                            space: 24,
                            children: [
                                i && !o ? /* @__PURE__ */ t(T, {
                                    template: "8",
                                    children: y
                                }) : /* @__PURE__ */ t(T, {
                                    template: "8+4",
                                    collapseBreakpoint: "mobile",
                                    left: y,
                                    right: /* @__PURE__ */ t("div", {
                                        className: $,
                                        "data-testid": "sideSlot",
                                        children: o
                                    })
                                }),
                                /* @__PURE__ */ t(O, {
                                    align: {
                                        mobile: i ? "center" : "left",
                                        tablet: i && !o ? "center" : "left",
                                        desktop: i && !o ? "center" : "left"
                                    },
                                    primaryButton: M,
                                    secondaryButton: R,
                                    link: V
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }));
}), Bt = dt;
export { Bt as default };
