import { Component, ViewChild, Inject } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { AlertController } from 'ionic-angular';
import { Deploy } from "@ionic/cloud-angular";

import { OT_GV, IGV } from './../globalVar/gv';
import { GF } from './../globalFunc/gf';
import { HomePage } from '../pages/home/home';
import { GenAppList } from '../pages/genAppList/genAppList';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make home the root (or first) page
  rootPage: any = HomePage;

  public updateFlag: boolean;

  constructor(
    @Inject(OT_GV) public IGV: IGV,
    public deploy: Deploy,
    public alertCtrl: AlertController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public platform: Platform,
    public menu: MenuController,
    public translate: TranslateService,
    public storage: Storage,
    public globalFunc: GF,
    public network: Network
  ) {
    this.initializeApp(translate);
  }

  initializeApp(translate) {
    this.updateFlag = false;
    this.globalFunc.loadingPresent();
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // default language to en
      this.translate.use('en');
      this.IGV.gLangInd = 'en';

      // For local storage
      this.storage.ready().then(() => {

        // Get mySetting
        this.storage.get('mySetting').then((val) => {
          if (val !== null) {
            this.translate.use(val.langInd);
            this.IGV.gLangInd = val.langInd;
          } else {
            this.showLangChoose();
          }

          // watch network for a disconnect
          this.network.onDisconnect().subscribe(() => {
            this.globalFunc.showToastNoNetwork();
          });

          // this.deploy.channel = this.IGV.DEPLOY_CHANNEL;

          // this.deploy.check().then((snapshotAvailable: boolean) => {
          //   this.updateFlag = snapshotAvailable;
          //   this.globalFunc.loadingDismiss();
          // });

          this.globalFunc.loadingDismiss();

        });

      }, (error) => {
        this.globalFunc.presentSysErr();
        this.globalFunc.loadingDismiss();
      });

      // For adMob
      this.globalFunc.initAds();

    });
  }

  openPage(page, appItemInd) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let toPage: any;
    switch (page) {
      case 'HomePage': {
        toPage = HomePage;
        break;
      }
      case 'GenAppList': {
        toPage = GenAppList;
        this.IGV.gAppItemInd = appItemInd;
        break;
      }
      default: {
        toPage = HomePage;
        break;
      }
    }
    this.nav.setRoot(toPage);
  }

  // -------------  Ionic deploy -------------//
  updateApp() {
    this.globalFunc.loadingPresent();
    this.deploy.channel = this.IGV.DEPLOY_CHANNEL;

    this.deploy.check().then((snapshotAvailable: boolean) => {
      if (snapshotAvailable) {
        this.downloadAndInstall();
      }
      else {
        this.globalFunc.loadingDismiss();
        this.globalFunc.showNoUpdate();
      }
    });
  }

  downloadAndInstall() {
    this.globalFunc.showToastDownloading();
    this.deploy.download().then(() => {
      this.deploy.extract();
    }).then(() => {
      let inputTitle: string;
      if (this.IGV.gLangInd === 'zh') {
        inputTitle = this.IGV.RELOAD_ZH;
      } if (this.IGV.gLangInd === 'cn') {
        inputTitle = this.IGV.RELOAD_CN;
      } else {
        inputTitle = this.IGV.RELOAD_EN;
      }

      let alert = this.alertCtrl.create({
        title: inputTitle,
        message: '',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.deploy.load();
            }
          }
        ]
      });
      alert.present();
      this.globalFunc.loadingDismiss();
    });
  }


  changeLangInd(lang) {
    this.translate.use(lang);
    this.IGV.gLangInd = lang;

    this.storage.ready().then(() => {
      this.storage.set('mySetting', { langInd: lang });
    }, (error) => {
      this.globalFunc.presentSysErr();
    });

    this.menu.close();
  }

  showLangChoose() {
    let alert = this.alertCtrl.create();

    alert.addInput({
      type: 'radio',
      label: 'English',
      value: 'en'
    });
    alert.addInput({
      type: 'radio',
      label: '简',
      value: 'cn'
    });
    alert.addInput({
      type: 'radio',
      label: '繁',
      value: 'zh'
    });
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.translate.use(data);
        this.IGV.gLangInd = data;
        this.storage.set('mySetting', { langInd: this.IGV.gLangInd });
      }
    });
    alert.present();
  }

}
