import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
         ViewController } from 'ionic-angular';

/**
 * Generated class for the ProjectModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-project-modal',
  templateUrl: 'project-modal.html',
})
export class ProjectModalPage {
  selectedItem :any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewCtrl: ViewController) {
    this.selectedItem = this.navParams.get("data");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectModalPage');
  }

  getSelectedItem(){
    return JSON.stringify(this.selectedItem);
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }

}
