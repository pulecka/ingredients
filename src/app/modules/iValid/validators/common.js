/**
 * Created by bionaut on 14/06/15.
 */

(function(){
  'use strict';
  angular.module('iValid.module')
    .config(Config);

  Config.$inject = ['iValidProvider'];
  function Config(iValidProvider) {

    iValidProvider.newValidator('maxLength', maxLength, 'This is too long!');
    iValidProvider.newValidator('minLength', minLength, 'Too short!');
    //iValidProvider.newValidator('required', required, 'This field is required!');

    function maxLength(value, max) {
      if (!value) {
        return true;
      }
      value = value.toString();
      return value.length <= max;
    }

    function minLength(value, min) {
      if (!value) {
        return true;
      }
      value = value.toString();
      return value.length >= min;
    }

    //function required(value) {
    //  if (!value) return false;
    //  value = value.toString();
    //  return value.length > 0;
    //}

  }
})();
