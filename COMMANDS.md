# Development Commands Cheat Sheet

## 🚀 Start Development Server

npm start

## 📱 Run on Specific Platform

npm run android # Android
npm run ios # iOS (macOS only)
npm run web # Web browser

## 🧹 Clear Cache

npx expo start -c

## 📦 Reinstall Dependencies

rm -rf node_modules
npm install

## 🔄 Reset Metro Bundler

npx react-native start --reset-cache

## 📊 Check Bundle Size

npx expo export

## 🐛 Debug Menu

- Android: Press Ctrl+M or shake device
- iOS: Press Cmd+D or shake device

## 📱 Reload App

- Android: Double tap R
- iOS: Cmd+R

## 🔍 Inspect Element

- Android: Ctrl+M → "Toggle Inspector"
- iOS: Cmd+D → "Toggle Inspector"

## 📝 View Logs

npx react-native log-android # Android logs
npx react-native log-ios # iOS logs

## 🏗️ Build for Production

npx expo build:android
npx expo build:ios

## 📲 Install on Device

npx expo install:android
npx expo install:ios

## 🧪 Run Tests (when added)

npm test

## 📚 View Expo Docs

npx expo -h
