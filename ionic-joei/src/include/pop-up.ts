import { LoadingController, PopoverController } from 'ionic-angular';

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



export class JPopOver{
 
    private pop: any;
    constructor(public popOverCtrl: PopoverController){

    }

    showPopover(component: any, data?:any, opts?:any){
        this.pop = this.popOverCtrl.create(component, data, opts);
        this.pop.present();
    }

    dismissPopover(){
        this.pop.dismiss();
    }
}

export class JModal{
    private modal:any;
 
}