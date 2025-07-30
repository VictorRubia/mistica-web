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
    SnackbarRoot: function() {
        return p;
    },
    useSnackbar: function() {
        return w;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _webviewbridge = require("@tef-novum/webview-bridge");
const _snackbarnative = require("./snackbar-native.js");
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
const f = /*#__PURE__*/ _react.createContext({
    snackbars: [],
    setSnackbars: ()=>{}
}), m = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "snackbar" */ "./snackbar.js")))), p = (param)=>{
    let { children: c } = param;
    const [t, i] = _react.useState([]), s = _react.useRef(null), o = _react.useRef(!1);
    _react.useEffect(()=>{
        var a;
        t.length > 1 && !o.current && (o.current = !0, (a = s.current) == null || a.close({
            action: "CONSECUTIVE"
        }));
    }, [
        t
    ]);
    const r = (param)=>{
        let { action: a } = param;
        var u, l;
        o.current = !1, i((S)=>S.slice(1)), (l = (u = t[0]).onClose) == null || l.call(u, {
            action: a
        });
    }, k = _react.useMemo(()=>({
            snackbars: t,
            setSnackbars: i
        }), [
        t
    ]), n = t[0];
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(f.Provider, {
        value: k,
        children: [
            c,
            !!n && /* @__PURE__ */ (0, _jsxruntime.jsx)(_react.Suspense, {
                fallback: null,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(m, {
                    ref: s,
                    message: n.message,
                    buttonText: n.buttonText,
                    buttonAccessibilityLabel: n.buttonAccessibilityLabel,
                    duration: n.duration,
                    type: n.type,
                    withDismiss: n.withDismiss,
                    dataAttributes: n.dataAttributes,
                    onClose: r
                }, n.id)
            })
        ]
    });
}, w = ()=>{
    const { snackbars: c, setSnackbars: t } = _react.useContext(f);
    return {
        openSnackbar: _react.useCallback((s)=>{
            if ((0, _webviewbridge.isWebViewBridgeAvailable)()) (0, _snackbarnative.showNativeSnackbar)(s).then((param)=>{
                let { action: o } = param;
                var r;
                (r = s.onClose) == null || r.call(s, {
                    action: o
                });
            });
            else {
                const o = Date.now() + "-" + Math.random();
                t((r)=>[
                        ...r,
                        _object_spread_props(_object_spread({}, s), {
                            id: o
                        })
                    ]);
            }
        }, [
            t
        ]),
        snackbars: c
    };
};
