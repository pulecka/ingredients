(function(){
  'use strict';
  angular.module('angular-ingredients.js')
    .controller('sampleCtrl', sampleCtrl);

  sampleCtrl.$inject = ['$timeout'];
  function sampleCtrl($timeout) {
    var ctrl = this;


    //ctrl.switchOptions = [
    //  {
    //    label: 'option #1',
    //    value: 1
    //  },
    //  {
    //    label: 'option #2',
    //    value: 2
    //  },
    //  {
    //    label: 'option #3',
    //    value: 3
    //  }
    //];

    ctrl.handleSubmit = function (form) {
      console.log(form);
    };

    //ctrl.sampleData = ['test', 'blabla', 'somesung']

    //ctrl.sampleData = {
    //  CZK: {
    //    text: 'uplne nove nieco',
    //    value: 22
    //  },
    //  EUR: {
    //    text: 'to iste tu',
    //    value: 11
    //  },
    //  LIB: {
    //    text: 'aaaaa tu',
    //    value: 122
    //  }
    //};

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

    //$timeout(function () {
    //  ctrl.sampleData = {
    //    22: {
    //      text: 'uplne nove nieco',
    //      value: 22
    //    },
    //    11: {
    //      text: 'to iste tu',
    //      value: 11
    //    },
    //    122: {
    //      text: 'aaaaa tu',
    //      value: 122
    //    }
    //  };
    //
    //
    //
    //  ctrl.brutalModel = 22;
    //
    //}, 5000)

  }
})();
