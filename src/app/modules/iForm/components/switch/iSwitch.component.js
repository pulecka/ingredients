/**
 * Created by bionaut on 25/06/15.
 */

(function(){
  'use strict';
  angular.module('iSwitch.component', [])
    .directive('iSwitch', iSwitch);

  function iSwitch() {
    return{
      restrict: 'E',
      templateUrl: 'app/modules/iForm/components/switch/iSwitch.template.html',
      replace: true,
      scope:{
        options: '=?',
        size: '@?',
        model: '=?'
      },
      controller: iSwitchController,
      controllerAs: 'iswch'
    };
  }

  iSwitchController.$inject = ['$scope', '$interval'];
  function iSwitchController($scope, $interval) {
    var iswch = this;

    iswch.handleClick = handleClick;

    // DEMO :)
    //$scope.model = 1;
    //$interval(function () {
    //  $scope.model  = ($scope.model < 3) ? $scope.model+1 : 1;
    //}, 5000)
    //DEMO

    function handleClick(option) {
      $scope.model = option.value || option;
    }
  }

})();
