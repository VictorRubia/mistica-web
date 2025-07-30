"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Rt;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _formcontext = require("./form-context.js");
const _hooks = require("./hooks.js");
const _keys = require("./utils/keys.js");
const _textfieldcomponents = require("./text-field-components.js");
const _iconchevrondownregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-chevron-down-regular.js"));
const _textfieldbase = require("./text-field-base.js");
const _overlay = /*#__PURE__*/ _interop_require_default(require("./overlay.js"));
const _platform = require("./utils/platform.js");
const _dom = require("./utils/dom.js");
const _text = require("./text.js");
const _selectcssmistica = require("./select.css-mistica.js");
const _textfieldbasecssmistica = require("./text-field-base.css-mistica.js");
const _portal = require("./portal.js");
const _css = require("./utils/css.js");
const _themevariantcontext = require("./theme-variant-context.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
const at = (param)=>{
    let { id: fe, label: u, helperText: pe, value: me, defaultValue: he, onChangeValue: C, name: i, fullWidth: M, options: d, optional: P, showOptionalLabel: Se, disabled: ve, error: ge, onBlur: D, autoFocus: z = !1, native: Te, dataAttributes: j } = param;
    var re;
    const h = _react.useRef(null), f = _react.useRef(null), S = _react.useRef(null), v = _react.useRef(null), R = _react.useRef(/* @__PURE__ */ new Map()), [Ie, we] = _react.useState(!0), [g, Ee] = _react.useState(he), [H, K] = _react.useState(!1), [U, X] = _react.useState(!1), [J, O] = _react.useState(!1), [a, F] = _react.useState({}), [T, W] = _react.useState(), G = _react.useRef(null), xe = _react.useId(), L = fe || xe, { rawValues: Oe, setRawValue: Z, setValue: $, formStatus: ye, formErrors: Q, setFormError: Ne, register: B } = (0, _formcontext.useForm)(), { platformOverrides: Y } = (0, _hooks.useTheme)(), be = Te || process.env.NODE_ENV === "test" && !process.env.SSR_TEST || (0, _platform.isAndroid)(Y) || (0, _platform.isIos)(Y), I = ve || ye === "sending", A = ge || !!Q[i], ee = Q[i] || pe, l = me !== null && me !== void 0 ? me : Oe[i], te = (e)=>{
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
    _react.useEffect(()=>{
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
    ]), _react.useEffect(()=>(B(i, {
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
    ]), _react.useEffect(()=>{
        const e = (o)=>{
            var p;
            const s = {
                [_keys.UP]: -1,
                [_keys.DOWN]: 1
            }[o.key];
            if (s) {
                (0, _dom.cancelEvent)(o);
                var _ref;
                const x = (_ref = (p = d[d.findIndex((param)=>{
                    let { value: y } = param;
                    return y === T;
                }) + s]) == null ? void 0 : p.value) !== null && _ref !== void 0 ? _ref : T;
                W(x), Re(x);
            }
        }, t = (o)=>{
            if (H) switch(o.key){
                case _keys.TAB:
                    (0, _dom.cancelEvent)(o);
                    break;
                case _keys.ESC:
                    w(!1);
                    break;
                case _keys.ENTER:
                case _keys.SPACE:
                    (0, _dom.cancelEvent)(o), d.findIndex((param)=>{
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
    }), _react.useEffect(()=>{
        z && f.current && f.current.focus();
    }, [
        z
    ]), _react.useEffect(()=>{
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
            !H && (e.key === _keys.SPACE || e.key === _keys.ENTER) && ((0, _dom.cancelEvent)(e), w(!0));
        }
    }, ne = (0, _css.pxToRem)(20), E = g !== null && g !== void 0 ? g : l;
    var _a_transformOrigin;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_themevariantcontext.ThemeVariant, {
        variant: "default",
        children: be || Ie ? /* @__PURE__ */ (0, _jsxruntime.jsxs)(_textfieldcomponents.FieldContainer, {
            disabled: I,
            helperText: /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldcomponents.HelperText, {
                error: A,
                leftText: ee
            }),
            fieldRef: S,
            fullWidth: M,
            dataAttributes: _object_spread({
                testid: "Select"
            }, j),
            children: [
                u && /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldcomponents.Label, {
                    error: A,
                    forId: L,
                    inputState: J ? "focused" : (E !== null && E !== void 0 ? E : (re = h.current) == null ? void 0 : re.value) ? "filled" : "default",
                    showOptional: P && Se,
                    children: u
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsxs)("select", {
                    className: (0, _classnames.default)(_selectcssmistica.selectVariants[I ? "disabled" : "default"], u ? _textfieldbasecssmistica.inputWithLabel : _textfieldbasecssmistica.inputWithoutLabel),
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
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("option", {
                            value: "",
                            style: {
                                display: "none"
                            },
                            "aria-label": "",
                            children: u
                        }),
                        d.map((param)=>{
                            let { value: e, text: t } = param;
                            return(// Similar issue in another lib: https://github.com/chakra-ui/chakra-ui/issues/417#issue-566611352
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("option", {
                                value: e,
                                style: {
                                    color: "initial"
                                },
                                children: t
                            }, e));
                        })
                    ]
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _selectcssmistica.arrowDown,
                    "aria-hidden": !0,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        className: _selectcssmistica.iconContainer,
                        "data-testid": "endIcon",
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconchevrondownregular.default, {
                            size: ne,
                            color: _skincontractcssmistica.vars.colors.neutralMedium
                        })
                    })
                })
            ]
        }) : /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({
                    className: _selectcssmistica.selectContainerVariants[M ? "fullWidth" : "default"],
                    role: "button",
                    "aria-haspopup": "listbox",
                    ref: f
                }, !I && ke), {
                    children: [
                        /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldbase.TextFieldBaseAutosuggest, {
                            style: {
                                visibility: "hidden"
                            },
                            fullWidth: M,
                            endIcon: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                className: _selectcssmistica.iconContainer,
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconchevrondownregular.default, {
                                    size: ne,
                                    color: _skincontractcssmistica.vars.colors.neutralMedium
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
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: (0, _classnames.default)(_selectcssmistica.selectTextVariants[I ? "disabled" : "default"], u ? _textfieldbasecssmistica.inputWithLabel : _textfieldbasecssmistica.inputWithoutLabel),
                            children: _e(E)
                        })
                    ]
                })),
                H && /* @__PURE__ */ (0, _jsxruntime.jsx)(_overlay.default, {
                    onPress: (e)=>{
                        w(!1), (0, _dom.cancelEvent)(e);
                    },
                    disableScroll: !0,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_portal.Portal, {
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)("ul", {
                            style: (0, _css.applyCssVars)({
                                [_selectcssmistica.vars.top]: a.top ? `${a.top}px` : "",
                                [_selectcssmistica.vars.left]: a.left ? `${a.left}px` : "",
                                [_selectcssmistica.vars.maxHeight]: a.maxHeight ? `${a.maxHeight}px` : "",
                                [_selectcssmistica.vars.minWidth]: a.minWidth ? `${a.minWidth}px` : "",
                                [_selectcssmistica.vars.transformOrigin]: (_a_transformOrigin = a.transformOrigin) !== null && _a_transformOrigin !== void 0 ? _a_transformOrigin : ""
                            }),
                            onPointerDown: _dom.cancelEvent,
                            className: (0, _classnames.default)(_selectcssmistica.optionsContainer, U ? _selectcssmistica.optionsAnimationsVariants.show : _selectcssmistica.optionsAnimationsVariants.hide),
                            role: "listbox",
                            ref: v,
                            children: d.map((param)=>{
                                let { value: e, text: t } = param;
                                return /* @__PURE__ */ (0, _jsxruntime.jsx)("li", {
                                    role: "option",
                                    "aria-selected": e === (g !== null && g !== void 0 ? g : l),
                                    "data-value": e,
                                    className: (0, _classnames.default)(_selectcssmistica.menuItem, {
                                        [_selectcssmistica.menuItemSelected]: e === T || e === (g !== null && g !== void 0 ? g : l)
                                    }),
                                    onPointerDown: _dom.cancelEvent,
                                    onClick: ()=>q(e),
                                    ref: (o)=>{
                                        o ? R.current.set(e, o) : R.current.delete(e);
                                    },
                                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
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
