import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'; //from  taco.visualstudio.co

import {sprintf} from "sprintf-js";
/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
/*
  https://taco.visualstudio.com/en-us/docs/tutorial-ionic2/
*/
@Injectable()
export class ApiServiceProvider {
  //'http://localhost/prox/mock-server.php';
  private SERVER_ADDRESS = 'http://192.168.1.108:8888/api/';
  //This is the Proxy Script running on PHP local server (allows CORS);
  private PROXY = 'http://192.168.1.104/proxy-joei/proxy.php?url=%s';
  //private SERVER_TOKEN = '!JJJJcheetah8888';

  private PROJECT_ENDPOINT = this.SERVER_ADDRESS + 'projects/?user_id=%1$s&deviceid=%2$s&session_key=%3$s';
  constructor(public http: Http) {
    this.http = http;
    console.log('Hello ApiServiceProvider Provider');
  }

  public getProjectLists(user_id:String, device_id: String, session_key: String)
    :Observable<any>{
    //(this.makeDataUrl(user_id, device_id, session_key))
    //let url: string = this.useBaseUrl();
    let url = this.proxyfi(this.makeDataUrl(user_id, device_id, session_key));
    return this.http.get(url).map(this.extractData);
  }

  private extractData(res: Response){
    let body = res.json();
    return body || {};
  }

  public headerInjection() : RequestOptions{
    //let options = new
     let headers = new Headers({ 'Holy': 'Shit' });
     let options = new RequestOptions({ headers: headers });
     return options;
  }
  public useBaseUrl(){
    return this.SERVER_ADDRESS;
  }
  public proxyfi(url: string): string{
    console.log(sprintf(this.PROXY, encodeURIComponent(url)));
    return sprintf(this.PROXY, encodeURIComponent(url));
  }
  public makeDataUrl(user_id:String, device_id: String, session_key: String): string{
    return sprintf(this.PROJECT_ENDPOINT, user_id, device_id, session_key);
  }
}
