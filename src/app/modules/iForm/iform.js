(function(){
  'use strict';
  angular.module('iForm.module', ['iForm.components'])
    .directive('iForm', iForm);

  iForm.$inject = ['$compile'];
  function iForm($compile) {
    return {
      restrict: 'E',
      scope: {},
      replace:true,
      //templateUrl: 'app/modules/iForm/iform.template.html',
      transclude: true
      //compile: compileFn,
      //link: linkFn
    };

    //function compileFn() {
    //    return {
    //      pre: function preLink(scope, iElement, iAttrs, controller) {
    //        var formElement = '<form class="i-form" name="'+ scope.name +'" ' + 'id="'+ scope.name +'" novalidate ng-submit="'+ scope.submit +'"></form>';
    //
    //        var html = $compile(formElement)(scope);
    //        iElement.replaceWith(html);
    //
    //      }
    //    }
    //  }


    //function linkFn(s,e,a,c,transcludeFn) {
    //  transcludeFn(function (clone, scope) {
    //    e.append($compile(clone)(s));
    //  })
    //}
  }

})();
