import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.72dff83101464d2f9938054c7991bffa',
  appName: 'Maria Callejas Real Estate',
  webDir: 'dist',
  server: {
    url: 'https://72dff831-0146-4d2f-9938-054c7991bffa.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#1e40af",
      showSpinner: true,
      spinnerColor: "#ffffff"
    }
  }
};

export default config;