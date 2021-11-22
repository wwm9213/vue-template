/*
 * @Date: 2021-11-22 15:25:43
 * @Author: wwm
 * @LastEditTime: 2021-11-22 15:25:44
 * @LastEditors: wwm
 * @Description: 获取访问的设备信息
 */

export default () => {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  let isIphoneX = /iPhoneX/.test(u);
  let isWeixin = u.toLowerCase().indexOf('micromessenger') != -1;
  if (isWeixin) {
    return 'weixin';
  } else if (isAndroid) {
    return 'android';
  } else if (isIphoneX) {
    return 'iPhoneX';
  } else if (isiOS) {
    return 'ios';
  } else {
    return 'web';
  }
};
