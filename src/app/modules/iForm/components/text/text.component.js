(function(){
  'use strict';
  angular.module('text.component', [])
    .directive('iText', iText);

  iText.$inject=[];
  function iText() {
    return{
      restrict: 'E',
      templateUrl: 'app/modules/iForm/components/text/text.template.html',
      scope:{
        model: '=?',
        size: '@?',
        label: '@?',
        inline: '@?'
      }
    };
  }

})();
