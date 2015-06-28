(function(){
  'use strict';
  angular.module('iUtils.module')
    .service('iUtils', iUtils);

  function iUtils() {
    return{
      string2Object: string2Object
    };
  }

  function string2Object(value) {
    return value.split('|').reduce(function(accumulator, val){
      var pair = val.trim().split(':');
      accumulator[pair[0]] = pair[1] || null;
      return accumulator;
    }, {});


  }

})();
