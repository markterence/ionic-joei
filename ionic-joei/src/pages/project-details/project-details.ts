import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController,
         PopoverController } from 'ionic-angular';

import { JPopOver } from '../../include/pop-up';
import { PopoverPage } from "../popover/popover";
/**
 * Generated class for the ProjectDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-project-details',
  templateUrl: 'project-details.html',
})
export class ProjectDetailsPage {
  public selectedItem: any;
  
  jpopOver: JPopOver;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public popOverCtrl: PopoverController
    ) {
    
    this.selectedItem = navParams.get('project');
    console.log("SelectedItem: "+ JSON.stringify(this.selectedItem));

    //initialize PopoverController
    this.jpopOver = new JPopOver(popOverCtrl);  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectDetailsPage');
  }
  
  openPopover(ev){
    let pop = this.popOverCtrl.create(PopoverPage, {item: this.selectedItem}, {cssClass: 'ion-card'});
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
