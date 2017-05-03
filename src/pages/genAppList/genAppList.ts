import { Component, Inject, ViewChild } from '@angular/core';
import { NavController, Content, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { OT_GV, IGV } from './../../globalVar/gv';
import { GF } from './../../globalFunc/gf';
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

  @ViewChild(Content) content: Content;

  constructor( @Inject(OT_GV) public IGV: IGV,
    public globalFunc: GF,
    public alertCtrl: AlertController,
    public storage: Storage,
    public navCtrl: NavController,
    public transportList: TransportList,
    public diningList: DiningList) {

    switch (this.IGV.gAppItemInd) {
      case 'favourite': {
        this.appItemList = this.IGV.myAppItemList;
        break;
      }
      case 'transport': {
        this.appItemList = transportList.list;
        break;
      }
      case 'dining': {
        this.appItemList = diningList.list;
        break;
      }
      case 'weather': {
        // this.appItemList = diningList.list;
        break;
      }
      case 'accommodation': {
        // this.appItemList = diningList.list;
        break;
      }
      case 'shopping': {
        // this.appItemList = diningList.list;
        break;
      }
      case 'entertainment': {
        // this.appItemList = diningList.list;
        break;
      }
      case 'emergency': {
        // this.appItemList = diningList.list;
        break;
      }
      default: {
        this.appItemList = transportList.list;
        break;
      }
    }

    // Set My Favourite flag
    for (let appItem of this.appItemList) {
      appItem.saveFlag = this.globalFunc.isMyFavourite(appItem.id);
    }

  }

  ngAfterViewInit() {
    this.content.ionScrollEnd.subscribe(($event: any) => {
      if (this.content.getContentDimensions().scrollTop
        + this.content.getContentDimensions().contentHeight
        >= this.content.getContentDimensions().scrollHeight) {
        this.globalFunc.removeBanner();
      }
    });
  }

  itemTapped(event, selectedAppItem) {
    this.globalFunc.removeBanner();
    this.navCtrl.push(GenApp, {
      selectedAppItem: selectedAppItem
    });
  }

  removeFromMyFavourite(appItem: AppItem) {
    // Remove app
    let index: number = this.IGV.myAppItemList.indexOf(this.IGV.myAppItemMap.get(appItem.id));
    if (index !== -1) {
      this.IGV.myAppItemList.splice(index, 1);
      this.IGV.myAppItemMap.delete(appItem.id);
      this.storage.set('myFavourite', { myappItemList: this.IGV.myAppItemList });
    }
  }

  clearAllMyFavourite() {
    this.IGV.myAppItemList.length = 0;;
    this.IGV.myAppItemMap.clear();
    this.storage.set('myFavourite', { myappItemList: this.IGV.myAppItemList });
  }

  presentClearAllConfirm() {

    let title: string;
    let no: string;
    let yes: string;
    if (this.IGV.gLangInd === 'zh') {
      title = this.IGV.CLEAR_ALL_MY_FAVOURITE_ZH;
      no = this.IGV.NO_ZH;
      yes = this.IGV.YES_ZH;
    } if (this.IGV.gLangInd === 'cn') {
      title = this.IGV.CLEAR_ALL_MY_FAVOURITE_CN;
      no = this.IGV.NO_CN;
      yes = this.IGV.YES_CN;
    } else {
      title = this.IGV.CLEAR_ALL_MY_FAVOURITE_EN;
      no = this.IGV.NO_EN;
      yes = this.IGV.YES_EN;
    }

    let alert = this.alertCtrl.create({
      title: title,
      buttons: [
        {
          text: no,
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: yes,
          handler: () => {
            this.clearAllMyFavourite();
          }
        }
      ]
    });
    alert.present();
  }
}
