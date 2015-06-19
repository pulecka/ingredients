/**
 * Created by bionaut on 09/06/15.
 */
(function(){
  'use strict';
  angular.module('field.component', [])
    .directive('iField', iField)

  iField.$inject=[];
  function iField() {
    return{
      restrict: 'E',
      templateUrl: 'app/modules/iForm/components/field/field.template.html',
      replace: true,
      scope:{
        model: '=?',
        type: '@?',
        name: '@?',
        id: '@?',
        label: '@?',
        constraint: '@?',
        placeholder: '@?',
        inline: '@?',
        required: '@?',
        validation: '@?',
        disabled: '=?'
      }
    };
  }

})();
