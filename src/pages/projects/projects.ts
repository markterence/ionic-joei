import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../services/api-service';
import { STATIC } from '../../include/statics';
/**
 * Generated class for the ProjectsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,private apiService: ApiService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
    console.log("asmkab");
    this.apiService.getProjectLists("3","24324234","!JJJJcheetah8888").subscribe(response => {
      console.log(response.responseData.feed.entries); // Blog Data
    })
  }

}
