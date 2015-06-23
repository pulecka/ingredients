(function(){
  'use strict';
  angular.module('row.component', [])
    .directive('iRow', iRow);

  iRow.$inject = [];
  function iRow() {
    return{
      restrict: 'E',
      templateUrl: 'app/modules/iForm/components/row/row.template.html'
    };
  }
})();
