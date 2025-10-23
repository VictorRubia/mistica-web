"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return w;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _hooks = require("./hooks.js");
const _image = /*#__PURE__*/ _interop_require_default(require("./image.js"));
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
const u = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "sheet-actions" */ "./sheet-actions.js")))), I = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "sheet-info" */ "./sheet-info.js")))), p = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "sheet-action-list" */ "./sheet-actions-list.js")))), f = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "sheet-radio-list" */ "./sheet-radio-list.js")))), w = (param)=>{
    let { sheetProps: t, onResolve: e } = param;
    const { isDarkMode: s } = (0, _hooks.useTheme)(), r = _react.useRef(null), i = (n)=>{
        r.current = n;
    }, a = ()=>{
        if (!e) throw new Error("onResolve handler is not set");
        switch(t.type){
            case "INFO":
                e({
                    action: "DISMISS"
                });
                break;
            case "ACTIONS_LIST":
                r.current ? e({
                    action: "SUBMIT",
                    selectedId: r.current
                }) : e({
                    action: "DISMISS"
                });
                break;
            case "RADIO_LIST":
                r.current ? e({
                    action: "SUBMIT",
                    selectedId: r.current
                }) : e({
                    action: "DISMISS"
                });
                break;
            case "ACTIONS":
                r.current === "PRIMARY" || r.current === "SECONDARY" || r.current === "LINK" ? e({
                    action: r.current
                }) : e({
                    action: "DISMISS"
                });
                break;
            default:
                throw new Error(`Unknown sheet type: ${t.type}`);
        }
        r.current = null;
    };
    switch(t.type){
        case "INFO":
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(I, _object_spread_props(_object_spread({}, t.props), {
                onClose: a
            }));
        case "ACTIONS_LIST":
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(p, _object_spread_props(_object_spread({}, t.props), {
                onClose: a,
                onSelect: i
            }));
        case "RADIO_LIST":
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(f, _object_spread_props(_object_spread({}, t.props), {
                items: t.props.items.map((n)=>_object_spread_props(_object_spread({}, n), {
                        asset: n.icon && /* @__PURE__ */ (0, _jsxruntime.jsx)(_image.default, {
                            circular: !0,
                            src: s && n.icon.urlDark ? n.icon.urlDark : n.icon.url,
                            width: n.icon.size === "small" ? 24 : 40
                        })
                    })),
                onClose: a,
                onSelect: i
            }));
        case "ACTIONS":
            return /* @__PURE__ */ (0, _jsxruntime.jsx)(u, _object_spread_props(_object_spread({}, t.props), {
                buttonLink: t.props.link,
                onClose: a,
                onPressButton: i
            }));
        default:
            throw new Error(`Unknown sheet type: ${t.type}`);
    }
};
