import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from '../../services/api-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  str = "";
  constructor(public navCtrl: NavController, private apiService: ApiService) {
    console.log("asmkab");
    this.apiService.getProjectLists("3","24324234","!JJJJcheetah8888").subscribe(response => {
      console.log(response.responseData.feed.entries); // Blog Data
    })


  }

}
