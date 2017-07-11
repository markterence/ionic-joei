import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController,
         PopoverController } from 'ionic-angular';

import { JPopOver } from '../../include/pop-up';
import { PopoverPage } from "../popover/popover";

//import { StringUtils } from "../../include/string-utils";
import { ApiServiceProvider } from "../../providers/api-service/api-service";
//import * as limit_str from 'string-utils';
/**
 * Generated class for the ProjectDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-project-details',
  templateUrl: 'project-details.html'
})
export class ProjectDetailsPage {
  public selectedItem: any;
  
  jpopOver: JPopOver;

  testDesc: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public popOverCtrl: PopoverController,
    public api: ApiServiceProvider
    ) {
    
    this.selectedItem = navParams.get('project');
    console.log("SelectedItem: "+ JSON.stringify(this.selectedItem));

    //initialize PopoverController
    this.jpopOver = new JPopOver(popOverCtrl);  
 
    //this is a test: get Description
    this.api.getTestDesc().subscribe(
      res  => {
        this.testDesc = res;
      } 
    );
    console.log(this.testDesc);
}

  trimWords(str,count){
    return this.testDesc.substr(0,count);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectDetailsPage');
  }
  
  openPopover(ev){
    //, {cssClass: 'ion-card'}
    let pop = this.popOverCtrl.create(PopoverPage, {item: this.selectedItem});
    // pop.onDidDismiss(()=>{
    //   //ev:ev;
    // });
    pop.present({
      ev: ev
    });
  } 


  showActionSheet(){
     let actionSheet = this.actionSheetCtrl.create({
     title: 'Modify your album',
     buttons: [
       {
         text: 'Destructive',
         role: 'destructive',
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text: 'Archive',
         role: 'destructive',
         handler: () => {
           console.log('Archive clicked');
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });
  actionSheet.present();
  }
}
