module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@components": "./src/components",
            "@components/*": ["src/components/*"],
            "@container/*": ["src/container/*"],
            "@elements/*": ["src/elements/*"],
            "@configs/*": ["src/configs/*"],
            "@navigation/*": ["src/navigation/*"],
            "@hooks/*": ["./src/hooks/*"],
            "@svg": "./src/svg",
            "@images/*": ["src/images/*"],
            "@configs": ["src/configs/index"],
            "@store/*": ["./src/store/*"],
          },
        },
      ],
    ],
  };
};
