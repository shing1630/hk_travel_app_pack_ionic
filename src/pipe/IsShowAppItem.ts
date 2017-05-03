import { Pipe, Inject } from '@angular/core';
import { OT_GV, IGV } from './../globalVar/gv';

@Pipe({
  name: 'isShowAppItem'
})
export class IsShowAppItem {
  constructor( @Inject(OT_GV) public IGV: IGV) { }
  transform(value) {
    return value.filter((appItem)=> {
      return ((this.IGV.isIOS && appItem.iosFlag) || (this.IGV.isAndroid && appItem.androidFlag))
    });
  }
}