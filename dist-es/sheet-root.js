"use client";
import { jsxs as h, Fragment as f, jsx as m } from "react/jsx-runtime";
import * as l from "react";
const S = /*#__PURE__*/ l.lazy(()=>import(/* webpackChunkName: "sheet-web" */ "./sheet-web.js"));
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
        return import(/* webpackChunkName: "sheet-native" */ "./sheet-native.js").then((param)=>{
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
    const [t, r] = l.useState(null);
    return l.useEffect(()=>{
        if (e.nativeImplementation) return u = e.nativeImplementation, ()=>{
            u = null;
        };
    }, [
        e.nativeImplementation
    ]), l.useEffect(()=>(a = (n)=>{
            r(n);
        }, ()=>{
            a = null;
        }), []), /* @__PURE__ */ h(f, {
        children: [
            e.children,
            t && /* @__PURE__ */ m(l.Suspense, {
                fallback: null,
                children: /* @__PURE__ */ m(S, {
                    sheetProps: t,
                    onResolve: (n)=>{
                        r(null), i == null || i(n);
                    }
                })
            })
        ]
    });
}, b = d;
export { d as SheetRoot, b as default, w as showSheet };
