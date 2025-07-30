"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return f;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _hooks = require("../hooks.js");
const _animation = require("../utils/animation.js");
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
const p = (param)=>{
    let { size: o = 48 } = param;
    const { platformOverrides: r } = (0, _hooks.useTheme)(), t = _react.useId();
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("svg", {
        role: "presentation",
        width: o,
        height: o,
        viewBox: "0 0 64 64",
        fill: "none",
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("circle", _object_spread({
                cx: "32",
                cy: "32",
                r: "31",
                stroke: `url(#${t})`
            }, (0, _animation.getAnimateCircleScaleInProps)("31", r))),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("polyline", _object_spread({
                fill: "none",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                points: "24,32.75 30,39 40.5,24.5"
            }, (0, _animation.getAnimateDrawLineProps)("44", "0.4s", r, "0.5 0 0.83 0.83"))),
            /* @__PURE__ */ (0, _jsxruntime.jsx)("defs", {
                children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("linearGradient", {
                    id: t,
                    x1: "6.66663",
                    y1: "6.66669",
                    x2: "58.3441",
                    y2: "7.98638",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("stop", {
                            stopColor: "#E5B9FF"
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#FF6ACE"
                        })
                    ]
                })
            })
        ]
    });
}, f = p;
