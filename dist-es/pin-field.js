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
import { jsxs as D, jsx as c } from "react/jsx-runtime";
import H from "classnames";
import * as a from "react";
import E from "./inline.js";
import { input as L } from "./text-field-base.css-mistica.js";
import { fieldContainer as j, disabled as B, readOnlyField as O, focusedField as W, field as q, input as z, passwordInput as K, pinInputLineHeight as A, passwordDot as M } from "./pin-field.css-mistica.js";
import { useTheme as _ } from "./hooks.js";
import G from "./screen-reader-only.js";
import { IntegerInput as J } from "./integer-field.js";
import { useFieldProps as Q } from "./form-context.js";
import { getPrefixedDataAttributes as U, createChangeEvent as X } from "./utils/dom.js";
import { HelperText as Y } from "./text-field-components.js";
import { flushSync as Z } from "react-dom";
import { pinFieldInputLabel as x } from "./text-tokens.js";
import { vars as ee } from "./skins/skin-contract.css-mistica.js";
let R = !1;
const te = (param)=>{
    let { length: i = 6, hideCode: n = !1, readSms: d, disabled: h, readOnly: g, value: y, defaultValue: b, onChange: f, inputRef: S } = param;
    var _ref;
    const { texts: C, t: T } = _(), [k, v] = a.useState((_ref = b == null ? void 0 : b.slice(0, i)) !== null && _ref !== void 0 ? _ref : ""), [F, w] = a.useState(void 0), l = a.useRef(Array.from({
        length: i
    }, ()=>null)).current, u = typeof y < "u", r = u ? y : k, p = a.useCallback((s)=>{
        if (s === r) return;
        u || v(s);
        const e = l[0];
        e && (f == null || f(X(_object_spread({}, e), s)));
    }, [
        r,
        l,
        u,
        f
    ]);
    a.useEffect(()=>{
        p(r.slice(0, i));
    }, [
        i,
        r,
        p
    ]), a.useEffect(()=>{
        if (d && "OTPCredential" in window && !R) {
            R = !0;
            const s = new AbortController();
            return navigator.credentials.get({
                // @ts-expect-error: otp is not in the types yet
                otp: {
                    transport: [
                        "sms"
                    ]
                },
                signal: s.signal
            }).then((e)=>{
                if (e) {
                    const t = e.code.slice(0, i);
                    p(t);
                }
            }).catch(()=>{}).finally(()=>{
                R = !1;
            }), ()=>{
                R = !1, s.abort();
            };
        }
    }, [
        p,
        i,
        d
    ]);
    const $ = (s)=>(e)=>{
            var V;
            const t = e.target.value;
            if (t === "") return;
            const o = r[s];
            let m = t;
            !o || o === t ? m = t : o === t[0] ? m = t.slice(1) : o === t[t.length - 1] && (m = t.slice(0, -1));
            let I = s, P = r;
            if (m.length >= 2) {
                const N = m.slice(0, i - s);
                P = r.slice(0, s) + N, I = Math.min(s + N.length, i - 1);
            } else P = r.slice(0, s) + m + r.slice(s + 1), I = s + 1;
            P !== r && (Z(()=>{
                p(P);
            }), I !== s && I <= i - 1 && ((V = l[I]) == null || V.focus()));
        };
    return /* @__PURE__ */ c(E, {
        space: 8,
        wrap: !0,
        verticalSpace: 16,
        children: Array.from({
            length: i
        }).map((s, e)=>/* @__PURE__ */ {
            var _r_e;
            return D("div", {
                className: g ? O : e === F ? W : q,
                children: [
                    /* @__PURE__ */ c(J, {
                        "aria-label": (C.pinFieldInputLabel || T(x)).replace("1$s", String(e + 1)).replace("2$s", String(i)),
                        type: n ? "password" : "text",
                        tabIndex: e > r.length ? -1 : void 0,
                        required: !0,
                        onFocus: ()=>{
                            var o;
                            const t = r.length === i ? -1 : r.length;
                            t >= 0 && t < e ? (o = l[t]) == null || o.focus() : w(e);
                        },
                        onBlur: ()=>{
                            w(void 0);
                        },
                        inputRef: (t)=>{
                            l[e] = t, e === 0 && S(t);
                        },
                        className: H(L, z, {
                            [K]: n
                        }),
                        style: {
                            lineHeight: A,
                            fontSize: A,
                            height: `calc(${A} * 3 - 2px)`,
                            borderRadius: ee.borderRadii.input
                        },
                        disabled: h,
                        readOnly: g,
                        autoComplete: d ? "one-time-code" : void 0,
                        value: (_r_e = r[e]) !== null && _r_e !== void 0 ? _r_e : "",
                        onChange: $(e),
                        onKeyDown: (t)=>{
                            switch(t.key){
                                case "Backspace":
                                case "Delete":
                                    if (t.currentTarget.value && p(r.slice(0, e) + r.slice(e + 1)), e > 0 && e >= r.length - 1) {
                                        const o = l[e - 1];
                                        o == null || o.focus();
                                    }
                                    break;
                                case "ArrowLeft":
                                    if (e > 0) {
                                        const o = l[e - 1];
                                        o && o.focus();
                                    }
                                    break;
                                case "ArrowRight":
                                    if (e < i - 1) {
                                        const o = l[e + 1];
                                        o && o.focus();
                                    }
                                    break;
                            }
                        }
                    }),
                    n && r[e] && /* @__PURE__ */ c("div", {
                        "aria-hidden": !0,
                        className: M,
                        children: "•"
                    })
                ]
            }, e);
        })
    });
}, re = (param)=>{
    let { length: i = 6, hideCode: n = !1, readSms: d = !n, // by default, don't read sms if the code is hidden (password input type)
    disabled: h, readOnly: g, name: y, value: b, defaultValue: f, helperText: S, error: C, onChangeValue: T, onChange: k, "aria-label": v, "aria-labelledby": F, dataAttributes: w } = param;
    const l = Q({
        name: y,
        label: v !== null && v !== void 0 ? v : "",
        value: b,
        defaultValue: f,
        processValue: (r)=>r,
        helperText: S,
        optional: !1,
        error: C,
        disabled: h,
        onChangeValue: T,
        onChange: k
    }), u = a.useId();
    return /* @__PURE__ */ D("div", _object_spread_props(_object_spread({
        role: "group",
        "aria-labelledby": F !== null && F !== void 0 ? F : u,
        className: H(j, {
            [B]: h
        })
    }, U(w, "PinField")), {
        children: [
            v && !F && /* @__PURE__ */ c(G, {
                children: /* @__PURE__ */ c("div", {
                    id: u,
                    children: v
                })
            }),
            /* @__PURE__ */ c(te, {
                inputRef: l.inputRef,
                length: i,
                hideCode: n,
                readSms: d,
                value: l.value,
                defaultValue: l.defaultValue,
                disabled: l.disabled,
                onChange: l.onChange,
                readOnly: g
            }),
            /* @__PURE__ */ c(Y, {
                error: l.error,
                leftText: l.helperText
            })
        ]
    }));
}, he = re;
export { he as default };
