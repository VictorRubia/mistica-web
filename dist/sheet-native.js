"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "showNativeSheet", {
    enumerable: true,
    get: function() {
        return p;
    }
});
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
const I = (e)=>Array.isArray(e) ? e.length ? e.join(`

`) : void 0 : e, l = (e, param)=>{
    let { title: i, subtitle: t, description: r, selectedId: s, items: n } = param;
    return e({
        title: i,
        subtitle: t,
        // TODO: add multiline support to native sheet
        description: I(r),
        content: [
            {
                type: "LIST",
                id: "list-0",
                listType: "SINGLE_SELECTION",
                autoSubmit: !0,
                selectedIds: typeof s == "string" ? [
                    s
                ] : [],
                items: n
            }
        ]
    }).then((param)=>{
        let { action: o, result: d } = param;
        return o === "SUBMIT" ? {
            action: o,
            selectedId: d[0].selectedIds[0]
        } : {
            action: o,
            selectedId: null
        };
    });
}, T = (e, param)=>{
    let { title: i, subtitle: t, description: r, items: s } = param;
    return e({
        title: i,
        subtitle: t,
        // TODO: add multiline support to native sheet
        description: I(r),
        content: [
            {
                type: "LIST",
                id: "list-0",
                listType: "ACTIONS",
                autoSubmit: !0,
                selectedIds: [],
                items: s
            }
        ]
    }).then((param)=>{
        let { action: n, result: o } = param;
        return n === "SUBMIT" ? {
            action: n,
            selectedId: o[0].selectedIds[0]
        } : {
            action: n,
            selectedId: null
        };
    });
}, N = function() {
    var _ref = _async_to_generator(function*(e, param) {
        let { title: i, subtitle: t, description: r, items: s, button: n } = param;
        const o = {
            type: "LIST",
            id: "list-0",
            listType: "INFORMATIVE",
            autoSubmit: !1,
            selectedIds: [],
            items: s
        };
        return yield e({
            title: i,
            subtitle: t,
            // TODO: add multiline support to native sheet
            description: I(r),
            content: n ? [
                o,
                {
                    type: "BOTTOM_ACTIONS",
                    id: "bottom-actions-0",
                    button: n
                }
            ] : [
                o
            ]
        }).then(()=>({
                // this is an informative sheet, it can only be dismissed
                action: "DISMISS"
            }));
    });
    return function N(e, _) {
        return _ref.apply(this, arguments);
    };
}(), h = (e, param)=>{
    let { title: i, subtitle: t, description: r, button: s, secondaryButton: n, link: o } = param;
    return e({
        title: i,
        subtitle: t,
        // TODO: add multiline support to native sheet
        description: I(r),
        content: [
            {
                type: "BOTTOM_ACTIONS",
                id: "bottom-actions-0",
                button: s,
                secondaryButton: n,
                link: o
            }
        ]
    }).then((param)=>{
        let { action: d, result: u } = param;
        if (d === "SUBMIT") {
            const S = u.find((param)=>{
                let { id: a } = param;
                return a === "bottom-actions-0";
            }), c = S == null ? void 0 : S.selectedIds[0];
            if (c === "PRIMARY" || c === "SECONDARY" || c === "LINK") return {
                action: c
            };
        }
        return {
            action: "DISMISS"
        };
    });
}, p = (e, i)=>{
    let t;
    const { type: r, props: s } = i;
    switch(r){
        case "INFO":
            t = N(e, s);
            break;
        case "ACTIONS_LIST":
            t = T(e, s);
            break;
        case "RADIO_LIST":
            t = l(e, s);
            break;
        case "ACTIONS":
            t = h(e, s);
            break;
        default:
            const n = r;
            throw new Error(`Unknown sheet type: ${n}`);
    }
    return t;
};
