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
import { jsx as t, jsxs as n, Fragment as k } from "react/jsx-runtime";
import u from "./box.js";
import h from "./stack.js";
import f from "./responsive-layout.js";
import T from "./grid-layout.js";
import { useSetOverscrollColor as x } from "./overscroll-color-context.js";
import { Text2 as A, Text3 as g, Text7 as C, Text6 as S } from "./text.js";
import { vars as s } from "./skins/skin-contract.css-mistica.js";
import { flexColumn as L, hideOnTabletOrSmaller as M, hideOnDesktop as N, breadcrumbs as P } from "./header.css-mistica.js";
import { getPrefixedDataAttributes as j } from "./utils/dom.js";
import { Title3 as O, Title4 as R } from "./title.js";
import { isBiggerHeading as F } from "./utils/headings.js";
const Z = (param)=>{
    let { headline: r, pretitle: e, pretitleAs: d, title: o, titleAs: a = "h2", description: i, dataAttributes: b, small: c = !1 } = param;
    const l = (()=>{
        if (!e) return null;
        const y = {
            regular: !0,
            color: s.colors.textPrimary,
            as: d,
            dataAttributes: {
                testid: "pretitle"
            }
        };
        if (typeof e == "string") return /* @__PURE__ */ t(g, _object_spread_props(_object_spread({}, y), {
            children: e
        }));
        const { text: B } = e, H = _object_without_properties(e, [
            "text"
        ]);
        return /* @__PURE__ */ t(g, _object_spread_props(_object_spread({}, y, H), {
            children: B
        }));
    })(), p = o ? c ? /* @__PURE__ */ t(O, {
        as: a,
        dataAttributes: {
            testid: "title"
        },
        children: o
    }) : /* @__PURE__ */ t(R, {
        as: a,
        dataAttributes: {
            testid: "title"
        },
        children: o
    }) : void 0, v = r ? /* @__PURE__ */ t("div", {
        style: {
            paddingBottom: e || o || i ? 8 : 0,
            order: -1
        },
        "data-testid": "headline",
        children: r
    }) : void 0;
    return /* @__PURE__ */ t(h, {
        space: {
            mobile: 24,
            desktop: 32
        },
        dataAttributes: _object_spread({
            testid: "Header"
        }, b),
        children: (o || e || i) && /* @__PURE__ */ t(u, {
            paddingRight: 16,
            children: /* @__PURE__ */ n("div", {
                className: L,
                children: [
                    F(a, d) ? /* @__PURE__ */ n(k, {
                        children: [
                            p && /* @__PURE__ */ t("div", {
                                style: {
                                    paddingBottom: i ? 8 : 0
                                },
                                children: p
                            }),
                            v,
                            l && /* @__PURE__ */ t("div", {
                                style: {
                                    paddingBottom: o || i ? 8 : 0,
                                    order: -1
                                },
                                children: l
                            })
                        ]
                    }) : /* @__PURE__ */ n(k, {
                        children: [
                            l && /* @__PURE__ */ t("div", {
                                style: {
                                    paddingBottom: o || i ? 8 : 0
                                },
                                children: l
                            }),
                            v,
                            p && /* @__PURE__ */ t("div", {
                                style: {
                                    paddingBottom: i ? 8 : 0
                                },
                                children: p
                            })
                        ]
                    }),
                    i && /* @__PURE__ */ t("div", {
                        style: {
                            order: 1
                        },
                        children: c ? /* @__PURE__ */ t(A, {
                            regular: !0,
                            color: s.colors.textSecondary,
                            dataAttributes: {
                                testid: "description"
                            },
                            children: i
                        }) : /* @__PURE__ */ t(g, {
                            regular: !0,
                            color: s.colors.textSecondary,
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
    return /* @__PURE__ */ n(h, {
        space: 32,
        dataAttributes: _object_spread({
            testid: "MainSectionHeader"
        }, a),
        children: [
            /* @__PURE__ */ n(h, {
                space: {
                    mobile: 12,
                    desktop: 16
                },
                children: [
                    r && /* @__PURE__ */ t(C, {
                        as: e,
                        dataAttributes: {
                            testid: "title"
                        },
                        children: r
                    }),
                    d && /* @__PURE__ */ t(S, {
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
    const m = b && r && o, l = /* @__PURE__ */ n("div", {
        children: [
            e && /* @__PURE__ */ t("div", {
                className: P,
                children: e
            }),
            d
        ]
    });
    return x(r ? {
        topColor: s.colors.backgroundBrandTop
    } : {}), /* @__PURE__ */ n("div", _object_spread_props(_object_spread({}, j(i, "HeaderLayout")), {
        children: [
            /* @__PURE__ */ t(f, {
                variant: r ? "inverse" : void 0,
                children: /* @__PURE__ */ t(u, {
                    paddingTop: c ? 0 : {
                        mobile: d ? 32 : 0,
                        desktop: e ? 16 : 48
                    },
                    paddingBottom: {
                        mobile: c && !m ? 0 : 24,
                        desktop: m && !a ? 32 : c ? 0 : 48
                    },
                    children: a ? /* @__PURE__ */ t(T, {
                        template: "6+6",
                        left: l,
                        right: /* @__PURE__ */ t("div", {
                            className: m ? M : "",
                            children: /* @__PURE__ */ t(u, {
                                paddingTop: {
                                    mobile: d ? 24 : 0,
                                    desktop: 0
                                },
                                children: o
                            })
                        })
                    }) : /* @__PURE__ */ n(h, {
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
            m && /* @__PURE__ */ t(f, {
                className: a ? N : "",
                backgroundColor: `linear-gradient(to bottom, ${s.colors.backgroundBrandBottom} 40px, ${s.colors.background} 0%)`,
                children: o
            })
        ]
    }));
}, E = (param)=>{
    let { isInverse: r = !1, children: e, dataAttributes: d } = param;
    return x(r ? {
        topColor: s.colors.backgroundBrandTop
    } : {}), /* @__PURE__ */ t(f, {
        variant: r ? "inverse" : void 0,
        dataAttributes: _object_spread({
            "component-name": "MainSectionHeaderLayout",
            testid: "MainSectionHeaderLayout"
        }, d),
        children: /* @__PURE__ */ t(T, {
            template: "6+6",
            left: /* @__PURE__ */ t(u, {
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
export { Z as Header, $ as HeaderLayout, _ as MainSectionHeader, E as MainSectionHeaderLayout };
