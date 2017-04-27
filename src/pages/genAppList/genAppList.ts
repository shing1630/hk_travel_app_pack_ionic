import { Component, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { OT_GV, IGV } from './../../globalVar/gv';
import { AppItem } from "./../../models/AppItem";
import { TransportList } from './../../models/TransportList';
import { DiningList } from './../../models/DiningList';
import { GenApp } from "./genApp/genApp";

@Component({
  selector: 'genAppList',
  templateUrl: 'genAppList.html'
})
export class GenAppList {
  appItemList: AppItem[] = [];

  constructor( @Inject(OT_GV) public IGV: IGV,
    public navCtrl: NavController,
    public transportList: TransportList,
    public diningList: DiningList) {
    switch (this.IGV.gAppItemInd) {
      case 'transport': {
        this.appItemList = transportList.list;
        break;
      }
      case 'dining': {
        this.appItemList = diningList.list;
        break;
      }
      default: {
        this.appItemList = transportList.list;
        break;
      }
    }

  }

  itemTapped(event, selectedAppItem) {
    this.navCtrl.push(GenApp, {
      selectedAppItem: selectedAppItem
    });
  }
}
