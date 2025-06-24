# SD Fight Network - Progressive Web App (PWA)

This application has been converted into a Progressive Web App (PWA) that can be installed on mobile devices, including iPhones.

## Features

### 🚀 PWA Capabilities
- **Installable**: Users can install the app on their home screen
- **Offline Support**: Basic offline functionality with service worker caching
- **App-like Experience**: Runs in standalone mode without browser UI
- **iOS Support**: Optimized for iPhone with proper meta tags and icons

### 📱 Installation Instructions

#### For iPhone Users:
1. Open Safari browser on your iPhone
2. Navigate to the SD Fight Network website
3. Tap the **Share** button (square with arrow pointing up)
4. Scroll down and tap **"Add to Home Screen"**
5. Tap **"Add"** to install the app
6. The app will now appear on your home screen like a native app

#### For Android Users:
1. Open Chrome browser on your Android device
2. Navigate to the SD Fight Network website
3. You'll see an install prompt banner at the bottom
4. Tap **"Install"** to add the app to your home screen
5. The app will install and appear in your app drawer

#### For Desktop Users:
1. Open Chrome browser on your computer
2. Navigate to the SD Fight Network website
3. Look for the install icon in the address bar (usually a + icon)
4. Click the install icon and follow the prompts
5. The app will be installed and can be launched from your desktop

## Technical Implementation

### Files Added/Modified:

#### New Files:
- `public/manifest.json` - Web app manifest defining PWA properties
- `public/sw.js` - Service worker for offline functionality
- `src/shared/PWAInstallButton.jsx` - Install prompt component
- `src/shared/PWAInstallButton.scss` - Styles for install button
- `src/shared/OfflineIndicator.jsx` - Offline status indicator
- `src/shared/OfflineIndicator.scss` - Styles for offline indicator
- `src/shared/usePWA.js` - Custom hook for PWA functionality

#### Modified Files:
- `index.html` - Added PWA meta tags and service worker registration
- `src/App.jsx` - Added PWA components
- `vite.config.js` - Updated for PWA build optimization

### PWA Requirements Met:

✅ **Web App Manifest** - Defines app name, icons, colors, and display mode
✅ **Service Worker** - Provides offline functionality and caching
✅ **HTTPS** - Required for PWA functionality (when deployed)
✅ **Responsive Design** - Works on all device sizes
✅ **Install Prompt** - Automatic install button when conditions are met
✅ **iOS Meta Tags** - Proper Apple-specific meta tags for iPhone support

## Development

### Local Development:
```bash
npm run dev
```

### Building for Production:
```bash
npm run build
```

### Testing PWA Features:
1. Build the project: `npm run build`
2. Serve the built files: `npm run preview`
3. Open Chrome DevTools
4. Go to Application tab
5. Check "Manifest" and "Service Workers" sections
6. Test install prompt and offline functionality

## Browser Support

- **Chrome**: Full PWA support with install prompt
- **Safari (iOS)**: Manual install via "Add to Home Screen"
- **Firefox**: Full PWA support
- **Edge**: Full PWA support

## Notes

- The PWA install prompt will only appear when the app meets certain criteria (HTTPS, valid manifest, etc.)
- On iOS, users must manually add the app to their home screen using Safari's share menu
- The service worker provides basic offline caching for core app files
- The app will work offline for cached content

## Troubleshooting

If the install prompt doesn't appear:
1. Ensure you're using HTTPS (required for PWA)
2. Check that the manifest.json is accessible
3. Verify the service worker is registered
4. Clear browser cache and try again
5. Check browser console for any errors

For iOS users who can't install:
1. Make sure you're using Safari browser
2. Try refreshing the page
3. Check that the site is loaded completely
4. Ensure you're not in private browsing mode 