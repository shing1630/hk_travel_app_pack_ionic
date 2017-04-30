import { Component, Inject } from '@angular/core';
import { Platform, NavParams } from 'ionic-angular';
import { Market } from '@ionic-native/market';

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
    public navParams: NavParams) {

    this.selectedAppItem = navParams.get('selectedAppItem');
  }

  saveToMyFavourite() {
    // save app
    this.selectedAppItem.saveFlag = true;
    this.IGV.myAppItemList.push(this.selectedAppItem);
    this.IGV.myAppItemMap.set(this.selectedAppItem.id, this.selectedAppItem);

  }

  removeFromMyFavourite() {
    // Remove app
    let index: number = this.IGV.myAppItemList.indexOf(this.IGV.myAppItemMap.get(this.selectedAppItem.id));
    if (index !== -1) {
      this.IGV.myAppItemList.splice(index, 1);
      delete this.IGV.myAppItemMap[this.selectedAppItem.id];
    }
  }

  openAppStore() {
    // test
    this.globalFunc.openMarket('com.hkrain0730')
    // if (this.IGV.isIOS) {
    //   this.globalFunc.openMarket(this.selectedAppItem.iosLink)
    // } else if (this.IGV.isAndroid) {
    //   this.globalFunc.openMarket(this.selectedAppItem.androiLink)
    // }
  }


}
