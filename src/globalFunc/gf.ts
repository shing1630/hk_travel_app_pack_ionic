import { Injectable, Inject } from '@angular/core';
import { AlertController, LoadingController, ToastController } from 'ionic-angular';
import { AdMob, AdMobOptions } from '@ionic-native/admob';
import { Deploy } from "@ionic/cloud-angular";
import { OT_GV, IGV } from './../globalVar/gv';

@Injectable()
export class GF {

    public loading: any;

    constructor(
        @Inject(OT_GV) private IGV: IGV,
        public deploy: Deploy,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        public adMob: AdMob,
        private toastCtrl: ToastController) { }

    // -------------  Ionic deploy -------------//
    checkForUpdate() {
        this.loadingPresent();
        this.deploy.channel = this.IGV.DEPLOY_CHANNEL;

        this.deploy.check().then((snapshotAvailable: boolean) => {
            if (snapshotAvailable) {
                this.downloadAndInstall();
            }
            else {
                this.loadingDismiss();
                this.showNoUpdate();
            }
        });
    }

    downloadAndInstall() {
        this.deploy.download().then(() =>
            this.deploy.extract()).then(() => {
                let inputTitle: string;
                let btnLabel: string;
                if (this.IGV.gLangInd === 'zh') {
                    inputTitle = this.IGV.NO_NETWORK_CONNECTION_ZH;
                    btnLabel = this.IGV.RELOAD_ZH;
                } if (this.IGV.gLangInd === 'cn') {
                    inputTitle = this.IGV.NO_NETWORK_CONNECTION_CN;
                    btnLabel = this.IGV.RELOAD_CN;
                } else {
                    inputTitle = this.IGV.NO_NETWORK_CONNECTION_EN;
                    btnLabel = this.IGV.RELOAD_EN;
                }

                let alert = this.alertCtrl.create({
                    title: inputTitle,
                    buttons: [btnLabel]
                });
                alert.present();
                this.deploy.load();
                this.loadingDismiss();
            });
    }

    // -------------  Alert -------------//
    presentSysErr() {
        if (this.IGV.gLangInd === 'zh') {
            let alert = this.alertCtrl.create({
                title: this.IGV.ERROR_ZH,
                subTitle: this.IGV.SORRY_SOMETHING_WRONG_ZH,
                buttons: ['OK']
            });
            alert.present();
        } else {
            let alert = this.alertCtrl.create({
                title: this.IGV.ERROR_EN,
                subTitle: this.IGV.SORRY_SOMETHING_WRONG_EN,
                buttons: ['OK']
            });
            alert.present();
        }
    }

    presentAlert(inputTitle: string, inputSubTitle: string) {
        let alert = this.alertCtrl.create({
            title: inputTitle,
            subTitle: inputSubTitle,
            buttons: ['OK']
        });
        alert.present();
    }

    // -------------  Loading -------------//
    loadingPresent() {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `
                <div class="centerAndMiddle">
                    <img width="50%" height="50%" src="assets/img/loading.gif">
                </div>`,
        });
        this.loading.present();
    }

    loadingDismiss() {
        this.loading.dismiss();
    }

    public initAds() {
        if (!this.adMob) {
            console.log("AdMob not found.");
            return;
        }
        this.setAdMobIds();
        this.showBanner();
        this.showInterstitial();
    }

    public setAdMobIds() {
        if (/(android)/i.test(navigator.userAgent)) {
            IGV.AD_MOB_ID_BANNER = 'ca-app-pub-7668464781725150/7147483825';
            IGV.AD_MOB_ID_INTER = 'ca-app-pub-7668464781725150/8624217023';
        } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            IGV.AD_MOB_ID_BANNER = 'ca-app-pub-7668464781725150/2577683427';
            IGV.AD_MOB_ID_INTER = 'ca-app-pub-7668464781725150/4054416623';
        } else {
            IGV.AD_MOB_ID_BANNER = '';
            IGV.AD_MOB_ID_INTER = '';
        }
    }

    public showBanner() {
        if (!/(android)/i.test(navigator.userAgent)
            && !/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            return false;
        }

        let adBannerOptions: AdMobOptions = <AdMobOptions>{};

        adBannerOptions = {
            adId: this.IGV.AD_MOB_ID_BANNER,
            position: this.adMob.AD_POSITION.BOTTOM_CENTER,
            isTesting: this.IGV.isTestingAdmob,
            autoShow: true
            //adExtras: this.adExtras
        }

        this.adMob.createBanner(adBannerOptions);

        return true;
    }

    public showInterstitial() {
        if (!/(android)/i.test(navigator.userAgent)
            && !/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            return false;
        }

        if (this.IGV.admobCount > 0) {
            this.IGV.admobCount--;
            return false;
        }

        let adInterOptions: AdMobOptions = <AdMobOptions>{};

        adInterOptions = {
            adId: this.IGV.AD_MOB_ID_INTER,
            isTesting: this.IGV.isTestingAdmob,
            autoShow: true
            //adExtras: this.adExtras
        }

        this.adMob.prepareInterstitial(adInterOptions)
            .then(() => { this.adMob.showInterstitial(); this.IGV.admobCount = this.IGV.ADMOB_MAX_NUMBER });
        return true;
    }


    // -------------  Toast -------------//
    showToastNoNetwork() {
        let msg: string;

        if (this.IGV.gLangInd === 'zh') {
            msg = this.IGV.NO_NETWORK_CONNECTION_ZH;
        } if (this.IGV.gLangInd === 'cn') {
            msg = this.IGV.NO_NETWORK_CONNECTION_CN;
        } else {
            msg = this.IGV.NO_NETWORK_CONNECTION_EN;
        }

        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }

    showNoUpdate() {
        let msg: string;

        if (this.IGV.gLangInd === 'zh') {
            msg = this.IGV.NO_UPDATE_AVAILABLE_ZH;
        } if (this.IGV.gLangInd === 'cn') {
            msg = this.IGV.NO_UPDATE_AVAILABLE_CN;
        } else {
            msg = this.IGV.NO_UPDATE_AVAILABLE_EN;
        }

        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }

}