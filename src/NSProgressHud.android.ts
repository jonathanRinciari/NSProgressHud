/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
import { Common } from './NSProgressHud.common';
import * as utils from 'tns-core-modules/utils/utils';
import { android as androidApp } from "tns-core-modules/application";
import { Color } from 'tns-core-modules/color/color';
import { BehaviorSubject } from 'rxjs';

interface ColorOption {
  backgroundColor?: string;
  hudColor?: string;
  spinnerColor?: string;
  tintColor?: string;
  labelColor?: string;
  progressTick?: number;
  minShowTime?: number;
  tickInterval?: number;
  width?: number;
  height?: number;
  progressType: 'annular' | 'determinate' | 'bar' | 'indeterminate';
}

export class NSProgressHud extends Common {
  private _context: any;
  progress: any = 0;
  progressTickMark = 1;
  tickInterval = 500;
  private _progressHud: com.kaopiz.kprogresshud.KProgressHUD;
  constructor() {
    super();
    this._context = androidApp.startActivity;
    this._progressHud = new com.kaopiz.kprogresshud.KProgressHUD(this._context);
  }

  showProgress(message?: string, options?: ColorOption, progressStatus?: BehaviorSubject<{progress: number}>) {
    this._progressHud.setMaxProgress(100);
    if (progressStatus) {
      progressStatus.subscribe((data: {progress: number}) => {
        this._progressHud.setProgress(data.progress);
      });
    }
    if (options) {
      this.setOptions(options);
    }

    if (message) {
      this._progressHud.setLabel(message);
    }
    if (!progressStatus) {
      this._progressHud.setProgress(1);
      this.updateProgress(this.progress);
    }

    this._progressHud.show();
  }

  private updateProgress(val) {
  const interval = setInterval(() => {
      this.progress += this.progressTickMark;
      this._progressHud.setProgress(this.progress);
      if (this.progress >= 100) {
        clearInterval(interval);
        this._progressHud.dismiss();
      }
    }, this.tickInterval);
  }

  setOptions(options: ColorOption) {
    if (options.backgroundColor) {
      this._progressHud.setBackgroundColor(new Color(options.backgroundColor).android);
    }

    if (options.hudColor) {
      this._progressHud.setWindowColor(new Color(options.backgroundColor).android);
    }

    if (options.progressTick) {
      this.progressTickMark = options.progressTick;
    }

    if (options.tickInterval) {
      this.tickInterval = options.tickInterval;
    }

    if (options.progressType) {
      if (options.progressType === 'annular') {
        const style = com.kaopiz.kprogresshud.KProgressHUD.Style.ANNULAR_DETERMINATE;
        this._progressHud.setStyle(style);
      }

      if (options.progressType === 'bar') {
        const style = com.kaopiz.kprogresshud.KProgressHUD.Style.BAR_DETERMINATE;
        this._progressHud.setStyle(style);
      }

      if (options.progressType === 'determinate') {
        const style = com.kaopiz.kprogresshud.KProgressHUD.Style.PIE_DETERMINATE;
        this._progressHud.setStyle(style);
      }

      if (options.progressType === 'indeterminate') {
        const style = com.kaopiz.kprogresshud.KProgressHUD.Style.SPIN_INDETERMINATE;
        this._progressHud.setStyle(style);
      }
    }
  }
}
