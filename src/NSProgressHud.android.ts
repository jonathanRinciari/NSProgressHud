/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
import { Common } from './NSProgressHud.common';
import * as utils from 'tns-core-modules/utils/utils';
import { android as androidApp } from "tns-core-modules/application";

interface ColorOption {
  backgroundColor?: string;
  hudColor?: string;
  spinnerColor?: string;
  statusColor?: string;
}

export class NSProgressHud extends Common {
  private _context: any;
  private _progressHud: com.kaopiz.kprogresshud.KProgressHUD;
  constructor() {
    super();
    this._context = androidApp.startActivity;
    this._progressHud = new com.kaopiz.kprogresshud.KProgressHUD(this._context);
  }


  showLoading(message?: string, options?: ColorOption) {
    const style = com.kaopiz.kprogresshud.KProgressHUD.Style.PIE_DETERMINATE;
      this._progressHud.setLabel(message).setSize(50, 50).setStyle(style).show();
  }
}
