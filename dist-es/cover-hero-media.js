"use client";
import { jsxs as a, jsx as i } from "react/jsx-runtime";
import { useVideoWithControls as d, CardActionsGroup as c } from "./card.js";
import { mediaLayer as n, mediaOverlay as v } from "./cover-hero.css-mistica.js";
import p from "./image.js";
const C = (param)=>{
    let { backgroundVideo: o, backgroundImage: r, poster: t, backgroundVideoRef: s } = param;
    const { video: m, videoAction: e } = d(o, t, s);
    return /* @__PURE__ */ a("div", {
        className: n,
        children: [
            r && /* @__PURE__ */ i(p, {
                width: "100%",
                height: "100%",
                src: r
            }),
            o && m,
            /* @__PURE__ */ i("div", {
                className: v
            }),
            e && /* @__PURE__ */ i(c, {
                actions: [
                    e
                ],
                variant: "media"
            })
        ]
    });
};
export { C as CoverHeroMedia };
