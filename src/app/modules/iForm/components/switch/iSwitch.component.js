/**
 * Created by bionaut on 25/06/15.
 */

(function () {
  'use strict';
  angular.module('iSwitch.component', [])
    .directive('iSwitch', iSwitch);

  function iSwitch() {
    return {
      restrict: 'E',
      templateUrl: 'app/modules/iForm/components/switch/iSwitch.template.html',
      replace: true,
      scope: {
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
    vm.getDataLength = getDataLength;
    vm.isActive = isActive;

    if (vm.default){
      handleClick(vm.options[vm.default], vm.default);
    }

    /////////////////////////////////////////////////////////

    function handleClick(option, index) {
      var _bool = (typeof option === "boolean" || typeof  option[vm.returnAs] === "boolean");
      vm.model =
        (vm.returnAs === '$index') ?
          option : _bool ?
            JSON.stringify(option[vm.returnAs]) || JSON.stringify(option) :
            option[vm.returnAs] || option || index || null;
    }

    function getDataLength() {
      if (angular.isArray(vm.options)) {
        return vm.options.length;
      } else if (angular.isObject(vm.options)) {
        return Object.keys(vm.options).length;
      }
    }


    function isActive(option, index) {
      return ( vm.model == ( JSON.stringify(option[vm.returnAs]) || JSON.stringify(option) || index) );
    }

  }

})();
