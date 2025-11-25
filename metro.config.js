// // metro.config.js
// const { getDefaultConfig } = require('expo/metro-config');
// const { withNativeWind } = require('nativewind/metro');

// // Get default Expo config
// const defaultConfig = getDefaultConfig(__dirname);

// // --- SVG SUPPORT (react-native-svg-transformer) ---
// defaultConfig.transformer.babelTransformerPath = require.resolve(
//   'react-native-svg-transformer/expo' // Use the official Expo-compatible version
// );

// defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
//   (ext) => ext !== 'svg'
// );
// defaultConfig.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, 'svg'];

// // --- Apply NativeWind on top ---
// module.exports = withNativeWind(defaultConfig, { input: './app/globals.css' });


// metro.config.js   ← put this file in your project root
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname);

// ──────────────────────────────────────────────
//  SVG SUPPORT – this is the only correct way in Expo 2024–2025
// ──────────────────────────────────────────────
defaultConfig.transformer.babelTransformerPath = require.resolve(
  'react-native-svg-transformer/expo'   // ← official Expo-compatible version
);

defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
  (ext) => ext !== 'svg'
);
defaultConfig.resolver.sourceExts = [
  ...defaultConfig.resolver.sourceExts,
  'svg',
];

// ──────────────────────────────────────────────
//  NativeWind on top (Tailwind for React Native)
// ──────────────────────────────────────────────
module.exports = withNativeWind(defaultConfig, {
  input: './app/globals.css',   // or wherever your Tailwind CSS entry is
});