import { Component, ViewChild, Inject } from '@angular/core';
import { Nav } from 'ionic-angular';

import { OT_GV, IGV } from './../../globalVar/gv';
import { GF } from './../../globalFunc/gf';
import { GenAppList } from './../genAppList/genAppList';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Nav) nav: Nav;

  constructor(
    @Inject(OT_GV) public IGV: IGV,
    public globalFunc: GF
  ) {
  }

  openPage(page, appItemInd) {
    this.globalFunc.showInterstitial();
    // navigate to the new page if it is not the current page
    let toPage: any;
    switch (page) {
      case 'HomePage': {
        toPage = HomePage;
        break;
      }
      case 'GenAppList': {
        toPage = GenAppList;
        console.log('getElementById: '+document.getElementById("menuTransport"));

        document.getElementById("menuTransport").click();
        this.IGV.gAppItemInd = appItemInd;
        break;
      }
      default: {
        toPage = HomePage;
        break;
      }
    }
  }
}
