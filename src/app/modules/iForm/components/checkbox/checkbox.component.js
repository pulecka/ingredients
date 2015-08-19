(function(){
  'use strict';
  angular.module('checkbox.component', [])
    .directive('iCheckbox', iCheckbox);

  iCheckbox.$inject=['$compile'];
  function iCheckbox($compile) {
    return{
      restrict: 'E',
      replace: true,
      scope: true,
      compile: compileFn
    };


    function compileFn() {
      return {
        pre:
          function (scope, iElement, attrs) {

            var a = attrs;

            var fieldClasses = ' class="i-checkbox" ng-class="{error: checkErrors()}"';
            var inputName = (a.name) ? ' name="' + a.name + '"': '';
            var disabled = (a.disabled) ? ' ng-disabled="'+ a.disabled + '"' : '';
            var model = (a.model) ? ' ng-model="'+ a.model +'"' : '';
            var id = (a.id) ? ' id="'+ a.id || a.name +'"' : '';

            var label = (a.label) ? '<label class="checkboxlabel" for="'+ id +'">'+a.label+'</label>' : '';

            var html =
              '<div' + fieldClasses + '>' +
                label +
                '<input' +
                  id +
                  ' type="checkbox"' +
                  model +
                  inputName +
                  disabled +
                '/>' +
              '</div>';

            var elementToInject = angular.element(html);
            iElement.replaceWith(elementToInject);
            $compile(elementToInject)(scope);
          }
      };
    }
  }

})();
