import { Component, ViewChild, Inject } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { AlertController } from 'ionic-angular';

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

  constructor(
    @Inject(OT_GV) public IGV: IGV,
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
    this.globalFunc.loadingPresent();
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

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

          //this.globalFunc.checkForUpdate();
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

  openPage(page) {
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
        break;
      }
      default: {
        toPage = HomePage;
        break;
      }
    }
    this.nav.setRoot(toPage);
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
