import {sprintf} from "sprintf-js";
import * as Config from "../providers/config";
//works only for proxy-joei proxy script
export function Proxyfi(url:string):string
{
    return sprintf(Config.PROXY_SERVER , encodeURIComponent(url));
}