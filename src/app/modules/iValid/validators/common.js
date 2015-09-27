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
    iValidProvider.newValidator('match', match, 'This should match the other field!', true);
    iValidProvider.newValidator('unique', unique, 'This should be different from the other field!', true);

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

    function match(value, model, scope) {
      var matchingValue = model(scope)
      if (value && matchingValue) {
        return value === matchingValue;
      } else {
        return true;
      }
    }

    function unique(value, model, scope) {
      var uniqueValue = model(scope);
      if (value && uniqueValue) {
        return value !== uniqueValue;
      } else {
        return true;
      }
    }
  }
})();
