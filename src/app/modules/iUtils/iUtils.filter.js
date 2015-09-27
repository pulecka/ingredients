(function() {

  'use strict';

  angular
    .module('iUtils.module')
    .filter('filterObject', filterObject);

  filterObject.$inject = [
    '$filter',
    'iUtils'
  ];
  function filterObject($filter, iUtils) {
    return function(collection, expression, comparator) {
      var filteredArray = $filter('filter')(iUtils.arrayify(collection), expression, comparator);
      return iUtils.objectify(filteredArray);
    };
  }
})();
