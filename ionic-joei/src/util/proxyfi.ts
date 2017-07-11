import {sprintf} from "sprintf-js";
import GlobalVars from "./constants";
//works only for proxy-joei proxy script
export function Proxyfi(url:string):string
{
    return sprintf(GlobalVars.PROXY_SERVER , encodeURIComponent(url));
}