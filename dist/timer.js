"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    TextTimer: function() {
        return Re;
    },
    Timer: function() {
        return _e;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _hooks = require("./hooks.js");
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _screenreaderonly = /*#__PURE__*/ _interop_require_default(require("./screen-reader-only.js"));
const _text = require("./text.js");
const _themevariantcontext = require("./theme-variant-context.js");
const _timercssmistica = require("./timer.css-mistica.js");
const _dom = require("./utils/dom.js");
const _helpers = require("./utils/helpers.js");
const _platform = require("./utils/platform.js");
const _texttokens = require("./text-tokens.js");
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
const $ = 24, V = 60, X = 60, C = 1e3, Z = X * C, P = V * Z, ge = $ * P, H = (s, a, o, i)=>{
    a = i === "none" && a === "days" ? "hours" : a, o = i === "none" && o === "days" ? "hours" : o;
    const c = [
        "seconds",
        "minutes",
        "hours",
        "days"
    ], L = c.indexOf(a), b = Math.max(c.indexOf(o), L), e = c.indexOf(s);
    return L <= e && e <= b;
}, W = (s, a, o, i)=>[
        {
            unit: "days",
            value: s.days
        },
        {
            unit: "hours",
            value: s.hours
        },
        {
            unit: "minutes",
            value: s.minutes
        },
        {
            unit: "seconds",
            value: s.seconds
        }
    ].filter((c)=>H(c.unit, a, o, i)), Y = (s)=>(0, _platform.isRunningAcceptanceTest)() ? 0 : Math.max(0, (typeof s == "object" ? s : new Date(s)).valueOf() - Date.now()), U = (param)=>{
    let { endTimestamp: s, labelType: a, minTimeUnit: o, maxTimeUnit: i, onProgress: c } = param;
    const [L, b] = _react.useState(Y(s));
    (0, _hooks.useIsomorphicLayoutEffect)(()=>{
        let u;
        const N = ()=>{
            const I = Y(s);
            b(I), I || clearInterval(u);
        };
        if (!(0, _platform.isRunningAcceptanceTest)()) return N(), u = setInterval(N, C), ()=>clearInterval(u);
    }, [
        s
    ]);
    const e = H("days", o, i, a), t = H("hours", o, i, a), p = H("minutes", o, i, a), l = e ? "days" : t ? "hours" : p ? "minutes" : "seconds", g = Math.floor(L / P) % 24, M = Math.floor(L / Z) % 60, D = Math.floor(L / C) % 60, h = Math.floor(L / ge), S = l === "hours" ? g + h * $ : g, y = l === "minutes" ? M + V * (h * $ + S) : M, n = l === "seconds" ? D + X * (h * $ * V + S * V + y) : D, [r, d] = _react.useState(W({
        days: h,
        hours: S,
        minutes: y,
        seconds: n
    }, o, i, a));
    return _react.useEffect(()=>{
        const u = W({
            days: h,
            hours: S,
            minutes: y,
            seconds: n
        }, o, i, a);
        if (!(0, _helpers.isEqual)(u, r)) {
            d(u);
            const N = {};
            u.forEach((I)=>N[I.unit] = I.value), c == null || c(N);
        }
    }, [
        h,
        S,
        y,
        n,
        a,
        o,
        i,
        r,
        c
    ]), r;
}, Re = (param)=>{
    let { endTimestamp: s, labelType: a = "none", minTimeUnit: o, maxTimeUnit: i, onProgress: c, dataAttributes: L, "aria-label": b } = param;
    const { texts: e, t } = (0, _hooks.useTheme)(), p = _react.useId(), l = U({
        endTimestamp: s,
        labelType: a,
        minTimeUnit: o,
        maxTimeUnit: i,
        onProgress: c
    }), g = {
        days: e.timerDaysShortLabel || t(_texttokens.timerDaysShortLabel),
        hours: e.timerHoursShortLabel || t(_texttokens.timerHoursShortLabel),
        minutes: e.timerMinutesShortLabel || t(_texttokens.timerMinutesShortLabel),
        seconds: e.timerSecondsShortLabel || t(_texttokens.timerSecondsShortLabel)
    }, M = {
        days: e.timerDayLongLabel || t(_texttokens.timerDayLongLabel),
        hours: e.timerHourLongLabel || t(_texttokens.timerHourLongLabel),
        minutes: e.timerMinuteLongLabel || t(_texttokens.timerMinuteLongLabel),
        seconds: e.timerSecondLongLabel || t(_texttokens.timerSecondLongLabel)
    }, D = {
        days: e.timerDaysLongLabel || t(_texttokens.timerDaysLongLabel),
        hours: e.timerHoursLongLabel || t(_texttokens.timerHoursLongLabel),
        minutes: e.timerMinutesLongLabel || t(_texttokens.timerMinutesLongLabel),
        seconds: e.timerSecondsLongLabel || t(_texttokens.timerSecondsLongLabel)
    }, h = (n)=>{
        const r = Math.max(String(n).length, a === "long" ? 1 : 2);
        return /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
            className: _timercssmistica.unitContainer,
            style: {
                minWidth: `${r}ch`
            },
            children: String(n).padStart(r, "0")
        });
    }, S = ()=>{
        switch(a){
            case "none":
                return l.map((n, r)=>/* @__PURE__ */ (0, _jsxruntime.jsxs)(_react.Fragment, {
                        children: [
                            r > 0 && ":",
                            h(n.value)
                        ]
                    }, r));
            case "short":
                return l.map((n, r)=>/* @__PURE__ */ (0, _jsxruntime.jsxs)(_react.Fragment, {
                        children: [
                            r > 0 && " ",
                            /* @__PURE__ */ (0, _jsxruntime.jsxs)("span", {
                                className: _timercssmistica.shortLabelText,
                                children: [
                                    h(n.value),
                                    ` ${g[n.unit]}`
                                ]
                            })
                        ]
                    }, r));
            case "long":
            default:
                return l.map((n, r)=>/* @__PURE__ */ (0, _jsxruntime.jsxs)(_react.Fragment, {
                        children: [
                            r > 0 && " ",
                            h(n.value),
                            ` ${n.value === 1 ? M[n.unit] : D[n.unit]}`,
                            r === l.length - 2 && ` ${e.timerAnd || t(_texttokens.timerAnd)}`,
                            r < l.length - 2 && ","
                        ]
                    }, r));
        }
    }, y = l.map((n, r)=>`${n.value} ${n.value === 1 ? M[n.unit] : D[n.unit]}${r === l.length - 1 ? "" : r === l.length - 2 ? ` ${e.timerAnd || t(_texttokens.timerAnd)} ` : ", "}`).join("");
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("span", _object_spread_props(_object_spread({
        role: "timer",
        "aria-labelledby": p,
        className: _timercssmistica.inlineText,
        style: {
            // try to keep the timer in the same line without wrapping only when label is not long
            display: a !== "long" ? "inline-block" : void 0
        }
    }, (0, _dom.getPrefixedDataAttributes)(L, "TextTimer")), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_screenreaderonly.default, {
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                    id: p,
                    children: b ? `${b}. ${y}` : y
                })
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                "aria-hidden": !0,
                className: _timercssmistica.inlineText,
                children: S()
            })
        ]
    }));
}, _e = (param)=>{
    let { boxed: s, endTimestamp: a, minTimeUnit: o, maxTimeUnit: i, onProgress: c, dataAttributes: L, "aria-label": b } = param;
    const { texts: e, t } = (0, _hooks.useTheme)(), p = _react.useId(), l = (0, _themevariantcontext.useThemeVariant)(), g = U({
        endTimestamp: a,
        minTimeUnit: o,
        maxTimeUnit: i,
        onProgress: c
    }), M = {
        days: e.timerDayLongLabel || t(_texttokens.timerDayLongLabel),
        hours: e.timerHourLongLabel || t(_texttokens.timerHourLongLabel),
        minutes: e.timerDisplayMinutesLabel || t(_texttokens.timerDisplayMinutesLabel),
        seconds: e.timerDisplaySecondsLabel || t(_texttokens.timerDisplaySecondsLabel)
    }, D = {
        days: e.timerDaysLongLabel || t(_texttokens.timerDaysLongLabel),
        hours: e.timerHoursLongLabel || t(_texttokens.timerHoursLongLabel),
        minutes: e.timerDisplayMinutesLabel || t(_texttokens.timerDisplayMinutesLabel),
        seconds: e.timerDisplaySecondsLabel || t(_texttokens.timerDisplaySecondsLabel)
    }, h = {
        days: e.timerDayLongLabel || t(_texttokens.timerDayLongLabel),
        hours: e.timerHourLongLabel || t(_texttokens.timerHourLongLabel),
        minutes: e.timerMinuteLongLabel || t(_texttokens.timerMinuteLongLabel),
        seconds: e.timerSecondLongLabel || t(_texttokens.timerSecondLongLabel)
    }, S = {
        days: e.timerDaysLongLabel || t(_texttokens.timerDaysLongLabel),
        hours: e.timerHoursLongLabel || t(_texttokens.timerHoursLongLabel),
        minutes: e.timerMinutesLongLabel || t(_texttokens.timerMinutesLongLabel),
        seconds: e.timerSecondsLongLabel || t(_texttokens.timerSecondsLongLabel)
    }, y = (d)=>{
        const u = Math.max(String(d).length, 2);
        return /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text6, {
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _timercssmistica.unitContainer,
                style: {
                    minWidth: `${u}ch`
                },
                children: String(d).padStart(u, "0")
            })
        });
    }, n = g.map((d, u)=>`${d.value} ${d.value === 1 ? h[d.unit] : S[d.unit]}${u === g.length - 1 ? "" : u === g.length - 2 ? ` ${e.timerAnd || t(_texttokens.timerAnd)} ` : ", "}`).join(""), r = ()=>g.map((d, u)=>/* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: (0, _classnames.default)({
                    [_timercssmistica.boxedTimerValueContainer[l]]: s
                }),
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_themevariantcontext.ThemeVariant, {
                    variant: s ? "default" : l,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                        className: (0, _classnames.default)(_timercssmistica.timerDisplayValue, {
                            [_timercssmistica.boxedTimerDisplayValue]: s
                        }),
                        children: [
                            y(d.value),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                                regular: !0,
                                children: d.value === 1 ? M[d.unit] : D[d.unit]
                            })
                        ]
                    })
                })
            }, u));
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({
        role: "timer",
        "aria-labelledby": p,
        className: _timercssmistica.timerWrapper
    }, (0, _dom.getPrefixedDataAttributes)(L, "Timer")), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_screenreaderonly.default, {
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                    id: p,
                    children: b ? `${b}. ${n}` : n
                })
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                "aria-hidden": !0,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_inline.default, {
                    space: s ? 8 : 16,
                    wrap: !0,
                    children: r()
                })
            })
        ]
    }));
};
