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
import { jsx as a, Fragment as g, jsxs as c } from "react/jsx-runtime";
import * as t from "react";
const s = /*#__PURE__*/ t.createContext({
    mounted: !1,
    dialog: null,
    setDialog: ()=>{}
}), d = /*#__PURE__*/ t.lazy(()=>import(/* webpackChunkName: "dialog" */ "./dialog.js")), m = ()=>{
    throw Error("Tried to show a dialog but the DialogRoot component was not mounted (missing ThemeContextProvider?)");
}, f = ()=>{
    const { dialog: n, setDialog: l, mounted: e } = t.useContext(s), r = t.useCallback((o)=>{
        if (e || m(), o && n) throw Error("Tried to show a dialog on top of another dialog");
        l(_object_spread({
            triggerEl: document.activeElement
        }, o));
    }, [
        l,
        n,
        e
    ]);
    return t.useMemo(()=>({
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
    const { mounted: l } = t.useContext(s), [e, r] = t.useState(null), o = t.useMemo(()=>({
            mounted: !0,
            dialog: e,
            setDialog: r
        }), [
        e,
        r
    ]);
    return l ? /* @__PURE__ */ a(g, {
        children: n
    }) : /* @__PURE__ */ c(s.Provider, {
        value: o,
        children: [
            n,
            e && /* @__PURE__ */ a(t.Suspense, {
                fallback: null,
                children: /* @__PURE__ */ a(d, _object_spread_props(_object_spread({}, e), {
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
export { h as DialogRoot, f as useDialog };
