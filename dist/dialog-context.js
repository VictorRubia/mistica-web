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
    DialogRoot: function() {
        return h;
    },
    useDialog: function() {
        return f;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
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
const s = /*#__PURE__*/ _react.createContext({
    mounted: !1,
    dialog: null,
    setDialog: ()=>{}
}), d = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "dialog" */ "./dialog.js")))), m = ()=>{
    throw Error("Tried to show a dialog but the DialogRoot component was not mounted (missing ThemeContextProvider?)");
}, f = ()=>{
    const { dialog: n, setDialog: l, mounted: e } = _react.useContext(s), r = _react.useCallback((o)=>{
        if (e || m(), o && n) throw Error("Tried to show a dialog on top of another dialog");
        l(_object_spread({
            triggerEl: document.activeElement
        }, o));
    }, [
        l,
        n,
        e
    ]);
    return _react.useMemo(()=>({
            alert: (o)=>r(_object_spread({
                    type: "alert"
                }, o)),
            confirm: (o)=>r(_object_spread({
                    type: "confirm"
                }, o)),
            dialog: (o)=>r(_object_spread({
                    type: "dialog"
                }, o))
        }), [
        r
    ]);
}, h = (param)=>{
    let { children: n } = param;
    const { mounted: l } = _react.useContext(s), [e, r] = _react.useState(null), o = _react.useMemo(()=>({
            mounted: !0,
            dialog: e,
            setDialog: r
        }), [
        e,
        r
    ]);
    return l ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: n
    }) : /* @__PURE__ */ (0, _jsxruntime.jsxs)(s.Provider, {
        value: o,
        children: [
            n,
            e && /* @__PURE__ */ (0, _jsxruntime.jsx)(_react.Suspense, {
                fallback: null,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(d, _object_spread_props(_object_spread({}, e), {
                    onDestroy: ()=>{
                        r(null), setTimeout(()=>{
                            var i, u;
                            (u = (i = e.triggerEl) == null ? void 0 : i.focus) == null || u.call(i);
                        }, 0);
                    }
                }))
            })
        ]
    });
};
