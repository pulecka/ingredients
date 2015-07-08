(function(){
  'use strict';
  angular.module('iForm.module', ['iForm.components'])
    .directive('iForm', iForm);

  iForm.$inject = ['$compile'];
  function iForm($compile) {
    return {
      restrict: 'E',
      transclude: true,
      link: linkFn
    };


    function linkFn(s,e,a,c, $transcludeFn) {
      var submit = (a.submit) ? ' ng-submit="'+ a.submit + '"' : '';

      var formElement =
        '<form class="i-form"' +
               'name="'+ (a.name || a.id) +'"'+
               'id="'+ (a.name || a.id) +'" novalidate' +
               submit +
        '></form>';

      var html = $compile(formElement)(s);

      $transcludeFn(s, function (clone) {
        html.append(clone);
        e.replaceWith(html);
      });

    }
  }

})();
