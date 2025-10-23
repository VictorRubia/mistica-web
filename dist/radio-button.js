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
    RadioGroup: function() {
        return ue;
    },
    default: function() {
        return fe;
    },
    useRadioContext: function() {
        return Z;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _keys = require("./utils/keys.js");
const _formcontext = require("./form-context.js");
const _common = require("./utils/common.js");
const _text = require("./text.js");
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _hooks = require("./hooks.js");
const _dom = require("./utils/dom.js");
const _radiobuttoncssmistica = require("./radio-button.css-mistica.js");
const _themevariantcontext = require("./theme-variant-context.js");
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
const q = /*#__PURE__*/ _react.createContext({
    id: "",
    disabled: !1,
    selectedValue: null,
    focusableValue: null,
    select: ()=>{},
    selectNext: ()=>{},
    selectPrev: ()=>{}
}), Z = ()=>_react.useContext(q), _ = (_param)=>{
    var { value: e, id: s, dataAttributes: R, "aria-labelledby": p, "aria-label": C } = _param, m = _object_without_properties(_param, [
        "value",
        "id",
        "dataAttributes",
        "aria-labelledby",
        "aria-label"
    ]);
    const { id: b, disabled: n, selectedValue: h, focusableValue: g, select: u, selectNext: y, selectPrev: V } = Z(), [o, I] = _react.useState(!1), k = _react.useId(), v = p || k, a = _react.useRef(null), t = e === h, { isIos: x } = (0, _hooks.useTheme)(), f = (0, _themevariantcontext.useIsInverseVariant)(), c = n ? void 0 : g === e || o && !h ? 0 : -1;
    _react.useEffect(()=>{
        var D;
        const l = (D = document.getElementById(b)) == null ? void 0 : D.querySelector("[role=radio]");
        I(l === a.current);
    }, [
        b
    ]);
    const d = (l)=>{
        switch(l.key){
            case _keys.SPACE:
                u(e), l.preventDefault(), l.stopPropagation();
                break;
            case _keys.RIGHT:
            case _keys.DOWN:
                y(), l.preventDefault(), l.stopPropagation();
                break;
            case _keys.LEFT:
            case _keys.UP:
                V(), l.preventDefault(), l.stopPropagation();
                break;
        }
    }, P = x ? t ? "checkedIos" : "ios" : t ? "checked" : "default", S = t ? "checked" : "default", N = /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(f ? _radiobuttoncssmistica.inverseOuterCircleVariants[P] : _radiobuttoncssmistica.outerCircleVariants[P], {
            [_radiobuttoncssmistica.disabled]: n
        }),
        children: !x && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
            className: f ? _radiobuttoncssmistica.inverseInnerCircleVariant[S] : _radiobuttoncssmistica.innerCircleVariant[S]
        })
    });
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("span", _object_spread_props(_object_spread({
        ref: a,
        id: s,
        tabIndex: c,
        role: "radio",
        "data-value": e,
        "aria-checked": t,
        "aria-disabled": n,
        "aria-label": C,
        "aria-labelledby": C ? void 0 : v,
        onClick: (l)=>{
            l.stopPropagation(), n || u(e);
        },
        onKeyDown: n ? void 0 : d,
        className: n ? _radiobuttoncssmistica.radioButtonContainerDisabled : _radiobuttoncssmistica.radioButton
    }, (0, _dom.getPrefixedDataAttributes)(R, "RadioButton")), {
        children: m.render ? m.render({
            controlElement: N,
            disabled: !!n,
            checked: t,
            labelId: v
        }) : /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
            space: 16,
            children: [
                /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                    regular: !0,
                    as: "div",
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: {
                            position: "relative",
                            top: -2
                        },
                        children: N
                    })
                }),
                /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                    regular: !0,
                    as: "div",
                    id: v,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsx)("span", {
                        className: n ? _radiobuttoncssmistica.disabled : "",
                        children: m.children
                    })
                })
            ]
        })
    }));
}, ue = (e)=>{
    var _ref;
    const { value: s, defaultValue: R, onChange: p, focusableRef: C, disabled: m } = (0, _formcontext.useControlProps)({
        name: e.name,
        value: e.value,
        defaultValue: e.defaultValue,
        onChange: e.onChange,
        disabled: e.disabled
    }), b = _react.useId(), n = typeof s < "u", [h, g] = _react.useState((_ref = s !== null && s !== void 0 ? s : R) !== null && _ref !== void 0 ? _ref : "");
    _react.useEffect(()=>{
        s !== void 0 && g(s);
    }, [
        s
    ]);
    const u = (a)=>{
        n || g(a), p(a);
    }, [y, V] = _react.useState(null), o = _react.useRef(null), I = ()=>{
        if (o.current) {
            const a = o.current.querySelector("[role=radio][aria-checked=true]"), t = Array.from(o.current.querySelectorAll("[role=radio]"));
            if (t.length === 0) return;
            const f = ((a ? t.indexOf(a) : 0) + 1) % t.length, c = t[f], d = c.dataset.value;
            d && (c.focus(), u(d));
        }
    }, k = ()=>{
        if (o.current) {
            const a = o.current.querySelector("[role=radio][aria-checked=true]"), t = Array.from(o.current.querySelectorAll("[role=radio]"));
            if (t.length === 0) return;
            const x = a ? t.indexOf(a) : 0, f = (t.length + x - 1) % t.length, c = t[f], d = c.dataset.value;
            d && (c.focus(), u(d));
        }
    };
    _react.useEffect(()=>{
        if (o.current) {
            const a = o.current.querySelector("[role=radio]");
            var _a_dataset_value;
            a && V((_a_dataset_value = a.dataset.value) !== null && _a_dataset_value !== void 0 ? _a_dataset_value : null);
        }
    }, []);
    var _ref1;
    const v = (_ref1 = h !== null && h !== void 0 ? h : y) !== null && _ref1 !== void 0 ? _ref1 : null;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
        ref: (0, _common.combineRefs)(o, C),
        id: b,
        role: "radiogroup",
        "aria-label": e["aria-label"],
        "aria-labelledby": e["aria-label"] ? void 0 : e["aria-labelledby"]
    }, (0, _dom.getPrefixedDataAttributes)(e.dataAttributes, "RadioGroup")), {
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(q.Provider, {
            value: {
                id: b,
                disabled: m,
                selectedValue: h !== null && h !== void 0 ? h : R,
                focusableValue: v,
                select: u,
                selectNext: I,
                selectPrev: k
            },
            children: e.children
        })
    }));
}, fe = _;
