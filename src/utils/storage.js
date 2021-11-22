/*
 * @Date: 2021-11-22 15:32:22
 * @Author: wwm
 * @LastEditTime: 2021-11-22 15:32:22
 * @LastEditors: wwm
 * @Description: 设置存储
 */

import storage from 'store';
import expirePlugin from 'store/plugins/expire';

var keyPre = 'custom_session_';
var seesionPlugin = function() {
  var sessionStore = this.createStore(this.storage, [expirePlugin], keyPre);
  return {
    setSession: function(_, key, value) {
      sessionStore.set(key, value, Date.now() + 30 * 60 * 1000);
      return _();
    },
    getSession: function(_, key) {
      return sessionStore.get(key);
    },
    removeSession: function(_, key) {
      sessionStore.remove(key);
      return _();
    },
    getExpiration: function(_, key) {
      return sessionStore.getExpiration(key);
    },
    clearSeesion: function() {
      sessionStore.clearAll();
    }
  };
};

storage.addPlugin(seesionPlugin);

export default storage;
