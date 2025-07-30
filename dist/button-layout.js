"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return F;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _dom = require("./utils/dom.js");
const _buttonlayoutcssmistica = require("./button-layout.css-mistica.js");
const _buttoncssmistica = require("./button.css-mistica.js");
const _hooks = require("./hooks.js");
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
const j = (param)=>{
    let { primaryButton: i, secondaryButton: r, align: t = "full-width", link: o, dataAttributes: L } = param;
    const l = _react.useRef(null), [k, p] = _react.useState(!1);
    (0, _hooks.useIsomorphicLayoutEffect)(()=>{
        var c, u;
        (u = (c = l.current) == null ? void 0 : c.getElementsByClassName(_buttoncssmistica.smallLink)) != null && u.length && p(!0);
    }, []);
    const s = (i ? 1 : 0) + (r ? 1 : 0), a = t === "right" ? /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            r,
            i
        ]
    }) : /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            i,
            r
        ]
    }), m = o ? /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        ref: l,
        className: (0, _classnames.default)(s !== 1 ? k ? _buttonlayoutcssmistica.smallLinkInNewLine[t] : _buttonlayoutcssmistica.linkInNewLine[t] : _buttonlayoutcssmistica.link),
        "data-link": "true",
        children: o
    }) : null;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
        className: (0, _classnames.default)(_buttonlayoutcssmistica.container, _buttonlayoutcssmistica.alignVariant[t], {
            [_buttonlayoutcssmistica.containerWithTwoButtons]: s > 1
        })
    }, (0, _dom.getPrefixedDataAttributes)(L, "ButtonLayout")), {
        children: t !== "right" || s > 1 ? /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                a,
                m
            ]
        }) : /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                m,
                a
            ]
        })
    }));
}, F = j;
