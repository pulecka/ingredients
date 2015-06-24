(function(){
  'use strict';
  angular.module('iForm.module', ['iForm.components'])
    .directive('iForm', iForm);

  function iForm() {
    return{
      restrict: 'E',
      scope: {
        name: '@?',
        submit: '=?'
        //constraints: '@?',   // TODO: think more about it
        //config: '@?',        // TODO: think of format
        //output: '=?'         // TODO: fields (object) output
      },
      replace: true,
      templateUrl: 'app/modules/iForm/iform.template.html',
      transclude: true
    }
  }
})();
