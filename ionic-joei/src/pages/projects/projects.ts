import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


//import Api Service Providers
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { ProjectDetailsPage } from '../project-details/project-details';
import { JLoadingBar } from '../../include/pop-up';

import { ProjmgmtServiceProvider } from "../../providers/projmgmt-service/projmgmt-service";

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

  msg : any = "this is projects page add projects lists here";


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public api: ApiServiceProvider, public api2: ProjmgmtServiceProvider, 
    public jLoadingBar: JLoadingBar) {

  }
   

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
    this.jLoadingBar.showLoadingBar("Please Wait....");
    this.getProjects();
  }
  
  //Event
  itemTapped(event, item) {
    //console.log("Item Tapped:" + JSON.stringify(item));
    this.navCtrl.push(ProjectDetailsPage, {
      project: item
    });
  }

  getProjects(){
    this.api2.getProjects("5","123","e1ed60c899b46e9cb0ea25be88145f17").subscribe(
      res  => {
        console.log(res);
        this.projectsDataLists = res.data;
        this.jLoadingBar.dismissLoadingBar();
        
      },err => {
        console.log("errror"+ JSON.stringify(err));
        this.jLoadingBar.dismissLoadingBar();
        this.msg = "Error Loading Projects";
      }
    );
  }

}
