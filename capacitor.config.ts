import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "com.chinamart.app",
	appName: "ChinaMart",
	webDir: "dist",
	server: {
		androidScheme: "https",
	},
	plugins: {
		SplashScreen: {
			launchShowDuration: 2000,
			launchAutoHide: true,
			backgroundColor: "#e63946",
			androidSplashResourceName: "splash",
			androidScaleType: "CENTER_CROP",
			showSpinner: false,
			splashFullScreen: true,
			splashImmersive: true,
		},
	},
	android: {
		backgroundColor: "#ffffff",
		allowMixedContent: true,
		captureInput: true,
		webContentsDebuggingEnabled: false,
	},
	ios: {
		contentInset: "automatic",
		backgroundColor: "#ffffff",
		allowsLinkPreview: true,
		scrollEnabled: true,
	},
};

export default config;
