(function(){
  'use strict';
  angular.module('angular-ingredients.js')
    .controller('stepSample', stepSample);

  function stepSample() {
    var ctrl = this;

    ctrl.sampleData = 'Step controller sample...';
  }
})();
