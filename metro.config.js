const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Replace 'input' with the path to your global.css file from Step 3
module.exports = withNativeWind(config, { input: "./globals.css" });