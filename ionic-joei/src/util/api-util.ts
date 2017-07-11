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

        //create an empty object if requiredParams or optionalParams is empty
        if(typeof(optionalParams) === 'undefined') optionalParams = {};
        if(typeof(requiredParams) === 'undefined') requiredParams = {};

        let parameter = Object.assign(optionalParams, requiredParams);

        let params = new URLSearchParams();
        for(var key in parameter){
            params.set(key, parameter[key]);
        }
        return this.http.get(url, params.toString()).map(resp => resp.json());
    
    }

    //Post Request
    public Post(url, requiredParams, optionalParams?){
        if(this.useProxy) Proxyfi(url);
        
        if(typeof(optionalParams) === 'undefined') optionalParams = {};
        if(typeof(requiredParams) === 'undefined') requiredParams = {};

        let parameter = Object.assign(optionalParams, requiredParams);

        //Escape data
        if(parameter !== {})
            url = url + '?' + this.transformRequest(parameter);

        //TODO: header

        return this.http.post(url, parameter).map(resp => resp.json());
    }

    public Put(url, requiredParams, optionalParams?){
        if(this.useProxy) Proxyfi(url);

        if(typeof(optionalParams) === 'undefined') optionalParams = {};
        if(typeof(requiredParams) === 'undefined') requiredParams = {};

        let parameter = Object.assign(optionalParams, requiredParams);
        
        //Escape data
        if(parameter !== {})
            url = url + '?' + this.transformRequest(parameter);

        //TODO: header

        return this.http.put(url, parameter).map(resp => resp.json());
    }

    public Delete(url, requiredParams, optionalParams?){
        if(this.useProxy) Proxyfi(url);

        if(typeof(optionalParams) === 'undefined') optionalParams = {};
        if(typeof(requiredParams) === 'undefined') requiredParams = {};

        let parameter = Object.assign(optionalParams, requiredParams);
        
        //Escape data
        if(parameter !== {})
            url = url + '?' + this.transformRequest(parameter);

        //TODO: header

        return this.http.delete(url, parameter).map(resp => resp.json());
    }

    public escapeSpecialCharacters(string) {
        var tmp = encodeURIComponent(string);
        tmp = tmp.replace(/\!/g, "%21");
        tmp = tmp.replace(/\'/g, "%27");
        tmp = tmp.replace(/\(/g, "%28");
        tmp = tmp.replace(/\)/g, "%29");
        tmp = tmp.replace(/\*/g, "%2A");
        return tmp;
    }

    public transformRequest(obj) {
        var str = [];
        for(var p in obj)
        str.push(encodeURIComponent(p) + "=" + this.escapeSpecialCharacters(obj[p]));
        console.log(str.join('&'));
        return str.join('&');
    }
}