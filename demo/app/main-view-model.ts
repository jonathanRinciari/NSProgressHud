import { Observable } from 'tns-core-modules/data/observable';
import { NSProgressHud } from 'nativescript-NSProgressHud';

export class HelloWorldModel extends Observable {
  public message: string;
  private nSProgressHud: NSProgressHud;

  constructor() {
    super();

    this.nSProgressHud = new NSProgressHud();
    this.message = this.nSProgressHud.message;
  }
}
