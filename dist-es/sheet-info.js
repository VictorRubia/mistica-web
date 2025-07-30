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
import { jsx as o, jsxs as e } from "react/jsx-runtime";
import * as c from "react";
import y from "./inline.js";
import g from "./circle.js";
import x, { SheetBody as v } from "./sheet-common.js";
import { useTheme as S } from "./hooks.js";
import k from "./box.js";
import b from "./stack.js";
import { Text3 as B, Text2 as C } from "./text.js";
import { vars as l } from "./skins/skin-contract.css-mistica.js";
import { itemContainer as D, infoItemIconContainer as N, infoItemIcon as P } from "./sheet-info.css-mistica.js";
import T from "./image.js";
import { ButtonPrimary as j } from "./button.js";
import w from "./divider.js";
const z = /*#__PURE__*/ c.forwardRef((param, f)=>{
    let { title: a, subtitle: s, description: m, items: t, onClose: d, button: n, dataAttributes: p } = param;
    const { isDarkMode: h } = S();
    return /* @__PURE__ */ o(x, {
        onClose: d,
        ref: f,
        dataAttributes: _object_spread({
            "component-name": "InfoSheet"
        }, p),
        children: (param)=>{
            let { closeModal: u, modalTitleId: I } = param;
            return /* @__PURE__ */ o(v, {
                title: a,
                subtitle: s,
                description: m,
                modalTitleId: I,
                button: n ? /* @__PURE__ */ o(j, {
                    onPress: u,
                    children: n.text
                }) : void 0,
                children: /* @__PURE__ */ o(k, {
                    paddingBottom: 16,
                    role: "list",
                    children: t.map((r, i)=>/* @__PURE__ */ e(c.Fragment, {
                            children: [
                                /* @__PURE__ */ o("div", {
                                    className: D,
                                    role: "listitem",
                                    children: /* @__PURE__ */ e(y, {
                                        space: 8,
                                        children: [
                                            /* @__PURE__ */ o("div", {
                                                className: N,
                                                style: {
                                                    alignItems: r.icon.type !== "bullet" && !r.description ? "center" : void 0
                                                },
                                                children: /* @__PURE__ */ o("div", {
                                                    className: P,
                                                    children: r.icon.type === "bullet" ? /* @__PURE__ */ o(g, {
                                                        size: 8,
                                                        backgroundColor: l.colors.textPrimary
                                                    }) : r.icon.Icon ? /* @__PURE__ */ o(r.icon.Icon, {
                                                        size: r.icon.type === "small" ? 16 : 24
                                                    }) : /* @__PURE__ */ o(T, {
                                                        src: h && r.icon.urlDark ? r.icon.urlDark : r.icon.url,
                                                        width: r.icon.type === "small" ? 16 : 24,
                                                        height: r.icon.type === "small" ? 16 : 24
                                                    })
                                                })
                                            }),
                                            /* @__PURE__ */ e(b, {
                                                space: 2,
                                                children: [
                                                    /* @__PURE__ */ o(B, {
                                                        regular: !0,
                                                        children: r.title
                                                    }),
                                                    r.description && /* @__PURE__ */ o(C, {
                                                        regular: !0,
                                                        color: l.colors.textSecondary,
                                                        children: r.description
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                i < t.length - 1 && /* @__PURE__ */ o(w, {})
                            ]
                        }, r.id || i))
                })
            });
        }
    });
}), Q = z;
export { Q as default };
