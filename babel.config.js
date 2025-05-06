module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      "module-resolver",
      {
        extensions: [".ios.js", ".android.js", ".ios.jsx", ".android.jsx", ".js", ".jsx", ".json", ".ts", ".tsx"],
        root: ["."],
        alias: {
          "@src": "./src/",
          "@R": "./src/assets/R.ts",
          "@util": "./src/utils/",
        },
      },
    ],
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      allowUndefined: true
    }]
  ],
};
