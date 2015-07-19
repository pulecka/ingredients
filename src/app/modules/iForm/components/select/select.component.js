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
        dataTypeConverse();
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
            if (typeof s.change !== 'undefined') {
              s.change(nVal);
            }
            handleSelect(index);
          }
        });
      }

      function dataTypeConverse() {
        if (s.data && s.data.length > 0) return;
        if (typeof s.data === 'object') {
          var _buffer = [];
          angular.forEach(s.data, function (value, key) {
            var _payload = value;
            _payload.iKey = key;
            _buffer.push(_payload)
          });
          s.data = _buffer;
        }
      }
    }

    return directive;

  }

})();
