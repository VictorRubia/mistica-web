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
import { jsx as r, jsxs as b } from "react/jsx-runtime";
import * as e from "react";
import D, { BaseTouchable as U } from "./touchable.js";
import N from "classnames";
import { isWebViewBridgeAvailable as A } from "@tef-novum/webview-bridge";
import { useTheme as L, useElementDimensions as W, useScreenSize as C } from "./hooks.js";
import { Text2 as x, Text3 as M } from "./text.js";
import { TRANSITION_TIME_IN_MS as P, snackbarContainer as z, snackbar as F, snackbarOpen as H, wrapper as V, wrapperCritical as j, wrapperInfo as y, wrapperOpen as $, contentWithLongButton as q, contentWithoutLongButton as G, button as J, longButton as K, buttonTouchable as Q, dismissButton as X, dismissIcon as Y } from "./snackbar.css-mistica.js";
import { vars as R } from "./skins/skin-contract.css-mistica.js";
import { getPrefixedDataAttributes as Z } from "./utils/dom.js";
import { Portal as ee } from "./portal.js";
import re from "./generated/mistica-icons/icon-close-regular.js";
import { closeButtonLabel as te } from "./text-tokens.js";
import { showNativeSnackbar as oe } from "./snackbar-native.js";
const ne = 5e3, se = 1e4, ce = /*#__PURE__*/ e.forwardRef((param, v)=>{
    let { message: i, buttonText: t, buttonAccessibilityLabel: l, closeButtonLabel: T, duration: o, onClose: n, type: s, withDismiss: u = !1, dataAttributes: S } = param;
    const { texts: m, t: f } = L(), [c, p] = e.useState(!1), { width: k, ref: _ } = W(), { isDesktopOrBigger: w } = C(), d = k > (w ? 160 : 128), E = e.useRef(null), B = o === "PERSISTENT" && !t || u, O = t ? se : ne, h = e.useRef(n);
    e.useEffect(()=>{
        h.current = n;
    }, [
        n
    ]);
    const a = e.useCallback((g)=>{
        p(!1), setTimeout(()=>{
            var I;
            (I = h.current) == null || I.call(h, g);
        }, process.env.NODE_ENV === "test" ? 0 : P);
    }, []);
    return e.useImperativeHandle(v, ()=>_object_spread_props(_object_spread({}, E), {
            close: a
        }), [
        a
    ]), e.useEffect(()=>{
        const g = setTimeout(()=>{
            p(!0);
        }, 50), I = o !== "PERSISTENT" ? setTimeout(()=>a({
                action: "TIMEOUT"
            }), O) : void 0;
        return ()=>{
            clearTimeout(g), clearTimeout(I);
        };
    }, [
        a,
        o,
        O
    ]), /* @__PURE__ */ r(ee, {
        className: z,
        children: /* @__PURE__ */ r("div", {
            ref: E,
            className: N(F, {
                [H]: c
            }),
            children: /* @__PURE__ */ b("div", _object_spread_props(_object_spread({
                role: "alert",
                className: N(V, s === "CRITICAL" ? j : y, {
                    [$]: c
                })
            }, Z(S, "SnackBar")), {
                children: [
                    /* @__PURE__ */ b("div", {
                        className: N(d ? q : G),
                        style: B && !d ? {
                            paddingRight: 32
                        } : void 0,
                        children: [
                            /* @__PURE__ */ r("div", {
                                style: B && d ? {
                                    paddingRight: 32
                                } : void 0,
                                children: /* @__PURE__ */ r(x, {
                                    regular: !0,
                                    color: R.colors.textPrimaryInverse,
                                    children: i
                                })
                            }),
                            t && /* @__PURE__ */ r("div", {
                                className: N(J, {
                                    [K]: d
                                }),
                                children: /* @__PURE__ */ r(U, {
                                    className: Q,
                                    ref: _,
                                    onPress: ()=>{
                                        a({
                                            action: "BUTTON"
                                        });
                                    },
                                    "aria-label": l,
                                    children: /* @__PURE__ */ r(M, {
                                        medium: !0,
                                        forceMobileSizes: !0,
                                        truncate: !0,
                                        color: s === "CRITICAL" ? R.colors.textPrimaryInverse : R.colors.textLinkSnackbar,
                                        children: t
                                    })
                                })
                            })
                        ]
                    }),
                    B ? /* @__PURE__ */ r(D, {
                        onPress: ()=>{
                            a({
                                action: "DISMISS"
                            });
                        },
                        "aria-label": T || m.closeButtonLabel || f(te),
                        className: X[d ? "topRight" : "centered"],
                        style: {
                            display: "flex",
                            width: 32,
                            height: 32
                        },
                        children: /* @__PURE__ */ r("div", {
                            className: Y,
                            children: /* @__PURE__ */ r(re, {
                                color: R.colors.inverse,
                                size: 20
                            })
                        })
                    }) : null
                ]
            }))
        })
    });
}), ae = /*#__PURE__*/ e.forwardRef((param, v)=>{
    let { message: i, buttonText: t, buttonAccessibilityLabel: l, closeButtonLabel: T, duration: o, onClose: n = ()=>{}, type: s = "INFORMATIVE", withDismiss: u, dataAttributes: S } = param;
    const m = A(), f = e.useRef(n), c = e.useRef(!1);
    return e.useEffect(()=>{
        f.current = n;
    }, [
        n
    ]), e.useEffect(()=>{
        m && !c.current && (c.current = !0, oe({
            message: i,
            duration: o,
            buttonText: t,
            buttonAccessibilityLabel: l,
            type: s,
            withDismiss: u
        }).then((param)=>{
            let { action: p } = param;
            f.current({
                action: p
            });
        }).finally(()=>{
            c.current = !1;
        }));
    }, [
        l,
        T,
        t,
        o,
        i,
        m,
        s,
        u
    ]), m ? null : /* @__PURE__ */ r(ce, {
        ref: v,
        message: i,
        duration: o,
        buttonText: t,
        buttonAccessibilityLabel: l,
        closeButtonLabel: T,
        type: s,
        onClose: f.current,
        withDismiss: u,
        dataAttributes: S
    });
}), Be = ae;
export { Be as default };
