/**
 * Created by bionaut on 18/05/15.
 */

(function(){
    'use strict';

angular.module('formGenerator', [])
  .directive('formGenerator', formGenerator);

  formGenerator.$inject = ['$compile'];
  function formGenerator($compile) {
    return {
      restrict: 'E',
      template: '<div></div>',
      scope: {
        constraints: '=?',
        config: '=',
        output: '='
      },
      replace: true,
      controller: formController,
      compile: compileFn
    };


    function compileFn() {
      return {
        pre: function postLink(scope, iElement) {
          var src = scope.config;

          var _controller = (src.controllerAs) ? ' ng-controller="'+ src.controllerAs + '"' : '';

          var _buttons = (src.controls && src.controls.buttons) ?
            (function () {
              var __result = '';
              src.controls.buttons.map(function (button) {
                __result +=
                  '<button type="' + (button.type || 'text') + '"' +
                  ' class="btn '+ ((button.classes) ? button.classes : '') +'"' +
                  ((button.click) ? ' ng-click="' + button.click + '"' : '' ) +'>'+
                  button.label +'</button>';
              });
              return __result;
            })()
            : '';

          var html =
            '<form novalidate '+ _controller +' name="'+ (src.name || 'Untitled') +'" id="'+ (src.name || 'Untitled') +'">' +
            '<h1 ng-if="config.title" >{{config.title}}</h1>' +
            '<div class="panel panel-default clearfix" ng-repeat="panel in config.panels">' +
              '<div ng-if="panel.title" class="panel-heading">' +
                '<div class="panel-title">' +
                '{{panel.title}}' +
                '</div>' +
              '</div>' +
              '<div class="panel-body">' +
                '<custom-field ng-repeat="field in panel.fields" ></custom-field>' +
              '</div>' +
            '</div>' +
            '<div class="clearfix btn-group '+ ((src.controls && src.controls.classes) ? src.controls.classes : '') +'">' +
            _buttons +
            '</div>' +
            '<p>{{fields}}</p>' +
            '</form>';

          html = $compile(html)(scope);
          iElement.replaceWith(html);
        }
      };
    }
  }

  formController.$inject = ['$scope'];
  function formController($scope) {
    $scope.fields= {};  /*TODO: extend output?*/
    //$scope.config = newForm;

  }


})();
