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
import { jsx as e, jsxs as t } from "react/jsx-runtime";
import c from "./stack.js";
import y from "./inline.js";
import A from "./box.js";
import { useTheme as C } from "./hooks.js";
import { useThemeVariant as N, ThemeVariant as R } from "./theme-variant-context.js";
import { Text3 as j, Text2 as S } from "./text.js";
import L from "./generated/mistica-icons/icon-close-regular.js";
import { IconButton as V } from "./icon-button.js";
import k from "classnames";
import P from "./button-group.js";
import { container as $, background as w, content as z, closeButtonContainerSize as D, closeButtonContainer as E } from "./callout.css-mistica.js";
import { vars as G } from "./image.css-mistica.js";
import { vars as d } from "./skins/skin-contract.css-mistica.js";
import { getPrefixedDataAttributes as O } from "./utils/dom.js";
import { applyCssVars as W } from "./utils/css.js";
import { closeButtonLabel as Y } from "./text-tokens.js";
const q = (param)=>{
    let { title: r, titleAs: s = "h2", description: u, asset: i, onClose: a, closeButtonLabel: p, button: l, secondaryButton: m, buttonLink: n, "aria-label": f, dataAttributes: b, role: h } = param;
    const x = N(), { texts: B, t: g } = C(), o = typeof r == "object", v = o && (r == null ? void 0 : r.as) || s, T = o ? r == null ? void 0 : r["aria-label"] : void 0, I = o ? r == null ? void 0 : r.text : r;
    return /* @__PURE__ */ e("section", _object_spread_props(_object_spread({
        className: k($, w[x]),
        style: W({
            [G.mediaBorderRadius]: d.borderRadii.mediaSmall
        }),
        "aria-label": f,
        role: h
    }, O(b, "Callout")), {
        children: /* @__PURE__ */ t(R, {
            isInverse: !1,
            children: [
                i && /* @__PURE__ */ e(A, {
                    paddingRight: 16,
                    dataAttributes: {
                        testid: "asset"
                    },
                    children: i
                }),
                /* @__PURE__ */ t("div", {
                    className: z,
                    children: [
                        /* @__PURE__ */ t(c, {
                            space: 16,
                            children: [
                                /* @__PURE__ */ t(y, {
                                    fullWidth: !0,
                                    alignItems: "flex-start",
                                    space: "between",
                                    children: [
                                        /* @__PURE__ */ t(c, {
                                            space: 4,
                                            children: [
                                                /* @__PURE__ */ e(j, {
                                                    as: v,
                                                    regular: !0,
                                                    dataAttributes: {
                                                        testid: "title"
                                                    },
                                                    "aria-label": T,
                                                    children: I
                                                }),
                                                /* @__PURE__ */ e(S, {
                                                    as: "p",
                                                    regular: !0,
                                                    color: d.colors.textSecondary,
                                                    dataAttributes: {
                                                        testid: "description"
                                                    },
                                                    children: u
                                                })
                                            ]
                                        }),
                                        a && // Create empty div in order to fill space that iconButton occupies.
                                        // Without this, the content's vertical alignment can be affected
                                        /* @__PURE__ */ e("div", {
                                            className: D
                                        })
                                    ]
                                }),
                                (l || m || n) && /* @__PURE__ */ e(P, {
                                    primaryButton: l,
                                    secondaryButton: m,
                                    link: n
                                })
                            ]
                        }),
                        a && /* @__PURE__ */ e("div", {
                            className: E,
                            children: /* @__PURE__ */ e(V, {
                                dataAttributes: {
                                    testid: "closeButton"
                                },
                                small: !0,
                                bleedY: !0,
                                bleedRight: !0,
                                Icon: L,
                                onPress: a,
                                "aria-label": p || B.closeButtonLabel || g(Y)
                            })
                        })
                    ]
                })
            ]
        })
    }));
}, lr = q;
export { lr as default };
