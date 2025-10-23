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
    FieldContainer: function() {
        return ee;
    },
    HelperText: function() {
        return $;
    },
    Label: function() {
        return Z;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _themevariantcontext = require("./theme-variant-context.js");
const _hooks = require("./hooks.js");
const _text = require("./text.js");
const _textfieldcomponentscssmistica = require("./text-field-components.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _dom = require("./utils/dom.js");
const _texttokens = require("./text-tokens.js");
const _iconwarningregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-warning-regular.js"));
const _screenreaderonly = /*#__PURE__*/ _interop_require_default(require("./screen-reader-only.js"));
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
const Z = (param)=>{
    let { shrinkLabel: l, forId: d, inputState: r, error: s, children: i, style: t, showOptional: a } = param;
    const n = l || r === "focused" || r === "filled", [m, p] = _react.useState("initial"), { texts: u, t: g } = (0, _hooks.useTheme)();
    _react.useEffect(()=>{
        const b = setTimeout(()=>{
            process.env.NODE_ENV !== "test" && p("transform 150ms, width 150ms");
        });
        return ()=>{
            clearTimeout(b);
        };
    }, []);
    let h = _skincontractcssmistica.vars.colors.textSecondary;
    return s && r !== "default" ? h = _skincontractcssmistica.vars.colors.textError : r === "focused" && (h = _skincontractcssmistica.vars.colors.textActivated), /* @__PURE__ */ (0, _jsxruntime.jsxs)("label", {
        className: (0, _classnames.default)(_textfieldcomponentscssmistica.labelContainer, {
            [_textfieldcomponentscssmistica.shrinked]: n
        }),
        htmlFor: d,
        style: _object_spread_props(_object_spread({
            color: h
        }, t), {
            transition: m
        }),
        "data-testid": "label",
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                className: _textfieldcomponentscssmistica.labelText,
                children: i
            }),
            a ? /* @__PURE__ */ (0, _jsxruntime.jsxs)("span", {
                children: [
                    "\xa0(",
                    u.formFieldOptionalLabelSuffix || g(_texttokens.formFieldOptionalLabelSuffix),
                    ")"
                ]
            }) : null
        ]
    });
}, $ = (param)=>{
    let { leftText: l, leftTextId: d, rightText: r, rightTextId: s, rightTextLabel: i, error: t } = param;
    const a = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), n = a ? _skincontractcssmistica.vars.colors.textPrimaryInverse : t ? _skincontractcssmistica.vars.colors.textError : _skincontractcssmistica.vars.colors.textSecondary, m = a ? _skincontractcssmistica.vars.colors.textPrimaryInverse : _skincontractcssmistica.vars.colors.textSecondary;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            l && /* @__PURE__ */ (0, _jsxruntime.jsxs)("p", {
                className: (0, _classnames.default)(_textfieldcomponentscssmistica.helperText, _textfieldcomponentscssmistica.leftHelperText),
                "data-testid": t ? "errorText" : "helperText",
                children: [
                    t && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text1, {
                        regular: !0,
                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconwarningregular.default, {
                            color: n,
                            className: _textfieldcomponentscssmistica.warnIcon
                        })
                    }),
                    /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text1, {
                        color: n,
                        regular: !0,
                        id: d,
                        "aria-live": t ? "assertive" : void 0,
                        children: l
                    })
                ]
            }),
            r && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: (0, _classnames.default)(_textfieldcomponentscssmistica.helperText, {
                    [_textfieldcomponentscssmistica.rightHelperText]: !!l
                }),
                "data-testid": "endHelperText",
                children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_text.Text1, {
                    color: m,
                    regular: !0,
                    as: "p",
                    textAlign: "right",
                    wordBreak: !1,
                    id: s,
                    children: [
                        i && /* @__PURE__ */ (0, _jsxruntime.jsx)(_screenreaderonly.default, {
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                                children: i
                            })
                        }),
                        /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
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
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({
        className: (0, _classnames.default)(_textfieldcomponentscssmistica.fieldContainer, a ? _textfieldcomponentscssmistica.fullWidth : _textfieldcomponentscssmistica.normalWidth, {
            [_textfieldcomponentscssmistica.disabled]: d
        }),
        onClick: (p)=>{
            var u;
            (u = p.currentTarget.querySelector(l ? "textarea" : "input")) == null || u.focus();
        }
    }, (0, _dom.getPrefixedDataAttributes)(m)), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: (0, _classnames.default)(_textfieldcomponentscssmistica.field, n ? _textfieldcomponentscssmistica.background.readOnly : _textfieldcomponentscssmistica.background.default, i),
                ref: t,
                children: r
            }),
            s && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _textfieldcomponentscssmistica.helperContainer,
                children: s
            })
        ]
    }));
};
