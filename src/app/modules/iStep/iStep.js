/**
 * Created by bionaut on 24/06/15.
 */
(function(){
  'use strict';
  angular.module('iStep.module', [])
    .factory('iStepService', iStepService);

  function iStepService() {
    var steps = [];
    var activeStep = steps[0] || '';

    return{
      steps: steps,
      active: activeStep
    };

  }
})();
