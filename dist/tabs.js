"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ue;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _classnames = /*#__PURE__*/ _interop_require_default(require("classnames"));
const _touchable = require("./touchable.js");
const _responsivelayout = /*#__PURE__*/ _interop_require_default(require("./responsive-layout.js"));
const _hooks = require("./hooks.js");
const _text = require("./text.js");
const _platform = require("./utils/platform.js");
const _dom = require("./utils/dom.js");
const _tabscssmistica = require("./tabs.css-mistica.js");
const _inline = /*#__PURE__*/ _interop_require_default(require("./inline.js"));
const _themevariantcontext = require("./theme-variant-context.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _keys = require("./utils/keys.js");
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
const g = (0, _platform.isRunningAcceptanceTest)() ? 0 : 300, P = (i)=>{
    switch(i){
        case 1:
        case 2:
        case 3:
            return "fullWidth";
        default:
            return "default";
    }
}, ee = (_param)=>{
    var { selectedIndex: i, onChange: k, tabs: d, dataAttributes: w, selectedTabRef: R, renderPanel: f } = _param, b = _object_without_properties(_param, [
        "selectedIndex",
        "onChange",
        "tabs",
        "dataAttributes",
        "selectedTabRef",
        "renderPanel"
    ]);
    const { textPresets: c } = (0, _hooks.useTheme)(), u = _react.useId(), { ref: S } = (0, _hooks.useElementDimensions)(), v = _react.useRef(null), I = _react.useRef(null), [L, T] = _react.useState(!1), n = (0, _themevariantcontext.useIsInverseOrMediaVariant)(), p = (s)=>{
        var _d_s_id;
        return (_d_s_id = d[s].id) !== null && _d_s_id !== void 0 ? _d_s_id : `${u}-tab-${s}`;
    }, A = (s)=>{
        var _d_s_ariacontrols;
        return (_d_s_ariacontrols = d[s]["aria-controls"]) !== null && _d_s_ariacontrols !== void 0 ? _d_s_ariacontrols : f ? `${u}-tabpanel-${s}` : void 0;
    }, D = (s, a)=>{
        const r = document.getElementById(p(s)), t = document.getElementById(p(a)), e = v.current, h = I.current;
        r && t && e && h && (T(!0), e.style.display = "block", e.style.width = `${r.offsetWidth}px`, e.style.transform = `translate(${r.offsetLeft - h.scrollLeft}px, 0)`, Promise.resolve().then(()=>{
            e.style.transition = `transform ${g}ms, width ${g}ms`, e.style.width = `${t.offsetWidth}px`, e.style.transform = `translate(${t.offsetLeft - h.scrollLeft}px, 0)`;
        }), setTimeout(()=>{
            e.style.transition = "", e.style.display = "none", T(!1);
        }, g));
    }, B = _react.useCallback((s)=>{
        const a = Array.from(s.currentTarget.querySelectorAll('[role="tab"]')), r = document.activeElement, t = a.indexOf(r);
        if (t !== -1) {
            if (s.key === _keys.RIGHT) {
                s.preventDefault();
                const e = t < a.length - 1 ? a[t + 1] : a[0];
                e == null || e.focus();
            } else if (s.key === _keys.LEFT) {
                s.preventDefault();
                const e = t > 0 ? a[t - 1] : a[a.length - 1];
                e == null || e.focus();
            }
        }
    }, []);
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", _object_spread_props(_object_spread({
                id: u,
                role: "tablist",
                ref: S,
                className: n ? _tabscssmistica.outerBorderInverse : _tabscssmistica.outerBorder
            }, (0, _dom.getPrefixedDataAttributes)(w, "Tabs")), {
                "aria-label": b["aria-label"],
                "aria-labelledby": b["aria-labelledby"],
                "aria-description": b["aria-description"],
                "aria-describedby": b["aria-describedby"],
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.default, {
                    fullWidth: !0,
                    children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                        className: _tabscssmistica.outer,
                        children: [
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                ref: I,
                                className: _tabscssmistica.inner,
                                children: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                    className: _tabscssmistica.tabsContainer,
                                    onKeyDown: B,
                                    children: d.map((param, t)=>{
                                        let { text: s, trackingEvent: a, Icon: r } = param;
                                        const e = t === i;
                                        return /* @__PURE__ */ (0, _jsxruntime.jsx)(_touchable.BaseTouchable, {
                                            id: p(t),
                                            tabIndex: e ? void 0 : -1,
                                            ref: e ? R : void 0,
                                            dataAttributes: {
                                                "component-name": "Tab"
                                            },
                                            className: (0, _classnames.default)(_tabscssmistica.tabVariants[P(d.length)], e ? L ? n ? _tabscssmistica.tabSelectionVariants.selectedAnimatingInverse : _tabscssmistica.tabSelectionVariants.selectedAnimating : n ? _tabscssmistica.tabSelectionVariants.selectedInverse : _tabscssmistica.tabSelectionVariants.selected : n ? _tabscssmistica.tabSelectionVariants.noSelectedInverse : _tabscssmistica.tabSelectionVariants.noSelected, n ? _tabscssmistica.tabHover.inverse : _tabscssmistica.tabHover.default),
                                            onPress: ()=>{
                                                !L && i !== t && (k(t), D(i, t));
                                            },
                                            trackingEvent: a,
                                            role: "tab",
                                            "aria-controls": A(t),
                                            "aria-selected": e ? "true" : "false",
                                            children: /* @__PURE__ */ (0, _jsxruntime.jsxs)(_inline.default, {
                                                space: r && s ? 8 : 0,
                                                alignItems: "center",
                                                children: [
                                                    r && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                                        className: _tabscssmistica.icon,
                                                        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(r, {
                                                            size: "100%",
                                                            color: "currentColor"
                                                        })
                                                    }),
                                                    /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text, {
                                                        as: "div",
                                                        desktopSize: c.tabsLabel.size.desktop,
                                                        mobileSize: c.tabsLabel.size.mobile,
                                                        desktopLineHeight: c.tabsLabel.lineHeight.desktop,
                                                        mobileLineHeight: c.tabsLabel.lineHeight.mobile,
                                                        weight: c.tabsLabel.weight,
                                                        color: "inherit",
                                                        wordBreak: !1,
                                                        textAlign: "center",
                                                        hyphens: "auto",
                                                        children: s
                                                    })
                                                ]
                                            })
                                        }, t);
                                    })
                                })
                            }),
                            /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                ref: v,
                                className: _tabscssmistica.animatedLine,
                                style: {
                                    background: n ? _skincontractcssmistica.vars.colors.controlActivatedInverse : _skincontractcssmistica.vars.colors.controlActivated
                                }
                            })
                        ]
                    })
                })
            })),
            f == null ? void 0 : f({
                selectedIndex: i,
                panelProps: {
                    role: "tabpanel",
                    tabIndex: 0,
                    id: A(i),
                    "aria-labelledby": `${u}-tab-${i}`
                }
            })
        ]
    });
}, ue = ee;
