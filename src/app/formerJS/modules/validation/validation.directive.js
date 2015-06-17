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
            return Validation[key](value, rule);
        }
      });

        // adds error object to scope of the field
        scope.errors = ngModel.$error;


      }



      //ngModel.$parsers.push(function(value){
      //
      //  var return_value;
      //
      //  if(value) {
      //    return_value = value;
      //    view_value = return_value;
      //    ngModel.$setValidity('is_valid', true);
      //  }else{
      //    return_value = view_value;
      //    ngModel.$setViewValue(view_value);
      //    ngModel.$render();
      //    ngModel.$setValidity('is_valid', false);
      //  }
      //  return return_value;
      //});


    }


  }

})();
