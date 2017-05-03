import { Component, Inject, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';

import { OT_GV, IGV } from './../../globalVar/gv';
import { GF } from './../../globalFunc/gf';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Content) content: Content;

  constructor(
    @Inject(OT_GV) public IGV: IGV,
    public globalFunc: GF
  ) {}

  ngAfterViewInit() {
    this.content.ionScrollEnd.subscribe(($event: any) => {
      if (this.content.getContentDimensions().scrollTop
        + this.content.getContentDimensions().contentHeight
        >= this.content.getContentDimensions().scrollHeight) {
        this.globalFunc.removeBanner();
      }
    });
  }

  openPage(page: string) {
    this.globalFunc.loadingPresent();
    setTimeout(() => {
      document.getElementById(page).click();
      this.globalFunc.loadingDismiss();
    }, 2500);
  }

}


