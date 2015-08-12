(function(){
  'use strict';
  angular
    .module('alert.component', [])
    .directive('iAlert', iAlert);

  iAlert.$inject = [];
  function iAlert() {
    return{
      restrict: 'E',
      templateUrl: 'app/modules/iForm/components/alert/alert.template.html',
      transclude: true,
      scope:{
        type: '@',
        title: '@?',
        messages: '=',
        closeable: '@?'
      },
      controller: iAlertController,
      controllerAs: 'alert',
      bindToController: true
    };
  }

  iAlertController.$inject = ['$scope', 'iValid'];
  function iAlertController($scope, iValid) {
    var alert = this;
  }

})();
