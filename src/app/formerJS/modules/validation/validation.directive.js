(function(){
  'use strict';
  angular.module('validation.module')
    .directive('validate', Validate);

  Validate.$inject = ['Validation'];
  function Validate(Validation) {
    return{
      restrict: 'A',
      require: 'ngModel',
      link: LinkFn
    };

    function LinkFn(scope, element, attrs, ngModel) {

      if (attrs.validate.length > 0) {
        attrs.validate = attrs.validate.replace(/\s+/g, '');

        var validationObject = attrs.validate
          .split('|').reduce(function(accumulator, val){
            var pair = val.trim().split(':');
            accumulator[pair[0]] = pair[1] || null;
            return accumulator;
          }, {});

      angular.forEach(validationObject, function (rule, key) {
        ngModel.$validators[key] = function (value) {
            return Validation[key].definition(value, rule);
        }
      });
        // adds error object to scope of the field
        scope.errors = ngModel.$error;
        scope.checkErrors= function () {
          var obj = scope.errors;
          if (obj == null) return false;
          if (obj.length > 0)    return true;
          if (obj.length === 0)  return false;
          for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) return true;
          }
          return false;
        }
        scope.getErrorMessage = getErrorMessage;

      }

      function getErrorMessage(key) {
        return Validation[key].message;
      }

    }
  }

})();
