import { Component, Inject } from '@angular/core';
import { DebugElement, } from '@angular/core';

import { OT_GV, IGV } from './../../globalVar/gv';
import { GF } from './../../globalFunc/gf';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    @Inject(OT_GV) public IGV: IGV,
    public globalFunc: GF
  ) {
  }

  openPage(page: string) {
    // this.globalFunc.loadingPresent();
    this.simulateClick(document.getElementById(page));
  }

  ButtonClickEvents = {
    left: { button: 0 },
    right: { button: 2 }
  };

  simulateClick(el: DebugElement | HTMLElement, eventObj: any = this.ButtonClickEvents.left): void {
    if (el instanceof HTMLElement) {
      el.click();
    } else {
      el.triggerEventHandler('click', eventObj);
    }
  }

}


