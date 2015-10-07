/**
 * Created by bionaut on 14/06/15.
 */


// TODO: show/hide arrow
// TODO: show/hide label
// TODO: inline label
// TODO: bindToController


(function () {
  'use strict';
  angular.module('select.component', [])
    .directive('iSelect', iSelect);

  function iSelect() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/modules/iForm/components/select/select.template.html',
      scope: {
        data: '=',
        returnAs: '@',
        viewAs: '@',
        searchable: '@?',
        placeholder: '@?',
        size: '@?',
        template: '@?',
        default: '@?',
        name: '@?',
        label: '@?',
        inline: '@?',
        model: '=',
        change: '=?',
        tooltip: '@?',
        readOnly: '=?',
        validate: '@?'
      },
      controller: iSelectController,
      controllerAs: 'iSelect',
      link: linkFn
    };


    function linkFn(s, e, a) {
      e.on('click', function (ev) {
        ev.stopPropagation();
      })
    }

    iSelectController.$inject = [
      '$scope',
      '$timeout',
      '$element',
      'iUtils'
    ];
    function iSelectController($scope, $timeout, $element, iUtils) {

      var iSelect = this;
      var s = $scope;

      // methods
      iSelect.select = handleSelect;
      iSelect.toggleList = toggleList;
      iSelect.retrieveProperty = retrieveProperty;
      iSelect.reset = reset;
      iSelect.openList = openList;
      iSelect.handleInputEvents = handleInputEvents;

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

      s.$on('closeContextual', function () {
        iSelect.listToggle = false;
        s.$apply();
      });

      function handleRefresh(nVal, oVal) {
        if (nVal === oVal) return;
        dataTypeConverse();
        setDefault();
      }

      function setDefault() {
        if (s.default) {
          if (s.data && s.isArray) {
            handleSelect(s.data[s.default]);
          }
          if (s.data && s.isObject) {
            handleSelect(s.data[s.default]);
          }
        }
      }

      function openList() {
        generateList();
        iSelect.listToggle = true;
      }

      function generateList() {
        var width = $element[0].children[0].clientWidth;
        var height = $element[0].children[0].clientHeight;
        var list = $element[0].getElementsByClassName('i-select-list');
        list[0].style.minWidth = width + 'px';
        list[0].style.top = height + 'px';
        list[0].style.minHeight = height / 2 + 'px';
      }

      function toggleList() {
        generateList();
        iSelect.listToggle = !iSelect.listToggle;
      }

      function handleSelect(item) {
        var index = iUtils.getIndex(item, s.data);
        iSelect.selected = item;
        s.model = (s.returnAs === '$index') ? index : iSelect.selected[s.returnAs];
        iSelect.searchQuery = (s.searchable) ? retrieveProperty(iSelect.selected, s.viewAs) : '';
        iSelect.match = true;
        iSelect.listToggle = false;
      }

      function handleModelChange(nVal, oVal) {
        if (!nVal) {
          return;
        }
        angular.forEach(s.data, function (value, index) {
          if (value[s.returnAs] === nVal) {
            if (typeof s.change !== 'undefined' && (nVal !== oVal) && (typeof oVal !== 'undefined')) {
              s.change(nVal);
            }
            handleSelect(value);
          }
        });
      }


      function retrieveProperty(obj, path) {
        if (!obj) return void 0;
        return objectPath.get(obj, path);
      }

      function dataTypeConverse() {
        if (!s.data) return;
        if (s.data.constructor === Array) {
          s.isArray = true;
          s.isObject = false;
        } else if (typeof s.data === 'object' && (s.data instanceof Array === false)) {
          s.isObject = true;
          s.isArray = false;
        }

      }

      function reset() {
        iSelect.selected = null;
        s.model = null;
        iSelect.searchQuery = null;
        iSelect.listToggle = false;
      }

      function handleInputEvents() {
        var _lng = (s.isObject) ? Object.keys(s.data).length : s.data.length;
        var _count = 0;
        iSelect.match = false;
        iSelect.notInListWarning = false;

        angular.forEach(s.data, function (item) {
          if (iSelect.searchQuery && item[s.viewAs].toString().toLowerCase() === iSelect.searchQuery.toString().toLowerCase()) {
            iSelect.match = true;
            handleSelect(item);
          }

          if (++_count === _lng && !iSelect.match) {
            iSelect.notInListWarning = true;
          }

        });
      }
    }

    return directive;

  }

})();
