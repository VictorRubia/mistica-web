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
import { jsxs as y, Fragment as E, jsx as o } from "react/jsx-runtime";
import * as m from "react";
import H from "classnames";
import { BaseTouchable as z } from "./touchable.js";
import C from "./responsive-layout.js";
import { useTheme as O, useElementDimensions as V } from "./hooks.js";
import { Text as W } from "./text.js";
import { isRunningAcceptanceTest as F } from "./utils/platform.js";
import { getPrefixedDataAttributes as M } from "./utils/dom.js";
import { outerBorderInverse as _, outerBorder as j, outer as K, inner as q, tabsContainer as G, tabVariants as U, tabSelectionVariants as l, tabHover as $, icon as x, animatedLine as J } from "./tabs.css-mistica.js";
import Q from "./inline.js";
import { useIsInverseOrMediaVariant as X } from "./theme-variant-context.js";
import { vars as N } from "./skins/skin-contract.css-mistica.js";
import { RIGHT as Y, LEFT as Z } from "./utils/keys.js";
const g = F() ? 0 : 300, P = (i)=>{
    switch(i){
        case 1:
        case 2:
        case 3:
            return "fullWidth";
        default:
            return "default";
    }
}, ee = (_param)=>{
    var { selectedIndex: i, onChange: k, tabs: d, dataAttributes: w, selectedTabRef: R, renderPanel: f } = _param, b = _object_without_properties(_param, [
        "selectedIndex",
        "onChange",
        "tabs",
        "dataAttributes",
        "selectedTabRef",
        "renderPanel"
    ]);
    const { textPresets: c } = O(), u = m.useId(), { ref: S } = V(), v = m.useRef(null), I = m.useRef(null), [L, T] = m.useState(!1), n = X(), p = (s)=>{
        var _d_s_id;
        return (_d_s_id = d[s].id) !== null && _d_s_id !== void 0 ? _d_s_id : `${u}-tab-${s}`;
    }, A = (s)=>{
        var _d_s_ariacontrols;
        return (_d_s_ariacontrols = d[s]["aria-controls"]) !== null && _d_s_ariacontrols !== void 0 ? _d_s_ariacontrols : f ? `${u}-tabpanel-${s}` : void 0;
    }, D = (s, a)=>{
        const r = document.getElementById(p(s)), t = document.getElementById(p(a)), e = v.current, h = I.current;
        r && t && e && h && (T(!0), e.style.display = "block", e.style.width = `${r.offsetWidth}px`, e.style.transform = `translate(${r.offsetLeft - h.scrollLeft}px, 0)`, Promise.resolve().then(()=>{
            e.style.transition = `transform ${g}ms, width ${g}ms`, e.style.width = `${t.offsetWidth}px`, e.style.transform = `translate(${t.offsetLeft - h.scrollLeft}px, 0)`;
        }), setTimeout(()=>{
            e.style.transition = "", e.style.display = "none", T(!1);
        }, g));
    }, B = m.useCallback((s)=>{
        const a = Array.from(s.currentTarget.querySelectorAll('[role="tab"]')), r = document.activeElement, t = a.indexOf(r);
        if (t !== -1) {
            if (s.key === Y) {
                s.preventDefault();
                const e = t < a.length - 1 ? a[t + 1] : a[0];
                e == null || e.focus();
            } else if (s.key === Z) {
                s.preventDefault();
                const e = t > 0 ? a[t - 1] : a[a.length - 1];
                e == null || e.focus();
            }
        }
    }, []);
    return /* @__PURE__ */ y(E, {
        children: [
            /* @__PURE__ */ o("div", _object_spread_props(_object_spread({
                id: u,
                role: "tablist",
                ref: S,
                className: n ? _ : j
            }, M(w, "Tabs")), {
                "aria-label": b["aria-label"],
                "aria-labelledby": b["aria-labelledby"],
                "aria-description": b["aria-description"],
                "aria-describedby": b["aria-describedby"],
                children: /* @__PURE__ */ o(C, {
                    fullWidth: !0,
                    children: /* @__PURE__ */ y("div", {
                        className: K,
                        children: [
                            /* @__PURE__ */ o("div", {
                                ref: I,
                                className: q,
                                children: /* @__PURE__ */ o("div", {
                                    className: G,
                                    onKeyDown: B,
                                    children: d.map((param, t)=>{
                                        let { text: s, trackingEvent: a, Icon: r } = param;
                                        const e = t === i;
                                        return /* @__PURE__ */ o(z, {
                                            id: p(t),
                                            tabIndex: e ? void 0 : -1,
                                            ref: e ? R : void 0,
                                            dataAttributes: {
                                                "component-name": "Tab"
                                            },
                                            className: H(U[P(d.length)], e ? L ? n ? l.selectedAnimatingInverse : l.selectedAnimating : n ? l.selectedInverse : l.selected : n ? l.noSelectedInverse : l.noSelected, n ? $.inverse : $.default),
                                            onPress: ()=>{
                                                !L && i !== t && (k(t), D(i, t));
                                            },
                                            trackingEvent: a,
                                            role: "tab",
                                            "aria-controls": A(t),
                                            "aria-selected": e ? "true" : "false",
                                            children: /* @__PURE__ */ y(Q, {
                                                space: r && s ? 8 : 0,
                                                alignItems: "center",
                                                children: [
                                                    r && /* @__PURE__ */ o("div", {
                                                        className: x,
                                                        children: /* @__PURE__ */ o(r, {
                                                            size: "100%",
                                                            color: "currentColor"
                                                        })
                                                    }),
                                                    /* @__PURE__ */ o(W, {
                                                        as: "div",
                                                        desktopSize: c.tabsLabel.size.desktop,
                                                        mobileSize: c.tabsLabel.size.mobile,
                                                        desktopLineHeight: c.tabsLabel.lineHeight.desktop,
                                                        mobileLineHeight: c.tabsLabel.lineHeight.mobile,
                                                        weight: c.tabsLabel.weight,
                                                        color: "inherit",
                                                        wordBreak: !1,
                                                        textAlign: "center",
                                                        hyphens: "auto",
                                                        children: s
                                                    })
                                                ]
                                            })
                                        }, t);
                                    })
                                })
                            }),
                            /* @__PURE__ */ o("div", {
                                ref: v,
                                className: J,
                                style: {
                                    background: n ? N.colors.controlActivatedInverse : N.colors.controlActivated
                                }
                            })
                        ]
                    })
                })
            })),
            f == null ? void 0 : f({
                selectedIndex: i,
                panelProps: {
                    role: "tabpanel",
                    tabIndex: 0,
                    id: A(i),
                    "aria-labelledby": `${u}-tab-${i}`
                }
            })
        ]
    });
}, ue = ee;
export { ue as default };
