(function(){
  'use strict';
  angular
    .module('error.component', [])
    .directive('iError', iError);

  iError.$inject = ['iValid'];
  function iError(iValid) {
    return{
      restrict: 'E',
      templateUrl: 'app/modules/iForm/components/error/error.template.html',
      require: '?^form',
      controller: iErrorController,
      controllerAs: 'error',
      bindToController: true,
      link: function(scope, element, attrs, form) {
        //FIXME: this is horrible

        scope.title = (attrs.title) ? attrs.title : '';

        form.$globalErrors = true;

        function show(submitted, errors) {
          scope.show = submitted && errors && errors.length > 0;
        }

        scope.$watch('form.$submitted', function(submitted) {
          show(submitted, scope.errors);
        });

        scope.$watch('form.$error', function (err) {
          if (!err) {
            return;
          }
          var errorObjects = Object.keys(err).reduce(function(previous, key) {
            var errors = err[key]
              .map(function(arr) {
                var message = iValid.validators[key] ? iValid.validators[key].message : key;
                return {
                  name: arr.$label || arr.$name,
                  error: message
                }
              });
            return previous.concat(errors);
          }, []);

          var messages = errorObjects.map(function(errorObject) {
            return errorObject.error + ': ' + errorObject.name;
          });
          scope.errors = messages;

          show(form.$submitted, messages);
        }, true);
      }
    };
  }

  iErrorController.$inject = ['$scope', 'iValid'];
  function iErrorController($scope, iValid) {
    var error = this;
  }

})();
