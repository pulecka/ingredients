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
        default: '@?',
        onChange: '=?',
        readOnly: '=?',
        name: '@?',
        validate: '@?'
      },
      controller: iSwitchController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  iSwitchController.$inject = [
    'iUtils'
  ];
  function iSwitchController(iUtils) {
    var vm = this;

    // methods
    vm.handleClick = handleClick;
    vm.getDataLength = getDataLength;
    vm.isActive = isActive;
    vm.viewValue = resolveView;

    if (vm.default) {
      handleClick(vm.options[vm.default], vm.default);
    }

    /////////////////////////////////////////////////////////

    function handleClick(option, index) {
      vm.model = resolveFn(option, index);
      if (vm.onChange) {
        vm.onChange(vm.model);
      }
    }

    function getDataLength() {
      if (angular.isArray(vm.options)) {
        return vm.options.length;
      } else if (angular.isObject(vm.options)) {
        return Object.keys(vm.options).length;
      }
    }

    function resolveFn(option, index) {
      if (vm.returnAs) {
        return option[vm.returnAs];
      }
      return index;
    }

    function isActive(option, index) {
      return vm.model == resolveFn(option, index);
    }

    function selectedOption() {
      var array = iUtils.arrayify(vm.options);
      var filtered = array ? array.filter(isActive) : [];
      return filtered[0];
    }

    function resolveView() {
      var option = selectedOption();
      return option ? option[vm.viewAs] || option : null;
    }
  }

})();
