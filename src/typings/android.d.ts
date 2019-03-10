declare module com {
	export module kaopiz {
		export module kprogresshud {
			export class AnnularView implements com.kaopiz.kprogresshud.Determinate {
				public static class: java.lang.Class<com.kaopiz.kprogresshud.AnnularView>;
				public setProgress(param0: number): void;
				public setMax(param0: number): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onMeasure(param0: number, param1: number): void;
			}
		}
	}
}

declare module com {
	export module kaopiz {
		export module kprogresshud {
			export class BackgroundLayout {
				public static class: java.lang.Class<com.kaopiz.kprogresshud.BackgroundLayout>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public setCornerRadius(param0: number): void;
				public setBaseColor(param0: number): void;
			}
		}
	}
}

declare module com {
	export module kaopiz {
		export module kprogresshud {
			export class BarView implements com.kaopiz.kprogresshud.Determinate {
				public static class: java.lang.Class<com.kaopiz.kprogresshud.BarView>;
				public setProgress(param0: number): void;
				public setMax(param0: number): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onMeasure(param0: number, param1: number): void;
			}
		}
	}
}

declare module com {
	export module kaopiz {
		export module kprogresshud {
			export class BuildConfig {
				public static class: java.lang.Class<com.kaopiz.kprogresshud.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module kaopiz {
		export module kprogresshud {
			export class Determinate {
				public static class: java.lang.Class<com.kaopiz.kprogresshud.Determinate>;
				/**
				 * Constructs a new instance of the com.kaopiz.kprogresshud.Determinate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setMax(param0: number): void;
					setProgress(param0: number): void;
				});
				public constructor();
				public setProgress(param0: number): void;
				public setMax(param0: number): void;
			}
		}
	}
}

declare module com {
	export module kaopiz {
		export module kprogresshud {
			export class Helper {
				public static class: java.lang.Class<com.kaopiz.kprogresshud.Helper>;
				public static dpToPixel(param0: number, param1: globalAndroid.content.Context): number;
			}
		}
	}
}

declare module com {
	export module kaopiz {
		export module kprogresshud {
			export class Indeterminate {
				public static class: java.lang.Class<com.kaopiz.kprogresshud.Indeterminate>;
				/**
				 * Constructs a new instance of the com.kaopiz.kprogresshud.Indeterminate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setAnimationSpeed(param0: number): void;
				});
				public constructor();
				public setAnimationSpeed(param0: number): void;
			}
		}
	}
}

declare module com {
	export module kaopiz {
		export module kprogresshud {
			export class KProgressHUD {
				public static class: java.lang.Class<com.kaopiz.kprogresshud.KProgressHUD>;
				public setStyle(param0: com.kaopiz.kprogresshud.KProgressHUD.Style): com.kaopiz.kprogresshud.KProgressHUD;
				public setAnimationSpeed(param0: number): com.kaopiz.kprogresshud.KProgressHUD;
				public setCustomView(param0: globalAndroid.view.View): com.kaopiz.kprogresshud.KProgressHUD;
				public setBackgroundColor(param0: number): com.kaopiz.kprogresshud.KProgressHUD;
				public static create(param0: globalAndroid.content.Context, param1: com.kaopiz.kprogresshud.KProgressHUD.Style): com.kaopiz.kprogresshud.KProgressHUD;
				public setLabel(param0: string, param1: number): com.kaopiz.kprogresshud.KProgressHUD;
				public static create(param0: globalAndroid.content.Context): com.kaopiz.kprogresshud.KProgressHUD;
				public setDimAmount(param0: number): com.kaopiz.kprogresshud.KProgressHUD;
				public setSize(param0: number, param1: number): com.kaopiz.kprogresshud.KProgressHUD;
				public setAutoDismiss(param0: boolean): com.kaopiz.kprogresshud.KProgressHUD;
				public setCancellable(param0: boolean): com.kaopiz.kprogresshud.KProgressHUD;
				public dismiss(): void;
				public setDetailsLabel(param0: string, param1: number): com.kaopiz.kprogresshud.KProgressHUD;
				public setProgress(param0: number): void;
				public setLabel(param0: string): com.kaopiz.kprogresshud.KProgressHUD;
				public isShowing(): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public setDetailsLabel(param0: string): com.kaopiz.kprogresshud.KProgressHUD;
				public show(): com.kaopiz.kprogresshud.KProgressHUD;
				public setWindowColor(param0: number): com.kaopiz.kprogresshud.KProgressHUD;
				public setCancellable(param0: globalAndroid.content.DialogInterface.OnCancelListener): com.kaopiz.kprogresshud.KProgressHUD;
				public setGraceTime(param0: number): com.kaopiz.kprogresshud.KProgressHUD;
				public setCornerRadius(param0: number): com.kaopiz.kprogresshud.KProgressHUD;
				public setMaxProgress(param0: number): com.kaopiz.kprogresshud.KProgressHUD;
			}
			export module KProgressHUD {
				export class ProgressDialog {
					public static class: java.lang.Class<com.kaopiz.kprogresshud.KProgressHUD.ProgressDialog>;
					public setView(param0: globalAndroid.view.View): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor(param0: com.kaopiz.kprogresshud.KProgressHUD, param1: globalAndroid.content.Context);
					public setDetailsLabel(param0: string): void;
					public setLabel(param0: string, param1: number): void;
					public setSize(param0: number, param1: number): void;
					public setLabel(param0: string): void;
					public setDetailsLabel(param0: string, param1: number): void;
					public setProgress(param0: number): void;
				}
				export class Style {
					public static class: java.lang.Class<com.kaopiz.kprogresshud.KProgressHUD.Style>;
					public static SPIN_INDETERMINATE: com.kaopiz.kprogresshud.KProgressHUD.Style;
					public static PIE_DETERMINATE: com.kaopiz.kprogresshud.KProgressHUD.Style;
					public static ANNULAR_DETERMINATE: com.kaopiz.kprogresshud.KProgressHUD.Style;
					public static BAR_DETERMINATE: com.kaopiz.kprogresshud.KProgressHUD.Style;
					public static values(): native.Array<com.kaopiz.kprogresshud.KProgressHUD.Style>;
					public static valueOf(param0: string): com.kaopiz.kprogresshud.KProgressHUD.Style;
				}
			}
		}
	}
}

declare module com {
	export module kaopiz {
		export module kprogresshud {
			export class PieView implements com.kaopiz.kprogresshud.Determinate {
				public static class: java.lang.Class<com.kaopiz.kprogresshud.PieView>;
				public setProgress(param0: number): void;
				public setMax(param0: number): void;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onMeasure(param0: number, param1: number): void;
			}
		}
	}
}

declare module com {
	export module kaopiz {
		export module kprogresshud {
			export class SpinView implements com.kaopiz.kprogresshud.Indeterminate {
				public static class: java.lang.Class<com.kaopiz.kprogresshud.SpinView>;
				public onDraw(param0: globalAndroid.graphics.Canvas): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setAnimationSpeed(param0: number): void;
				public constructor(param0: globalAndroid.content.Context);
				public onDetachedFromWindow(): void;
				public onAttachedToWindow(): void;
			}
		}
	}
}

//Generics information:

