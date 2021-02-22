// const {
//   override,
//   fixBabelImports,
//   addLessLoader,
//   addWebpackAlias,
// } = require("customize-cra");
// const theme = require("./themes/ant-nassak-theme");
// const path = require("path");

// module.exports = override(
//   fixBabelImports("import", {
//     libraryName: "antd",
//     libraryDirectory: "es",
//     style: true,
//   }),
//   addLessLoader({
//     javascriptEnabled: true,
//     modifyVars: theme,
//   }),
//   addWebpackAlias({
//     ["@components"]: path.resolve(__dirname, "./components"),
//   })
// );

// const { alias } = require("react-app-rewire-alias");

// module.exports = function override(config) {
//   alias({
//     "@components": "src/components",
//     "@assets": "src/assets",
//   })(config);

//   return config;
// };
