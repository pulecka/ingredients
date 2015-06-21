/**
 * Created by bionaut on 08/06/15.
 */

(function(){
  'use strict';
  angular.module('iModal.module')
    .directive('iModal', iModalDirective);

  iModalDirective.$inject = [];
  function iModalDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/modules/iModal/iModal.template.html',
      transclude: true,
      scope:false,
      controller: iModalController,
      controllerAs: 'vm'
    };
  }

  iModalController.$inject = ['$scope','$element', 'iModal'];
  function iModalController($scope, $element, iModal) {
    $scope.closeModal = closeModal;
    $scope.vm = iModal.getBuffer();

    function closeModal() {
      $scope.$destroy();
      $element.remove();
    }

  }

})();
