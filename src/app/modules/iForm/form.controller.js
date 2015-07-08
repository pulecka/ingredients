(function(){
  'use strict';
  angular.module('iForm.module')
    .controller('FormController', FormController);

  FormController.$inject = ['$scope', '$attrs', '$parse'];
  function FormController($scope, $attrs, $parse) {
    var formCtrl = this;

    formCtrl.submitted = false;
    formCtrl.valid = null;

  }

})();
