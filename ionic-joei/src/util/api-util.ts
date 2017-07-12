import { Injectable } from "@angular/core";
import { Http, Headers, URLSearchParams, RequestOptions } from "@angular/http";

import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'

/*
    sprintf-js library 
    `npm install sprintf-js` https://www.npmjs.com/package/sprintf-js
 */
import {sprintf} from "sprintf-js"; 

import { Proxyfi } from "./proxyfi";

@Injectable()
export class ApiUtils{

    useProxy:boolean;

    constructor(public http:Http)
    { 
    }   

    //DRY DRY DRY
    //Get Request
    public Get(url, requiredParams, optionalParams?)
    {   
        if(this.useProxy) Proxyfi(url);

        let parameter = this.normalizeParameters(optionalParams, requiredParams);

        let params = new URLSearchParams();
        for(var key in parameter){
            params.set(key, parameter[key]);
        }

        return this.http.get(url, params.toString()).map(resp => resp.json());
    }

    //Post Request
    public Post(url, requiredParams, optionalParams?){
        if(this.useProxy) Proxyfi(url);

        let parameter = this.normalizeParameters(optionalParams, requiredParams);

        if(parameter !== {})
            url = this.makeDataUrl(url, parameter);

        //TODO: header
        return this.http.post(url, parameter).map(resp => resp.json());
    }

    public Put(url, requiredParams, optionalParams?){
        if(this.useProxy) Proxyfi(url);

        let parameter = this.normalizeParameters(optionalParams, requiredParams);
        
        if(parameter !== {})
            url = this.makeDataUrl(url, parameter);

        //TODO: header
        return this.http.put(url, parameter).map(resp => resp.json());
    }

    public Delete(url, requiredParams, optionalParams?){
        if(this.useProxy) Proxyfi(url);

        let parameter = this.normalizeParameters(optionalParams, requiredParams);

        if(parameter !== {})
            url = this.makeDataUrl(url, parameter);

        //TODO: header
        return this.http.delete(url, parameter).map(resp => resp.json());
    }

    // Normalize a parameters into object
    private normalizeParameters(requiredParams, optionalParams){
        if(typeof(optionalParams) === 'undefined') optionalParams = {};
        if(typeof(requiredParams) === 'undefined') requiredParams = {};
        return Object.assign(optionalParams, requiredParams);
    }

    //Combine parameter to endpoint url
    private makeDataUrl(url, parameter){
        return url + "?" + this.transformRequest(parameter);
    }

    //Escapes special characters
    public escapeSpecialCharacters(string) {
        var tmp = encodeURIComponent(string);
        tmp = tmp.replace(/\!/g, "%21");
        tmp = tmp.replace(/\'/g, "%27");
        tmp = tmp.replace(/\(/g, "%28");
        tmp = tmp.replace(/\)/g, "%29");
        tmp = tmp.replace(/\*/g, "%2A");
        return tmp;
    }

    // Tranforms object into request url format
    public transformRequest(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + this.escapeSpecialCharacters(obj[p]));
        console.log(str.join('&'));
        return str.join('&');
    }
}