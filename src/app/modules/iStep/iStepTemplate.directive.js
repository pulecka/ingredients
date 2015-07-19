/**
 * Created by bionaut on 24/06/15.
 */

(function(){
  'use strict';
  angular.module('iStep.module')
    .directive('iStepTemplate', iStepTemplate);

  iStepTemplate.$inject = ['iStepService'];
  function iStepTemplate(iStepService) {
    return{
      restrict: 'E',
      link: linkFn
    };

    function linkFn(s,e,a) {
      //iStepService.steps.push();
      s.$parent.iStepCtrl.steps.push(a.src);
    }

  }

})();
