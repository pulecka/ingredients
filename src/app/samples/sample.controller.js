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
      CZK: {
        text: 'uplne nove nieco',
        value: 1
      },
      EUR: {
        text: 'to iste tu',
        value: 2
      },
      LIB: {
        text: 'aaaaa tu',
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

    ctrl.sampleData2 = ['Item 1', 'Item 2'];


    $timeout(function () {

      //ctrl.m1 = 1;
      //ctrl.m2 = 1;
      //ctrl.m3 = 1;


    }, 5000)

  }
})();
