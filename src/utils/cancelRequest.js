/*
 * @Date: 2021-11-22 14:17:12
 * @Author: wwm
 * @LastEditTime: 2021-11-22 14:17:13
 * @LastEditors: wwm
 * @Description: 每次切换页面取消上一个页面的所有请求
 */

window._axiosPromiseArr = [];
export default () => {
  window._axiosPromiseArr.forEach((ele, index) => {
    ele.cancel('cancel request');
    delete window._axiosPromiseArr[index];
  });
};
