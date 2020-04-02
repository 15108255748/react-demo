/*
 * @Descripttion:  通用工具类 挂载实例对象
 * @version: 1.0
 * @Author: pdc
 * @Date: 2020-03-31 15:21:21
 * @LastEditors: pdc
 * @LastEditTime: 2020-04-02 11:40:00
 */
import {
  message
} from 'antd';


message.config({
  top: 100,
  duration: 2,
  maxCount: 3,
});

/* 消息提示 */
export const msSuccess = (content = '成功!') => {
  message.success(content);
};

export const msError = (content = '失败!') => {
  message.error(content);
};

export const msWarning = (content = '警告!') => {
  message.warning(content);
};

export const msLoad = (content = '加载中...', callback = msSuccess()) => {
  message.loading(content, 2.5).then(() => callback());
};

export const initProps = (value, props) => {
  let item = {};
  for (let i in props) {
    item[i] = value[props[i]] || (i === 'children' ? [] : '');
  }
  return item;
}