/**
 * Created by bionaut on 09/06/15.
 */

(function(){
  'use strict';
  angular.module('former.js', ['app.components', 'app.modules', 'ngMessages'])
    .directive('former', FormerDirective);

  function FormerDirective() {
    return{
      restrict: 'E',
      scope: {
        name: '@?',
        submit: '&?',
        constraints: '@?',   // TODO: think more about it
        config: '@?',        // TODO: think of format
        output: '=?'         // TODO: fields (object) output
      },
      replace: true,
      templateUrl: '/app/formerJS/former.template.html',
      transclude: true
    }
  }
})();
