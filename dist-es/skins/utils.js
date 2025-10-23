import * as n from "react";
import { ESIMFLAG_SKIN as i, TU_SKIN as m, MOVISTAR_SKIN as a, O2_NEW_SKIN as S, O2_SKIN as s, VIVO_NEW_SKIN as c, VIVO_SKIN as p, TELEFONICA_EMPRESAS_SKIN as u, TELEFONICA_SKIN as N, BLAU_SKIN as f } from "./constants.js";
import { getBlauSkin as I } from "./blau.js";
import { getTelefonicaSkin as g } from "./telefonica.js";
import { getTelefonicaEmpresasSkin as k } from "./telefonica-empresas.js";
import { getVivoSkin as _ } from "./vivo.js";
import { getVivoNewSkin as E } from "./vivo-new.js";
import { getO2Skin as K } from "./o2.js";
import { getO2NewSkin as A } from "./o2-new.js";
import { getMovistarSkin as O } from "./movistar.js";
import { getTuSkin as T } from "./tu.js";
import { getEsimflagSkin as V } from "./esimflag.js";
const C = (r, o)=>{
    switch(r){
        case f:
            return I();
        case N:
            return g();
        case u:
            return k();
        case p:
            return _();
        case c:
            return E();
        case s:
            return K();
        case S:
            return A();
        case a:
            return O();
        case m:
            return T();
        case i:
            return V();
        default:
            throw Error("Unknown skin name: " + r);
    }
}, l = (r)=>n.Children.toArray(r).reduce((e, t)=>t.type === n.Fragment ? e.concat(l(t.props.children)) : (e.push(t), e), []);
export { l as flattenChildren, C as getSkinByName };
