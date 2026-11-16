import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'co.linolife.aapp',
  appName: 'Lino Life',
  webDir: 'www',
  server: {
    url: 'https://linolife.co/aapp'
  },
  android: {
    // Native Maps eagerly initializes its
    // renderer on the Activity's main thread, delaying the first app frame.
    includePlugins: [
      '@capacitor/barcode-scanner',
      '@capacitor/camera',
      '@capacitor/geolocation',
      '@capacitor/push-notifications',
      '@capacitor/screen-orientation'
    ]
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'banner', 'list']
    }
  }
};

export default config;
