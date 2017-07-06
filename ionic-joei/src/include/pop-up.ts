import { LoadingController, PopoverController } from 'ionic-angular';
import { Injectable } from '@angular/core';

export class JLoadingBar{

    private loading: any;
    
    constructor(public loadingCtrl: LoadingController){

    }
    showLoadingBar(content:any){
        this.loading = this.loadingCtrl.create({
        content: content,
        });
        this.loading.present();
    }

    dismissLoadingBar(){
        this.loading.dismiss();
    }
}


@Injectable()
export class JPopOver{
 
    private pop: any;
    constructor(public popOverCtrl: PopoverController){

    }

    showPopover(component: any, event, data?:any, opts?:any,){
        this.pop = this.popOverCtrl.create(component, data, opts);
        this.pop.present(
            {ev:event}
        );
    }

    dismissPopover(){
        this.pop.dismiss();
    }
}

export class JModal{
    private modal:any;
 
}