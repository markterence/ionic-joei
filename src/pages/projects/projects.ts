import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


//import Api Service Providers
import {ApiServiceProvider} from '../../providers/api-service/api-service';
/**
 * Generated class for the ProjectsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiServiceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
    this.getProjects();
  }

  getProjects(){
    this.api.getProjectLists("3","1235","2145").subscribe(res  => {
      console.log("E:"+ res.responseData);
    });
  }

}
