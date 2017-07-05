import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,
         ModalController,
         ViewController } from 'ionic-angular';


import { ProjectFormPage } from "../project-form/project-form";
import { ProjectModalPage } from "../project-modal/project-modal";

/**
 * Generated class for the PopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  public popup_items: Array<{title: string, component: any, icon: any, action:any}>;

  selectedItem:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) {
    
    this.selectedItem = navParams.get("item");
    
    this.popup_items = [
      {title:"Edit", component :"", icon:"create", action: "edit" },
      {title:"Delete", component :"", icon:"close", action: "delete" },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }
  
  openModal(data){
    let _modal = this.modalCtrl.create(ProjectModalPage, {data:data});
    _modal.present();
  }
  showPage(action){
    switch(action){
      case "delete":
      
        console.log("ShowPageDel:"+JSON.stringify(this.selectedItem));
        break;
      case "edit":
        console.log("ShowPageEdit:"+JSON.stringify(this.selectedItem));
        this.openModal(this.selectedItem);
        break;
      default:
        break;
    }
  }
  
}
