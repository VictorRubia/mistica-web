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
    FieldEndIcon: function() {
        return ct;
    },
    TextFieldBase: function() {
        return N;
    },
    TextFieldBaseAutosuggest: function() {
        return ut;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _textfieldcomponents = require("./text-field-components.js");
const _textfieldcomponentscssmistica = require("./text-field-components.css-mistica.js");
const _text = require("./text.js");
const _platform = require("./utils/platform.js");
const _hooks = require("./hooks.js");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _common = require("./utils/common.js");
const _textfieldbasecssmistica = require("./text-field-base.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _iconbutton = require("./icon-button.js");
const _themevariantcontext = require("./theme-variant-context.js");
const _iconbuttoncssmistica = require("./icon-button.css-mistica.js");
const _texttokens = require("./text-tokens.js");
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
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
const je = (o, m)=>{
    if (!m) return !0;
    const t = document.createElement("input");
    return t.type = m, t.value = o || "", t.value !== "";
}, ct = (param)=>{
    let { hasBackgroundColor: o = !0, onPress: m, onChange: t, disabled: g, Icon: y, checkedProps: l, uncheckedProps: d, "aria-label": h } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: _textfieldbasecssmistica.fieldEndIconContainer,
        children: l ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.InternalToggleIconButton, {
            checkedProps: _object_spread_props(_object_spread({}, l), {
                "aria-label": l["aria-label"] || ""
            }),
            uncheckedProps: _object_spread_props(_object_spread({}, d), {
                "aria-label": d["aria-label"] || ""
            }),
            onChange: t,
            hasOverlay: o,
            disabled: g
        }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconbutton.InternalIconButton, {
            Icon: y,
            disabled: g,
            "aria-label": h || "",
            onPress: m,
            hasOverlay: o
        })
    });
}, G = (o)=>{
    o.preventDefault();
}, N = /*#__PURE__*/ _react.forwardRef((_param, V)=>{
    var { error: o, helperText: m, label: t, inputProps: g, inputRef: y, defaultValue: l, value: d, onFocus: h, onBlur: I, inputComponent: E, prefix: b, startIcon: S, endIcon: p, endIconOverlay: C, shrinkLabel: i, multiline: a = !1, focus: c, fieldRef: J, maxLength: x, id: Q, autoComplete: U, fullWidth: X, dataAttributes: Y, preventCopy: L, showOptionalLabel: Z = !0 } = _param, s = _object_without_properties(_param, [
        "error",
        "helperText",
        "label",
        "inputProps",
        "inputRef",
        "defaultValue",
        "value",
        "onFocus",
        "onBlur",
        "inputComponent",
        "prefix",
        "startIcon",
        "endIcon",
        "endIconOverlay",
        "shrinkLabel",
        "multiline",
        "focus",
        "fieldRef",
        "maxLength",
        "id",
        "autoComplete",
        "fullWidth",
        "dataAttributes",
        "preventCopy",
        "showOptionalLabel"
    ]);
    const { preventCopyInFormFields: ee, texts: te, t: ie } = (0, _hooks.useTheme)();
    L = L !== null && L !== void 0 ? L : ee;
    var _ref;
    const ne = _react.useId(), w = Q || ne, O = _react.useId(), D = _react.useId(), [u, f] = _react.useState(l != null && l.length || d != null && d.length ? "filled" : "default"), { isTabletOrSmaller: re } = (0, _hooks.useScreenSize)(), [W, B] = _react.useState((_ref = l == null ? void 0 : l.length) !== null && _ref !== void 0 ? _ref : 0), A = !!t || !s.required, T = s.type === "date" || s.type === "datetime-local" || s.type === "month", M = _react.useRef(void 0);
    (0, _hooks.useIsomorphicLayoutEffect)(()=>{
        const e = T && !je(d, s.type) ? "" : d;
        M.current !== d && T && !(e != null && e.length) && u === "filled" && c === void 0 && f("default"), M.current = d, u !== "focused" && e != null && e.length && (B(e.length), f("filled")), c && f("focused"), c === !1 && !(e != null && e.length) && f("default"), c === !1 && e != null && e.length && f("filled");
    }, [
        u,
        d,
        c,
        T,
        s.type
    ]), _react.useEffect(()=>{
        s.autoFocus && f("focused");
    }, [
        s.autoFocus
    ]);
    const ae = a ? "textarea" : "input", oe = E ? {
        inputRef: y
    } : {
        ref: (0, _common.combineRefs)(V, y)
    }, R = _object_spread(_object_spread_props(_object_spread({}, s), {
        maxLength: x,
        autoComplete: U
    }), g), F = `calc(${_iconbuttoncssmistica.iconSize.default} + ${_textfieldbasecssmistica.fieldElementsGap}px)`, q = `calc(${_textfieldbasecssmistica.iconButtonSize} + ${_textfieldbasecssmistica.fieldEndIconGap}px)`, le = i || u === "focused" || u === "filled" ? re ? _textfieldcomponentscssmistica.LABEL_SCALE_MOBILE : _textfieldcomponentscssmistica.LABEL_SCALE_DESKTOP : 1, de = {
        left: `calc(${_textfieldbasecssmistica.fieldLeftPadding}px + ${S ? F : "0px"})`,
        // shrinking means applying a scale transformation, so width will be proportionally reduced.
        // Let's keep the original width.
        width: `calc((100% - ${_textfieldbasecssmistica.fieldLeftPadding}px - ${S ? F : "0px"} - ${p || C ? q : `${_textfieldbasecssmistica.fieldRightPadding}px`}) / ${le})`
    }, se = s.type === "password" && W > 0 ? "Lucida Grande, Arial, sans-serif" : "inherit";
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldcomponents.FieldContainer, {
        disabled: s.disabled,
        helperText: /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldcomponents.HelperText, {
            error: o,
            leftText: m,
            leftTextId: O,
            rightTextId: D,
            rightText: a && x ? `${W}/${x}` : void 0,
            rightTextLabel: a && x ? te.formTextMultilineMaxCount || ie(_texttokens.formTextMultilineMaxCount).replace("1$s", String(W)).replace("2$s", String(x)) : void 0
        }),
        multiline: a,
        fullWidth: X,
        fieldRef: J,
        readOnly: s.readOnly,
        dataAttributes: Y,
        children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_themevariantcontext.ThemeVariant, {
            variant: "default",
            children: [
                S && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _textfieldbasecssmistica.startIcon,
                    "data-testid": "startIcon",
                    children: S
                }),
                b && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    "aria-hidden": !0,
                    className: (0, _classnames.default)(_textfieldbasecssmistica.prefix, A ? _textfieldbasecssmistica.inputWithLabel : _textfieldbasecssmistica.inputWithoutLabel),
                    style: {
                        opacity: u === "default" ? 0 : 1
                    },
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                        color: _skincontractcssmistica.vars.colors.textSecondary,
                        regular: !0,
                        wordBreak: !1,
                        children: b
                    })
                }),
                t && /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldcomponents.Label, {
                    style: de,
                    error: o,
                    forId: w,
                    inputState: u,
                    shrinkLabel: i,
                    showOptional: !s.required && Z,
                    children: t
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _textfieldbasecssmistica.fullWidth,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                        as: "div",
                        regular: !0,
                        children: /*#__PURE__*/ _react.createElement(E || ae, _object_spread(_object_spread_props(_object_spread({}, oe, R), {
                            id: w,
                            style: _object_spread_props(_object_spread({
                                paddingRight: p ? 0 : C ? q : _textfieldbasecssmistica.fieldRightPadding,
                                paddingLeft: b ? 0 : S ? `calc(${F} + ${_textfieldbasecssmistica.fieldLeftPadding}px)` : _textfieldbasecssmistica.fieldLeftPadding
                            }, R.style), {
                                fontFamily: se
                            }),
                            className: a ? (0, _classnames.default)(_textfieldbasecssmistica.textArea, A ? _textfieldbasecssmistica.textAreaWithLabel : _textfieldbasecssmistica.textAreaWithoutLabel) : (0, _classnames.default)(_textfieldbasecssmistica.input, A ? _textfieldbasecssmistica.inputWithLabel : _textfieldbasecssmistica.inputWithoutLabel, {
                                [_textfieldbasecssmistica.inputFirefoxStyles]: (0, _platform.isFirefox)(),
                                // Hide webkit placeholder when label is not shrinked and value is empty
                                [_textfieldbasecssmistica.hiddenDatePlaceholder]: T && u === "default",
                                // Force height of input when value is empty to avoid field from having height 0 in iOS
                                [_textfieldbasecssmistica.emptyDateValue]: T && u !== "filled"
                            }),
                            onFocus: (e)=>{
                                f("focused"), h == null || h(e);
                            },
                            onBlur: (e)=>{
                                e.target.value.length > 0 ? f("filled") : f("default"), I == null || I(e);
                            },
                            onChange: (e)=>{
                                var z;
                                x === void 0 || e.target.value.length <= x ? (B(e.target.value.length), e.target.value.length > 0 && u !== "focused" && f(e.target.value.length > 0 ? "filled" : "default"), (z = R.onChange) == null || z.call(R, e)) : (e.stopPropagation(), e.preventDefault());
                            },
                            defaultValue: l,
                            value: d
                        }), o && {
                            "aria-invalid": !0
                        }, (m || a && x) && {
                            "aria-describedby": `${O} ${D}`
                        }, L && {
                            onCopy: G,
                            onCut: G
                        }))
                    })
                }),
                p && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _textfieldbasecssmistica.endIconContainer,
                    "data-testid": "endIcon",
                    children: p
                }),
                C
            ]
        })
    });
}), Je = /*#__PURE__*/ _react.lazy(()=>Promise.resolve().then(()=>/*#__PURE__*/ _interop_require_wildcard(require(/* webpackChunkName: "react-autosuggest" */ "react-autosuggest")))), ut = /*#__PURE__*/ _react.forwardRef((_param, g)=>{
    var { getSuggestions: o, id: m } = _param, t = _object_without_properties(_param, [
        "getSuggestions",
        "id"
    ]);
    const [y, l] = _react.useState([]), d = _react.useRef(null), h = _react.useRef(null), { platformOverrides: I, texts: E, t: b } = (0, _hooks.useTheme)(), S = _react.useId(), p = m || S, C = _react.useId();
    if (o && (t.value === void 0 || t.defaultValue !== void 0)) throw Error("Fields with suggestions must be used in controlled mode");
    return o ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_react.Suspense, {
        fallback: /* @__PURE__ */ (0, _jsxruntime.jsx)(N, _object_spread_props(_object_spread({}, t), {
            label: (0, _platform.isRunningAcceptanceTest)(I) ? "" : t.label,
            autoComplete: "off",
            ref: g,
            id: p
        })),
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(Je, {
            id: C,
            inputProps: _object_spread_props(_object_spread({}, t), {
                id: p,
                autoComplete: "off",
                // @ts-expect-error Autosuggest expects slightly different types
                onChange: (i, param)=>{
                    let { newValue: a } = param;
                    var c;
                    i.target = _object_spread_props(_object_spread({}, i.target), {
                        value: a
                    }), i.currentTarget = _object_spread_props(_object_spread({}, i.currentTarget), {
                        value: a
                    }), (c = t.onChange) == null || c.call(t, i);
                }
            }),
            renderInputComponent: (i)=>{
                const { key: a } = i, c = _object_without_properties(i, [
                    "key"
                ]);
                return /* @__PURE__ */ (0, _jsxruntime.jsx)(N, _object_spread_props(_object_spread({}, c), {
                    fieldRef: h,
                    inputRef: (0, _common.combineRefs)(d, t.inputRef, g)
                }), a);
            },
            suggestions: y,
            onSuggestionsFetchRequested: (param)=>{
                let { value: i } = param;
                return l(o(i));
            },
            onSuggestionsClearRequested: ()=>l([]),
            getSuggestionValue: (i)=>i,
            renderSuggestion: (i, param)=>{
                let { isHighlighted: a } = param;
                return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    role: "menuitem",
                    className: (0, _classnames.default)(_textfieldbasecssmistica.menuItem, {
                        [_textfieldbasecssmistica.menuItemSelected]: a
                    }),
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                        regular: !0,
                        children: i
                    })
                });
            },
            renderSuggestionsContainer: (i)=>{
                const _i_containerProps = i.containerProps, { key: a } = _i_containerProps, c = _object_without_properties(_i_containerProps, [
                    "key"
                ]);
                return /* @__PURE__ */ /*#__PURE__*/ (0, _react.createElement)("div", _object_spread_props(_object_spread({}, c), {
                    key: a,
                    style: {
                        width: h.current ? h.current.clientWidth + 2 : 0
                    },
                    className: _textfieldbasecssmistica.suggestionsContainer,
                    "aria-label": `${t.label} ${E.menuLabelSuffix || b(_texttokens.menuLabelSuffix)}`
                }), i.children);
            }
        })
    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(N, _object_spread_props(_object_spread({}, t), {
        id: p,
        ref: g
    }));
});
