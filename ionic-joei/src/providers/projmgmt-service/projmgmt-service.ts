import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';

import {sprintf} from "sprintf-js";

import { ApiUtils } from "../../util/api-util";
import GlobalVars from "../config";
import * as ApiEndpoint from "../api-endpoints";

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

    let requestParams = {
    'user_id': user_id,
    'deviceid': deviceid,
    'session_key': session_key
    }
 
    console.log("projmgmt-services::getProjects");
    console.log(requestParams);
    console.log("projmgmt-services::end");
    
    let header = new Headers();
    header.set("Origin","localhost");

    return this.apiUtil.Get(ApiEndpoint.PROJECT_ENDPOINT, 
      {
        params:requestParams
      },
      {
        body:{data:"data"},
        headers: header
      }
    );
  }

  public createProject(user_id, deviceid, session_key){
    let requiredParams = {
      'user_id': user_id,
      'deviceid': deviceid,
      'session_key': session_key,
      'json':{
        'project_name': 're:joei'
      }
    };
    
    return this.apiUtil.Post(ApiEndpoint.PROJECT_ENDPOINT, 
      {
        params: requiredParams
      });
  }


}
