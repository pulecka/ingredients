/**
 * Created by bionaut on 14/06/15.
 */

(function() {

  'use strict';

  angular
    .module('iValid.module')
    .config(Config);

  Config.$inject = [
    'iValidProvider'
  ];
  function Config(iValidProvider) {

    iValidProvider.newValidator('maxLength', maxLength, 'This is too long!');
    iValidProvider.newValidator('minLength', minLength, 'Too short!');
    iValidProvider.newValidator('required', required, 'This field is required!');

    function maxLength(value, max) {
      if (value) {
        return value.toString().length <= max;
      } else {
        return true;
      }
    }

    function minLength(value, min) {
      if (value) {
        return value.toString().length >= min;
      } else {
        return true;
      }
    }

    function required(value) {
      if (value) {
        return value.toString().length > 0;
      } else {
        return false;
      }
    }
  }
})();
