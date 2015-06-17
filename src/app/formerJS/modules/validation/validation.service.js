/**
 * Created by bionaut on 14/06/15.
 */

(function(){
  'use strict';
  angular.module('validation.module', [])
    .provider('Validation', Validation);

  Validation.$inject = [];
  function Validation() {

    var validators = {};

    return {
      newValidator: function (name, validator, errorMessage) {
        validators[name] = validator;
      },

      $get:[function () {
        return validators;
      }]
    };
  }

})();
