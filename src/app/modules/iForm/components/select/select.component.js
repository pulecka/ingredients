/**
 * Created by bionaut on 14/06/15.
 */

(function(){
  'use strict';
  angular.module('select.component', [])
    .directive('selector', Selector);

  function Selector() {
    return{
      restrict: 'E',
      templateUrl: '/app/modules/iForm/components/select/select.template.html',
      scope:{
        data: '=',
        returnAs: '@',
        viewAs: '@',
        searchable: '@?',
        placeholder: '@?',
        // TODO sipka off/on
        template: '@?',
        default: '@?',
        model: '='
      },
      link: LinkFn
    };

    function LinkFn(scope) {

      var s = scope;

      s.select = handleSelect;

      if (s.default) {
          if (s.default > 0 && s.default <= s.data.length)
          s.selected = handleSelect(s.default);
      }

      function handleSelect(index) {
        s.selected = s.data[index];
        s.model = s.selected[s.returnAs];
        s.searchQuery = s.selected[s.viewAs];
        s.listToggle = false;
      }
    }
  }

})();
