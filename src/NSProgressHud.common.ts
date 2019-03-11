import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export interface ColorOption {
  backgroundColor?: string;
  hudColor?: string;
  activityColor?: string;
  tintColor?: string;
  labelColor?: string;
  progressTick?: number;
  minShowTime?: number;
  tickInterval?: number;
  backgroundOpacity?: number;
  size?: {width: number, height: number};
  progressType: 'annular' | 'determinate' | 'bar' | 'indeterminate';
}

export class Common extends Observable {
  public message: string;

  constructor() {
    super();
  }
}
