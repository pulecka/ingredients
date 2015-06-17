/**
 * Created by bionaut on 14/06/15.
 */

(function(){
  'use strict';
  angular.module('validation.module')
    .config(Config);

  Config.$inject = ['ValidationProvider'];
  function Config(ValidationProvider) {

    ValidationProvider.newValidator('maxLength', maxLength, 'This is too long');
    ValidationProvider.newValidator('minLength', minLength);

    function maxLength(value, max) {
      if (!value) return void 0;
      return value.length <= max;
    }

    function minLength(value, min) {
      if (!value) return void 0;
      return value.length >= min;
    }

  }
})();
