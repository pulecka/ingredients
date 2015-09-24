(function(){
  'use strict';
  angular.module('iUtils.module')
    .service('iUtils', iUtils);

  function iUtils() {
    return{
      string2Object: string2Object,
      deepFind: deepFind,
      objectByString: objectByString,
      arrayify: arrayify
    };
  }

  function string2Object(value) {
    return value.split('|').reduce(function (accumulator, val) {
      var pair = val.trim().split(':');
      accumulator[pair[0]] = pair[1] || null;
      return accumulator;
    }, {});

  }
    // use string to find
    function deepFind(obj, path) {
      var paths = path.split('.');
      var current = obj;
      var i;

      for (i = 0; i < paths.length; ++i) {
        if (current[paths[i]] == undefined) {
          return undefined;
        } else {
          current = current[paths[i]];
        }
      }
      return current;
    }

  function objectByString(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1');
    s = s.replace(/^\./, '');
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in o) {
        o = o[k];
      } else {
        return;
      }
    }
    return o;
  }

  function arrayify(object) {
    if (angular.isArray(object)) {
      return object;
    } else if (angular.isObject(object)) {
      return Object.keys(object).map(function(key) {
        return object[key];
      });
    }
  }

})();
