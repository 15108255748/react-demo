/*
 * @Descripttion: antd 配置
 * @version: 1.0
 * @Author: pdc
 * @Date: 2020-03-31 15:48:09
 * @LastEditors: pdc
 * @LastEditTime: 2020-03-31 16:07:44
 */
const { override, fixBabelImports, addLessLoader, addWebpackPlugin, addWebpackAlias  } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require('path');

module.exports = override(
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {}, // 此处修改主题色
  }),
  addWebpackAlias({'@': path.resolve('src')})
);