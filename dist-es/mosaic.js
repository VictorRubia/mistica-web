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
import { jsx as r, jsxs as m, Fragment as w } from "react/jsx-runtime";
import { Grid as h, GridItem as e } from "./grid.js";
import { Carousel as q } from "./carousel.js";
import { singleItemRowContainer as f, squareContainer as M, fourItemsContainer as C } from "./mosaic.css-mistica.js";
const s = {
    mobile: 8,
    desktop: 16
}, t = (n, o)=>typeof n == "function" ? n({
        gridMode: o
    }) : n, S = (param)=>{
    let { items: n, isEven: o } = param;
    return /* @__PURE__ */ r("div", {
        className: n.length === 1 ? f : M,
        children: /* @__PURE__ */ r(h, {
            gap: s,
            rows: 2,
            columns: 2,
            height: "100%",
            children: n.length === 3 ? /* @__PURE__ */ m(w, {
                children: [
                    /* @__PURE__ */ r(e, {
                        columnSpan: o ? 2 : void 0,
                        children: t(n[0], o ? "horizontal" : "square")
                    }),
                    /* @__PURE__ */ r(e, {
                        children: t(n[1], "square")
                    }),
                    /* @__PURE__ */ r(e, {
                        columnSpan: o ? void 0 : 2,
                        children: t(n[2], o ? "square" : "horizontal")
                    })
                ]
            }) : n.map((a, i)=>/* @__PURE__ */ r(e, {
                    columnSpan: n.length === 4 ? void 0 : 2,
                    rowSpan: n.length === 1 ? 2 : void 0,
                    children: t(a, n.length === 4 ? "square" : "horizontal")
                }, i))
        })
    });
}, N = (param)=>{
    let { items: n, withBullets: o, withControls: a = !0, free: i, dataAttributes: u } = param;
    const c = n.length, l = c < 5 ? Math.min(c, 1) : Math.floor((c + 1) / 3), d = Array.from({
        length: l
    }, ()=>[]);
    return n.forEach((g, p)=>{
        const v = Math.min(l - 1, Math.floor(p / 3));
        d[v].push(g);
    }), /* @__PURE__ */ r(q, {
        dataAttributes: _object_spread_props(_object_spread({}, u), {
            "component-name": "HorizontalMosaic"
        }),
        items: d.map((g, p)=>/* @__PURE__ */ r(h, {
                children: /* @__PURE__ */ r(S, {
                    items: g,
                    isEven: p % 2 === 0
                }, p)
            })),
        withBullets: o,
        withControls: a,
        free: i
    });
}, z = (param)=>{
    let { items: n } = param;
    switch(n.length){
        case 1:
        case 2:
            return /* @__PURE__ */ r("div", {
                className: f,
                children: /* @__PURE__ */ r(h, {
                    gap: s,
                    columns: 2,
                    height: "100%",
                    children: n.map((o, a)=>/* @__PURE__ */ r(e, {
                            columnSpan: n.length === 2 ? void 0 : 2,
                            children: t(o, n.length === 2 ? "square" : "horizontal")
                        }, a))
                })
            });
        case 3:
            return /* @__PURE__ */ r("div", {
                className: M,
                children: /* @__PURE__ */ r(h, {
                    gap: s,
                    columns: 2,
                    flow: "column",
                    height: "100%",
                    children: n.map((o, a)=>/* @__PURE__ */ r(e, {
                            rowSpan: a === 0 ? 2 : void 0,
                            children: t(o, a === 0 ? "vertical" : "square")
                        }, a))
                })
            });
        case 4:
        default:
            return /* @__PURE__ */ r("div", {
                className: C,
                children: /* @__PURE__ */ m(h, {
                    gap: s,
                    rows: 3,
                    columns: 2,
                    height: "100%",
                    children: [
                        /* @__PURE__ */ r(e, {
                            rowSpan: 2,
                            children: t(n[0], "vertical")
                        }),
                        /* @__PURE__ */ r(e, {
                            children: t(n[1], "square")
                        }),
                        /* @__PURE__ */ r(e, {
                            rowSpan: 2,
                            children: t(n[3], "vertical")
                        }),
                        /* @__PURE__ */ r(e, {
                            children: t(n[2], "square")
                        })
                    ]
                })
            });
    }
}, b = (param)=>{
    let { items: n, dataAttributes: o } = param;
    const a = n.length, i = Math.ceil(a / 4), u = Array.from({
        length: i
    }, ()=>[]);
    return n.forEach((c, l)=>{
        const d = Math.floor(l / 4);
        u[d].push(c);
    }), /* @__PURE__ */ r(h, {
        rows: 1,
        gap: s,
        dataAttributes: _object_spread_props(_object_spread({}, o), {
            "component-name": "VerticalMosaic"
        }),
        children: u.map((c, l)=>/* @__PURE__ */ r(z, {
                items: c
            }, l))
    });
};
export { N as HorizontalMosaic, b as VerticalMosaic };
