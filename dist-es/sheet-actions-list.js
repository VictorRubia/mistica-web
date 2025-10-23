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
import { jsx as r, jsxs as g } from "react/jsx-runtime";
import * as k from "react";
import v, { SheetBody as A } from "./sheet-common.js";
import { useTheme as D } from "./hooks.js";
import L from "./box.js";
import { Text3 as R } from "./text.js";
import { vars as o } from "./skins/skin-contract.css-mistica.js";
import { sheetActionRow as w } from "./sheet-action-row.css-mistica.js";
import B from "./image.js";
import I from "./negative-box.js";
import T from "./touchable.js";
const b = /*#__PURE__*/ k.forwardRef((param, d)=>{
    let { title: m, subtitle: a, description: c, items: h, onClose: l, onSelect: e, dataAttributes: n } = param;
    const { isDarkMode: p } = D();
    return /* @__PURE__ */ r(v, {
        onClose: l,
        ref: d,
        dataAttributes: _object_spread({
            "component-name": "ActionsListSheet"
        }, n),
        children: (param)=>{
            let { closeModal: u, modalTitleId: f } = param;
            return /* @__PURE__ */ r(A, {
                title: m,
                subtitle: a,
                description: c,
                modalTitleId: f,
                children: /* @__PURE__ */ r(I, {
                    children: h.map((param)=>{
                        let { id: i, style: s, title: x, icon: t } = param;
                        return /* @__PURE__ */ r(T, {
                            onPress: ()=>{
                                e == null || e(i), u();
                            },
                            children: /* @__PURE__ */ g("div", {
                                className: w,
                                children: [
                                    t && /* @__PURE__ */ r(L, {
                                        paddingRight: 16,
                                        children: t.Icon ? /* @__PURE__ */ r(t.Icon, {
                                            size: 24,
                                            color: s === "destructive" ? o.colors.textLinkDanger : o.colors.neutralHigh
                                        }) : /* @__PURE__ */ r(B, {
                                            circular: !0,
                                            src: p && t.urlDark ? t.urlDark : t.url,
                                            width: 40
                                        })
                                    }),
                                    /* @__PURE__ */ r(R, {
                                        regular: !0,
                                        color: s === "destructive" ? o.colors.textLinkDanger : o.colors.textPrimary,
                                        children: x
                                    })
                                ]
                            })
                        }, i);
                    })
                })
            });
        }
    });
}), C = b;
export { C as default };
