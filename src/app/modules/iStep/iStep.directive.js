/**
 * Created by bionaut on 24/06/15.
 */

(function(){
  'use strict';
  angular.module('iStep.module')
    .directive('iStep', iStep);

  iStep.$inject = [];
  function iStep() {
    return{
      restrict: 'E',
      templateUrl: 'app/modules/iStep/iStep.template.html',
      transclude: true,
      controller: iStepController,
      controllerAs: 'iStepCtrl'
    };

  }

  iStepController.$inject = ['$timeout'];
  function iStepController($timeout) {
    var iStepCtrl = this;

    iStepCtrl.steps = [];
    $timeout(function () {
      iStepCtrl.activeStep = iStepCtrl.steps[0] || '';
    }, 1000)

  }
})();
