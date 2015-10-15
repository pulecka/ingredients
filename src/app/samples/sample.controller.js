(function () {
  'use strict';
  angular.module('angular-ingredients.js')
    .controller('sampleCtrl', sampleCtrl);

  sampleCtrl.$inject = ['$timeout'];
  function sampleCtrl($timeout) {
    var ctrl = this;

    ctrl.handleSubmit = function (form) {
      alert('submitted');
    };

    ctrl.cardTypes = [{label: 'Stávající kartě', value: false}, {label: 'Obnovené kartě', value: true}];


    ctrl.action = function (a) {
      alert(a);
    };

    ctrl.sampleData = [
      {
        texts: {
          en: 'english',
          cs: 'cesky'
        },
        value: 1
      },
      {
        texts: {
          en: 'english',
          cs: 'cesky'
        },
        value: 2
      }
    ];


    ctrl.sampleData3 = {
      1: {
        texts: {
          en: 'english',
          cs: 'cesky'
        },
        value: 1
      },
      2: {
        texts: {
          en: 'english',
          cs: 'cesky'
        },
        value: 2
      },
      3: {
        texts: {
          en: 'english',
          cs: 'cesky'
        },
        value: 3
      }
    };

    ctrl.sampleData4 = [
      {
        label: 'Some label 1',
        value: 1
      },
      {
        label: 'Some label 2',
        value: 2
      }
    ];

    ctrl.sampleCarsData = [
      {
        label: 'Škoda Auto - simple clever',
        value: 'skoda'
      },
      {
        label: 'BMW - as fast as you',
        value: 'bmw'
      }
    ];

    ctrl.sampleCarsData2 = {
      skoda: {
        label: 'Skoda'
      },
      bmw: {
        label: 'bmw'
      },
      merc: {
        label: 'MERC'
      }
    };

    ctrl.inactive = [0,2];

    ctrl.sampleData2 = ['Item 1', 'Item 2'];


    $timeout(function () {

      //ctrl.m1 = 1;
      ctrl.m2 = 1;
      //ctrl.m3 = 1;


    }, 5000)

  }
})();
