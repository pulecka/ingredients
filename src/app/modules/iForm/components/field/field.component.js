(function(){
  'use strict';
  angular.module('field.component', [])
    .directive('iField', iField);

  iField.$inject=['$compile'];
  function iField($compile) {
    return{
      restrict: 'E',
      //templateUrl: 'app/modules/iForm/components/field/field.template.html',
      replace: true,
      scope:{
        model: '=?',
        type: '@?',
        name: '@?',
        id: '@?',
        mask: '@?',
        constraint: '@?',
        placeholder: '@?',
        regex: '@?',
        size: '@?',
        validation: '@?',
        disabled: '=?',
        label: '@?',
        inline: '@?'
      },
      compile: compileFn
    };


    function compileFn() {
      return {
        pre:
          function postLink(scope, iElement) {
            var s = scope;
            var size = ' style="width:'+ s.size+'%"';
            var debounce = (s.debounce) ? ' ng-model-options="{debounce: '+ debounce +'}"': '';
            var fieldClasses = ' class="i-field" ng-class="{required: required, error: checkErrors()}"';
            var labelClasses = ' ng-class="{inline: inline, required: required}" class="i-field-label"';
            var ui_mask = (s.mask) ? ' ui-mask="' + s.mask + '"':'';
            var inputName = (s.name) ? ' name="' + s.name + '"': '';

            var html =
              '<div' + size + fieldClasses + '>' +
                '<label ng-if="label"' + labelClasses + 'for="{{id || name}}" ng-bind="label"></label>'+
                '<input  class="i-field-input"' +
                        ' ng-class="{nolabel: !label, inline: inline, required: required}"'+
                        ' id="{{id || name}}"'+
                        ' type="{{type || \'text\'}}"'+
                        ' ng-model="model"' +
                        debounce +
                        inputName+
                        ui_mask+
                        ' ng-disabled="disabled"'+
                        ' placeholder="{{placeholder}}"'+
                        ' ng-pattern="regex"'+
                        ' ng-required="isrequired"'+
                        'i-format="{{format}}"'+
                        'i-valid = "{{validation}}" />'+
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
