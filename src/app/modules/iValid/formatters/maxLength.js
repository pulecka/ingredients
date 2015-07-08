(function(){
  'use strict';
  angular.module('iValid.module')
    .config(Config);

  Config.$inject = ['iValidProvider'];
  function Config(iValidProvider) {

    iValidProvider.newFormatter('maxLength', maxLength);

    function maxLength(value, max) {
      if (value == undefined) {
        return false;
      }

      value = value.toString();

      return (value.length <= max);
    }

  }
})();
