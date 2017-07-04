import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ProjectFormPage } from "../project-form/project-form";
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.selectedItem = navParams.get("item");
    
    this.popup_items = [
      {title:"Edit", component :"", icon:"create", action: "edit" },
      {title:"Delete", component :"", icon:"close", action: "delete" },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  showPage(action){
    switch(action){
      case "delete":
      
        console.log("ShowPageDel:"+JSON.stringify(this.selectedItem));
        break;
      case "edit":
        console.log("ShowPageEdit:"+JSON.stringify(this.selectedItem));
        this.navCtrl.push(ProjectFormPage, 
          {data:this.selectedItem}
          );
        break;
      default:
        break;
    }
  }
  
}
