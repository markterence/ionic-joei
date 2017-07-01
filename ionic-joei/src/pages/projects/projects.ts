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
  projectsDataLists: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiServiceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
    this.getProjects();
  }

  getProjects(){
    this.api.getProjectLists("5","123","e1ed60c899b46e9cb0ea25be88145f17").subscribe(res  => {
      console.log(res);
      this.projectsDataLists = res.data;
    });
  }

}
