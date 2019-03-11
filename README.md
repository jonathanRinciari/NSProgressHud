# NSProgressHud


## Installation

```javascript
tns plugin add NSProgressHud
```

## API

```typescript
    import { NSProgressHud } from 'NSProgressHud';

export class DemoComponent implements OnInit {
    private hud: NSProgressHud;
    constructor() {}

    ngOnInit() {
        this.hud = new NSProgressHud();
    }


    show(type: string) {
        if (type === 'indeterminate') {
        this.hud.showProgress(null, { progressType: 'indeterminate', size: {height: 150, width: 150}});

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

    showWithTimer() {
        let progress = 0;
        const taskWithTime = new BehaviorSubject({progress});
        this.hud.showProgress('Loading', {progressType: 'annular', size: {height: 150, width: 150}}. taskWithTime);
        setTimeout(() => {
            progress += 1;
            taskWithTime.next({progress})
        }, 1000)
    }
}

        // Example Typing
    showProgress(message?: String, options?: ColorOption, progressStatus?: BehaviorSubject<{progress: number}>);

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
```
## License

Apache License Version 2.0, January 2004
