import { Component, Inject } from '@angular/core';
import { Platform, NavParams } from 'ionic-angular';
import { Market } from '@ionic-native/market';
import { Storage } from '@ionic/storage';

import { AppItem } from "./../../../models/AppItem";
import { OT_GV, IGV } from './../../../globalVar/gv';
import { GF } from './../../../globalFunc/gf';

@Component({
  selector: 'genApp',
  templateUrl: 'genApp.html'
})
export class GenApp {
  selectedAppItem: AppItem;

  constructor( @Inject(OT_GV) public IGV: IGV,
    public platform: Platform,
    private market: Market,
    public globalFunc: GF,
    public storage: Storage,
    public navParams: NavParams) {

    this.selectedAppItem = navParams.get('selectedAppItem');
  }

  saveToMyFavourite() {
    // save app
    this.selectedAppItem.saveFlag = true;
    this.IGV.myAppItemList.push(this.selectedAppItem);
    this.IGV.myAppItemMap.set(this.selectedAppItem.id, this.selectedAppItem);
    this.storage.set('myFavourite', { myappItemList: this.IGV.myAppItemList });
  }

  removeFromMyFavourite() {
    // Remove app
    this.selectedAppItem.saveFlag = false;
    let index: number = this.IGV.myAppItemList.indexOf(this.IGV.myAppItemMap.get(this.selectedAppItem.id));
    if (index !== -1) {
      this.IGV.myAppItemList.splice(index, 1);
      this.IGV.myAppItemMap.delete(this.selectedAppItem.id);
      this.storage.set('myFavourite', { myappItemList: this.IGV.myAppItemList });
    }
  }

  openAppStore() {
    if (this.IGV.isAndroid) {
      this.globalFunc.openMarket(this.selectedAppItem.androiLink)
    }
  }

}
