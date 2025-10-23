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
import { jsx as e, jsxs as d, Fragment as C } from "react/jsx-runtime";
import * as $ from "react";
import y from "classnames";
import { useScreenSize as D } from "./hooks.js";
import { Text3 as R, Text8 as A } from "./text.js";
import G from "./grid-layout.js";
import H from "./box.js";
import j from "./stack.js";
import E from "./button-group.js";
import { vars as l } from "./skins/skin-contract.css-mistica.js";
import { container as B, containerMobile as M, containerMinHeight as S, expandedContent as V, layout as N, vars as T, hero as _, containerDesktop as O, contentContainer as z, flexColumn as F, actions as K } from "./hero.css-mistica.js";
import { vars as b } from "./image.css-mistica.js";
import { useSlideshowContext as U } from "./carousel.js";
import { getPrefixedDataAttributes as k } from "./utils/dom.js";
import { useIsInverseOrMediaVariant as W } from "./theme-variant-context.js";
import { applyCssVars as g } from "./utils/css.js";
import { ResetResponsiveLayout as q, InternalResponsiveLayout as J } from "./responsive-layout.js";
import { isBiggerHeading as Q } from "./utils/headings.js";
const w = {
    default: l.colors.background,
    alternative: l.colors.backgroundAlternative,
    brand: l.colors.backgroundBrand,
    "brand-secondary": l.colors.backgroundBrandSecondary,
    none: "transparent"
}, I = (param)=>{
    let { children: r, isInverse: t, backgroundColor: a } = param;
    return /* @__PURE__ */ e(J, {
        isInverse: t,
        className: N,
        innerDivClassName: N,
        shouldExpandWhenNested: !0,
        backgroundColor: a !== null && a !== void 0 ? a : "transparent",
        children: r
    });
}, x = (param)=>{
    let { headline: r, title: t, titleAs: a = "h1", pretitle: i, pretitleAs: c, description: o, descriptionLinesMax: m, extra: p, button: f, secondaryButton: u, buttonLink: s } = param;
    const v = t ? /* @__PURE__ */ e(A, {
        as: a,
        dataAttributes: {
            testid: "title"
        },
        children: t
    }) : void 0, n = i ? /* @__PURE__ */ e(R, {
        as: c,
        regular: !0,
        dataAttributes: {
            testid: "pretitle"
        },
        children: i
    }) : void 0, h = r ? /* @__PURE__ */ e("div", {
        "data-testid": "headline",
        style: {
            paddingBottom: i || t || o ? 16 : 0,
            order: -1
        },
        children: r
    }) : void 0;
    return /* @__PURE__ */ d("section", {
        className: z,
        children: [
            /* @__PURE__ */ d("div", {
                children: [
                    /* @__PURE__ */ d(j, {
                        space: 16,
                        children: [
                            /* @__PURE__ */ e("div", {
                                className: F,
                                children: Q(a, c) ? /* @__PURE__ */ d(C, {
                                    children: [
                                        v,
                                        h,
                                        n && /* @__PURE__ */ e("div", {
                                            style: {
                                                paddingBottom: t ? 8 : 0,
                                                order: -1
                                            },
                                            children: n
                                        })
                                    ]
                                }) : /* @__PURE__ */ d(C, {
                                    children: [
                                        n && /* @__PURE__ */ e("div", {
                                            style: {
                                                paddingBottom: t ? 8 : 0
                                            },
                                            children: n
                                        }),
                                        h,
                                        v
                                    ]
                                })
                            }),
                            o && /* @__PURE__ */ e(R, {
                                as: "p",
                                regular: !0,
                                color: l.colors.textSecondary,
                                truncate: m,
                                dataAttributes: {
                                    testid: "description"
                                },
                                children: o
                            })
                        ]
                    }),
                    p && /* @__PURE__ */ e("div", {
                        "data-testid": "slot",
                        children: p
                    })
                ]
            }),
            (f || s) && /* @__PURE__ */ e("div", {
                className: K,
                children: /* @__PURE__ */ e(E, {
                    primaryButton: f,
                    secondaryButton: u,
                    link: s
                })
            })
        ]
    });
}, X = /*#__PURE__*/ $.forwardRef((_param, p)=>{
    var { height: r, background: t = "default", media: a, desktopMediaPosition: i = "left", dataAttributes: c, noPaddingY: o } = _param, m = _object_without_properties(_param, [
        "height",
        "background",
        "media",
        "desktopMediaPosition",
        "dataAttributes",
        "noPaddingY"
    ]);
    const { isTabletOrSmaller: f } = D(), u = U(), s = !!(u != null && u.withBullets), v = W(), n = t === "none" ? v : t === "brand" || t === "brand-secondary";
    if (f) return /* @__PURE__ */ e(q, {
        children: /* @__PURE__ */ e("div", {
            style: g({
                [b.mediaBorderRadius]: "0px"
            }),
            children: /* @__PURE__ */ d("div", _object_spread_props(_object_spread({}, k(c, "Hero")), {
                ref: p,
                style: _object_spread({}, r === "100vh" ? {
                    maxHeight: "-webkit-fill-available"
                } : {}, g({
                    [T.height]: typeof r == "number" ? `${r}px` : r !== null && r !== void 0 ? r : "100%",
                    [b.mediaBorderRadius]: "0px"
                })),
                className: y(B, M, {
                    [S]: !o
                }),
                children: [
                    a,
                    /* @__PURE__ */ e(I, {
                        isInverse: n,
                        backgroundColor: w[t],
                        children: /* @__PURE__ */ e("div", {
                            className: V,
                            children: /* @__PURE__ */ e("div", {
                                style: {
                                    paddingTop: 24,
                                    paddingBottom: s ? 48 : o ? 0 : 24
                                },
                                className: N,
                                children: /* @__PURE__ */ e(x, _object_spread({}, m))
                            })
                        })
                    })
                ]
            }))
        })
    });
    const h = i === "left" ? a : /* @__PURE__ */ e(H, {
        paddingRight: 24,
        children: /* @__PURE__ */ e(x, _object_spread({}, m))
    }), L = i === "right" ? a : /* @__PURE__ */ e(H, {
        paddingLeft: 24,
        children: /* @__PURE__ */ e(x, _object_spread({}, m))
    });
    return /* @__PURE__ */ e("div", _object_spread_props(_object_spread({}, k(c, "Hero")), {
        ref: p,
        style: _object_spread_props(_object_spread({}, r === "100vh" ? {
            maxHeight: "-webkit-fill-available"
        } : {}, g({
            [T.height]: typeof r == "number" ? `${r}px` : r !== null && r !== void 0 ? r : "100%",
            [b.mediaBorderRadius]: l.borderRadii.container
        })), {
            background: w[t]
        }),
        className: _,
        children: /* @__PURE__ */ e(I, {
            isInverse: n,
            children: /* @__PURE__ */ e(G, {
                template: "6+6",
                left: /* @__PURE__ */ e("div", {
                    style: {
                        paddingTop: o ? 0 : 56,
                        paddingBottom: o && !s ? 0 : 56
                    },
                    className: y(B, O, {
                        [S]: !o
                    }),
                    children: h
                }),
                right: /* @__PURE__ */ e("div", {
                    style: {
                        paddingTop: o ? 0 : 56,
                        paddingBottom: o && !s ? 0 : 56
                    },
                    className: y(B, O),
                    children: L
                })
            })
        })
    }));
}), fe = X;
export { fe as default };
