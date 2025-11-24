# Installation Instructions for MatchSphere

Follow these step-by-step instructions to get the MatchSphere app running on your machine.

## Prerequisites

Before you begin, ensure you have the following installed on your computer:

1. **Node.js** (v16 or higher)

   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)

   - Verify installation: `npm --version`

3. **Expo Go App** (for testing on your phone)
   - iOS: Download from App Store
   - Android: Download from Google Play Store

## Step-by-Step Installation

### Step 1: Open Terminal/Command Prompt

Open PowerShell or Command Prompt and navigate to your project directory:

```powershell
cd "d:\ \Lab Assignment"
```

### Step 2: Install All Dependencies

Run the following command to install all required packages:

```powershell
npm install
```

This will install:

- Expo and React Native
- React Navigation
- Redux Toolkit
- NativeWind
- And all other required dependencies

### Step 3: Install Additional Dependencies

Install some additional required packages:

```powershell
npm install date-fns @react-native-community/netinfo
```

### Step 4: Create Required Font Files

The app uses custom fonts. You have two options:

**Option A: Use System Fonts (Temporary)**
Skip this step for now and the app will use default fonts.

**Option B: Add Inter Fonts (Recommended)**

1. Download Inter font from: https://fonts.google.com/specimen/Inter
2. Create the fonts directory:
   ```powershell
   mkdir -p assets/fonts
   ```
3. Place these files in `assets/fonts/`:
   - Inter-Regular.ttf
   - Inter-Medium.ttf
   - Inter-Bold.ttf

### Step 5: Create Placeholder Images

Create placeholder image files (you can add real images later):

```powershell
# Create directories
mkdir -p assets/images
mkdir -p assets/images/icons

# You can add your own images or use placeholders
# Required files:
# - assets/images/logo.png
# - assets/images/splash.png
# - assets/images/onboarding.png
```

For now, you can skip this step as the app will work without custom images.

### Step 6: Start the Development Server

Start Expo:

```powershell
npm start
```

This will:

- Start the Metro bundler
- Open a browser window with Expo Dev Tools
- Display a QR code in the terminal

### Step 7: Run the App

You have several options:

**Option A: Run on Your Phone**

1. Open Expo Go app on your phone
2. Scan the QR code displayed in the terminal
3. Wait for the app to load

**Option B: Run on Android Emulator**

1. Ensure Android Studio and an emulator are set up
2. Press `a` in the terminal where Expo is running

**Option C: Run on iOS Simulator (macOS only)**

1. Ensure Xcode is installed
2. Press `i` in the terminal where Expo is running

**Option D: Run in Web Browser**

1. Press `w` in the terminal where Expo is running

## Testing the App

Once the app loads:

1. **Splash Screen**: You'll see the MatchSphere splash screen
2. **Onboarding**: Tap "Get Started"
3. **Login**: Use these test credentials:
   - Username: `emilys`
   - Password: `emilyspass`
4. **Main App**: Explore the 6 tabs:
   - Home (today's matches)
   - Leagues
   - Teams
   - Players
   - Favourites
   - Profile

## Common Issues and Solutions

### Issue 1: Metro Bundler Errors

**Solution**: Clear the cache and restart

```powershell
npx expo start -c
```

### Issue 2: Font Loading Errors

**Solution**: Comment out font loading in App.tsx temporarily:

1. Open `App.tsx`
2. Comment out the Font.loadAsync section
3. The app will use system fonts

### Issue 3: Dependencies Installation Failed

**Solution**: Clear and reinstall

```powershell
rm -rf node_modules
npm install
```

### Issue 4: "Cannot find module" Errors

**Solution**: Ensure all dependencies are installed

```powershell
npm install
npm install date-fns @react-native-community/netinfo
```

### Issue 5: TypeScript Errors

**Solution**: These are expected during development. Run the app and Expo will auto-generate type definitions:

```powershell
npm start
```

## Verifying Installation

To verify everything is working:

1. ✅ Terminal shows "Metro waiting on..."
2. ✅ QR code is displayed
3. ✅ No red error messages
4. ✅ App loads on your device/emulator
5. ✅ You can navigate through the onboarding and login

## Next Steps

After successful installation:

1. **Explore the App**: Navigate through all tabs
2. **Add Favorites**: Mark teams, players, or matches as favorites
3. **Toggle Theme**: Go to Profile and switch between light/dark mode
4. **Search Players**: Use the Players tab to search
5. **View Matches**: Check today's matches on the Home tab

## Getting Help

If you encounter issues:

1. Check the error message in the terminal
2. Look for red error screens on your device
3. Review the troubleshooting section above
4. Ensure all prerequisites are installed correctly

## Development Mode

The app runs in development mode with:

- Hot reloading (changes reflect immediately)
- Error overlays
- Performance monitoring
- Debug menu (shake device or press Ctrl+M on Android, Cmd+D on iOS)

---

**Congratulations! MatchSphere should now be running on your device!** 🎉
