(function(){
  'use strict';
  angular.module('iForm.module', ['iForm.components'])
    .directive('iForm', iForm);

  iForm.$inject = ['$compile'];
  function iForm($compile) {
    return {
      restrict: 'E',
      scope: true,
      transclude: true,
      link: linkFn,
      controller: 'FormController',
      controllerAs: 'formCtrl',
      bindToController: {
        submit: '&',
        globalErrors: '='
      }
    };


    function linkFn(s,e,a,c, $transcludeFn) {
      var name = a.name || a.id;
      var formElement =
        '<form class="i-form"' +
          'name="' + name + '"' +
          'id="' + name + '" novalidate' +
        '>' +
          '<i-alert errors="form.$error" ng-if="formCtrl.globalErrors" ng-show="form.$submitted && !form.$valid"></i-alert>'  +
        '</form>';

      var html = $compile(formElement)(s);
      var form = s[name];
      s.form = form;

      html.on('submit', submitIfValid);

      $transcludeFn(s, function (clone) {
        html.append(clone);
        e.replaceWith(html);
      });

      function submitIfValid(event) {
        event.preventDefault();
        c.submitted = true;
        if (form.$valid) {
          c.submit();
        }
      }
    }
  }

})();
