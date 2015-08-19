/**
 * Created by bionaut on 14/06/15.
 */


// TODO: show/hide arrow
// TODO: show/hide label
// TODO: inline label
// TODO: better (auto) type conversion


(function(){
  'use strict';
  angular.module('select.component', [])
    .directive('iSelect', iSelect);

  function iSelect() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/modules/iForm/components/select/select.template.html',
      scope:{
        data: '=',
        returnAs: '@',
        viewAs: '@',
        searchable: '@?',
        placeholder: '@?',
        size: '@?',
        template: '@?',
        default: '@?',
        model: '=',
        change: '=?'
      },
      controller: iSelectController,
      controllerAs: 'iSelect'
    };

    iSelectController.$inject = ['$scope', '$timeout'];
    function iSelectController($scope, $timeout) {

      var iSelect = this;
      var s = $scope;

      // methods
      iSelect.select = handleSelect;

      // convert source data
      dataTypeConverse();

      // set default value
      $timeout(function () {
        setDefault();
      });

      // watch data property for changes
      s.$watch('data', handleRefresh);

      // watch model
      s.$watch('model', handleModelChange);

      function handleRefresh(nVal, oVal) {
        if (nVal === oVal) return;
        dataTypeConverse();
        setDefault();
      }

      function setDefault() {
        if (s.default) {
          if (s.data && s.isArray){
            handleSelect(s.default);
          }
          if (s.data && s.isObject){
            handleSelect(s.default);
          }

        }
      }

      function toggleList() {
        // register
      }

      function handleSelect(index) {
          iSelect.selected = s.data[index];
          s.model = (s.returnAs === '$index') ? index : iSelect.selected[s.returnAs];
          iSelect.searchQuery = (s.searchable) ? iSelect.selected[s.viewAs] : '';
          iSelect.listToggle = false;
      }

      function handleModelChange(nVal) {
        angular.forEach(s.data, function (value, index) {
          if (value[s.returnAs] === nVal) {
            if (typeof s.change !== 'undefined') {
              s.change(nVal);
            }
            handleSelect(index);
          }
        });
      }

      function dataTypeConverse() {
        if (!s.data) return;
        if(s.data.constructor === Array){
          s.isArray = true;
          s.isObject = false;
        }else if (typeof s.data === 'object' && (s.data instanceof Array === false)){
          s.isObject = true;
          s.isArray = false;
        }

      }
    }

    return directive;

  }

})();
