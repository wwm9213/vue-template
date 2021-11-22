/*
 * @Date: 2021-11-22 15:35:08
 * @Author: wwm
 * @LastEditTime: 2021-11-22 15:38:46
 * @LastEditors: wwm
 * @Description: 辅助函数
 */

/**
 * 格式化时间
 * @param date 时间Date类型的对象或者时间戳
 * @param fmt 格式化需要的格式
 * @description 例如：yyyy-MM-dd hh:mm:ss
 */
export function dateFormat(date, fmt) {
  date = new Date(date);
  let o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return fmt;
}

export function countDownFormat(date, fmt) {
  let stamp = +new Date(date);
  // 相差天数
  let $day = Math.floor(stamp / 86400000);
  // 相差小时数
  stamp %= 86400000;
  let $hour = Math.floor(stamp / 3600000);
  // 相差分钟数
  stamp %= 3600000;
  let $min = Math.floor(stamp / 60000);
  // 相差秒数
  stamp %= 60000;
  let $sec = Math.floor(stamp / 1000);
  // 相差毫秒数
  stamp %= 1000;
  let $ms = Math.floor(stamp);

  $hour = String($hour).length === 1 ? `0${$hour}` : $hour;
  $min = String($min).length === 1 ? `0${$min}` : $min;
  $sec = String($sec).length === 1 ? `0${$sec}` : $sec;
  let o = {
    'd+': $day, //日
    'h+': $hour, //小时
    'm+': $min, //分
    's+': $sec, //秒
    S: $ms //毫秒
  };
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return fmt;
}

/**
 * 该实例返回当前页面所在的环境
 * @example: 'wx','ios','android','qq','weibo'
 * @description: new JudgeAgent().pageEnv
 */
export class JudgeAgent {
  constructor() {
    this.pageEnv = '';
    this.versions = {};
    this.judgeEnv();
  }
  getVersion() {
    const u = navigator.userAgent;
    return {
      // 移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('bearmusic') > -1, //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      isTablet:
        u.indexOf('Macintosh') > -1 ||
        /(?:iPad|PlayBook)/.test(u) ||
        (/(?:Android)/.test(u) && !/(?:Mobile)/.test(u)) ||
        (/(?:Firefox)/.test(u) && /(?:Tablet)/.test(u))
    };
  }
  judgeEnv() {
    const versions = this.getVersion();
    this.versions = versions;
    if (versions.mobile) {
      var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
      if (ua.indexOf('bearmusic') > -1 || ua.indexOf('ArtAiClass') > -1 || ua.indexOf('artaiclass') > -1) {
        this.pageEnv = 'app';
      } else if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        this.pageEnv = 'wx';
      } else if (versions.ios) {
        // 是否在IOS浏览器打开
        this.pageEnv = 'ios';
      } else if (versions.android) {
        // 是否在安卓浏览器打开
        this.pageEnv = 'android';
      }
      // if (ua.match(/WeiBo/i) == "weibo") { // 在新浪微博客户端打开
      //   this.pageEnv = 'weibo'
      // }
      // if (ua.match(/QQ/i) == "qq") { // 在QQ空间打开
      //   this.pageEnv = 'qq'
      // }
      // if (versions.ios) { // 是否在IOS浏览器打开
      //   this.pageEnv = 'ios'
      // }
      // if(versions.android){ // 是否在安卓浏览器打开
      //   this.pageEnv = 'android'
      // }
    } else {
      this.pageEnv = 'pc';
    }
  }
}

export function SchemaToApp(url, method) {
  window.location.href = url;
  window.bear = method;
}

/**
 * 判断是否安装app
 * @url ios,android 提供（打开app的链接）
 * @callback （未安装app的回调）
 * */
export function openApp(url, callback) {
  let hasApp = true,
    t = 1000,
    t1 = Date.now(),
    ifr = document.createElement('iframe');
  setTimeout(function() {
    if (!hasApp) {
      callback && callback();
    }
    document.body.removeChild(ifr);
  }, 2000);

  ifr.setAttribute('src', url);
  ifr.setAttribute('style', 'display:none');
  document.body.appendChild(ifr);

  setTimeout(function() {
    //启动app时间较长处理
    let t2 = Date.now();
    if (t2 - t1 < t + 100) {
      hasApp = false;
    }
  }, t);
}

/**
 * @description base64转blob
 * @param urlData base64编码
 */
export function convertBase64UrlToBlob(urlData) {
  let arr = urlData.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

// 判断url是否有某参数 有赋值替换，没有直接赋值
export function changeUrl(base, find, value) {
  var offset = base.indexOf(find);
  var rr = '';

  if (offset < 0) {
    if (base.indexOf('?') < 0) {
      base += '?';
    } else {
      base += '&';
    }
    base += find + '=' + value;
  } else {
    let left = base.substr(0, offset);
    let right = base.substr(offset);
    let index = right.indexOf('&');
    if (index >= 0) {
      rr = right.substr(index);
    }
    base = left + find + '=' + value + rr;
  }
  return base;
}
