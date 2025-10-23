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
import { jsxs as c, jsx as e, Fragment as S } from "react/jsx-runtime";
import * as v from "react";
import f from "classnames";
import { useIsInverseOrMediaVariant as T } from "./theme-variant-context.js";
import { useTheme as C } from "./hooks.js";
import { Text1 as x } from "./text.js";
import { labelContainer as I, shrinked as O, labelText as k, helperText as y, leftHelperText as E, warnIcon as F, rightHelperText as H, fieldContainer as W, fullWidth as w, normalWidth as A, disabled as P, field as R, background as N, helperContainer as j } from "./text-field-components.css-mistica.js";
import { vars as o } from "./skins/skin-contract.css-mistica.js";
import { getPrefixedDataAttributes as D } from "./utils/dom.js";
import { formFieldOptionalLabelSuffix as V } from "./text-tokens.js";
import q from "./generated/mistica-icons/icon-warning-regular.js";
import B from "./screen-reader-only.js";
const Z = (param)=>{
    let { shrinkLabel: l, forId: d, inputState: r, error: s, children: i, style: t, showOptional: a } = param;
    const n = l || r === "focused" || r === "filled", [m, p] = v.useState("initial"), { texts: u, t: g } = C();
    v.useEffect(()=>{
        const b = setTimeout(()=>{
            process.env.NODE_ENV !== "test" && p("transform 150ms, width 150ms");
        });
        return ()=>{
            clearTimeout(b);
        };
    }, []);
    let h = o.colors.textSecondary;
    return s && r !== "default" ? h = o.colors.textError : r === "focused" && (h = o.colors.textActivated), /* @__PURE__ */ c("label", {
        className: f(I, {
            [O]: n
        }),
        htmlFor: d,
        style: _object_spread_props(_object_spread({
            color: h
        }, t), {
            transition: m
        }),
        "data-testid": "label",
        children: [
            /* @__PURE__ */ e("span", {
                className: k,
                children: i
            }),
            a ? /* @__PURE__ */ c("span", {
                children: [
                    "\xa0(",
                    u.formFieldOptionalLabelSuffix || g(V),
                    ")"
                ]
            }) : null
        ]
    });
}, $ = (param)=>{
    let { leftText: l, leftTextId: d, rightText: r, rightTextId: s, rightTextLabel: i, error: t } = param;
    const a = T(), n = a ? o.colors.textPrimaryInverse : t ? o.colors.textError : o.colors.textSecondary, m = a ? o.colors.textPrimaryInverse : o.colors.textSecondary;
    return /* @__PURE__ */ c(S, {
        children: [
            l && /* @__PURE__ */ c("p", {
                className: f(y, E),
                "data-testid": t ? "errorText" : "helperText",
                children: [
                    t && /* @__PURE__ */ e(x, {
                        regular: !0,
                        children: /* @__PURE__ */ e(q, {
                            color: n,
                            className: F
                        })
                    }),
                    /* @__PURE__ */ e(x, {
                        color: n,
                        regular: !0,
                        id: d,
                        "aria-live": t ? "assertive" : void 0,
                        children: l
                    })
                ]
            }),
            r && /* @__PURE__ */ e("div", {
                className: f(y, {
                    [H]: !!l
                }),
                "data-testid": "endHelperText",
                children: /* @__PURE__ */ c(x, {
                    color: m,
                    regular: !0,
                    as: "p",
                    textAlign: "right",
                    wordBreak: !1,
                    id: s,
                    children: [
                        i && /* @__PURE__ */ e(B, {
                            children: /* @__PURE__ */ e("span", {
                                children: i
                            })
                        }),
                        /* @__PURE__ */ e("span", {
                            "aria-hidden": i !== void 0,
                            children: r
                        })
                    ]
                })
            })
        ]
    });
}, ee = (param)=>{
    let { multiline: l, disabled: d, children: r, helperText: s, className: i, fieldRef: t, fullWidth: a, readOnly: n, dataAttributes: m } = param;
    return(// eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ c("div", _object_spread_props(_object_spread({
        className: f(W, a ? w : A, {
            [P]: d
        }),
        onClick: (p)=>{
            var u;
            (u = p.currentTarget.querySelector(l ? "textarea" : "input")) == null || u.focus();
        }
    }, D(m)), {
        children: [
            /* @__PURE__ */ e("div", {
                className: f(R, n ? N.readOnly : N.default, i),
                ref: t,
                children: r
            }),
            s && /* @__PURE__ */ e("div", {
                className: j,
                children: s
            })
        ]
    })));
};
export { ee as FieldContainer, $ as HelperText, Z as Label };
