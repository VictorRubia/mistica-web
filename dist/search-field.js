"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return C;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _formcontext = require("./form-context.js");
const _textfieldbase = require("./text-field-base.js");
const _iconsearchregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-search-regular.js"));
const _iconcloseregular = /*#__PURE__*/ _interop_require_default(require("./generated/mistica-icons/icon-close-regular.js"));
const _hooks = require("./hooks.js");
const _dom = require("./utils/dom.js");
const _common = require("./utils/common.js");
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
const L = /*#__PURE__*/ _react.forwardRef((_param, P)=>{
    var { disabled: m, error: d, helperText: u, name: p, label: n, optional: S, validate: F, validateOnBlurInsideForm: I, onChange: e, onChangeValue: t, onBlur: R, value: l, defaultValue: b, withStartIcon: h = !0, dataAttributes: v } = _param, x = _object_without_properties(_param, [
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
        "value",
        "defaultValue",
        "withStartIcon",
        "dataAttributes"
    ]);
    const { texts: y, t: k } = (0, _hooks.useTheme)(), o = _react.useRef(), [z, A] = _react.useState(b || ""), s = typeof l < "u", f = s ? l : z, i = _react.useCallback((c, T)=>{
        s || A(c), t == null || t(c, T);
    }, [
        s,
        t
    ]), B = _react.useCallback(()=>{
        i("", ""), o.current && (e == null || e((0, _dom.createChangeEvent)(o.current, "")), o.current.focus());
    }, [
        i,
        e
    ]), E = (0, _formcontext.useFieldProps)({
        name: p,
        label: n,
        value: f,
        defaultValue: void 0,
        processValue: (c)=>c,
        helperText: u,
        optional: S,
        error: d,
        disabled: m,
        onBlur: R,
        validate: F,
        validateOnBlurInsideForm: I,
        onChange: e,
        onChangeValue: i
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldbase.TextFieldBaseAutosuggest, _object_spread_props(_object_spread({
        ref: (0, _common.combineRefs)(o, P),
        startIcon: h ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_iconsearchregular.default, {
            size: _iconbuttoncssmistica.iconSize.default
        }) : void 0,
        endIcon: f ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_textfieldbase.FieldEndIcon, {
            Icon: _iconcloseregular.default,
            "aria-label": y.formSearchClear || k(_texttokens.formSearchClear),
            onPress: B
        }) : void 0
    }, x, E), {
        type: "search",
        dataAttributes: _object_spread({
            "component-name": "SearchField",
            testid: "SearchField"
        }, v)
    }));
}), C = L;
