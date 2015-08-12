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
        label: '@?',
        errors: '=',
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

    $scope.$watch('alert.errors', function (e) {
      if (!e) return;
      alert.list = Object.keys(e).reduce(function (previous, key) {
        var errors = e[key]
          .map(function(a) {
            var message = iValid.validators[key] ? iValid.validators[key].message : key;
            return {
              name: a.$label || a.$name,
              error: message
            }
          });
        return previous.concat(errors);
      }, []);
    }, true);

  }

})();
