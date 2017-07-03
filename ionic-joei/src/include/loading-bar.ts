import { LoadingController } from 'ionic-angular';

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