(function(){
  'use strict';
  angular.module('iUtils.module', [])
    .run(Run);

  Run.$inject = ['$rootScope'];
  function Run($rootScope) {
    document.addEventListener('click', function (ev) {
      $rootScope.$broadcast('closeContextual', {event: ev});
    });
  }


})();
