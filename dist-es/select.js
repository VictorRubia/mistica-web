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
import { jsx as r, jsxs as _, Fragment as De } from "react/jsx-runtime";
import * as n from "react";
import k from "classnames";
import { useForm as He } from "./form-context.js";
import { useTheme as Fe } from "./hooks.js";
import { SPACE as oe, ENTER as se, ESC as We, TAB as Ge, UP as Le, DOWN as Ze } from "./utils/keys.js";
import { FieldContainer as $e, HelperText as Be, Label as qe } from "./text-field-components.js";
import ie from "./generated/mistica-icons/icon-chevron-down-regular.js";
import { TextFieldBaseAutosuggest as ze } from "./text-field-base.js";
import je from "./overlay.js";
import { isAndroid as Ke, isIos as Ue } from "./utils/platform.js";
import { cancelEvent as m } from "./utils/dom.js";
import { Text3 as Xe } from "./text.js";
import { selectVariants as Je, arrowDown as Qe, iconContainer as ce, selectContainerVariants as Ye, selectTextVariants as et, vars as b, optionsContainer as tt, optionsAnimationsVariants as ae, menuItem as nt, menuItemSelected as rt } from "./select.css-mistica.js";
import { inputWithLabel as le, inputWithoutLabel as ue } from "./text-field-base.css-mistica.js";
import { Portal as ot } from "./portal.js";
import { pxToRem as st, applyCssVars as it } from "./utils/css.js";
import { ThemeVariant as ct } from "./theme-variant-context.js";
import { vars as de } from "./skins/skin-contract.css-mistica.js";
const at = (param)=>{
    let { id: fe, label: u, helperText: pe, value: me, defaultValue: he, onChangeValue: C, name: i, fullWidth: M, options: d, optional: P, showOptionalLabel: Se, disabled: ve, error: ge, onBlur: D, autoFocus: z = !1, native: Te, dataAttributes: j } = param;
    var re;
    const h = n.useRef(null), f = n.useRef(null), S = n.useRef(null), v = n.useRef(null), R = n.useRef(/* @__PURE__ */ new Map()), [Ie, we] = n.useState(!0), [g, Ee] = n.useState(he), [H, K] = n.useState(!1), [U, X] = n.useState(!1), [J, O] = n.useState(!1), [a, F] = n.useState({}), [T, W] = n.useState(), G = n.useRef(null), xe = n.useId(), L = fe || xe, { rawValues: Oe, setRawValue: Z, setValue: $, formStatus: ye, formErrors: Q, setFormError: Ne, register: B } = He(), { platformOverrides: Y } = Fe(), be = Te || process.env.NODE_ENV === "test" && !process.env.SSR_TEST || Ke(Y) || Ue(Y), I = ve || ye === "sending", A = ge || !!Q[i], ee = Q[i] || pe, l = me !== null && me !== void 0 ? me : Oe[i], te = (e)=>{
        C == null || C(e), Ne({
            name: i,
            error: ""
        }), Z({
            name: i,
            value: e
        }), $({
            name: i,
            value: e
        });
    }, w = (e)=>{
        if (e) {
            if (S != null && S.current) {
                const s = S.current.getBoundingClientRect(), p = s.top, x = s.width, y = s.left, Ce = s.height, N = p + Ce, V = Math.min(d.length, 8) * 48 + 16;
                if (N + V + 12 > window.innerHeight) {
                    const Me = window.innerHeight - N;
                    if (p > Me) {
                        const Pe = p - V;
                        F({
                            minWidth: x,
                            left: y,
                            top: Math.max(Pe, 12),
                            maxHeight: Math.min(p - 12, V),
                            transformOrigin: "center bottom"
                        });
                    } else F({
                        minWidth: x,
                        top: N,
                        left: y,
                        maxHeight: window.innerHeight - N - 12,
                        transformOrigin: "center top"
                    });
                } else F({
                    minWidth: x,
                    top: N,
                    left: y,
                    maxHeight: V,
                    transformOrigin: "center top"
                });
            }
            K(!0), requestAnimationFrame(()=>{
                G.current && v.current && "scrollTop" in v.current && (v.current.scrollTop = G.current), X(!0);
            }), W(g !== null && g !== void 0 ? g : l);
        } else X(!1), K(!1), W(void 0);
    }, q = (e)=>{
        var t;
        G.current = (t = v.current) == null ? void 0 : t.scrollTop, w(!1), te && typeof e == "string" && te(e), typeof l > "u" && Ee(e);
    }, Re = (e)=>{
        var o;
        const t = (o = v.current) == null ? void 0 : o.getBoundingClientRect();
        if (t && e && R.current.has(e)) {
            const c = R.current.get(e), s = c == null ? void 0 : c.getBoundingClientRect();
            if (s && s.top + s.height / 2 >= t.top + t.height) {
                c == null || c.scrollIntoView();
                return;
            }
            s && s.top + s.height / 2 <= t.top && (c == null || c.scrollIntoView(!1));
        }
    }, Ae = f.current, Ve = h.current;
    n.useEffect(()=>{
        Z({
            name: i,
            value: l
        }), $({
            name: i,
            value: l
        });
    }, [
        i,
        Z,
        $,
        l
    ]), n.useEffect(()=>(B(i, {
            input: h.current,
            focusableElement: f.current,
            label: u
        }), ()=>{
            B(i, {
                input: null,
                focusableElement: null,
                label: ""
            });
        }), [
        i,
        B,
        f,
        h,
        Ae,
        Ve,
        u
    ]), n.useEffect(()=>{
        const e = (o)=>{
            var p;
            const s = {
                [Le]: -1,
                [Ze]: 1
            }[o.key];
            if (s) {
                m(o);
                var _ref;
                const x = (_ref = (p = d[d.findIndex((param)=>{
                    let { value: y } = param;
                    return y === T;
                }) + s]) == null ? void 0 : p.value) !== null && _ref !== void 0 ? _ref : T;
                W(x), Re(x);
            }
        }, t = (o)=>{
            if (H) switch(o.key){
                case Ge:
                    m(o);
                    break;
                case We:
                    w(!1);
                    break;
                case se:
                case oe:
                    m(o), d.findIndex((param)=>{
                        let { value: c } = param;
                        return c === T;
                    }) !== -1 && T !== g && q(T), w(!1);
                    break;
            }
            U && e(o);
        };
        return document.addEventListener("keydown", t, !1), ()=>{
            document.removeEventListener("keydown", t, !1);
        };
    }), n.useEffect(()=>{
        z && f.current && f.current.focus();
    }, [
        z
    ]), n.useEffect(()=>{
        we(!1);
    }, []);
    const _e = (e)=>{
        var t;
        return e ? (t = d.find((param)=>{
            let { value: o } = param;
            return o === e;
        })) == null ? void 0 : t.text : "";
    }, ke = {
        tabIndex: 0,
        onFocus: ()=>O(!0),
        onBlur: ()=>O(!1),
        onClick: ()=>{
            w(!0), O(!0);
        },
        onKeyDown: (e)=>{
            !H && (e.key === oe || e.key === se) && (m(e), w(!0));
        }
    }, ne = st(20), E = g !== null && g !== void 0 ? g : l;
    var _a_transformOrigin;
    return /* @__PURE__ */ r(ct, {
        variant: "default",
        children: be || Ie ? /* @__PURE__ */ _($e, {
            disabled: I,
            helperText: /* @__PURE__ */ r(Be, {
                error: A,
                leftText: ee
            }),
            fieldRef: S,
            fullWidth: M,
            dataAttributes: _object_spread({
                testid: "Select"
            }, j),
            children: [
                u && /* @__PURE__ */ r(qe, {
                    error: A,
                    forId: L,
                    inputState: J ? "focused" : (E !== null && E !== void 0 ? E : (re = h.current) == null ? void 0 : re.value) ? "filled" : "default",
                    showOptional: P && Se,
                    children: u
                }),
                /* @__PURE__ */ _("select", {
                    className: k(Je[I ? "disabled" : "default"], u ? le : ue),
                    id: L,
                    "aria-invalid": !!A,
                    value: E,
                    required: !P,
                    disabled: I,
                    onChange: (e)=>{
                        q(e.target.value);
                    },
                    onFocus: ()=>O(!0),
                    onBlur: (e)=>{
                        O(!1), D == null || D(e);
                    },
                    ref: (e)=>{
                        [
                            h,
                            f
                        ].forEach((t)=>{
                            t.current = e;
                        });
                    },
                    style: {
                        // Override default browser opacity when disabled. This opacity also affects the label.
                        // Without this fix, the label is invisible when disabled
                        opacity: 1,
                        // Use transparent color for the empty option (show below) to avoid showing it when the menu is closed
                        color: E ? void 0 : "transparent"
                    },
                    children: [
                        !E && d.every((param)=>{
                            let { value: e } = param;
                            return !!e;
                        }) && // If no "empty" option exists, insert a dummy empty option. Once an option is selected,
                        // this empty option is removed. This is needed to allow a native select without a selected
                        // default option.
                        // Chrome doesn't show this option when the select menu is open (because of display: none),
                        // but Safari does. So we use the select's label for this option, otherwise it would be shown
                        // as an empty option, which is weirder.
                        /* @__PURE__ */ r("option", {
                            value: "",
                            style: {
                                display: "none"
                            },
                            "aria-label": "",
                            children: u
                        }),
                        d.map((param)=>{
                            let { value: e, text: t } = param;
                            return(// Set color: 'initial' to avoid wrong text color in some browsers when using dark mode.
                            // Similar issue in another lib: https://github.com/chakra-ui/chakra-ui/issues/417#issue-566611352
                            /* @__PURE__ */ r("option", {
                                value: e,
                                style: {
                                    color: "initial"
                                },
                                children: t
                            }, e));
                        })
                    ]
                }),
                /* @__PURE__ */ r("div", {
                    className: Qe,
                    "aria-hidden": !0,
                    children: /* @__PURE__ */ r("div", {
                        className: ce,
                        "data-testid": "endIcon",
                        children: /* @__PURE__ */ r(ie, {
                            size: ne,
                            color: de.colors.neutralMedium
                        })
                    })
                })
            ]
        }) : /* @__PURE__ */ _(De, {
            children: [
                /* @__PURE__ */ _("div", _object_spread_props(_object_spread({
                    className: Ye[M ? "fullWidth" : "default"],
                    role: "button",
                    "aria-haspopup": "listbox",
                    ref: f
                }, !I && ke), {
                    children: [
                        /* @__PURE__ */ r(ze, {
                            style: {
                                visibility: "hidden"
                            },
                            fullWidth: M,
                            endIcon: /* @__PURE__ */ r("div", {
                                className: ce,
                                children: /* @__PURE__ */ r(ie, {
                                    size: ne,
                                    color: de.colors.neutralMedium
                                })
                            }),
                            focus: J,
                            label: u,
                            value: E,
                            shrinkLabel: !!(l || g),
                            name: i,
                            helperText: ee,
                            required: !P,
                            disabled: I,
                            id: L,
                            error: A,
                            inputRef: h,
                            fieldRef: S,
                            dataAttributes: _object_spread({
                                testid: "Select"
                            }, j)
                        }),
                        /* @__PURE__ */ r("div", {
                            className: k(et[I ? "disabled" : "default"], u ? le : ue),
                            children: _e(E)
                        })
                    ]
                })),
                H && /* @__PURE__ */ r(je, {
                    onPress: (e)=>{
                        w(!1), m(e);
                    },
                    disableScroll: !0,
                    children: /* @__PURE__ */ r(ot, {
                        children: /* @__PURE__ */ r("ul", {
                            style: it({
                                [b.top]: a.top ? `${a.top}px` : "",
                                [b.left]: a.left ? `${a.left}px` : "",
                                [b.maxHeight]: a.maxHeight ? `${a.maxHeight}px` : "",
                                [b.minWidth]: a.minWidth ? `${a.minWidth}px` : "",
                                [b.transformOrigin]: (_a_transformOrigin = a.transformOrigin) !== null && _a_transformOrigin !== void 0 ? _a_transformOrigin : ""
                            }),
                            onPointerDown: m,
                            className: k(tt, U ? ae.show : ae.hide),
                            role: "listbox",
                            ref: v,
                            children: d.map((param)=>{
                                let { value: e, text: t } = param;
                                return /* @__PURE__ */ r("li", {
                                    role: "option",
                                    "aria-selected": e === (g !== null && g !== void 0 ? g : l),
                                    "data-value": e,
                                    className: k(nt, {
                                        [rt]: e === T || e === (g !== null && g !== void 0 ? g : l)
                                    }),
                                    onPointerDown: m,
                                    onClick: ()=>q(e),
                                    ref: (o)=>{
                                        o ? R.current.set(e, o) : R.current.delete(e);
                                    },
                                    children: /* @__PURE__ */ r(Xe, {
                                        regular: !0,
                                        children: t
                                    })
                                }, e);
                            })
                        })
                    })
                })
            ]
        })
    });
}, Rt = at;
export { Rt as default };
