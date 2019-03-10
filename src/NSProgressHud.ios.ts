import { Common } from './NSProgressHud.common';
import { Color } from 'tns-core-modules/color';
import { ios as iosApp } from "tns-core-modules/application";

interface ColorOption {
  backgroundColor?: string;
  hudColor?: string;
  spinnerColor?: string;
  tintColor?: string;
  labelColor?: string;
  progressTick?: number;
  minShowTime?: number;
  tickInterval?: number;
  progressType: 'annular' | 'determinate' | 'bar' | 'indeterminate';
}
export class NSProgressHud extends Common {
  private _hud: MBProgressHUD;
  progress: any = 0;
  progressTickMark = .01;
  tickInterval = 500;

  constructor() {
    super();
    this._hud = MBProgressHUD.showHUDAddedToAnimated(iosApp.rootController.view, true);
    this._hud.progress = this.progressTickMark;
  }

  showProgress(message?: string, options?: ColorOption) {
    if (options) {
      this.setOptions(options);
    }
    if (message) {
      this._hud.label.text = message;
    }
    this._hud.progress = .01;
    this.updateProgress(this.progress);
    this._hud.showAnimated(true);
  }

  private updateProgress(val) {
  const interval = setInterval(() => {
      this.progress += this.progressTickMark;
      this._hud.progress = this.progress;
      if (this.progress >= 1) {
        clearInterval(interval);
        this._hud.hideAnimated(true);
      }
    }, this.tickInterval);
  }


  dismiss() {
    this._hud.hideAnimated(true);
  }

  private setOptions(options: ColorOption) {

    if (options.backgroundColor) {
      this._hud.backgroundColor = new Color(options.backgroundColor).ios;
    }

    if (options.hudColor) {
      this._hud.color = new Color(options.hudColor).ios;
    }

    if (options.spinnerColor) {
      this._hud.activityIndicatorColor = new Color(options.spinnerColor).ios;
    }

    if (options.labelColor) {
      this._hud.labelColor = new Color(options.labelColor).ios;
      this._hud.detailsLabelColor = new Color(options.labelColor).ios;
    }

    if (options.tintColor) {
      this._hud.tintColor =  new Color(options.tintColor).ios;
    }

    if (options.progressTick) {
      this.progressTickMark = options.progressTick;
    }

    if (options.tickInterval) {
      this.tickInterval = options.tickInterval;
    }

    if (options.progressType) {
      if (options.progressType === 'annular') {
        this._hud.mode = MBProgressHUDMode.AnnularDeterminate;
      }

      if (options.progressType === 'bar') {
        this._hud.mode = MBProgressHUDMode.DeterminateHorizontalBar;
      }

      if (options.progressType === 'determinate') {
        this._hud.mode = MBProgressHUDMode.Determinate;
      }

      if (options.progressType === 'indeterminate') {
        this._hud.mode = MBProgressHUDMode.Indeterminate;
      }
    }
  }
}
