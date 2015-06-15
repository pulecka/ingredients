(function(){
    'use strict';

  angular.module('formGenerator')
    .directive('customField', customField);


  customField.$inject = ['$compile'];
  function customField($compile) {
    return {
      restrict: 'E',
      template: '<div></div>',
      scope: true,
      replace: true,

      compile: function() {
        return {
          pre: function postLink(scope, iElement) {

            var src = scope.field;

            var _tagStart        = '<' + src.kind;

            var _tagEnd         = (src.kind === 'input' || src.kind ==='img') ? '/>' : (((src.body) ? src.body:'') + '</' + src.kind + '>');

            var _inputType      = (src.type && src.kind==='input') ?
              (' type="'+ src.type + '"' || 'text"') : '';

            var _placeholder    = (src.placeholder) ?
              (src.kind === 'select' ) ?
                '><option value="">{{field.placeholder}}</option>' : ' placeholder="{{field.placeholder}}' + '"'
              : '';

            var _ngOptions      = (src.options && src.kind === 'select') ?
            ' ng-options="' + ((src.options.recipe) ? src.options.recipe : 'k as v for (k, v)') + ' in ' +  src.options.source + '"' : ''

            var _condition      = (src.condition) ? ' ng-show="'+ src.condition + '"' : '';

            var _wrapClass      = (src.wrapClass) ? src.wrapClass  : '';

            var _disabled       = (src.disabled) ? ' ng-disabled="'+ src.disabled + '"' : '';

            var _initInput      = (src.init && src.model)? ' ng-init="' + src.model + '=' + src.init + '"' : '';

            var _model          = (src.model)? ' ng-model="' + src.model + '"' : '';

            var _ngChange       = (src.change)? ' ng-change="' + src.change + '"' : '';

            var _classes        = ' class="' + ((src.classes) ? src.classes : 'form-control') + '"';

            var _tagTail        = (src.tail) ? src.tail : '';

            var _name           = ' name="' + ((src.name) ? src.name : (src.id || src.model)) + '"';

            var _id             = ' id="' + ((src.id) ? src.id: (src.name || src.model)) + '"';

            var _label          = (src.label) ?  ('<label for="'+ (src.id || src.name || src.model) +'">'+src.label) + (src.required ? '<sup style="color:red">*</sup>': '' ) + '</label>' : '';

            //TODO: makeAttrs
            var _attrs          = (src.attrs) ? src.attrs : '';

            var _value          = (src.value) ? ('value="'+src.value + '"' ) : '';

            var _validations    =  (src.validations)? makeAttrs(src.validations) : '';

            var _errors         =  (src.errors) ? makeErrorMessages(src.errors) : '';


            var html =
              '<div class="control-group '+ _wrapClass + '"' + _condition + '>' +
                //_label+
                _tagStart +
                    _id +
                    _name +
                    _model +
                    _classes +
                    _initInput +
                    _inputType +
                    _ngChange +
                    _disabled +
                    _value +
                    _attrs +
                    _validations +
                    _ngOptions +
                    _placeholder +
                _tagEnd +
                _tagTail +
                _errors +
           '</div>';

            html = $compile(html)(scope);
            iElement.replaceWith(html);
            $compile(html)(scope)

            function makeErrorMessages(errors){
              var _result = '';
              angular.forEach(errors, function (value, key) {
                //_result += '<div ng-if="'+ scope.$parent.config.name + '.' + (src.name || src.id) +'.' + key + '">' + value + '</div>'
                _result += '<div ng-show="'+ src.model +'.$error.' + key + '">' + value + '</div>'
                //_result += '<div>{{'+ scope.$parent.config.name + '.' + (src.name || src.id) +'.' + key + '}}' + '</div>'
              });
              return _result;
            }

            function makeAttrs(attrs){
              var _result = '';
              angular.forEach(attrs, function(value, key){
                _result += ' ' + key + '="' + value + '"';
              });
              return _result;
            }
          }
        };
      }
    };
  }

})();
