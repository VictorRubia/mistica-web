import * as n from "react";
import { ESIMFLAG_SKIN as i, TU_SKIN as m, MOVISTAR_SKIN as a, O2_NEW_SKIN as S, O2_SKIN as c, VIVO_NEW_SKIN as s, VIVO_SKIN as u, TELEFONICA_SKIN as p, BLAU_SKIN as N } from "./constants.js";
import { getBlauSkin as f } from "./blau.js";
import { getTelefonicaSkin as I } from "./telefonica.js";
import { getVivoSkin as g } from "./vivo.js";
import { getVivoNewSkin as k } from "./vivo-new.js";
import { getO2Skin as _ } from "./o2.js";
import { getO2NewSkin as K } from "./o2-new.js";
import { getMovistarSkin as O } from "./movistar.js";
import { getTuSkin as A } from "./tu.js";
import { getEsimflagSkin as E } from "./esimflag.js";
const M = (r, o)=>{
    switch(r){
        case N:
            return f();
        case p:
            return I();
        case u:
            return g();
        case s:
            return k();
        case c:
            return _();
        case S:
            return K();
        case a:
            return O();
        case m:
            return A();
        case i:
            return E();
        default:
            throw Error("Unknown skin name: " + r);
    }
}, V = (r)=>n.Children.toArray(r).reduce((t, e)=>e.type === n.Fragment ? t.concat(V(e.props.children)) : (t.push(e), t), []);
export { V as flattenChildren, M as getSkinByName };
