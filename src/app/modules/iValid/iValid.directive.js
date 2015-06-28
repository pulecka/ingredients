(function(){
  'use strict';
  angular.module('iValid.module')
    .directive('iValid', iValidate)
    .directive('iFormat', iFormat)

  iValidate.$inject = ['iValid', 'iUtils'];
  function iValidate(iValid, iUtils) {
    return{
      restrict: 'A',
      require: 'ngModel',
      link: LinkFn
    };

    function LinkFn(scope, element, attrs, ngModel) {

      if (attrs.iValid.length > 0) {
        attrs.iValid = attrs.iValid.replace(/\s+/g, '');

        var validationObject = iUtils.string2Object(attrs.iValid);

        angular.forEach(validationObject, function (rule, key) {
          ngModel.$validators[key] = function (value) {
              return iValid.validators[key].definition(value, rule);
          }
        });

        // adds error object to scope of the field
        scope.errors = ngModel.$error;
        scope.checkErrors  = checkErrors;
        scope.getErrorMessage = getErrorMessage;

      }

      function checkErrors() {
        var obj = scope.errors;
        if (obj == null) return false;
        if (obj.length > 0)    return true;
        if (obj.length === 0)  return false;
        for (var key in obj) {
          if (hasOwnProperty.call(obj, key)) return true;
        }
        return false;
      }

      function getErrorMessage(key) {
        if (typeof iValid.validators[key] === 'undefined' ){ console.info('Unknown validator: ', key); return void 0;}
        return iValid.validators[key].message;
      }

    }
  }

  iFormat.$inject = ['iValid', 'iUtils'];
  function iFormat(iValid, iUtils) {
    return{
      restrict: 'A',
      require: 'ngModel',
      link: LinkFn
    };

    function LinkFn(scope, element, attrs, ngModel) {

      if (attrs.iFormat.length > 0) {
        attrs.iFormat = attrs.iFormat.replace(/\s+/g, '');

        var validationObject = iUtils.string2Object(attrs.iFormat);

        angular.forEach(validationObject, function (rule, key) {

          var view_value;
          ngModel.$parsers.push(function(value){

            var return_value;

            if(value.length > 5){
              return_value = view_value;
              ngModel.$setViewValue(view_value);
              ngModel.$render();
              ngModel.$setValidity('is_valid', false);
            } else {
              return_value = value;
              view_value = return_value;
              ngModel.$setValidity('is_valid', true);
            }

            return return_value;
          });

        });

      }
    }
  }

})();
