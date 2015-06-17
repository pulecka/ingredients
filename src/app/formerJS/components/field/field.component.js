/**
 * Created by bionaut on 09/06/15.
 */
(function(){
  'use strict';
  angular.module('field.component', [])
    .directive('field', Field)

  Field.$inject=[];
  function Field() {
    return{
      restrict: 'E',
      templateUrl: '/app/formerJS/components/field/field.template.html',
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
        validation: '@?'
      }
    };
  }

})();
