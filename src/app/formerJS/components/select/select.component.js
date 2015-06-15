/**
 * Created by bionaut on 14/06/15.
 */

(function(){
  'use strict';
  angular.module('select.component', [])
    .directive('selector', Selector);

  function Selector() {
    return{
      restrict: 'E',
      templateUrl: '/app/formerJS/components/select/select.template.html',
      scope:{
        data: '=?',
        selected: '=?'
      }
    }
  }
})();
