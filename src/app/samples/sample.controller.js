(function(){
  'use strict';
  angular.module('ingredients.js')
    .controller('sampleCtrl', sampleCtrl);

  function sampleCtrl() {
    var ctrl = this;

    ctrl.sampleData = [
      {
        text: 'some text here',
        value: 22
      },
      {
        text: 'another text',
        value: 11
      }
    ];
  }
})();
