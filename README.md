# NSProgressHud


## Installation

```javascript
tns plugin add NSProgressHud
```

## API

```typescript
    import { NSProgressHud } from 'NSProgressHud';

    class ExampleUsage {
        progressHud: NSProgressHud;

        constructor() {
            this.progressHud = new NSProgressHud();
        }

        onClickLoading() {
            this.progressHud.showSuccess("Success");
        }

        onShowLoading() {
            this.progressHud.showLoading();
        }

        onShowError() {
            this.progressHud.showError("Error");
        }
    }

        // Example Typing
    showLoading(message?: String, options?: ColorOption);

    interface ColorOption {
        backgroundColor?: string;
        hudColor?: string;
        spinnerColor?: string;
        statusColor?: string;
    }


    // Example Usage of Options

    class ExampleWithOptions {
        constructor() {
            let progressHud = new NSProgressHud();
            const options  = {
                hudColor: '#000000',
                spinnerColor: '#FFFFFF'
            }

            progressHud.showLoading(null, options);

            setTimeout(() => {
                progressHud.dismiss();
            }, 5000)
        }
    }

```
## License

Apache License Version 2.0, January 2004
