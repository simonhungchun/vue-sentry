const { defineConfig } = require("@vue/cli-service");
const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: "source-map",
    plugins: [
      sentryWebpackPlugin({
        org: "hopu",
        project: "vue-sentry",
        authToken:
          "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",
      }),
    ],
  },
});
