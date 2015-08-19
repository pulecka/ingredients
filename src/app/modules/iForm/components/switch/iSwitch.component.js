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
        viewAs: '@?',
        returnAs: '@?',
        model: '=?',
        default: '@?'
      },
      controller: iSwitchController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  function iSwitchController() {
    var vm = this;

    // methods
    vm.handleClick = handleClick;

    // make sure that default will return number not string
    vm.default = (vm.default) ? parseInt(vm.default) : null;


    // ///////////////////////////////////////////////////
    function handleClick(option, index) {
      vm.model = option[vm.returnAs] || option || index;
    }
  }

})();
