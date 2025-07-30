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
import { jsx as n, jsxs as ce } from "react/jsx-runtime";
import * as r from "react";
import { createElement as ue } from "react";
import { FieldContainer as fe, HelperText as me, Label as he } from "./text-field-components.js";
import { LABEL_SCALE_MOBILE as ge, LABEL_SCALE_DESKTOP as pe } from "./text-field-components.css-mistica.js";
import { Text3 as P } from "./text.js";
import { isFirefox as xe, isRunningAcceptanceTest as Se } from "./utils/platform.js";
import { useTheme as K, useScreenSize as ye, useIsomorphicLayoutEffect as Ie } from "./hooks.js";
import $ from "classnames";
import { combineRefs as j } from "./utils/common.js";
import { startIcon as be, prefix as Ce, inputWithLabel as H, inputWithoutLabel as _, fullWidth as Te, fieldRightPadding as k, fieldLeftPadding as v, textArea as Re, textAreaWithLabel as Ee, textAreaWithoutLabel as ve, input as $e, inputFirefoxStyles as Le, hiddenDatePlaceholder as We, emptyDateValue as Ae, endIconContainer as Fe, menuItem as Ne, menuItemSelected as Pe, suggestionsContainer as we, fieldEndIconContainer as Oe, fieldElementsGap as De, iconButtonSize as Be, fieldEndIconGap as Me } from "./text-field-base.css-mistica.js";
import { vars as qe } from "./skins/skin-contract.css-mistica.js";
import { InternalToggleIconButton as ze, InternalIconButton as He } from "./icon-button.js";
import { ThemeVariant as _e } from "./theme-variant-context.js";
import { iconSize as ke } from "./icon-button.css-mistica.js";
import { formTextMultilineMaxCount as Ge, menuLabelSuffix as Ke } from "./text-tokens.js";
const je = (o, m)=>{
    if (!m) return !0;
    const t = document.createElement("input");
    return t.type = m, t.value = o || "", t.value !== "";
}, ct = (param)=>{
    let { hasBackgroundColor: o = !0, onPress: m, onChange: t, disabled: g, Icon: y, checkedProps: l, uncheckedProps: d, "aria-label": h } = param;
    return /* @__PURE__ */ n("div", {
        className: Oe,
        children: l ? /* @__PURE__ */ n(ze, {
            checkedProps: _object_spread_props(_object_spread({}, l), {
                "aria-label": l["aria-label"] || ""
            }),
            uncheckedProps: _object_spread_props(_object_spread({}, d), {
                "aria-label": d["aria-label"] || ""
            }),
            onChange: t,
            hasOverlay: o,
            disabled: g
        }) : /* @__PURE__ */ n(He, {
            Icon: y,
            disabled: g,
            "aria-label": h || "",
            onPress: m,
            hasOverlay: o
        })
    });
}, G = (o)=>{
    o.preventDefault();
}, N = /*#__PURE__*/ r.forwardRef((_param, V)=>{
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
    const { preventCopyInFormFields: ee, texts: te, t: ie } = K();
    L = L !== null && L !== void 0 ? L : ee;
    var _ref;
    const ne = r.useId(), w = Q || ne, O = r.useId(), D = r.useId(), [u, f] = r.useState(l != null && l.length || d != null && d.length ? "filled" : "default"), { isTabletOrSmaller: re } = ye(), [W, B] = r.useState((_ref = l == null ? void 0 : l.length) !== null && _ref !== void 0 ? _ref : 0), A = !!t || !s.required, T = s.type === "date" || s.type === "datetime-local" || s.type === "month", M = r.useRef(void 0);
    Ie(()=>{
        const e = T && !je(d, s.type) ? "" : d;
        M.current !== d && T && !(e != null && e.length) && u === "filled" && c === void 0 && f("default"), M.current = d, u !== "focused" && e != null && e.length && (B(e.length), f("filled")), c && f("focused"), c === !1 && !(e != null && e.length) && f("default"), c === !1 && e != null && e.length && f("filled");
    }, [
        u,
        d,
        c,
        T,
        s.type
    ]), r.useEffect(()=>{
        s.autoFocus && f("focused");
    }, [
        s.autoFocus
    ]);
    const ae = a ? "textarea" : "input", oe = E ? {
        inputRef: y
    } : {
        ref: j(V, y)
    }, R = _object_spread(_object_spread_props(_object_spread({}, s), {
        maxLength: x,
        autoComplete: U
    }), g), F = `calc(${ke.default} + ${De}px)`, q = `calc(${Be} + ${Me}px)`, le = i || u === "focused" || u === "filled" ? re ? ge : pe : 1, de = {
        left: `calc(${v}px + ${S ? F : "0px"})`,
        // shrinking means applying a scale transformation, so width will be proportionally reduced.
        // Let's keep the original width.
        width: `calc((100% - ${v}px - ${S ? F : "0px"} - ${p || C ? q : `${k}px`}) / ${le})`
    }, se = s.type === "password" && W > 0 ? "Lucida Grande, Arial, sans-serif" : "inherit";
    return /* @__PURE__ */ n(fe, {
        disabled: s.disabled,
        helperText: /* @__PURE__ */ n(me, {
            error: o,
            leftText: m,
            leftTextId: O,
            rightTextId: D,
            rightText: a && x ? `${W}/${x}` : void 0,
            rightTextLabel: a && x ? te.formTextMultilineMaxCount || ie(Ge).replace("1$s", String(W)).replace("2$s", String(x)) : void 0
        }),
        multiline: a,
        fullWidth: X,
        fieldRef: J,
        readOnly: s.readOnly,
        dataAttributes: Y,
        children: /* @__PURE__ */ ce(_e, {
            variant: "default",
            children: [
                S && /* @__PURE__ */ n("div", {
                    className: be,
                    "data-testid": "startIcon",
                    children: S
                }),
                b && /* @__PURE__ */ n("div", {
                    "aria-hidden": !0,
                    className: $(Ce, A ? H : _),
                    style: {
                        opacity: u === "default" ? 0 : 1
                    },
                    children: /* @__PURE__ */ n(P, {
                        color: qe.colors.textSecondary,
                        regular: !0,
                        wordBreak: !1,
                        children: b
                    })
                }),
                t && /* @__PURE__ */ n(he, {
                    style: de,
                    error: o,
                    forId: w,
                    inputState: u,
                    shrinkLabel: i,
                    showOptional: !s.required && Z,
                    children: t
                }),
                /* @__PURE__ */ n("div", {
                    className: Te,
                    children: /* @__PURE__ */ n(P, {
                        as: "div",
                        regular: !0,
                        children: /*#__PURE__*/ r.createElement(E || ae, _object_spread(_object_spread_props(_object_spread({}, oe, R), {
                            id: w,
                            style: _object_spread_props(_object_spread({
                                paddingRight: p ? 0 : C ? q : k,
                                paddingLeft: b ? 0 : S ? `calc(${F} + ${v}px)` : v
                            }, R.style), {
                                fontFamily: se
                            }),
                            className: a ? $(Re, A ? Ee : ve) : $($e, A ? H : _, {
                                [Le]: xe(),
                                // Hide webkit placeholder when label is not shrinked and value is empty
                                [We]: T && u === "default",
                                // Force height of input when value is empty to avoid field from having height 0 in iOS
                                [Ae]: T && u !== "filled"
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
                p && /* @__PURE__ */ n("div", {
                    className: Fe,
                    "data-testid": "endIcon",
                    children: p
                }),
                C
            ]
        })
    });
}), Je = /*#__PURE__*/ r.lazy(()=>import(/* webpackChunkName: "react-autosuggest" */ "react-autosuggest")), ut = /*#__PURE__*/ r.forwardRef((_param, g)=>{
    var { getSuggestions: o, id: m } = _param, t = _object_without_properties(_param, [
        "getSuggestions",
        "id"
    ]);
    const [y, l] = r.useState([]), d = r.useRef(null), h = r.useRef(null), { platformOverrides: I, texts: E, t: b } = K(), S = r.useId(), p = m || S, C = r.useId();
    if (o && (t.value === void 0 || t.defaultValue !== void 0)) throw Error("Fields with suggestions must be used in controlled mode");
    return o ? /* @__PURE__ */ n(r.Suspense, {
        fallback: /* @__PURE__ */ n(N, _object_spread_props(_object_spread({}, t), {
            label: Se(I) ? "" : t.label,
            autoComplete: "off",
            ref: g,
            id: p
        })),
        children: /* @__PURE__ */ n(Je, {
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
                return /* @__PURE__ */ n(N, _object_spread_props(_object_spread({}, c), {
                    fieldRef: h,
                    inputRef: j(d, t.inputRef, g)
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
                return /* @__PURE__ */ n("div", {
                    role: "menuitem",
                    className: $(Ne, {
                        [Pe]: a
                    }),
                    children: /* @__PURE__ */ n(P, {
                        regular: !0,
                        children: i
                    })
                });
            },
            renderSuggestionsContainer: (i)=>{
                const _i_containerProps = i.containerProps, { key: a } = _i_containerProps, c = _object_without_properties(_i_containerProps, [
                    "key"
                ]);
                return /* @__PURE__ */ /*#__PURE__*/ ue("div", _object_spread_props(_object_spread({}, c), {
                    key: a,
                    style: {
                        width: h.current ? h.current.clientWidth + 2 : 0
                    },
                    className: we,
                    "aria-label": `${t.label} ${E.menuLabelSuffix || b(Ke)}`
                }), i.children);
            }
        })
    }) : /* @__PURE__ */ n(N, _object_spread_props(_object_spread({}, t), {
        id: p,
        ref: g
    }));
});
export { ct as FieldEndIcon, N as TextFieldBase, ut as TextFieldBaseAutosuggest };
