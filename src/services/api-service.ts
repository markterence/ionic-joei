import { Injectable } from "@angular/core";
//import { Http } from '@angular/http';
import {sprintf} from "sprintf-js";
import 'rxjs/Rx';
@Injectable()
export class ApiService{
  SERVER_ADDRESS = 'http://192.168.1.108:8888/api/';

  http: any;
  PROJECTS_API = this.SERVER_ADDRESS + "projects/?user_id={{0}}&deviceid={{1}}&session_key={{2}}";
  constructor()
  {
      //this.http = http;
  }

  getProjectLists(user_id, device_id, session_key){
    return this.http.get(sprintf(this.PROJECTS_API, user_id, device_id, session_key)).map(res => res.json());
  }
}
