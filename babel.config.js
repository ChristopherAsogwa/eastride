module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            // Order matters! Add the jsxImportSource here:
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],
        plugins: [
            // Required for NativeWind v4 animations
            "react-native-reanimated/plugin",
        ],
    };
};