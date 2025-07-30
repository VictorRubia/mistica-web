"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return de;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _hooks = require("./hooks.js");
const _badge = /*#__PURE__*/ _interop_require_default(require("./badge.js"));
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _text = require("./text.js");
const _iconcloseregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-close-regular.js"));
const _css = require("./utils/css.js");
const _chipcssmistica = require("./chip.css-mistica.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _themevariantcontext = require("./theme-variant-context.js");
const _touchable = /*#__PURE__*/ _interop_require_wildcard(require("./touchable.js"));
const _texttokens = require("./text-tokens.js");
const _dom = require("./utils/dom.js");
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
const X = (t)=>{
    const { Icon: o, children: w, id: B, dataAttributes: N, badge: r, active: c, onClose: s, closeButtonLabel: T } = t, { texts: P, textPresets: y, t: L } = (0, _hooks.useTheme)(), f = (0, _themevariantcontext.useThemeVariant)(), p = f === "alternative", g = f === "inverse", i = t.href || t.onPress || t.to, b = c !== void 0 || i, C = /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            o && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: c ? i ? g ? _chipcssmistica.iconNavigationInverse : _chipcssmistica.iconNavigation : _chipcssmistica.iconActive : _chipcssmistica.icon,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(o, {
                    color: "currentColor",
                    size: (0, _css.pxToRem)(16)
                })
            }),
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                paddingRight: r ? 8 : s ? 4 : 0,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                    id: B,
                    weight: y.indicator.weight,
                    truncate: 1,
                    color: "currentColor",
                    children: w
                })
            })
        ]
    }), l = _object_spread({
        "component-name": "Chip"
    }, N);
    if (s) return /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({
        className: (0, _classnames.default)(p ? _chipcssmistica.chipVariants.overAlternative : _chipcssmistica.chipVariants.default, _chipcssmistica.chipWrapper, o ? _chipcssmistica.leftPadding.withIcon : _chipcssmistica.leftPadding.default, _chipcssmistica.rightPadding.withIcon)
    }, (0, _dom.getPrefixedDataAttributes)(l)), {
        children: [
            C,
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.default, {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: (0, _css.pxToRem)(24),
                    height: (0, _css.pxToRem)(24)
                },
                "aria-label": T || P.closeButtonLabel || L(_texttokens.closeButtonLabel),
                onPress: ()=>s(),
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconcloseregular.default, {
                    size: (0, _css.pxToRem)(16),
                    color: _skincontractcssmistica.vars.colors.neutralMedium
                })
            })
        ]
    }));
    const j = ()=>r ? r === !0 ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_badge.default, {}) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_badge.default, {
            value: r
        }) : null, I = (R)=>/* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({
            className: (0, _classnames.default)(_chipcssmistica.chipVariants[c ? i ? g ? "navigationActiveInverse" : "navigationActive" : "active" : p ? "overAlternative" : "default"], i ? _chipcssmistica.wrappedContent : _chipcssmistica.chipWrapper, {
                [_chipcssmistica.interactive]: b
            }, o ? _chipcssmistica.leftPadding.withIcon : _chipcssmistica.leftPadding.default, r ? _chipcssmistica.rightPadding.withIcon : _chipcssmistica.rightPadding.default)
        }, (0, _dom.getPrefixedDataAttributes)(R)), {
            children: [
                b && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                    className: _chipcssmistica.interactiveChipOverlay
                }),
                C,
                j()
            ]
        }));
    return i ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, _object_spread_props(_object_spread({}, t), {
        className: (0, _classnames.default)(_chipcssmistica.chipWrapper, _chipcssmistica.button),
        dataAttributes: l,
        children: I()
    })) : I(l);
}, de = X;
