import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
/**
 * Generated class for the ProjectFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-project-form',
  templateUrl: 'project-form.html',
})
export class ProjectFormPage {

  myForm: FormGroup;
  data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder) {
    
    this.data = navParams.get("data");

    console.log("Form: " + JSON.stringify(this.data));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectFormPage');
  }

  createForm(){
 
  } 
}
