/**
 * Created by bionaut on 14/06/15.
 */

(function(){
  'use strict';
  angular.module('number.component', [])
    .directive('number', NumberComponent);

  NumberComponent.$inject = [];
  function NumberComponent() {
    return{
      restrict: 'E',
      templateUrl: '/app/formerJS/components/number/number.template.html',
      replace: true,
      transclude: true
    }
  }

})();
