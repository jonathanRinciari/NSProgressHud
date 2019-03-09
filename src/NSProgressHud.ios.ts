import { Common } from './NSProgressHud.common';
import { Color } from 'tns-core-modules/color';

interface ColorOption {
  backgroundColor?: string;
  hudColor?: string;
  spinnerColor?: string;
  statusColor?: string;
}
export class NSProgressHud extends Common {


  showLoading(message?: string, options?: ColorOption) {
    if (options) {
      this.setOptions(options);
    }
    if (message) {
      ProgressHUD.showInteraction(message, true);
    } else {
      ProgressHUD.show();
    }
  }

  showSuccess(message?: string, options?: ColorOption) {
    if (options) {
      this.setOptions(options);
    }
    if (message) {
      ProgressHUD.showSuccessInteraction(message, true);
    } else {
      ProgressHUD.showSuccess();
    }
  }

  showError(message?: string, options?: ColorOption) {
    if (options) {
      this.setOptions(options);
    }
    if (message) {
      ProgressHUD.showErrorInteraction(message, true);
    } else {
      ProgressHUD.showError();
    }
  }

  dismiss() {
    ProgressHUD.dismiss();
  }

  private setOptions(options: ColorOption) {
    if (options.backgroundColor) {
      ProgressHUD.backgroundColor(new Color(options.backgroundColor).ios);
    }

    if (options.hudColor) {
      ProgressHUD.hudColor(new Color(options.hudColor).ios);
    }

    if (options.spinnerColor) {
      ProgressHUD.spinnerColor(new Color(options.spinnerColor).ios);
    }

    if (options.statusColor) {
      ProgressHUD.statusColor(new Color(options.statusColor).ios);
    }
  }
}
