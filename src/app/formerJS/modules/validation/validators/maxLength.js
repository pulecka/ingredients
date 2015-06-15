/**
 * Created by bionaut on 14/06/15.
 */

(function(){
  'use strict';
  angular.module('validation.module')
    .config(Config);

  Config.$inject = ['ValidationProvider'];
  function Config(ValidationProvider) {

    ValidationProvider.newValidator('maxLength', maxLength);

    function maxLength(value) {
      var max = 10;
      value = value + '';
      if (value.length > max) {
        return false;
      }else{
        return value;
      }
    }

  }
})();
