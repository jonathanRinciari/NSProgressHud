
declare class ProgressHUD extends UIView {

	static alloc(): ProgressHUD; // inherited from NSObject

	static appearance(): ProgressHUD; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ProgressHUD; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ProgressHUD; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ProgressHUD; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ProgressHUD; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): ProgressHUD; // inherited from UIAppearance

	static backgroundColor(color: UIColor): void;

	static dismiss(): void;

	static hudColor(color: UIColor): void;

	static imageError(image: UIImage): void;

	static imageSuccess(image: UIImage): void;

	static new(): ProgressHUD; // inherited from NSObject

	static show(): void;

	static showError(): void;

	static showErrorInteraction(status: string, interaction: boolean): void;

	static showInteraction(status: string, interaction: boolean): void;

	static showSuccess(): void;

	static showSuccessInteraction(status: string, interaction: boolean): void;

	static spinnerColor(color: UIColor): void;

	static statusColor(color: UIColor): void;

	static statusFont(font: UIFont): void;

	hudColor: UIColor;

	imageError: UIImage;

	imageSuccess: UIImage;

	spinnerColor: UIColor;

	statusColor: UIColor;

	statusFont: UIFont;
}

declare var ProgressHUDVersionNumber: number;

declare var ProgressHUDVersionString: interop.Reference<number>;
