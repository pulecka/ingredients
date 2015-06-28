/**
 * Created by bionaut on 14/06/15.
 */

(function(){
  'use strict';
  angular.module('iValid.module', [])
    .provider('iValid', iValid);

  iValid.$inject = [];
  function iValid() {

    var validators = {};
    var formatters = {};

    return {
      newValidator: function (name, validator, errorMessage) {
        validators[name] = {
          definition: validator,
          message: errorMessage
        }
      },
      newFormatter: function (name, formmater) {
        formatters[name] = {
          definition: validator,
          message: errorMessage
        }
      },

      $get:[function () {
        return {
          validators: validators,
          formatters: formatters
        }
      }]
    };
  }

})();
