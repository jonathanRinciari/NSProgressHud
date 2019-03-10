import { Common } from './NSProgressHud.common';
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
export declare class NSProgressHud extends Common {
    private _hud;
    progress: any;
    progressTickMark: number;
    tickInterval: number;
    constructor();
    showProgress(message?: string, options?: ColorOption, progress?: any): void;
    private updateProgress;
    dismiss(): void;
    private setOptions;
}
export {};
