(function(){
  'use strict';
  angular.module('field.component', [])
    .directive('iField', iField);

  iField.$inject=['$compile'];
  function iField($compile) {
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

            var size = ' style="width:'+ a.size+'%"';

            var debounce = (a.debounce) ? ' ng-model-options="{debounce: '+ a.debounce +'}"': '';
            var fieldClasses = ' class="i-field" ng-class="{error: checkErrors()}"';
            var inputClasses = ' class="i-field-input' +( (a.inline) ? ' inline' : '') +( (a.label) ? '' : ' nolabel') + '"';
            var labelClasses = ' class="i-field-label' +( (a.inline) ? ' inline' : '') +( (a.required) ? ' required' : '') + '"';
            var ui_mask = (a.mask) ? ' ui-mask="' + a.mask + '"':'';
            var inputName = (a.name) ? ' name="' + a.name + '"': '';
            var disabled = (a.disabled) ? ' ng-disabled="'+ a.disabled + '"' : '';
            var model = (a.model) ? ' ng-model="'+ a.model +'"' : '';
            var kind = (a.type) ? ' type="' + a.type + '"' : 'type="text"';
            var id = (a.id) ? ' id="'+ a.id || a.name +'"' : '';
            var placeholder = (a.placeholder) ? ' placeholder="'+ a.placeholder +'"' : '';
            var regex = (a.regex) ? ' pattern="'+ a.regex +'"' : '';

            var required = (a.required) ? ' required="true"' : '';

            var label = (a.label) ? '<label ' + labelClasses + ' for="'+ id +'">'+a.label+'</label>' : '';

            // custom directives
            var iFormat = (a.format) ? ' i-format="'+ a.format+'"' : '';
            var iValid = (a.validate) ? ' i-valid = "'+ a.validate + '"' : '';


            var html =
              '<div' + size + fieldClasses + '>' +
                label +
                '<input' +
                  inputClasses +
                  id +
                  kind +
                  model +
                  debounce +
                  inputName+
                  ui_mask +
                  disabled +
                  placeholder +
                  regex +
                  iFormat +
                  iValid +
                  required +
                '/>' +
                '<div class="fieldErrorMessages" ng-show="isDirty || formCtrl.submitted">' +
                    '<div class="fieldErrorMessage" ng-repeat="(key,error) in errors track by $index">{{ overrideMessage || getErrorMessage(key) }}</div>'+
                '</div>'+
              '</div>';

            var elementToInject = angular.element(html);
            iElement.replaceWith(elementToInject);
            $compile(elementToInject)(scope);
          }
      };
    }
  }

})();
