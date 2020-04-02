/*
 * @Descripttion: antd 配置
 * @version: 1.0
 * @Author: pdc
 * @Date: 2020-03-31 15:48:09
 * @LastEditors: pdc
 * @LastEditTime: 2020-04-01 10:44:48
 */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin,
  addWebpackResolve,
  addWebpackAlias
} = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
const rewiredMap = () => config => {
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
  return config;
};


module.exports = override(
  rewiredMap(),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@layout-header-background': '#39393B',
      '@menu-dark-submenu-bg': '#242424'
    }, // 此处修改主题色 @
  }),
  addWebpackResolve({
    extensions: ['.js', '.jsx', '.json']
  }),
  addWebpackAlias({
    '@': resolve('src')
  })
);