import { Common } from './NSProgressHud.common';
import { Color } from 'tns-core-modules/color';
import { ios as iosApp } from "tns-core-modules/application";
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
  private _hud: MBProgressHUD;
  progress: any = 0;
  progressTickMark = 1;
  tickInterval = 500;

  constructor() {
    super();
    this._hud = MBProgressHUD.showHUDAddedToAnimated(iosApp.rootController.view, true);
    this._hud.progress = this.progressTickMark;
  }

  showProgress(message?: string, options?: ColorOption, progressStatus?: BehaviorSubject<{progress: number}>) {
    if (progressStatus) {
      const progress$ = progressStatus.subscribe((data: {progress: number}) => {

        this._hud.progress = data.progress * .1;
        if (data.progress * .1 >= 1) {
          progress$.unsubscribe();
          this._hud.hideAnimated(true);
        }
      });
    }
    if (options) {
      this.setOptions(options);
    }
    if (message) {
      this._hud.label.text = message;
    }
    if (!progressStatus) {
      this._hud.progress = 1;
      this.updateProgress(this.progress);
    }
    this._hud.showAnimated(true);
  }

  private updateProgress(val) {
  const interval = setInterval(() => {
      this.progress += this.progressTickMark;
      this._hud.progress = this.progress;
      if (this.progress >= 100) {
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
