(function(){
  'use strict';
  angular.module('validation.module')
    .directive('validate', Validate);

  Validate.$inject = ['Validation'];
  function Validate(Validation) {
    return{
      restrict: 'A',
      require: '^ngModel',
      link: LinkFn
    };

    function LinkFn(scope, element, attrs, ngModel) {
      var view_value;

      ngModel.$parsers.push(function(value){

        if (!value) return;

        var return_value;
        if(Validation[attrs.validate](value)) {
          return_value = value;
          view_value = return_value;
          ngModel.$setValidity('is_valid', true);
        }else{
          return_value = view_value;
          ngModel.$setViewValue(view_value);
          ngModel.$render();
          ngModel.$setValidity('is_valid', false);
        }

        return return_value;
      });
    }


  }

})();
