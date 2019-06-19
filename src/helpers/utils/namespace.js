/*
* @Author: lifangfang
* @Date:   2019-01-18 14:51:05
* @Last Modified by:   lifangfang
* @Last Modified time: 2019-01-18 14:51:31
*/
if (!window.ekwingNameSpace) window.ekwingNameSpace = {};
export default {
  set: function (key, value) {
    window.ekwingNameSpace[key] = value;
    return window.ekwingNameSpace[key];
  },
  get: function (key) {
    return window.ekwingNameSpace[key];
  },
  remove: function (key) {
    return delete window.ekwingNameSpace[key];
  }
};
