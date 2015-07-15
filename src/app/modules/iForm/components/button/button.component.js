(function(){
  'use strict';
  angular.module('button.component', [])
    .directive('iButton', iButton);

  iButton.$inject = [];
  function iButton() {
    return{
      restrict: 'E',
      templateUrl: 'app/modules/iForm/components/button/button.template.html',
      replace: true,
      scope:{
        title:'@?',
        type: '@?',
        name: '@?',
        disabled: '=?'
      },
      controller: iButtonController,
      controllerAs: 'iButton'
    };
  }

  iButtonController.$inject = [];
  function iButtonController() {
    var iButton = this;
  }

})();
