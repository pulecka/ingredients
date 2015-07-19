/**
 * Created by bionaut on 25/06/15.
 */

(function(){
  'use strict';
  angular.module('iStep.module')
    .directive('iStepNext', iStepNext);

  function iStepNext() {
    return{
      restrict: 'A',

    };
  }
})();
