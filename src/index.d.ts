import { Common } from "./NSProgressHud.common";

interface ColorOption {
  backgroundColor?: string;
  hudColor?: string;
  spinnerColor?: string;
  statusColor?: string;
}
export declare class NSProgressHud extends Common {
  showLoading(message?: string, options?: ColorOption): void;
  showSuccess(message?: string, options?: ColorOption): void;
  showError(message?: string, options?: ColorOption): void;
  private setOptions;
}
