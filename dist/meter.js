"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return qt;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _cubicbezier = /*#__PURE__*/ _interop_require_default(require("cubic-bezier"));
const _dom = require("./utils/dom.js");
const _themevariantcontext = require("./theme-variant-context.js");
const _hooks = require("./hooks.js");
const _texttokens = require("./text-tokens.js");
const _platform = require("./utils/platform.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
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
const $ = 100, tt = $ / 2, xt = $ / 2, O = 6, Ot = 2, $t = 200, rt = 1e3, Ft = 1e3 / 60 / rt / 4, pt = 100, H = 1e-4, E = "linear", et = "angular", r = "circular", Ut = [
    _skincontractcssmistica.vars.colors.controlActivated,
    _skincontractcssmistica.vars.colors.warning,
    _skincontractcssmistica.vars.colors.success,
    _skincontractcssmistica.vars.colors.highlight,
    _skincontractcssmistica.vars.colors.promo
], Dt = [
    _skincontractcssmistica.vars.colors.controlActivatedInverse,
    _skincontractcssmistica.vars.colors.warning,
    _skincontractcssmistica.vars.colors.success,
    _skincontractcssmistica.vars.colors.highlight,
    _skincontractcssmistica.vars.colors.promo
], Ht = (0, _cubicbezier.default)(0.75, 0, 0.27, 1, Ft), W = (t, o, I)=>Math.min(Math.max(t, o), I), At = (t, o, I, T)=>{
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
    const { borderRadii: Z, t: X } = (0, _hooks.useTheme)(), { ref: q, width: Y } = (0, _hooks.useElementDimensions)(), v = parseInt(Z.bar) !== 0, nt = (0, _themevariantcontext.useThemeVariant)(), K = nt === "media", ot = nt === "inverse", at = I || (ot || K ? Dt : Ut), [M, st] = _react.useState(typeof o == "number" ? o : 0), J = M === 0 ? 1 : $ / M, it = v ? O / 2 : 0, P = it * J, c = O * J, d = t === E ? 0 : tt - c / 2, R = Ot * J, B = _react.useId(), ct = `marker-current-${B}`, lt = `marker-start-${B}`, dt = `mask-last-segment-${B}`, mt = `mask-bar-track-${B}`, ht = _react.useMemo(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches !== !0 && !(0, _platform.isRunningAcceptanceTest)(), []), _ = t === E ? $ - P * 2 : t === r ? Math.PI * 2 : Math.PI, m = t === E ? R / $ : R / d / _, ut = t === E ? O : t === r ? M : M / 2 + it, Q = t === E ? c : t === r ? $ : tt + P, It = K ? _skincontractcssmistica.vars.colors.inverse : ot ? _skincontractcssmistica.vars.colors.barTrackInverse : _skincontractcssmistica.vars.colors.barTrack, f = _react.useMemo(()=>T.map((e)=>e / pt), [
        T
    ]), j = _react.useRef(Array.from({
        length: f.length
    }, ()=>i ? 1 : 0)), [w, Mt] = _react.useState(()=>f.map(()=>({
                start: 0,
                end: 0
            })));
    let S = -1, y = -1;
    for(let e = 0; e < w.length; e++)w[e].end - w[e].start > H && (S < 0 && (S = e), y = e);
    const h = w.at(-1);
    _react.useEffect(()=>{
        st(typeof o == "number" ? o : Y);
    }, [
        o,
        Y
    ]), _react.useEffect(()=>{
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
    const g = _react.useCallback((e)=>t === E ? P + _ * e : tt - d * Math.cos(e * _), [
        P,
        _,
        d,
        t
    ]), k = _react.useCallback((e)=>t === E ? c / 2 : xt - d * Math.sin(e * _), [
        _,
        d,
        c,
        t
    ]), U = (e)=>at[e % at.length], ft = Math.round(((h == null ? void 0 : h.end) || 0) * 100), gt = X(_texttokens.meterTotalLabel, f.length, ft) + " " + f.map((e, n)=>`${X(_texttokens.meterSectionLabel, n + 1, Math.round(e * 100))}`).join(". "), Et = _react.useMemo(()=>{
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
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({
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
    }, (0, _dom.getPrefixedDataAttributes)(b, "Meter")), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", {
                viewBox: `0 0 ${$} ${Q}`,
                style: {
                    width: M,
                    height: ut,
                    display: "block",
                    transform: `rotate(${t === r ? "90deg" : 0})`
                },
                "aria-hidden": "true",
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsxs)("defs", {
                        children: [
                            v && /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                                children: [
                                    /* @__PURE__ */ (0, _jsxruntime.jsxs)("marker", {
                                        id: ct,
                                        viewBox: "0 0 10 10",
                                        markerWidth: 1,
                                        markerHeight: 1,
                                        orient: "auto",
                                        refX: 5,
                                        refY: 5,
                                        children: [
                                            /* @__PURE__ */ (0, _jsxruntime.jsx)("rect", {
                                                x: 4,
                                                y: 0,
                                                width: 2,
                                                height: 10,
                                                fill: U(y)
                                            }),
                                            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
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
                                    /* @__PURE__ */ (0, _jsxruntime.jsxs)("marker", {
                                        id: lt,
                                        viewBox: "0 0 10 10",
                                        markerWidth: 1,
                                        markerHeight: 1,
                                        orient: "auto",
                                        refX: 5,
                                        refY: 5,
                                        children: [
                                            /* @__PURE__ */ (0, _jsxruntime.jsx)("rect", {
                                                x: 4,
                                                y: 0,
                                                width: 2,
                                                height: 10,
                                                fill: U(S)
                                            }),
                                            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
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
                            /* @__PURE__ */ (0, _jsxruntime.jsxs)("mask", {
                                id: mt,
                                maskUnits: "userSpaceOnUse",
                                children: [
                                    /* @__PURE__ */ (0, _jsxruntime.jsx)("rect", {
                                        x: 0,
                                        y: 0,
                                        width: $,
                                        height: Q,
                                        fill: "white"
                                    }),
                                    S >= 0 && h && /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                                        children: [
                                            /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
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
                                            /* @__PURE__ */ (0, _jsxruntime.jsx)("circle", {
                                                cx: g(h.end),
                                                cy: k(h.end),
                                                r: c / 2 + R,
                                                fill: "black"
                                            }),
                                            t === r && h.end <= 0.5 && // small patch to remove the circular mask when the last segment is too near to the start
                                            /* @__PURE__ */ (0, _jsxruntime.jsx)("rect", {
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
                            t === r && /* @__PURE__ */ (0, _jsxruntime.jsxs)("mask", {
                                id: dt,
                                maskUnits: "userSpaceOnUse",
                                children: [
                                    /* @__PURE__ */ (0, _jsxruntime.jsx)("rect", {
                                        x: 0,
                                        y: 0,
                                        width: $,
                                        height: Q,
                                        fill: "white"
                                    }),
                                    /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
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
                    /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
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
                        return /* @__PURE__ */ (0, _jsxruntime.jsx)("path", {
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
            V && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                style: Et,
                children: V
            })
        ]
    }));
}, Vt = (t)=>/* @__PURE__ */ /*#__PURE__*/ (0, _react.createElement)(Wt, _object_spread_props(_object_spread({}, t), {
        key: `${t.type},${t.values.length},${t.reverse}`
    })), qt = Vt;
