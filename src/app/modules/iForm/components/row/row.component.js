(function(){
  'use strict';
  angular.module('row.component', [])
    .directive('iRow', iRow);

  iRow.$inject = [];
  function iRow() {
    return{
      restrict: 'E',
      templateUrl: 'app/modules/iForm/components/row/row.template.html',
      transclude: true,
      replace: true,
      scope:{
        rowLabel: '@?label'
      },
      controller: iRowController,
      controllerAs: 'iRow'
    };
  }

  iRowController.$inject = [];
  function iRowController() {
    var iRow = this;
  }

})();
