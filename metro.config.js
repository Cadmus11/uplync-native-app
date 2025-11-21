const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const { transformer, resolver } = require('react-native-svg-transformer');

// Get the default Expo Metro config
const defaultConfig = getDefaultConfig(__dirname);

// Merge react-native-svg transformer and resolver
defaultConfig.transformer = {
  ...defaultConfig.transformer,
  ...transformer,
};

defaultConfig.resolver = {
  ...defaultConfig.resolver,
  ...resolver,
  // Ensure .svg is recognized as an asset source (optional but recommended)
  assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
};

// Apply NativeWind on top of the SVG-enabled config
module.exports = withNativeWind(defaultConfig, { input: './app/globals.css' });