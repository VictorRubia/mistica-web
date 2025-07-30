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
import { jsx as t } from "react/jsx-runtime";
import * as s from "react";
import w, { SheetBody as y } from "./sheet-common.js";
import { useScreenSize as C, useTheme as I } from "./hooks.js";
import v from "./negative-box.js";
import { ButtonPrimary as P } from "./button.js";
import { RadioGroup as j } from "./radio-button.js";
import { RowList as k, Row as z } from "./list.js";
import { sheetConfirmButton as A } from "./text-tokens.js";
const D = /*#__PURE__*/ s.forwardRef((param, l)=>{
    let { title: f, subtitle: h, description: p, items: u, selectedId: c, onClose: R, onSelect: r, button: i, dataAttributes: B } = param;
    const [o, x] = s.useState(c), a = s.useRef(!1), { isDesktopOrBigger: m } = C(), { texts: g, t: L } = I();
    return /* @__PURE__ */ t(w, {
        onClose: R,
        ref: l,
        dataAttributes: _object_spread({
            "component-name": "RadioListSheet"
        }, B),
        children: (param)=>{
            let { closeModal: d, modalTitleId: n } = param;
            return /* @__PURE__ */ t(y, {
                title: f,
                subtitle: h,
                description: p,
                modalTitleId: n,
                button: m ? /* @__PURE__ */ t(P, {
                    onPress: ()=>{
                        a.current && (r == null || r(o || "")), d();
                    },
                    children: (i == null ? void 0 : i.text) || g.sheetConfirmButton || L(A)
                }) : void 0,
                children: /* @__PURE__ */ t(v, {
                    children: /* @__PURE__ */ t(j, {
                        "aria-labelledby": n,
                        name: "sheetselection",
                        value: o,
                        onChange: (e)=>{
                            x(e), a.current = !0, !m && (r == null || r(e), setTimeout(()=>{
                                d();
                            }, 200));
                        },
                        children: /* @__PURE__ */ t(k, {
                            children: u.map((e)=>/* @__PURE__ */ {
                                var _e_title;
                                return t(z, {
                                    title: (_e_title = e.title) !== null && _e_title !== void 0 ? _e_title : "",
                                    description: e.description,
                                    asset: e.asset,
                                    radioValue: e.id
                                }, e.id);
                            })
                        })
                    })
                })
            });
        }
    });
}), q = D;
export { q as default };
