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
import { jsxs as A, Fragment as kt, jsx as a } from "react/jsx-runtime";
import * as l from "react";
import { createElement as bt } from "react";
import { vars as s } from "./skins/skin-contract.css-mistica.js";
import vt from "cubic-bezier";
import { getPrefixedDataAttributes as Rt } from "./utils/dom.js";
import { useThemeVariant as St } from "./theme-variant-context.js";
import { useTheme as Lt, useElementDimensions as _t } from "./hooks.js";
import { meterTotalLabel as wt, meterSectionLabel as Ct } from "./text-tokens.js";
import { isRunningAcceptanceTest as Nt } from "./utils/platform.js";
const $ = 100, tt = $ / 2, xt = $ / 2, O = 6, Ot = 2, $t = 200, rt = 1e3, Ft = 1e3 / 60 / rt / 4, pt = 100, H = 1e-4, E = "linear", et = "angular", r = "circular", Ut = [
    s.colors.controlActivated,
    s.colors.warning,
    s.colors.success,
    s.colors.highlight,
    s.colors.promo
], Dt = [
    s.colors.controlActivatedInverse,
    s.colors.warning,
    s.colors.success,
    s.colors.highlight,
    s.colors.promo
], Ht = vt(0.75, 0, 0.27, 1, Ft), W = (t, o, I)=>Math.min(Math.max(t, o), I), At = (t, o, I, T)=>{
    var p;
    const i = [];
    let b = 0, L = 0;
    for(let u = 0; u < t.length; u++){
        b += t[u], L += o[u];
        const V = $t * (T ? u : t.length - 1 - u), Z = W((I - V) / rt, 0, 1), X = W(Ht(Z), 0, 1), q = ((p = i.at(-1)) == null ? void 0 : p.end) || 0, Y = W(b + (L - b) * X, 0, 1 - H);
        i.push({
            start: q,
            end: Y
        });
    }
    return i;
}, F = (param)=>{
    let { x1: t, y1: o, x2: I, y2: T, radius: i, clockwise: b = 1, largeArchFlag: L = 0 } = param;
    return i ? `M ${t} ${o} A ${i} ${i} 0 ${+L} ${+b} ${I} ${T}` : `M ${t} ${o} L ${I} ${T}`;
}, Wt = (param)=>{
    let { type: t = et, width: o = "100%", colors: I, values: T, reverse: i = !1, dataAttributes: b, "aria-hidden": L = !1, "aria-label": p, "aria-labelledby": u, extra: V } = param;
    const { borderRadii: Z, t: X } = Lt(), { ref: q, width: Y } = _t(), v = parseInt(Z.bar) !== 0, nt = St(), K = nt === "media", ot = nt === "inverse", at = I || (ot || K ? Dt : Ut), [M, st] = l.useState(typeof o == "number" ? o : 0), J = M === 0 ? 1 : $ / M, it = v ? O / 2 : 0, P = it * J, c = O * J, d = t === E ? 0 : tt - c / 2, R = Ot * J, B = l.useId(), ct = `marker-current-${B}`, lt = `marker-start-${B}`, dt = `mask-last-segment-${B}`, mt = `mask-bar-track-${B}`, ht = l.useMemo(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches !== !0 && !Nt(), []), _ = t === E ? $ - P * 2 : t === r ? Math.PI * 2 : Math.PI, m = t === E ? R / $ : R / d / _, ut = t === E ? O : t === r ? M : M / 2 + it, Q = t === E ? c : t === r ? $ : tt + P, It = K ? s.colors.inverse : ot ? s.colors.barTrackInverse : s.colors.barTrack, f = l.useMemo(()=>T.map((e)=>e / pt), [
        T
    ]), j = l.useRef(Array.from({
        length: f.length
    }, ()=>i ? 1 : 0)), [w, Mt] = l.useState(()=>f.map(()=>({
                start: 0,
                end: 0
            })));
    let S = -1, y = -1;
    for(let e = 0; e < w.length; e++)w[e].end - w[e].start > H && (S < 0 && (S = e), y = e);
    const h = w.at(-1);
    l.useEffect(()=>{
        st(typeof o == "number" ? o : Y);
    }, [
        o,
        Y
    ]), l.useEffect(()=>{
        let e;
        const n = performance.now(), C = n + rt + $t * (f.length - 1);
        let N = [];
        const D = ()=>{
            const x = performance.now();
            N = At(j.current, f, x - n, i), ht && x < C ? e = requestAnimationFrame(D) : (N = At(j.current, f, C - n, i), j.current = f), Mt(N);
        };
        return D(), ()=>{
            cancelAnimationFrame(e), j.current = N.map((x)=>x.end - x.start);
        };
    }, [
        d,
        f,
        t,
        i,
        ht
    ]);
    const g = l.useCallback((e)=>t === E ? P + _ * e : tt - d * Math.cos(e * _), [
        P,
        _,
        d,
        t
    ]), k = l.useCallback((e)=>t === E ? c / 2 : xt - d * Math.sin(e * _), [
        _,
        d,
        c,
        t
    ]), U = (e)=>at[e % at.length], ft = Math.round(((h == null ? void 0 : h.end) || 0) * 100), gt = X(wt, f.length, ft) + " " + f.map((e, n)=>`${X(Ct, n + 1, Math.round(e * 100))}`).join(". "), Et = l.useMemo(()=>{
        if (t === E) return {
            display: "flex"
        };
        const e = 0.707107, n = (M / 2 - O) * e;
        return {
            display: "flex",
            marginTop: -1 * (t === et ? n + O / 2 : n + M / 2),
            width: n * 2,
            minHeight: t === et ? n + O / 2 : n * 2,
            marginLeft: "auto",
            marginRight: "auto"
        };
    }, [
        M,
        t
    ]);
    return /* @__PURE__ */ A("div", _object_spread_props(_object_spread({
        ref: q,
        style: {
            width: o,
            minHeight: ut
        },
        role: "meter",
        "aria-label": p || (u ? void 0 : gt),
        "aria-labelledby": u,
        "aria-valuenow": ft,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-live": "polite",
        "aria-valuetext": gt,
        "aria-hidden": L
    }, Rt(b, "Meter")), {
        children: [
            /* @__PURE__ */ A("svg", {
                viewBox: `0 0 ${$} ${Q}`,
                style: {
                    width: M,
                    height: ut,
                    display: "block",
                    transform: `rotate(${t === r ? "90deg" : 0})`
                },
                "aria-hidden": "true",
                children: [
                    /* @__PURE__ */ A("defs", {
                        children: [
                            v && /* @__PURE__ */ A(kt, {
                                children: [
                                    /* @__PURE__ */ A("marker", {
                                        id: ct,
                                        viewBox: "0 0 10 10",
                                        markerWidth: 1,
                                        markerHeight: 1,
                                        orient: "auto",
                                        refX: 5,
                                        refY: 5,
                                        children: [
                                            /* @__PURE__ */ a("rect", {
                                                x: 4,
                                                y: 0,
                                                width: 2,
                                                height: 10,
                                                fill: U(y)
                                            }),
                                            /* @__PURE__ */ a("path", {
                                                d: F({
                                                    x1: 5,
                                                    y1: 0,
                                                    x2: 5,
                                                    y2: 10,
                                                    radius: 5
                                                }),
                                                fill: U(y)
                                            })
                                        ]
                                    }),
                                    /* @__PURE__ */ A("marker", {
                                        id: lt,
                                        viewBox: "0 0 10 10",
                                        markerWidth: 1,
                                        markerHeight: 1,
                                        orient: "auto",
                                        refX: 5,
                                        refY: 5,
                                        children: [
                                            /* @__PURE__ */ a("rect", {
                                                x: 4,
                                                y: 0,
                                                width: 2,
                                                height: 10,
                                                fill: U(S)
                                            }),
                                            /* @__PURE__ */ a("path", {
                                                d: F({
                                                    x1: 5,
                                                    y1: 0,
                                                    x2: 5,
                                                    y2: 10,
                                                    radius: 5,
                                                    clockwise: 0
                                                }),
                                                fill: U(S)
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /* @__PURE__ */ A("mask", {
                                id: mt,
                                maskUnits: "userSpaceOnUse",
                                children: [
                                    /* @__PURE__ */ a("rect", {
                                        x: 0,
                                        y: 0,
                                        width: $,
                                        height: Q,
                                        fill: "white"
                                    }),
                                    S >= 0 && h && /* @__PURE__ */ A(kt, {
                                        children: [
                                            /* @__PURE__ */ a("path", {
                                                stroke: "black",
                                                fill: "none",
                                                strokeWidth: c + R * 2,
                                                strokeLinecap: t === r || !v ? "butt" : "round",
                                                d: F({
                                                    x1: g(0),
                                                    y1: k(0),
                                                    x2: g(W(h.end + (v ? 0 : m), 0, 1 - H)),
                                                    y2: k(W(h.end + (v ? 0 : m), 0, 1 - H)),
                                                    radius: d,
                                                    largeArchFlag: t === r ? h.end >= 0.5 : 0
                                                })
                                            }),
                                            t === r && v && // the circular type has butt line caps, so we need to add a circle to the end
                                            /* @__PURE__ */ a("circle", {
                                                cx: g(h.end),
                                                cy: k(h.end),
                                                r: c / 2 + R,
                                                fill: "black"
                                            }),
                                            t === r && h.end <= 0.5 && // small patch to remove the circular mask when the last segment is too near to the start
                                            /* @__PURE__ */ a("rect", {
                                                x: 0,
                                                y: xt + R,
                                                width: c + R * 2,
                                                height: c / 2 + R,
                                                fill: "white"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            t === r && /* @__PURE__ */ A("mask", {
                                id: dt,
                                maskUnits: "userSpaceOnUse",
                                children: [
                                    /* @__PURE__ */ a("rect", {
                                        x: 0,
                                        y: 0,
                                        width: $,
                                        height: Q,
                                        fill: "white"
                                    }),
                                    /* @__PURE__ */ a("path", {
                                        stroke: "black",
                                        strokeWidth: c,
                                        fill: "none",
                                        d: F({
                                            x1: g(1 - m),
                                            y1: k(1 - m),
                                            x2: g(1),
                                            y2: k(1),
                                            radius: d
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /* @__PURE__ */ a("path", {
                        stroke: It,
                        opacity: K ? 0.5 : 1,
                        fill: "none",
                        strokeWidth: c,
                        strokeLinecap: t === r || !v ? "butt" : "round",
                        d: F({
                            x1: g(0),
                            y1: k(0),
                            x2: g(1 - (t === r ? m : 0)),
                            y2: k(1 - (t === r ? m : 0)),
                            largeArchFlag: 1,
                            radius: d
                        }),
                        mask: `url("#${mt}")`
                    }),
                    S >= 0 && [
                        ...w
                    ].reverse().map((e, n)=>{
                        const C = w.length - 1 - n, N = U(C), D = C === S, x = C === y, z = D || e.end - e.start < m ? e.start : e.start + m / 2, G = x || e.end - e.start < m ? e.end : e.end - m / 2;
                        if (G - z < H) return null;
                        const Tt = D && t !== r;
                        return /* @__PURE__ */ a("path", {
                            stroke: N,
                            fill: "none",
                            strokeWidth: c,
                            strokeLinecap: "butt",
                            markerEnd: x ? `url(#${ct})` : void 0,
                            markerStart: Tt ? `url(#${lt})` : void 0,
                            mask: x && t === r ? `url("#${dt}")` : void 0,
                            d: F({
                                x1: g(z),
                                y1: k(z),
                                x2: g(G),
                                y2: k(G),
                                largeArchFlag: t === r ? G - z >= 0.5 : 0,
                                radius: d
                            })
                        }, n);
                    })
                ]
            }),
            V && /* @__PURE__ */ a("div", {
                style: Et,
                children: V
            })
        ]
    }));
}, Vt = (t)=>/* @__PURE__ */ /*#__PURE__*/ bt(Wt, _object_spread_props(_object_spread({}, t), {
        key: `${t.type},${t.values.length},${t.reverse}`
    })), qt = Vt;
export { qt as default };
