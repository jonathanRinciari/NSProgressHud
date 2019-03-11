import { Component, OnInit } from '@angular/core';
import { NSProgressHud } from 'NSProgressHud';


@Component({
  moduleId: module.id,
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  private hud: NSProgressHud;
  constructor() {}

  ngOnInit() {
    this.hud = new NSProgressHud();
  }


  show(type: string) {
    if (type === 'indeterminate') {
      this.hud.showProgress(null, {backgroundOpacity: .6, backgroundColor: '#EFEE00', progressType: 'indeterminate', size: {height: 200, width: 300}});

      setTimeout(() => {
        this.hud.dismiss();
      }, 2000);
    }

    if (type === 'determinate') {
      this.hud.showProgress(null, {hudColor: '#EFEE00', progressType: 'determinate', size: {height: 100, width: 100}});
    }

    if (type === 'bar') {
      this.hud.showProgress(null, {hudColor: '#EFEE00', progressType: 'bar', size: {height: 100, width: 100}});
    }

    if (type === 'annular') {
      this.hud.showProgress(null, {hudColor: '#EFEE00', progressType: 'annular', size: {height: 100, width: 100}});
    }
  }
}