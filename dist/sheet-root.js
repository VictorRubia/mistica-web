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
    SheetRoot: function() {
        return d;
    },
    default: function() {
        return b;
    },
    showSheet: function() {
        return w;
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
const S = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "sheet-web" */ "./sheet-web.js"))));
let u = null, a = null, i = null, c = !1;
const w = (e)=>{
    const t = document.activeElement, r = ()=>{
        t == null || t.focus();
    }, n = ()=>{
        if (!a) return Promise.reject(new Error("Tried to show a Sheet but the SheetRoot component was not mounted"));
        if (c) return Promise.reject(new Error("Tried to show a Sheet but there is already one open"));
        c = !0, a(e);
        const s = new Promise((o)=>{
            i = o;
        });
        return s.finally(()=>{
            c = !1, r();
        }), s;
    };
    if (u) {
        const s = u;
        return Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "sheet-native" */ "./sheet-native.js"))).then((param)=>{
            let { showNativeSheet: o } = param;
            return o(s, e).finally(()=>{
                r();
            });
        }).catch((o)=>{
            if (o.code === "400") return n();
            throw o;
        });
    } else return n();
}, d = (e)=>{
    const [t, r] = _react.useState(null);
    return _react.useEffect(()=>{
        if (e.nativeImplementation) return u = e.nativeImplementation, ()=>{
            u = null;
        };
    }, [
        e.nativeImplementation
    ]), _react.useEffect(()=>(a = (n)=>{
            r(n);
        }, ()=>{
            a = null;
        }), []), /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            e.children,
            t && /* @__PURE__ */ (0, _jsxruntime.jsx)(_react.Suspense, {
                fallback: null,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(S, {
                    sheetProps: t,
                    onResolve: (n)=>{
                        r(null), i == null || i(n);
                    }
                })
            })
        ]
    });
}, b = d;
