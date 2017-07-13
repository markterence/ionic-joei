import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';

import {sprintf} from "sprintf-js";

import { ApiUtils } from "../../util/api-util";
import GlobalVars from "../config";
import ApiEndpoint from "../api-endpoints";

/*
  Generated class for the ProjmgmtServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProjmgmtServiceProvider {

  constructor(public http: Http, public apiUtil:ApiUtils) {
    console.log('Hello ProjmgmtServiceProvider Provider');

    // this.getProjects().subscribe((data) => {});
  }

  public getProjects(user_id, deviceid, session_key){
    //let url = this.proxyfi(this.makeDataUrl(user_id, device_id, session_key));
    //return this.http.get(url).map(this.extractData);
    //user_id, deviceid, session_key
    let params = new URLSearchParams();
    params.set('user_id', user_id);
    params.set('deviceid', deviceid);
    params.set('session_key', session_key);
    
    return this.apiUtil.Get(ApiEndpoint.PROJECT_ENDPOINT, params);
  }

}
