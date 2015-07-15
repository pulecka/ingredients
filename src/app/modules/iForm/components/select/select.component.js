/**
 * Created by bionaut on 14/06/15.
 */

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
        model: '='
      },
      controller: iSelectController,
      controllerAs: 'iSelect'
    };

    iSelectController.$inject = ['$scope'];
    function iSelectController($scope) {

      var iSelect = this;
      var s = $scope;

      // methods
      iSelect.select = handleSelect;

      // convert source data
      dataTypeConverse();

      // set default value
      setDefault();

      // watch data property for changes
      s.$watch('data', handleRefresh);

      // watch model
      s.$watch('model', handleModelChange);

      function handleRefresh(nVal, oVal) {
        if (nVal === oVal) return;
        setDefault();
      }

      function setDefault() {
        if (s.default) {
          if (s.data && s.default >= 0 && s.default <= s.data.length-1)
            handleSelect(s.default);
        }
      }

      function handleSelect(index) {
        iSelect.selected = s.data[index];
        s.model = (s.returnAs === '$index') ? index : iSelect.selected[s.returnAs];
        iSelect.searchQuery = (s.searchable) ? iSelect.selected[s.viewAs] : '';
        iSelect.listToggle = false;
      }

      function handleModelChange(nVal, oVal) {
        if (nVal === oVal) return;
        angular.forEach(s.data, function (value, index) {
          if (value[s.returnAs] === nVal) {
            handleSelect(index);
          }
        });
      }

      function dataTypeConverse() {
        if (typeof s.data == 'object') {
          var objectToArray = [];
          for (var key in s.data) {
            s.data[key]['iKey'] = key;
            objectToArray.push(s.data[key]);
          }
          s.data = objectToArray;
        }
      }
    }

    return directive;

  }

})();
