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
    
    constructor(public popOverCtrl: PopoverController){

    }

    showPopover(component: any){
        let pop = this.popOverCtrl.create(component);
        pop.present();
    }
}