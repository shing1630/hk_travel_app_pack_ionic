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
import { AppRate } from '@ionic-native/app-rate';
import { Market } from '@ionic-native/market';
import { GF } from './../globalFunc/gf';
import { IsShowAppItem } from "./../pipe/IsShowAppItem";

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { HomePage } from '../pages/home/home';
import { GenAppList } from '../pages/genAppList/genAppList';
import { GenApp } from '../pages/genAppList/genApp/genApp';
import { SupportPage } from '../pages/support/support';

import { TransportList } from './../models/TransportList';
import { DiningList } from './../models/DiningList';
import { WeatherList } from './../models/WeatherList';
import { AccommodationList } from './../models/AccommodationList';
import { ShoppingList } from './../models/ShoppingList';
import { EntertainmentList } from './../models/EntertainmentList';
import { UtilityList } from './../models/UtilityList';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'a61ff4fd'
  }
};

@NgModule({
  declarations: [
    MyApp,
    IsShowAppItem,
    HomePage,
    GenAppList,
    GenApp,
    SupportPage
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
    GenAppList,
    GenApp,
    SupportPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: OT_GV, useValue: IGV },
    AdMob,
    GF,
    Network,
    AppRate,
    Market,
    StatusBar,
    SplashScreen,
    TransportList,
    DiningList,
    WeatherList,
    AccommodationList,
    ShoppingList,
    EntertainmentList,
    UtilityList
  ]
})
export class AppModule { }

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

