"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Ao;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _hooks = require("./hooks.js");
const _iconcvvvisamc = /*#__PURE__*/ _interop_require_default(require("./icons/icon-cvv-visa-mc.js"));
const _iconcvvamex = /*#__PURE__*/ _interop_require_default(require("./icons/icon-cvv-amex.js"));
const _popover = /*#__PURE__*/ _interop_require_default(require("./popover.js"));
const _iconinformationregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-information-regular.js"));
const _formcontext = require("./form-context.js");
const _textfieldbase = require("./text-field-base.js");
const _integerfield = require("./integer-field.js");
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _divider = /*#__PURE__*/ _interop_require_default(require("./divider.js"));
const _text = /*#__PURE__*/ _interop_require_default(require("./text.js"));
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _css = require("./utils/css.js");
const _textfieldbasecssmistica = require("./text-field-base.css-mistica.js");
const _touchable = /*#__PURE__*/ _interop_require_default(require("./touchable.js"));
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
const no = (param)=>{
    let { acceptedCards: t } = param;
    const { texts: i, t: n } = (0, _hooks.useTheme)();
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
            padding: 8,
            children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                space: 8,
                children: [
                    /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
                        space: 16,
                        alignItems: "center",
                        children: [
                            /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconcvvvisamc.default, {
                                size: 48,
                                role: "img"
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.default, {
                                children: i.formCreditCardCvvTooltipVisaMc || n(_texttokens.formCreditCardCvvTooltipVisaMc)
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, _jsxruntime.jsx)(_divider.default, {}),
                    (t == null ? void 0 : t.americanExpress) && /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
                        space: 16,
                        alignItems: "center",
                        children: [
                            /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconcvvamex.default, {
                                size: 48,
                                role: "img"
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.default, {
                                children: i.formCreditCardCvvTooltipAmex || n(_texttokens.formCreditCardCvvTooltipAmex)
                            })
                        ]
                    })
                ]
            })
        })
    });
}, so = (_param)=>{
    var { disabled: t, error: i, helperText: n, name: l, label: M, optional: B, validate: c, validateOnBlurInsideForm: z, onChange: A, onChangeValue: E, onBlur: $, acceptedCards: j = {
        americanExpress: !0,
        visa: !0,
        masterCard: !0
    }, maxLength: p = 4, value: y, autoComplete: O = "cc-csc", defaultValue: S, dataAttributes: b } = _param, w = _object_without_properties(_param, [
        "disabled",
        "error",
        "helperText",
        "name",
        "label",
        "optional",
        "validate",
        "validateOnBlurInsideForm",
        "onChange",
        "onChangeValue",
        "onBlur",
        "acceptedCards",
        "maxLength",
        "value",
        "autoComplete",
        "defaultValue",
        "dataAttributes"
    ]);
    const { texts: a, t: C } = (0, _hooks.useTheme)(), { setFormError: R, jumpToNext: H } = (0, _formcontext.useForm)(), [f, v] = _react.useState(!1), u = (r, s)=>r.length !== p ? a.formCreditCardCvvError || C(_texttokens.formCreditCardCvvError) : c == null ? void 0 : c(r, s), h = (r)=>r, g = (0, _formcontext.useFieldProps)({
        name: l,
        label: M,
        value: y,
        defaultValue: S,
        processValue: h,
        helperText: n,
        optional: B,
        error: i,
        disabled: t,
        onBlur: $,
        validate: u,
        validateOnBlurInsideForm: z,
        onChange: A,
        onChangeValue: E
    }), e = (0, _css.pxToRem)(16);
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldbase.TextFieldBaseAutosuggest, _object_spread_props(_object_spread({}, w, g), {
        maxLength: p,
        onChange: (r)=>{
            g.onChange(r);
            const s = r.currentTarget.value, T = h(s);
            if (T.length === p) {
                const x = u(T, s);
                x ? R({
                    name: l,
                    error: x
                }) : H(l);
            }
        },
        endIcon: /* @__PURE__ */ (0, _jsxruntime.jsx)(_popover.default, {
            position: "top",
            open: f,
            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(no, {
                acceptedCards: j
            }),
            onClose: ()=>v(!1),
            target: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                style: {
                    width: e,
                    height: e
                },
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.default, {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: _textfieldbasecssmistica.iconButtonSize,
                        height: _textfieldbasecssmistica.iconButtonSize,
                        position: "relative",
                        left: `calc(-1 * (${_textfieldbasecssmistica.iconButtonSize} - ${e}) / 2)`,
                        top: `calc(-1 * (${_textfieldbasecssmistica.iconButtonSize} - ${e}) / 2)`
                    },
                    onPress: ()=>v(!f),
                    "aria-label": f ? a.formCreditCardCvvTooltipVisaMcButtonClose || C(_texttokens.formCreditCardCvvTooltipVisaMcButtonClose) : a.formCreditCardCvvTooltipVisaMcButtonOpen || C(_texttokens.formCreditCardCvvTooltipVisaMcButtonOpen),
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconinformationregular.default, {
                        size: e,
                        color: _skincontractcssmistica.vars.colors.neutralMedium
                    })
                })
            })
        }),
        autoComplete: O,
        inputComponent: _integerfield.IntegerInput,
        dataAttributes: _object_spread({
            "component-name": "CvvField",
            testid: "CvvField"
        }, b)
    }));
}, Ao = so;
