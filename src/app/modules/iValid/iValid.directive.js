(function(){
  'use strict';
  angular.module('iValid.module')
    .directive('iValid', Validate);

  Validate.$inject = ['iValid'];
  function Validate(iValid) {
    return{
      restrict: 'A',
      require: 'ngModel',
      link: LinkFn
    };

    function LinkFn(scope, element, attrs, ngModel) {

      if (attrs.iValid.length > 0) {
        attrs.iValid = attrs.iValid.replace(/\s+/g, '');

        var validationObject = attrs.iValid
          .split('|').reduce(function(accumulator, val){
            var pair = val.trim().split(':');
            accumulator[pair[0]] = pair[1] || null;
            return accumulator;
          }, {});

        angular.forEach(validationObject, function (rule, key) {
          ngModel.$validators[key] = function (value) {
              return iValid[key].definition(value, rule);
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
        };

        scope.getErrorMessage = getErrorMessage;

      }

      function getErrorMessage(key) {
        return iValid[key].message;
      }

    }
  }

})();
