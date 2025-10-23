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
    TimelineItem: function() {
        return Y;
    },
    default: function() {
        return Z;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _timelinecssmistica = require("./timeline.css-mistica.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _circle = /*#__PURE__*/ _interop_require_default(require("./circle.js"));
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _iconcheckfilled = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-check-filled.js"));
const _text = require("./text.js");
const _themevariantcontext = require("./theme-variant-context.js");
const _hooks = require("./hooks.js");
const _dom = require("./utils/dom.js");
const _platform = require("./utils/platform.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
const f = (param)=>{
    let { begin: r, stroke: i } = param;
    const n = {
        dur: "2s",
        repeatCount: "indefinite",
        calcMode: "spline",
        keyTimes: "0; 1",
        keySplines: "0.42, 0, 0.58, 1"
    };
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("circle", {
        cx: "12",
        cy: "12",
        r: "6",
        strokeWidth: 1,
        stroke: i,
        fill: "none",
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("animate", _object_spread_props(_object_spread({
                attributeName: "r",
                values: "6; 11"
            }, n), {
                begin: r
            })),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("animate", _object_spread_props(_object_spread({
                attributeName: "opacity",
                values: "1; 0"
            }, n), {
                begin: r
            }))
        ]
    });
}, Y = (param)=>{
    let { asset: r = {
        kind: "dot"
    }, state: i = "inactive", role: n = "listitem", "aria-label": s, "aria-labelledby": d, dataAttributes: m, children: k } = param;
    const { isDarkMode: C } = (0, _hooks.useTheme)(), y = (0, _themevariantcontext.useThemeVariant)(), c = (C ? "default" : y) === "inverse", u = (param)=>{
        let { size: a, iconSize: v } = param;
        return /* @__PURE__ */ (0, _jsxruntime.jsx)(_circle.default, {
            background: c ? _skincontractcssmistica.vars.colors.backgroundContainerBrandOverInverse : _skincontractcssmistica.vars.colors.backgroundContainerBrand,
            size: a,
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconcheckfilled.default, {
                size: v,
                color: _skincontractcssmistica.vars.colors.inverse
            })
        });
    }, I = ()=>{
        if (!r) return null;
        if (typeof r == "object" && "kind" in r) {
            const a = c ? _skincontractcssmistica.vars.colors.controlActivatedInverse : _skincontractcssmistica.vars.colors.controlActivated, t = {
                inactive: c ? _skincontractcssmistica.vars.colors.controlInverse : _skincontractcssmistica.vars.colors.control,
                active: a,
                completed: a
            }[i];
            switch(r.kind){
                case "dot":
                    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", {
                        style: {
                            display: "block"
                        },
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        children: [
                            i === "active" && !(0, _platform.isRunningAcceptanceTest)() && /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                                children: [
                                    /* @__PURE__ */ (0, _jsxruntime.jsx)(f, {
                                        stroke: t
                                    }),
                                    /* @__PURE__ */ (0, _jsxruntime.jsx)(f, {
                                        stroke: t,
                                        begin: "1s"
                                    })
                                ]
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("circle", {
                                cx: "12",
                                cy: "12",
                                r: "6",
                                strokeWidth: 2,
                                stroke: t,
                                fill: i === "completed" ? t : "none"
                            })
                        ]
                    });
                case "number":
                    return i === "completed" ? u({
                        size: 32,
                        iconSize: 16
                    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: _timelinecssmistica.assetNumberContainer,
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_themevariantcontext.ThemeVariant, {
                            variant: "default",
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text1, {
                                medium: !0,
                                color: i === "active" ? _skincontractcssmistica.vars.colors.textActivated : _skincontractcssmistica.vars.colors.textSecondary,
                                children: r.number
                            })
                        })
                    });
                case "icon":
                    return i === "completed" ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconcheckfilled.default, {
                        size: 24,
                        color: t
                    }) : r.Icon ? /* @__PURE__ */ (0, _jsxruntime.jsx)(r.Icon, {
                        size: 24,
                        color: t
                    }) : null;
                case "circled-icon":
                    return i === "completed" ? u({
                        size: 40,
                        iconSize: 24
                    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_circle.default, {
                        background: _skincontractcssmistica.vars.colors.backgroundContainer,
                        size: 40,
                        border: !c,
                        children: r.Icon && /* @__PURE__ */ (0, _jsxruntime.jsx)(r.Icon, {
                            size: 24,
                            color: i === "inactive" ? _skincontractcssmistica.vars.colors.control : _skincontractcssmistica.vars.colors.controlActivated
                        })
                    });
                default:
                    return null;
            }
        }
        return r;
    };
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({
        className: (0, _classnames.default)(_timelinecssmistica.timelineItem, _timelinecssmistica.timelineItemState[i]),
        role: n,
        "aria-label": s,
        "aria-labelledby": d,
        "aria-current": i === "active" ? "step" : void 0
    }, (0, _dom.getPrefixedDataAttributes)(m, "TimelineItem")), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                className: _timelinecssmistica.lineContainer,
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: _timelinecssmistica.asset,
                        "aria-hidden": !0,
                        children: I()
                    }),
                    /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: _timelinecssmistica.line[c ? "inverse" : "default"]
                    })
                ]
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _timelinecssmistica.itemContent,
                children: k
            })
        ]
    }));
}, P = (param)=>{
    let { children: r, orientation: i = "vertical", role: n = "list", "aria-label": s, "aria-labelledby": d, dataAttributes: m } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
        className: _timelinecssmistica.timeline[i],
        role: n,
        "aria-label": s,
        "aria-labelledby": d
    }, (0, _dom.getPrefixedDataAttributes)(m, "Timeline")), {
        children: r
    }));
}, Z = P;
