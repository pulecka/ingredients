(function(){
  'use strict';
  angular.module('iForm.module')
    .controller('FormController', FormController);

  FormController.$inject = ['$scope'];
  function FormController($scope) {
    var formCtrl = this;

    formCtrl.submitted = false;
    formCtrl.valid = null;
    formCtrl.handleSubmit = handleSubmit;


    function handleSubmit(form) {
      var formName = form.$name;
      formCtrl.submitted = true;
      console.log(form);
      form.$setDirty();
    }

  }

})();
