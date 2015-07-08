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
          function postLink(scope, iElement, attrs) {

            var a = attrs;

            var size = ' style="width:'+ a.size+'%"';

            var debounce = (a.debounce) ? ' ng-model-options="{debounce: '+ a.debounce +'}"': '';
            var fieldClasses = ' class="i-field" ng-class="{required: required, error: checkErrors()}"';
            var inputClasses = ' class="i-field-input" ng-class="{nolabel: !label, inline: inline, required: required}"';
            var labelClasses = ' ng-class="{inline: inline, required: required}" class="i-field-label"';
            var ui_mask = (a.mask) ? ' ui-mask="' + a.mask + '"':'';
            var inputName = (a.name) ? ' name="' + a.name + '"': '';
            var disabled = (a.disabled) ? ' ng-disabled="'+ a.disabled + '"' : '';
            var model = (a.model) ? ' ng-model="'+ a.model +'"' : '';
            var kind = (a.type) ? ' type="' + a.type + '"' : 'type="text"';
            var id = (a.id) ? ' id="'+ a.id || a.name +'"' : '';
            var placeholder = (a.placeholder) ? ' placeholder="'+ a.placeholder +'"' : '';
            var regex = (a.regex) ? ' pattern="'+ a.regex +'"' : '';

            //var required = (a.isrequired) ? ' ng-required="'+ a.isrequired +'"' : '';

            // custom directives
            var iFormat = (a.format) ? ' i-format="{{format}}"' : '';
            var iValid = (a.validate) ? ' i-valid = "{{validation}}"' : '';


            var html =
              '<div' + size + fieldClasses + '>' +
                '<label ng-if="label"' + labelClasses + 'for="'+ id +'" ng-bind="label"></label>'+
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
                '/>' +
                '<div class="fieldErrorMessages" ng-show="isDirty">'+
                    '<div class="fieldErrorMessage" ng-repeat="(key,error) in errors track by $index">{{ overrideMessage || getErrorMessage(key) }}</div>'+
                '</div>'+
              '</div>';

            var compiledHtml = $compile(html)(scope);
            iElement.replaceWith(compiledHtml);
          }
      };
    }
  }

})();
