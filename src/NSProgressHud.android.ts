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
  backgroundOpacity?: number;
  progressTick?: number;
  minShowTime?: number;
  tickInterval?: number;
  size?: {width: number, height: number};
  progressType: 'annular' | 'determinate' | 'bar' | 'indeterminate';
}

export class NSProgressHud extends Common  {
  private _context: any;
  progress: any = 0;
  progressTickMark = 1;
  tickInterval = 500;
  private _progressHud: com.kaopiz.kprogresshud.KProgressHUD;
  constructor() {
    super();
  }

  public showProgress(message?: string, options?: ColorOption, progressStatus?: BehaviorSubject<{progress: number}>) {
    this._context = androidApp.startActivity;
    this._progressHud = new com.kaopiz.kprogresshud.KProgressHUD(this._context);
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
      this.progress += 1;
      this._progressHud.setProgress(this.progress);
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
        this.dismiss();
      }
    }, this.tickInterval);
  }

  public dismiss() {
    this._progressHud.dismiss();
    this._progressHud.setProgress(0);
    this.progress = 0;
  }

  private setOptions(options: ColorOption) {
    if (options.backgroundColor) {
      this._progressHud.setWindowColor(new Color(options.backgroundColor).android);
    }

    if (options.hudColor) {
      this._progressHud.setBackgroundColor(new Color(options.hudColor).android);
    }

    if (options.progressTick) {
      this.progressTickMark = options.progressTick;
    }

    if (options.tickInterval) {
      this.tickInterval = options.tickInterval;
    }

    if (options.backgroundOpacity) {
      this._progressHud.setDimAmount(options.backgroundOpacity);
    }

    if (options.size) {
      this._progressHud.setSize(options.size.height, options.size.width);
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
