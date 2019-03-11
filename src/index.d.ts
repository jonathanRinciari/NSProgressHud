import { Common } from './NSProgressHud.common';
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
    backgroundOpacity?: number;
    size?: {
        width: number;
        height: number;
    };
    progressType: 'annular' | 'determinate' | 'bar' | 'indeterminate';
}
export declare class NSProgressHud extends Common {
    private _hud;
    progress: any;
    progressTickMark: number;
    tickInterval: number;
    constructor();
    showProgress(message?: string, options?: ColorOption, progressStatus?: BehaviorSubject<{
        progress: number;
    }>): void;
    private updateProgress;
    dismiss(): void;
    private setOptions;
}
export {};
