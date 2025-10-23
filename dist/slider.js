"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _e;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _slidercssmistica = require("./slider.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _environment = require("./utils/environment.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _dom = require("./utils/dom.js");
const _hooks = require("./hooks.js");
const _tooltip = /*#__PURE__*/ _interop_require_default(require("./tooltip.js"));
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _formcontext = require("./form-context.js");
const _common = require("./utils/common.js");
const _themevariantcontext = require("./theme-variant-context.js");
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
}, pe = /*#__PURE__*/ _react.forwardRef((_param, $)=>{
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
    const { defaultValue: z, value: U, onChange: _, focusableRef: q, disabled: F, name: G } = (0, _formcontext.useControlProps)({
        name: i.name,
        label: h,
        value: i.value !== void 0 ? B(!1, o, a, t, N(o, i.value, n)) : void 0,
        defaultValue: i.defaultValue !== void 0 ? B(!1, o, a, t, N(o, i.defaultValue, n)) : void 0,
        onChange: i.onChangeValue,
        disabled: i.disabled
    }), [J, K] = _react.useState(U !== null && U !== void 0 ? U : B(!1, o, a, t, N(o, z, n))), u = U !== null && U !== void 0 ? U : J, A = _react.useRef(u), P = _react.useCallback((e, r)=>{
        const s = B(r, o, a, t, e);
        A.current !== s && (_(n ? n[s] : s), K(s), A.current = s);
    }, [
        o,
        a,
        t,
        n,
        _
    ]);
    _react.useEffect(()=>{
        P(A.current, !1);
    }, [
        P
    ]);
    const O = _react.useRef(null), R = _react.useRef(null), X = _react.useRef(null), Q = _react.useRef(null), [T, p] = _react.useState(!1), [y, L] = _react.useState(!1), [W, Y] = _react.useState(!1), { isIos: E } = (0, _hooks.useTheme)(), k = (0, _themevariantcontext.useIsInverseVariant)(), w = k ? "inverse" : "default", D = (e, r, s)=>{
        const d = e == null ? void 0 : e.getBoundingClientRect();
        return !!d && d.left <= r && r <= d.right && d.top <= s && s <= d.bottom;
    }, l = (0, _environment.isTouchableDevice)(), V = E ? Pe : Ie, f = l ? Ce : V, S = (e)=>{
        const r = O.current;
        if (r) {
            const s = r.getBoundingClientRect().left + V / 2, d = r.getBoundingClientRect().right - V / 2;
            P((e - s) / (d - s), !0);
        }
    }, ee = (e)=>{
        (0, _dom.cancelEvent)(e), S(e.clientX);
    }, te = (e)=>{
        const r = R.current;
        r && (r.onpointermove = ee, r.setPointerCapture(e.pointerId));
    }, oe = (e)=>{
        const r = R.current;
        r && (r.onpointermove = null, r.releasePointerCapture(e.pointerId));
    }, H = `calc(${Te(u, o, a)} * (100% - ${V}px) - ${(f - V) / 2}px)`, j = `calc(${H} + ${f / 2}px)`, Z = /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(E ? _slidercssmistica.iosThumb : _slidercssmistica.defaultThumb[w], {
            [_slidercssmistica.thumbHover[w]]: !E && y && !T,
            [_slidercssmistica.thumbActive[w]]: !E && T
        })
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
        paddingY: 8,
        dataAttributes: _object_spread({
            "component-name": "Slider"
        }, I),
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
            className: (0, _classnames.default)(_slidercssmistica.container, {
                [_slidercssmistica.disabled]: F
            }),
            style: {
                height: f
            },
            ref: X,
            onPointerDown: (e)=>{
                const r = e.clientX, s = e.clientY;
                !l && D(X.current, r, s) ? (D(R.current, r, s) || S(r), p(!0), te(e)) : (0, _dom.cancelEvent)(e);
            },
            onPointerUp: (e)=>{
                l || (p(!1), oe(e));
            },
            onTouchStart: (e)=>{
                if ((0, _dom.cancelEvent)(e), l) {
                    const r = e.nativeEvent.touches[0].clientX, s = e.nativeEvent.touches[0].clientY;
                    D(R.current, r, s) || S(r), p(!0);
                }
            },
            onTouchEnd: (e)=>{
                (0, _dom.cancelEvent)(e), l && p(!1);
            },
            onTouchMove: (e)=>{
                (0, _dom.cancelEvent)(e), l && S(e.nativeEvent.touches[0].clientX);
            },
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _slidercssmistica.track,
                    ref: O,
                    style: {
                        background: `linear-gradient(to right, ${k ? _skincontractcssmistica.vars.colors.controlActivatedInverse : _skincontractcssmistica.vars.colors.controlActivated} ${j}, ${k ? _skincontractcssmistica.vars.colors.barTrackInverse : _skincontractcssmistica.vars.colors.barTrack} ${j}`
                    }
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _slidercssmistica.thumbContainer,
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
                    children: m ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_tooltip.default, {
                        target: Z,
                        open: T || W || y ? !0 : void 0,
                        description: String(n ? n[u] : u),
                        centerContent: !0,
                        delay: !1
                    }) : Z
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("input", {
                    type: "range",
                    min: o,
                    max: a,
                    ref: (0, _common.combineRefs)($, Q, q),
                    step: t,
                    "aria-label": h,
                    "aria-labelledby": v,
                    id: b,
                    className: _slidercssmistica.input,
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
