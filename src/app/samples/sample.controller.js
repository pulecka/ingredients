(function(){
  'use strict';
  angular.module('angular-ingredients.js')
    .controller('sampleCtrl', sampleCtrl);

  function sampleCtrl() {
    var ctrl = this;

    ctrl.switchOptions = [
      {
        label: 'option #1',
        value: 1
      },
      {
        label: 'option #2',
        value: 2
      },
      {
        label: 'option #3',
        value: 3
      }
    ];

    ctrl.handleSubmit = function () {
      alert('submited')
    };

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
