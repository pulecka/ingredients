(function(){
  'use strict';

  angular.module('formGenerator', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'former.js'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: MainController,
          controllerAs: 'ctrl'
        });
      $urlRouterProvider.otherwise('/');
    });

  function MainController() {
    var ctrl = this;

    ctrl.independentMethod = function () {
      alert();
    }

  }


})();


