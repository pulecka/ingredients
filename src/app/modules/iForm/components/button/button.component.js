(function(){
  'use strict';
  angular.module('button.component', [])
    .directive('iButton', iButton);

  iButton.$inject = [];
  function iButton() {
    return {
      priority: 1,
      restrict: 'E',
      templateUrl: 'app/modules/iForm/components/button/button.template.html',
      replace: true,
      require: '?^^form',
      scope:{
        title:'@?',
        type: '@?',
        name: '@?',
        iDisabled: '=?'
      },
      controller: iButtonController,
      controllerAs: 'iButton',
      link: {
        pre: function(scope, element, attrs, form) {
          element.on('click', function(event) {
            if (scope.iDisabled) {
              event.preventDefault();
              form.$setSubmitted(true);
              scope.$evalAsync();
            }
          });
        }
      }
    };
  }

  iButtonController.$inject = [];
  function iButtonController() {
    var iButton = this;
  }

})();
