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
import { jsx as e, jsxs as E, Fragment as M } from "react/jsx-runtime";
import * as o from "react";
import A from "classnames";
import { ButtonDanger as _, ButtonPrimary as j, ButtonSecondary as F } from "./button.js";
import { Portal as V } from "./portal.js";
import W from "./focus-trap.js";
import z from "./generated/mistica-icons/icon-close-regular.js";
import { InternalIconButton as K } from "./icon-button.js";
import { isWebViewBridgeAvailable as U, nativeConfirm as Y, nativeAlert as q } from "@tef-novum/webview-bridge";
import { useTheme as D } from "./hooks.js";
import G from "./button-layout.js";
import { Text5 as H, Text4 as I, Text3 as J } from "./text.js";
import { ESC as Q } from "./utils/keys.js";
import w from "./box.js";
import { isRunningAcceptanceTest as X } from "./utils/platform.js";
import { useSetModalStateEffect as Z } from "./modal-context-provider.js";
import $ from "./stack.js";
import { ANIMATION_DURATION_MS as ee, wrapper as te, modalOpacityLayer as oe, closedOpactityLayer as ne, modalContent as ae, closedModalContent as re, modalCloseButtonContainer as ie, variants as se, iconContainer as le, dialogContent as ce, dialogActions as de } from "./dialog.css-mistica.js";
import { vars as ue } from "./skins/skin-contract.css-mistica.js";
import { modalClose as me, dialogCancelButton as P, dialogAcceptButton as O } from "./text-tokens.js";
const fe = ()=>process.env.NODE_ENV !== "test" && !X(), ge = (t)=>{
    const { texts: r, t: u } = D(), { className: f, title: i, message: h, asset: n, extra: d, showCancelButton: s, showAcceptButton: l, cancelText: g = r.dialogCancelButton || u(P), acceptText: p = r.dialogAcceptButton || u(O), onCancel: c, onAccept: y, destructive: R = !1 } = t, m = t.type === "dialog", C = m && !!t.link || l || s, B = {
        onPress: y || (()=>{}),
        children: p,
        // @deprecated - testid should be removed but many webapp tests depend on this
        dataAttributes: {
            testid: "dialog-accept-button"
        }
    };
    return /* @__PURE__ */ E("div", {
        className: A(se[m ? "dialog" : "default"], f),
        children: [
            n && /* @__PURE__ */ e(w, {
                paddingBottom: 24,
                children: /* @__PURE__ */ e("div", {
                    className: le,
                    children: /*#__PURE__*/ o.cloneElement(n, {
                        size: "100%"
                    })
                })
            }),
            i && /* @__PURE__ */ e(w, {
                paddingBottom: 16,
                children: m ? /* @__PURE__ */ e(H, {
                    as: "h2",
                    children: i
                }) : /* @__PURE__ */ e(I, {
                    regular: !0,
                    as: "h2",
                    children: i
                })
            }),
            t.subtitle && /* @__PURE__ */ e(w, {
                paddingBottom: 16,
                children: /* @__PURE__ */ e(I, {
                    regular: !0,
                    as: "h2",
                    children: t.subtitle
                })
            }),
            /* @__PURE__ */ e("div", {
                className: ce,
                children: /* @__PURE__ */ E($, {
                    space: 16,
                    children: [
                        /* @__PURE__ */ e(J, {
                            color: ue.colors.textSecondary,
                            regular: !0,
                            children: h
                        }),
                        d
                    ]
                })
            }),
            C && /* @__PURE__ */ e("div", {
                className: de,
                children: /* @__PURE__ */ e(G, {
                    link: m ? t.link : void 0,
                    primaryButton: l ? R ? /* @__PURE__ */ e(_, _object_spread({
                        tabIndex: 1
                    }, B)) : /* @__PURE__ */ e(j, _object_spread({
                        tabIndex: 1
                    }, B)) : void 0,
                    secondaryButton: s ? /* @__PURE__ */ e(F, {
                        tabIndex: 2,
                        onPress: c || (()=>{}),
                        dataAttributes: {
                            testid: "dialog-cancel-button"
                        },
                        children: g
                    }) : void 0
                })
            })
        ]
    });
}, he = (param)=>{
    let { type: t, message: r, title: u, acceptText: f, cancelText: i, destructive: h, onAccept: n, onCancel: d, onDestroy: s } = param;
    return t === "confirm" ? Y({
        message: r,
        title: u,
        cancelText: i,
        acceptText: f,
        destructive: h
    }).then((l)=>{
        l ? n == null || n() : d == null || d(), s();
    }) : q({
        message: r,
        title: u,
        buttonText: f
    }).then(()=>{
        n == null || n(), s();
    });
}, pe = (param)=>{
    let { type: t, onAccept: r, onCancel: u, onDestroy: f, acceptText: i, cancelText: h, message: n, title: d, destructive: s } = param;
    const { texts: l, t: g } = D(), p = o.useRef({
        type: t,
        onAccept: r,
        onCancel: u,
        onDestroy: f,
        acceptText: i || l.dialogAcceptButton || g(O),
        cancelText: h || l.dialogCancelButton || g(P),
        message: n,
        title: d,
        destructive: s
    }), c = o.useRef(!1);
    return o.useEffect(()=>{
        c.current || (c.current = !0, he(p.current).finally(()=>{
            c.current = !1;
        }));
    }, []), /* @__PURE__ */ e(M, {});
}, Me = (t)=>{
    Z();
    const r = o.useRef(null), { texts: u, t: f } = D(), [i, h] = o.useState(!1), n = o.useRef(!1), d = o.useRef(!1), [s, l] = o.useState(!1), g = o.useRef(!1), p = o.useRef(fe() ? ee : 0), c = t.type !== "dialog" && U(), y = t.type === "dialog", R = t.type === "alert", { onAccept: m, onCancel: C, onDestroy: B } = t, L = _object_without_properties(t, [
        "onAccept",
        "onCancel",
        "onDestroy"
    ]);
    o.useEffect(()=>{
        const a = setTimeout(()=>{
            n.current || l(!0);
        }, p.current);
        return ()=>{
            clearTimeout(a);
        };
    }, []);
    const N = o.useCallback(()=>{
        d.current || (d.current = !0, g.current ? m == null || m() : C == null || C(), B());
    }, [
        m,
        C,
        B
    ]), x = o.useCallback(()=>{
        let a;
        return !n.current && s && (n.current = !0, l(!1), h(!0), a = setTimeout(N, p.current)), ()=>{
            a && clearTimeout(a);
        };
    }, [
        N,
        s
    ]), T = o.useCallback(()=>{
        g.current = !0, x();
    }, [
        x
    ]), b = o.useCallback(()=>{
        g.current = !1, x();
    }, [
        x
    ]), v = o.useCallback(()=>{
        n.current || (R ? T() : b());
    }, [
        T,
        b,
        R
    ]), k = o.useCallback((a)=>{
        a.key === Q && (a.stopPropagation(), a.preventDefault(), v());
    }, [
        v
    ]);
    o.useEffect(()=>{
        if (!c) return document.addEventListener("keydown", k), ()=>{
            document.removeEventListener("keydown", k);
        };
    }, [
        k,
        c
    ]), o.useEffect(()=>{
        if (!c) return window.addEventListener("popstate", v), ()=>{
            window.removeEventListener("popstate", v);
        };
    }, [
        v,
        c
    ]);
    const S = o.useCallback((a)=>{
        a.stopPropagation(), y && b();
    }, [
        y,
        b
    ]);
    return c ? /* @__PURE__ */ e(pe, _object_spread({}, t)) : /* @__PURE__ */ e(V, {
        className: te,
        children: /* @__PURE__ */ e(W, {
            children: /* @__PURE__ */ e("div", {
                onClick: S,
                className: A(oe, {
                    [ne]: i
                }),
                "data-testid": "dialog-overlay",
                "aria-hidden": i || !s,
                children: /* @__PURE__ */ e("div", {
                    role: "dialog",
                    onClick: (a)=>a.stopPropagation(),
                    "data-component-name": "Dialog",
                    children: /* @__PURE__ */ E("div", {
                        ref: r,
                        onAnimationEnd: (a)=>{
                            a.target === r.current && (n.current || l(!0));
                        },
                        onTransitionEnd: (a)=>{
                            a.target === r.current && n.current && N();
                        },
                        className: A(ae, {
                            [re]: i
                        }),
                        children: [
                            y && /* @__PURE__ */ e("div", {
                                className: ie,
                                children: /* @__PURE__ */ e(K, {
                                    onPress: v,
                                    "aria-label": t.closeButtonLabel || u.modalClose || f(me),
                                    bleedLeft: !0,
                                    bleedRight: !0,
                                    bleedY: !0,
                                    Icon: z
                                })
                            }),
                            /* @__PURE__ */ e(ge, _object_spread_props(_object_spread({}, L), {
                                showAcceptButton: t.type !== "dialog" || !!t.onAccept,
                                showCancelButton: t.type === "confirm" || t.type === "dialog" && !!t.onCancel,
                                onCancel: b,
                                onAccept: T
                            }))
                        ]
                    })
                })
            })
        })
    });
};
export { Me as default };
