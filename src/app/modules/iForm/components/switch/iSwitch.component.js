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
        model: '=?',
        default: '@?'
      },
      controller: iSwitchController,
      controllerAs: 'iswch'
    };
  }

  iSwitchController.$inject = ['$scope', '$interval'];
  function iSwitchController($scope, $interval) {
    var iswch = this;

    iswch.handleClick = handleClick;

    function handleClick(option, index) {
      $scope.model = option.value || index;
    }
  }

})();
