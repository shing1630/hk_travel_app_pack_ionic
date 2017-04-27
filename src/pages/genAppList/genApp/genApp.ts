import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { AppItem } from "./../../../models/AppItem";

@Component({
  selector: 'genApp',
  templateUrl: 'genApp.html'
})
export class GenApp {
  selectedAppItem: AppItem;

  constructor(public navParams: NavParams) {
    this.selectedAppItem = navParams.get('selectedAppItem');
  }

}
