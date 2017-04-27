import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { OT_GV, IGV } from './../globalVar/gv';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { AdMob } from '@ionic-native/admob';
import { GF } from './../globalFunc/gf';
import { TransportList } from './../models/TransportList';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { HomePage } from '../pages/home/home';
import { GenAppList } from '../pages/genAppList/genAppList';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'a61ff4fd'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GenAppList
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    CloudModule.forRoot(cloudSettings),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GenAppList
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: OT_GV, useValue: IGV },
    AdMob,
    GF,
    TransportList,
    Network,
    StatusBar,
    SplashScreen
  ]
})
export class AppModule { }

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

