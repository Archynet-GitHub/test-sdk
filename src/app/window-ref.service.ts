import {Injectable} from '@angular/core';

function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable()
export class WindowRefService {
  window:any;
  getNativeWindow(): any {
    return _window();
  }
  constructor() {
    this.window=this.getNativeWindow();
  }
  roundNumber(num:number,precision:number):number{
    //////////console.log(precision);
    let precRound=Math.pow(10,precision);
    //////////console.log(precRound);
    //////////console.log(this.window.Math.round(num*precRound)/precRound);
    return this.window.Math.round(num*precRound)/precRound;
  }

}
