import { Injectable, Inject } from '@angular/core';
import { Platform, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { AdMob, AdMobOptions } from '@ionic-native/admob';
import { OT_GV, IGV } from './../globalVar/gv';
import { Market } from '@ionic-native/market';

@Injectable()
export class GF {

    public loading: any;

    constructor(
        @Inject(OT_GV) private IGV: IGV,
        public alertCtrl: AlertController,
        public platform: Platform,
        private market: Market,
        public loadingCtrl: LoadingController,
        public adMob: AdMob,
        private toastCtrl: ToastController) { }


    // -------------  App Store -------------//
    // Open app store / market
    openMarket(appStoreID: string) {
        this.market.open(appStoreID);
    }

    isMyFavourite(appID: string) {
        let saveApp = this.IGV.myAppItemMap.get(appID);
        if(saveApp == null){
            return false;
        }else{
            return true;
        }
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
        if (this.IGV.isAndroid) {
            this.IGV.AD_MOB_ID_BANNER = 'ca-app-pub-7668464781725150/7147483825';
            this.IGV.AD_MOB_ID_INTER = 'ca-app-pub-7668464781725150/8624217023';
            this.IGV.AD_MOB_ID_VIDEO = 'ca-app-pub-7668464781725150/3543909029';
        } else if (this.IGV.isIOS) {
            this.IGV.AD_MOB_ID_BANNER = 'ca-app-pub-7668464781725150/2577683427';
            this.IGV.AD_MOB_ID_INTER = 'ca-app-pub-7668464781725150/4054416623';
            this.IGV.AD_MOB_ID_VIDEO = 'ca-app-pub-7668464781725150/2067175827';
        } else {
            this.IGV.AD_MOB_ID_BANNER = '';
            this.IGV.AD_MOB_ID_INTER = '';
            this.IGV.AD_MOB_ID_VIDEO = '';
        }
    }

    public showBanner() {
        if (!this.IGV.isAndroid
            && !this.IGV.isIOS) {
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

    public removeBanner() {
        this.adMob.removeBanner();
        return true;
    }

    public showInterstitial() {
        if (!this.IGV.isAndroid
            && !this.IGV.isIOS) {
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

    public showInterstitialImmd() {
        if (!this.IGV.isAndroid
            && !this.IGV.isIOS) {
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

    public showRewardVideoAd() {
        if (!this.IGV.isAndroid
            && !this.IGV.isIOS) {
            return false;
        }
        
        let adInterOptions: AdMobOptions = <AdMobOptions>{};

        adInterOptions = {
            adId: this.IGV.AD_MOB_ID_VIDEO,
            isTesting: this.IGV.isTestingAdmob,
            autoShow: true
            //adExtras: this.adExtras
        }

        this.adMob.prepareRewardVideoAd(adInterOptions)
            .then(() => { this.adMob.showRewardVideoAd(); });
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

    showToastDownloading() {
        let msg: string;

        if (this.IGV.gLangInd === 'zh') {
            msg = this.IGV.DOWNLOADING_TAKE_MIN_ZH;
        } if (this.IGV.gLangInd === 'cn') {
            msg = this.IGV.DOWNLOADING_TAKE_MIN_CN;
        } else {
            msg = this.IGV.DOWNLOADING_TAKE_MIN_EN;
        }

        let toast = this.toastCtrl.create({
            message: msg,
            duration: 10000,
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