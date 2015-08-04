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
      controllerAs: 'iStepCtrl',
      step: '=?'
    };

  }

  iStepController.$inject = ['$scope'];
  function iStepController($scope) {
    var iStepCtrl = this;

    // variables
    iStepCtrl.steps = [];

    //methods
    iStepCtrl.goTo = goTo;
    iStepCtrl.amIActive = amIActive;


    // one way switch
    $scope.$watch('step', function (n,o) {
      if (o === n) return;
      iStepCtrl.activeStep = $scope.step;
    });

    //activate first step
    $scope.$watch('iStepCtrl.steps', function (n,o) {
      iStepCtrl.activeStep = iStepCtrl.steps[0] || '';
    });


    function goTo(dot) {
      iStepCtrl.activeStep = dot;
    }

    function amIActive(dot) {
      return dot === iStepCtrl.activeStep;
    }
  }
})();
