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
import { jsxs as l, jsx as e, Fragment as g } from "react/jsx-runtime";
import { timelineItem as N, timelineItemState as T, lineContainer as x, asset as A, line as z, itemContent as S, timeline as V, assetNumberContainer as j } from "./timeline.css-mistica.js";
import w from "classnames";
import b from "./circle.js";
import { vars as o } from "./skins/skin-contract.css-mistica.js";
import p from "./generated/mistica-icons/icon-check-filled.js";
import { Text1 as B } from "./text.js";
import { useThemeVariant as O, ThemeVariant as D } from "./theme-variant-context.js";
import { useTheme as F } from "./hooks.js";
import { getPrefixedDataAttributes as h } from "./utils/dom.js";
import { isRunningAcceptanceTest as M } from "./utils/platform.js";
const f = (param)=>{
    let { begin: r, stroke: i } = param;
    const n = {
        dur: "2s",
        repeatCount: "indefinite",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.42, 0, 0.58, 1"
    };
    return /* @__PURE__ */ l("circle", {
        cx: "12",
        cy: "12",
        r: "6",
        strokeWidth: 1,
        stroke: i,
        fill: "none",
        children: [
            /* @__PURE__ */ e("animate", _object_spread_props(_object_spread({
                attributeName: "r",
                values: "6; 11"
            }, n), {
                begin: r
            })),
            /* @__PURE__ */ e("animate", _object_spread_props(_object_spread({
                attributeName: "opacity",
                values: "1; 0"
            }, n), {
                begin: r
            }))
        ]
    });
}, Y = (param)=>{
    let { asset: r = {
        kind: "dot"
    }, state: i = "inactive", role: n = "listitem", "aria-label": s, "aria-labelledby": d, dataAttributes: m, children: k } = param;
    const { isDarkMode: C } = F(), y = O(), c = (C ? "default" : y) === "inverse", u = (param)=>{
        let { size: a, iconSize: v } = param;
        return /* @__PURE__ */ e(b, {
            background: c ? o.colors.backgroundContainerBrandOverInverse : o.colors.backgroundContainerBrand,
            size: a,
            children: /* @__PURE__ */ e(p, {
                size: v,
                color: o.colors.inverse
            })
        });
    }, I = ()=>{
        if (!r) return null;
        if (typeof r == "object" && "kind" in r) {
            const a = c ? o.colors.controlActivatedInverse : o.colors.controlActivated, t = {
                inactive: c ? o.colors.controlInverse : o.colors.control,
                active: a,
                completed: a
            }[i];
            switch(r.kind){
                case "dot":
                    return /* @__PURE__ */ l("svg", {
                        style: {
                            display: "block"
                        },
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        children: [
                            i === "active" && !M() && /* @__PURE__ */ l(g, {
                                children: [
                                    /* @__PURE__ */ e(f, {
                                        stroke: t
                                    }),
                                    /* @__PURE__ */ e(f, {
                                        stroke: t,
                                        begin: "1s"
                                    })
                                ]
                            }),
                            /* @__PURE__ */ e("circle", {
                                cx: "12",
                                cy: "12",
                                r: "6",
                                strokeWidth: 2,
                                stroke: t,
                                fill: i === "completed" ? t : "none"
                            })
                        ]
                    });
                case "number":
                    return i === "completed" ? u({
                        size: 32,
                        iconSize: 16
                    }) : /* @__PURE__ */ e("div", {
                        className: j,
                        children: /* @__PURE__ */ e(D, {
                            variant: "default",
                            children: /* @__PURE__ */ e(B, {
                                medium: !0,
                                color: i === "active" ? o.colors.textActivated : o.colors.textSecondary,
                                children: r.number
                            })
                        })
                    });
                case "icon":
                    return i === "completed" ? /* @__PURE__ */ e(p, {
                        size: 24,
                        color: t
                    }) : r.Icon ? /* @__PURE__ */ e(r.Icon, {
                        size: 24,
                        color: t
                    }) : null;
                case "circled-icon":
                    return i === "completed" ? u({
                        size: 40,
                        iconSize: 24
                    }) : /* @__PURE__ */ e(b, {
                        background: o.colors.backgroundContainer,
                        size: 40,
                        border: !c,
                        children: r.Icon && /* @__PURE__ */ e(r.Icon, {
                            size: 24,
                            color: i === "inactive" ? o.colors.control : o.colors.controlActivated
                        })
                    });
                default:
                    return null;
            }
        }
        return r;
    };
    return /* @__PURE__ */ l("div", _object_spread_props(_object_spread({
        className: w(N, T[i]),
        role: n,
        "aria-label": s,
        "aria-labelledby": d,
        "aria-current": i === "active" ? "step" : void 0
    }, h(m, "TimelineItem")), {
        children: [
            /* @__PURE__ */ l("div", {
                className: x,
                children: [
                    /* @__PURE__ */ e("div", {
                        className: A,
                        "aria-hidden": !0,
                        children: I()
                    }),
                    /* @__PURE__ */ e("div", {
                        className: z[c ? "inverse" : "default"]
                    })
                ]
            }),
            /* @__PURE__ */ e("div", {
                className: S,
                children: k
            })
        ]
    }));
}, P = (param)=>{
    let { children: r, orientation: i = "vertical", role: n = "list", "aria-label": s, "aria-labelledby": d, dataAttributes: m } = param;
    return /* @__PURE__ */ e("div", _object_spread_props(_object_spread({
        className: V[i],
        role: n,
        "aria-label": s,
        "aria-labelledby": d
    }, h(m, "Timeline")), {
        children: r
    }));
}, Z = P;
export { Y as TimelineItem, Z as default };
