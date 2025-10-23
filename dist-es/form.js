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
import { jsx as y, jsxs as U } from "react/jsx-runtime";
import * as n from "react";
import { useTheme as z } from "./hooks.js";
import { FormContext as H } from "./form-context.js";
import K from "classnames";
import { form as Q } from "./form.css-mistica.js";
import { formFieldErrorIsMandatory as X, formErrorsAlertMessage as Y } from "./text-tokens.js";
import Z from "./screen-reader-only.js";
import { isIos as J } from "./utils/platform.js";
import { getPrefixedDataAttributes as ee } from "./utils/dom.js";
process.env.NODE_ENV !== "test" && typeof document < "u" && !("scrollBehavior" in document.documentElement.style) && import("scroll-behavior-polyfill").finally(()=>{});
const te = (param)=>{
    let { children: M, className: A, onSubmit: g, initialValues: O = {}, autoJump: k = !1, onValidationErrors: a, getErrorMessageForScreenReader: F, id: P, dataAttributes: T } = param;
    const f = n.useRef(!0), [u, V] = n.useState(O), [i, w] = n.useState(O), [D, m] = n.useState("filling"), [d, I] = n.useState({}), l = n.useRef(/* @__PURE__ */ new Map()), p = n.useRef(null), { texts: b, t: h, platformOverrides: v } = z(), L = n.useId(), C = P || L;
    n.useEffect(()=>(f.current = !0, ()=>{
            f.current = !1;
        }), []);
    const W = n.useCallback((e, param)=>{
        let { input: s, validator: o, focusableElement: t, label: r } = param;
        s || t ? l.current.set(e, {
            input: s,
            validator: o,
            focusableElement: t,
            label: r
        }) : l.current.delete(e);
    }, []), B = n.useCallback((param)=>{
        let { name: e, error: s } = param;
        return I((o)=>_object_spread_props(_object_spread({}, o), {
                [e]: s
            }));
    }, []), N = n.useCallback((e)=>J(v) ? !(e.tagName === "SELECT" || [
            "date",
            "datetime-local",
            "month"
        ].includes(e.type)) : !0, [
        v
    ]), E = n.useCallback(()=>{
        var o;
        const e = {};
        for (const [t, { input: r, validator: c }] of l.current)if (r) {
            if (r.disabled) continue;
            if (r.required && !((o = i[t]) != null && o.trim())) e[t] = b.formFieldErrorIsMandatory || h(X);
            else {
                const j = c == null ? void 0 : c(u[t], i[t]);
                j && (e[t] = j);
            }
        }
        const s = Object.keys(e).map((t)=>{
            const r = l.current.get(t);
            return (r == null ? void 0 : r.focusableElement) || (r == null ? void 0 : r.input);
        }).filter(Boolean);
        if (s.length) {
            s.sort((r, c)=>r.compareDocumentPosition(c) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
            const t = s[0];
            N(t) && t.focus();
            try {
                t.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center"
                });
            } catch (e) {}
        }
        return I(e), a && Object.keys(e).length > 0 && a(e), e;
    }, [
        a,
        i,
        b.formFieldErrorIsMandatory,
        h,
        u,
        N
    ]), _ = n.useCallback((e)=>{
        setTimeout(()=>{
            var s;
            if (k && p.current) {
                const o = Array.from(p.current.querySelectorAll("input, select")), t = (s = l.current.get(e)) == null ? void 0 : s.input, r = o.indexOf(t);
                if (r >= 0) {
                    const c = o[r + 1];
                    c ? c.focus() : t == null || t.blur();
                }
            }
        }, 100);
    }, [
        k
    ]), x = (e)=>[
            ...l.current.keys()
        ].reduce((s, o)=>{
            var t, r;
            return (r = (t = l.current.get(o)) == null ? void 0 : t.input) != null && r.disabled ? s : _object_spread_props(_object_spread({}, s), {
                [o]: e[o]
            });
        }, {}), S = n.useCallback((e)=>(e == null || e.preventDefault(), m("sending"), Object.keys(E()).length > 0 ? (m("filling"), Promise.resolve()) : Promise.resolve(g(x(u), x(i))).finally(()=>{
            f.current && m("filling");
        })), [
        g,
        i,
        E,
        u
    ]), $ = n.useCallback((param)=>{
        let { name: e, value: s } = param;
        V((o)=>_object_spread_props(_object_spread({}, o), {
                [e]: s
            }));
    }, []), q = n.useCallback((param)=>{
        let { name: e, value: s } = param;
        w((o)=>_object_spread_props(_object_spread({}, o), {
                [e]: s
            }));
    }, []), R = Object.entries(d).map((param)=>{
        let [e, s] = param;
        var o;
        return s && ((o = l.current.get(e)) == null ? void 0 : o.label);
    }).filter(Boolean), G = R.length > 1;
    return /* @__PURE__ */ y(H.Provider, {
        value: {
            formStatus: D,
            values: u,
            setValue: $,
            rawValues: i,
            setRawValue: q,
            formErrors: d,
            setFormError: B,
            register: W,
            jumpToNext: _,
            validate: E,
            submit: S,
            formId: C
        },
        children: /* @__PURE__ */ U("form", _object_spread_props(_object_spread({
            id: C,
            onSubmit: S,
            ref: p,
            className: K(Q, A),
            noValidate: !0
        }, ee(T, "Form")), {
            children: [
                G ? /* @__PURE__ */ y(Z, {
                    children: /* @__PURE__ */ y("span", {
                        role: "alert",
                        children: F ? F(d) : `${b.formErrorsAlertMessage || h(Y)} ${R.join(", ")}`
                    })
                }) : null,
                M
            ]
        }))
    });
}, fe = te;
export { fe as default };
