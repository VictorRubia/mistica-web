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
import { jsx as r, jsxs as o } from "react/jsx-runtime";
import { Text1 as t } from "./text.js";
import { getPrefixedDataAttributes as f } from "./utils/dom.js";
import h from "./text-link.js";
import { useIsInverseOrMediaVariant as v } from "./theme-variant-context.js";
import { list as x, listItem as l, link as g, current as N } from "./navigation-breadcrumbs.css-mistica.js";
import { vars as e } from "./skins/skin-contract.css-mistica.js";
const b = " / ", B = (param)=>{
    let { title: s, breadcrumbs: n, dataAttributes: c, "aria-label": m = "Breadcrumb" } = param;
    const i = v();
    return /* @__PURE__ */ r("nav", _object_spread_props(_object_spread({
        "aria-label": m
    }, f(c, "NavigationBreadcrumbs")), {
        children: /* @__PURE__ */ o("ol", {
            className: x,
            children: [
                n.map((param, p)=>{
                    let { title: a, url: d, onNavigate: u } = param;
                    return /* @__PURE__ */ o("li", {
                        className: l,
                        children: [
                            /* @__PURE__ */ r(t, {
                                regular: !0,
                                children: /* @__PURE__ */ r(h, {
                                    to: d,
                                    style: {
                                        color: i ? e.colors.textPrimaryInverse : e.colors.textPrimary
                                    },
                                    className: g,
                                    onNavigate: u,
                                    children: a
                                })
                            }),
                            /* @__PURE__ */ r("span", {
                                role: "presentation",
                                children: /* @__PURE__ */ r(t, {
                                    regular: !0,
                                    children: b
                                })
                            })
                        ]
                    }, p);
                }),
                /* @__PURE__ */ r("li", {
                    className: l,
                    children: /* @__PURE__ */ r("a", {
                        "aria-current": "page",
                        href: "#",
                        className: N,
                        onClick: (a)=>{
                            a.preventDefault();
                        },
                        children: /* @__PURE__ */ r(t, {
                            regular: !0,
                            color: i ? e.colors.textSecondaryInverse : e.colors.textSecondary,
                            children: s
                        })
                    })
                })
            ]
        })
    }));
}, S = B;
export { S as default };
