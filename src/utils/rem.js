/*
 * @Date: 2021-11-22 15:29:50
 * @Author: wwm
 * @LastEditTime: 2021-11-22 16:35:48
 * @LastEditors: wwm
 * @Description: 设置 rem 函数
 */

function setRem() {
  // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
  let htmlWidth = document.body.clientWidth;
  //得到html的Dom元素
  let htmlDom = document.getElementsByTagName('html')[0];
  //设置根元素字体大小
  htmlWidth / 10 > 102.4 ? (htmlDom.style.fontSize = '102.4px') : (htmlDom.style.fontSize = htmlWidth / 10 + 'px');
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function() {
  setRem();
};
