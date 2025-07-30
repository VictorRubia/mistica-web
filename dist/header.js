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
    Header: function() {
        return Z;
    },
    HeaderLayout: function() {
        return $;
    },
    MainSectionHeader: function() {
        return _;
    },
    MainSectionHeaderLayout: function() {
        return E;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _box = /*#__PURE__*/ _interop_require_default(require("./box.js"));
const _stack = /*#__PURE__*/ _interop_require_default(require("./stack.js"));
const _responsivelayout = /*#__PURE__*/ _interop_require_default(require("./responsive-layout.js"));
const _gridlayout = /*#__PURE__*/ _interop_require_default(require("./grid-layout.js"));
const _overscrollcolorcontext = require("./overscroll-color-context.js");
const _text = require("./text.js");
const _skincontractcssmistica = require("./skins/skin-contract.css-mistica.js");
const _headercssmistica = require("./header.css-mistica.js");
const _dom = require("./utils/dom.js");
const _title = require("./title.js");
const _headings = require("./utils/headings.js");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
const Z = (param)=>{
    let { headline: r, pretitle: e, pretitleAs: d, title: o, titleAs: a = "h2", description: i, dataAttributes: b, small: c = !1 } = param;
    const l = (()=>{
        if (!e) return null;
        const y = {
            regular: !0,
            color: _skincontractcssmistica.vars.colors.textPrimary,
            as: d,
            dataAttributes: {
                testid: "pretitle"
            }
        };
        if (typeof e == "string") return /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, _object_spread_props(_object_spread({}, y), {
            children: e
        }));
        const { text: B } = e, H = _object_without_properties(e, [
            "text"
        ]);
        return /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, _object_spread_props(_object_spread({}, y, H), {
            children: B
        }));
    })(), p = o ? c ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_title.Title3, {
        as: a,
        dataAttributes: {
            testid: "title"
        },
        children: o
    }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_title.Title4, {
        as: a,
        dataAttributes: {
            testid: "title"
        },
        children: o
    }) : void 0, v = r ? /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
        style: {
            paddingBottom: e || o || i ? 8 : 0,
            order: -1
        },
        "data-testid": "headline",
        children: r
    }) : void 0;
    return /* @__PURE__ */ (0, _jsxruntime.jsx)(_stack.default, {
        space: {
            mobile: 24,
            desktop: 32
        },
        dataAttributes: _object_spread({
            testid: "Header"
        }, b),
        children: (o || e || i) && /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
            paddingRight: 16,
            children: /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
                className: _headercssmistica.flexColumn,
                children: [
                    (0, _headings.isBiggerHeading)(a, d) ? /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                        children: [
                            p && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                style: {
                                    paddingBottom: i ? 8 : 0
                                },
                                children: p
                            }),
                            v,
                            l && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                style: {
                                    paddingBottom: o || i ? 8 : 0,
                                    order: -1
                                },
                                children: l
                            })
                        ]
                    }) : /* @__PURE__ */ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                        children: [
                            l && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                style: {
                                    paddingBottom: o || i ? 8 : 0
                                },
                                children: l
                            }),
                            v,
                            p && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                                style: {
                                    paddingBottom: i ? 8 : 0
                                },
                                children: p
                            })
                        ]
                    }),
                    i && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                        style: {
                            order: 1
                        },
                        children: c ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text2, {
                            regular: !0,
                            color: _skincontractcssmistica.vars.colors.textSecondary,
                            dataAttributes: {
                                testid: "description"
                            },
                            children: i
                        }) : /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text3, {
                            regular: !0,
                            color: _skincontractcssmistica.vars.colors.textSecondary,
                            dataAttributes: {
                                testid: "description"
                            },
                            children: i
                        })
                    })
                ]
            })
        })
    });
}, _ = (param)=>{
    let { title: r, titleAs: e = "h1", description: d, button: o, dataAttributes: a } = param;
    return /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
        space: 32,
        dataAttributes: _object_spread({
            testid: "MainSectionHeader"
        }, a),
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                space: {
                    mobile: 12,
                    desktop: 16
                },
                children: [
                    r && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text7, {
                        as: e,
                        dataAttributes: {
                            testid: "title"
                        },
                        children: r
                    }),
                    d && /* @__PURE__ */ (0, _jsxruntime.jsx)(_text.Text6, {
                        dataAttributes: {
                            testid: "description"
                        },
                        children: d
                    })
                ]
            }),
            o
        ]
    });
}, $ = (param)=>{
    let { isInverse: r = !1, breadcrumbs: e, header: d, extra: o, sideBySideExtraOnDesktop: a = !1, dataAttributes: i, bleed: b = !1, noPaddingY: c = !1 } = param;
    const m = b && r && o, l = /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", {
        children: [
            e && /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                className: _headercssmistica.breadcrumbs,
                children: e
            }),
            d
        ]
    });
    return (0, _overscrollcolorcontext.useSetOverscrollColor)(r ? {
        topColor: _skincontractcssmistica.vars.colors.backgroundBrandTop
    } : {}), /* @__PURE__ */ (0, _jsxruntime.jsxs)("div", _object_spread_props(_object_spread({}, (0, _dom.getPrefixedDataAttributes)(i, "HeaderLayout")), {
        children: [
            /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.default, {
                variant: r ? "inverse" : void 0,
                children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                    paddingTop: c ? 0 : {
                        mobile: d ? 32 : 0,
                        desktop: e ? 16 : 48
                    },
                    paddingBottom: {
                        mobile: c && !m ? 0 : 24,
                        desktop: m && !a ? 32 : c ? 0 : 48
                    },
                    children: a ? /* @__PURE__ */ (0, _jsxruntime.jsx)(_gridlayout.default, {
                        template: "6+6",
                        left: l,
                        right: /* @__PURE__ */ (0, _jsxruntime.jsx)("div", {
                            className: m ? _headercssmistica.hideOnTabletOrSmaller : "",
                            children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                                paddingTop: {
                                    mobile: d ? 24 : 0,
                                    desktop: 0
                                },
                                children: o
                            })
                        })
                    }) : /* @__PURE__ */ (0, _jsxruntime.jsxs)(_stack.default, {
                        space: d ? {
                            mobile: 24,
                            desktop: 32
                        } : 0,
                        children: [
                            l,
                            !m && o
                        ]
                    })
                })
            }),
            m && /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.default, {
                className: a ? _headercssmistica.hideOnDesktop : "",
                backgroundColor: `linear-gradient(to bottom, ${_skincontractcssmistica.vars.colors.backgroundBrandBottom} 40px, ${_skincontractcssmistica.vars.colors.background} 0%)`,
                children: o
            })
        ]
    }));
}, E = (param)=>{
    let { isInverse: r = !1, children: e, dataAttributes: d } = param;
    return (0, _overscrollcolorcontext.useSetOverscrollColor)(r ? {
        topColor: _skincontractcssmistica.vars.colors.backgroundBrandTop
    } : {}), /* @__PURE__ */ (0, _jsxruntime.jsx)(_responsivelayout.default, {
        variant: r ? "inverse" : void 0,
        dataAttributes: _object_spread({
            "component-name": "MainSectionHeaderLayout",
            testid: "MainSectionHeaderLayout"
        }, d),
        children: /* @__PURE__ */ (0, _jsxruntime.jsx)(_gridlayout.default, {
            template: "6+6",
            left: /* @__PURE__ */ (0, _jsxruntime.jsx)(_box.default, {
                paddingTop: {
                    mobile: 12,
                    desktop: 48
                },
                paddingBottom: {
                    mobile: 24,
                    desktop: 48
                },
                children: e
            }),
            right: null
        })
    });
};
