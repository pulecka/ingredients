/**
 * Created by bionaut on 02/10/15.
 */

(function () {
  'use strict';
  angular.module('onEnter.component', [])
    .directive('onEnter', OnEnter);

  function OnEnter() {
    return function (scope, element, attrs) {
      element.bind("keydown keypress",
        function (event) {
          var keyCode = event.which || event.keyCode;

          // If enter key is pressed
          if (keyCode === 13) {
            scope.$apply(function () {
              // Evaluate the expression
              scope.$eval(attrs.onEnter);
            });
            event.preventDefault();
          }
        });
    };
  }

})();
