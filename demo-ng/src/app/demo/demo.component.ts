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
      this.hud.showProgress(null, {hudColor: '#080452', progressType: 'indeterminate', size: {height: 150, width: 150}});

      setTimeout(() => {
        this.hud.dismiss();
      }, 2000);
    }

    if (type === 'determinate') {
      this.hud.showProgress(null, {hudColor: '#080452', progressType: 'determinate', size: {height: 150, width: 150}});
    }

    if (type === 'bar') {
      this.hud.showProgress(null, {hudColor: '#080452', progressType: 'bar', size: {height: 150, width: 150}});
    }

    if (type === 'annular') {
      this.hud.showProgress(null, {hudColor: '#080452', progressType: 'annular', size: {height: 150, width: 150}});
    }
  }
}