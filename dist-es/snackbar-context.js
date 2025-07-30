"use client";
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
import { jsxs as d, jsx as b } from "react/jsx-runtime";
import * as e from "react";
import { isWebViewBridgeAvailable as C } from "@tef-novum/webview-bridge";
import { showNativeSnackbar as h } from "./snackbar-native.js";
const f = /*#__PURE__*/ e.createContext({
    snackbars: [],
    setSnackbars: ()=>{}
}), m = /*#__PURE__*/ e.lazy(()=>import(/* webpackChunkName: "snackbar" */ "./snackbar.js")), p = (param)=>{
    let { children: c } = param;
    const [t, i] = e.useState([]), s = e.useRef(null), o = e.useRef(!1);
    e.useEffect(()=>{
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
    }, k = e.useMemo(()=>({
            snackbars: t,
            setSnackbars: i
        }), [
        t
    ]), n = t[0];
    return /* @__PURE__ */ d(f.Provider, {
        value: k,
        children: [
            c,
            !!n && /* @__PURE__ */ b(e.Suspense, {
                fallback: null,
                children: /* @__PURE__ */ b(m, {
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
    const { snackbars: c, setSnackbars: t } = e.useContext(f);
    return {
        openSnackbar: e.useCallback((s)=>{
            if (C()) h(s).then((param)=>{
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
export { p as SnackbarRoot, w as useSnackbar };
