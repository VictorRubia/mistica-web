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
import { jsxs as i, jsx as e } from "react/jsx-runtime";
import x from "classnames";
import { useIsInverseOrMediaVariant as k } from "./theme-variant-context.js";
import { ButtonPrimary as N } from "./button.js";
import { useTheme as B } from "./hooks.js";
import n from "./stack.js";
import { Text6 as C, Text3 as I } from "./text.js";
import b from "./button-group.js";
import { container as S, inverseBorder as A, border as E, vars as T, contentVariants as c, assetContainer as V, largeImageContainer as $, largeImage as j, smallImage as D } from "./empty-state.css-mistica.js";
import { vars as t } from "./skins/skin-contract.css-mistica.js";
import { AspectRatioContainer as M } from "./utils/aspect-ratio-support.js";
import { getPrefixedDataAttributes as P } from "./utils/dom.js";
import { applyCssVars as R } from "./utils/css.js";
const w = (param)=>{
    let { title: l, titleAs: d = "h1", description: p, button: r, buttonLink: f, largeImageUrl: a, imageUrl: o, asset: m, "aria-label": g, dataAttributes: u } = param;
    const { isDarkMode: h } = B(), s = k(), v = o ? /* @__PURE__ */ e("img", {
        "data-testid": "image",
        className: D,
        alt: "",
        src: o
    }) : void 0, y = _object_spread_props(_object_spread({}, (r == null ? void 0 : r.type) === N ? {
        primaryButton: r
    } : {
        secondaryButton: r
    }), {
        link: f
    });
    return /* @__PURE__ */ i("div", _object_spread_props(_object_spread({
        className: x(S, s ? A : E),
        style: R({
            [T.backgroundColor]: s && !h ? t.colors.backgroundBrand : t.colors.backgroundContainer
        }),
        "aria-label": g,
        role: "region"
    }, P(u, "EmptyState")), {
        children: [
            /* @__PURE__ */ e("div", {
                style: {
                    flex: 1
                },
                children: /* @__PURE__ */ i(n, {
                    space: 24,
                    className: a ? c.largeImage : c.default,
                    children: [
                        v !== null && v !== void 0 ? v : m && /* @__PURE__ */ e("div", {
                            "data-testid": "asset",
                            className: V,
                            children: m
                        }),
                        /* @__PURE__ */ i(n, {
                            space: 16,
                            children: [
                                /* @__PURE__ */ e(C, {
                                    as: d,
                                    dataAttributes: {
                                        testid: "title"
                                    },
                                    children: l
                                }),
                                /* @__PURE__ */ e(I, {
                                    regular: !0,
                                    as: "p",
                                    color: s ? t.colors.inverse : t.colors.textSecondary,
                                    dataAttributes: {
                                        testid: "description"
                                    },
                                    children: p
                                })
                            ]
                        }),
                        /* @__PURE__ */ e(b, _object_spread({}, y))
                    ]
                })
            }),
            /* @__PURE__ */ e("div", {
                style: {
                    flex: 1,
                    position: "relative"
                },
                children: a && /* @__PURE__ */ e(M, {
                    aspectRatio: 16 / 9,
                    className: $,
                    height: "100%",
                    width: "100%",
                    children: /* @__PURE__ */ e("div", {
                        "data-testid": "image",
                        className: j,
                        style: {
                            backgroundImage: `url(${a})`
                        }
                    })
                })
            })
        ]
    }));
}, Z = w;
export { Z as default };
