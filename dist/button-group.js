"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return T;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _dom = require("./utils/dom.js");
const _buttongroupcssmistica = require("./button-group.css-mistica.js");
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
const D = (param)=>{
    let { primaryButton: t, secondaryButton: s, link: o, align: e = "left", dataAttributes: u } = param;
    const r = _react.useRef(null), [m, h] = _react.useState(!1);
    (0, _hooks.useIsomorphicLayoutEffect)(()=>{
        var a, c;
        (c = (a = r.current) == null ? void 0 : a.getElementsByClassName(_buttoncssmistica.smallLink)) != null && c.length && h(!0);
    }, []);
    var _e_mobile, _e_tablet, _ref, _e_desktop;
    const k = !!t || !!s || !!o, N = !!t && !!s, l = typeof e == "string" ? {
        mobile: e,
        tablet: e,
        desktop: e
    } : {
        mobile: (_e_mobile = e.mobile) !== null && _e_mobile !== void 0 ? _e_mobile : "left",
        tablet: (_ref = (_e_tablet = e.tablet) !== null && _e_tablet !== void 0 ? _e_tablet : e.mobile) !== null && _ref !== void 0 ? _ref : "left",
        desktop: (_e_desktop = e.desktop) !== null && _e_desktop !== void 0 ? _e_desktop : "left"
    };
    return k ? /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({
        className: (0, _classnames.default)(_buttongroupcssmistica.inline, m ? _buttongroupcssmistica.containerWithSmallLink : _buttongroupcssmistica.container, {
            [_buttongroupcssmistica.centerInDesktop]: l.desktop === "center",
            [_buttongroupcssmistica.centerInTablet]: l.tablet === "center",
            [_buttongroupcssmistica.centerInMobile]: l.mobile === "center"
        })
    }, (0, _dom.getPrefixedDataAttributes)(u, "ButtonGroup")), {
        children: [
            (t || s) && /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                className: (0, _classnames.default)(_buttongroupcssmistica.inline, m ? _buttongroupcssmistica.buttonsWithSmallLink : _buttongroupcssmistica.buttons),
                children: [
                    t && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: _buttongroupcssmistica.buttonChild,
                        children: t
                    }),
                    s && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: _buttongroupcssmistica.buttonChild,
                        children: s
                    })
                ]
            }),
            o && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                ref: r,
                className: _buttongroupcssmistica.buttonChild,
                style: {
                    width: N ? "100%" : "auto"
                },
                children: o
            })
        ]
    })) : null;
}, T = D;
