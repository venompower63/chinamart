import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "com.chinahub.app",
	appName: "ChinaHub",
	webDir: "dist",
	server: {
		androidScheme: "https",
	},
	plugins: {
		SplashScreen: {
			launchShowDuration: 2000,
			launchAutoHide: true,
			backgroundColor: "#1a1a2e",
			androidSplashResourceName: "splash",
			androidScaleType: "CENTER_CROP",
			showSpinner: false,
			splashFullScreen: true,
			splashImmersive: true,
		},
	},
	android: {
		backgroundColor: "#1a1a2e",
		allowMixedContent: true,
		captureInput: true,
		webContentsDebuggingEnabled: false,
	},
	ios: {
		contentInset: "automatic",
		backgroundColor: "#1a1a2e",
		allowsLinkPreview: true,
		scrollEnabled: true,
	},
};

export default config;
