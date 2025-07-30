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
import { jsx as g, jsxs as re } from "react/jsx-runtime";
import * as c from "react";
import { iosThumb as ne, defaultThumb as ae, thumbHover as se, thumbActive as ce, container as ie, disabled as le, track as ue, thumbContainer as fe, input as de } from "./slider.css-mistica.js";
import { vars as M } from "./skins/skin-contract.css-mistica.js";
import { isTouchableDevice as he } from "./utils/environment.js";
import x from "classnames";
import { cancelEvent as C } from "./utils/dom.js";
import { useTheme as be } from "./hooks.js";
import ge from "./tooltip.js";
import ve from "./box.js";
import { useControlProps as me } from "./form-context.js";
import { combineRefs as Re } from "./utils/common.js";
import { useIsInverseVariant as Ve } from "./theme-variant-context.js";
const Ce = 48, Ie = 20, Pe = 28, Te = (n, t, o)=>t >= o ? 0 : (n - t) / (o - t), B = (n, t, o, a, h)=>{
    const v = (i)=>{
        if (i === void 0) return t;
        const $ = n ? t + (o - t) * i : i;
        return Math.max(t, Math.min(o, $));
    };
    if (t >= o) return t;
    const b = v(h), I = t + Math.floor((b - t) / a) * a, m = t + Math.ceil((b - t) / a) * a;
    return m <= o && m - b <= b - I ? m : I;
}, N = (n, t, o)=>{
    if (!o) return t;
    if (t === void 0) return n;
    let a = 0;
    return o.forEach((h, v)=>{
        o && Math.abs(h - t) <= Math.abs(o[a] - t) && (a = v);
    }), a;
}, pe = /*#__PURE__*/ c.forwardRef((_param, $)=>{
    var { values: n, step: t = 1, min: o = 0, max: a = 100, "aria-label": h, "aria-labelledby": v, id: b, dataAttributes: I, tooltip: m } = _param, i = _object_without_properties(_param, [
        "values",
        "step",
        "min",
        "max",
        "aria-label",
        "aria-labelledby",
        "id",
        "dataAttributes",
        "tooltip"
    ]);
    n && (n.length === 0 ? n = void 0 : a = n.length - 1), t = t | 0, t = t <= 0 ? 1 : t;
    const { defaultValue: z, value: U, onChange: _, focusableRef: q, disabled: F, name: G } = me({
        name: i.name,
        label: h,
        value: i.value !== void 0 ? B(!1, o, a, t, N(o, i.value, n)) : void 0,
        defaultValue: i.defaultValue !== void 0 ? B(!1, o, a, t, N(o, i.defaultValue, n)) : void 0,
        onChange: i.onChangeValue,
        disabled: i.disabled
    }), [J, K] = c.useState(U !== null && U !== void 0 ? U : B(!1, o, a, t, N(o, z, n))), u = U !== null && U !== void 0 ? U : J, A = c.useRef(u), P = c.useCallback((e, r)=>{
        const s = B(r, o, a, t, e);
        A.current !== s && (_(n ? n[s] : s), K(s), A.current = s);
    }, [
        o,
        a,
        t,
        n,
        _
    ]);
    c.useEffect(()=>{
        P(A.current, !1);
    }, [
        P
    ]);
    const O = c.useRef(null), R = c.useRef(null), X = c.useRef(null), Q = c.useRef(null), [T, p] = c.useState(!1), [y, L] = c.useState(!1), [W, Y] = c.useState(!1), { isIos: E } = be(), k = Ve(), w = k ? "inverse" : "default", D = (e, r, s)=>{
        const d = e == null ? void 0 : e.getBoundingClientRect();
        return !!d && d.left <= r && r <= d.right && d.top <= s && s <= d.bottom;
    }, l = he(), V = E ? Pe : Ie, f = l ? Ce : V, S = (e)=>{
        const r = O.current;
        if (r) {
            const s = r.getBoundingClientRect().left + V / 2, d = r.getBoundingClientRect().right - V / 2;
            P((e - s) / (d - s), !0);
        }
    }, ee = (e)=>{
        C(e), S(e.clientX);
    }, te = (e)=>{
        const r = R.current;
        r && (r.onpointermove = ee, r.setPointerCapture(e.pointerId));
    }, oe = (e)=>{
        const r = R.current;
        r && (r.onpointermove = null, r.releasePointerCapture(e.pointerId));
    }, H = `calc(${Te(u, o, a)} * (100% - ${V}px) - ${(f - V) / 2}px)`, j = `calc(${H} + ${f / 2}px)`, Z = /* @__PURE__ */ g("div", {
        className: x(E ? ne : ae[w], {
            [se[w]]: !E && y && !T,
            [ce[w]]: !E && T
        })
    });
    return /* @__PURE__ */ g(ve, {
        paddingY: 8,
        dataAttributes: _object_spread({
            "component-name": "Slider"
        }, I),
        children: /* @__PURE__ */ re("div", {
            className: x(ie, {
                [le]: F
            }),
            style: {
                height: f
            },
            ref: X,
            onPointerDown: (e)=>{
                const r = e.clientX, s = e.clientY;
                !l && D(X.current, r, s) ? (D(R.current, r, s) || S(r), p(!0), te(e)) : C(e);
            },
            onPointerUp: (e)=>{
                l || (p(!1), oe(e));
            },
            onTouchStart: (e)=>{
                if (C(e), l) {
                    const r = e.nativeEvent.touches[0].clientX, s = e.nativeEvent.touches[0].clientY;
                    D(R.current, r, s) || S(r), p(!0);
                }
            },
            onTouchEnd: (e)=>{
                C(e), l && p(!1);
            },
            onTouchMove: (e)=>{
                C(e), l && S(e.nativeEvent.touches[0].clientX);
            },
            children: [
                /* @__PURE__ */ g("div", {
                    className: ue,
                    ref: O,
                    style: {
                        background: `linear-gradient(to right, ${k ? M.colors.controlActivatedInverse : M.colors.controlActivated} ${j}, ${k ? M.colors.barTrackInverse : M.colors.barTrack} ${j}`
                    }
                }),
                /* @__PURE__ */ g("div", {
                    className: fe,
                    ref: R,
                    style: {
                        cursor: T ? "grabbing" : y ? "grab" : "auto",
                        left: H,
                        width: f,
                        height: f
                    },
                    onPointerEnter: ()=>{
                        l || L(!0);
                    },
                    onPointerLeave: ()=>{
                        l || L(!1);
                    },
                    children: m ? /* @__PURE__ */ g(ge, {
                        target: Z,
                        open: T || W || y ? !0 : void 0,
                        description: String(n ? n[u] : u),
                        centerContent: !0,
                        delay: !1
                    }) : Z
                }),
                /* @__PURE__ */ g("input", {
                    type: "range",
                    min: o,
                    max: a,
                    ref: Re($, Q, q),
                    step: t,
                    "aria-label": h,
                    "aria-labelledby": v,
                    id: b,
                    className: de,
                    "aria-valuetext": String(n ? n[u] : u),
                    style: {
                        left: H,
                        width: f,
                        height: f
                    },
                    name: G,
                    value: u,
                    disabled: F,
                    onChange: (e)=>P(+e.target.value, !1),
                    onFocus: ()=>{
                        Y(!0);
                    },
                    onBlur: ()=>{
                        Y(!1);
                    }
                })
            ]
        })
    });
}), _e = pe;
export { _e as default };
