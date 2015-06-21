/**
 * Created by bionaut on 08/06/15.
 */

(function(){
  'use strict';
  angular.module('iModal.module', [])
    .factory('iModal', iModal);

  iModal.$inject = ['$document', '$compile', '$rootScope', '$http'];
  function iModal($document, $compile, $rootScope, $http) {
    var buffer = {};
    var body = $document[0].body;

    return{
      open: openModal,
      load: loadModal,
      closeModal: closeModal,
      getBuffer: getBuffer
    };

    function openModal(content) {
      var modalElement = $compile( "<i-modal>"+ content +"</i-modal>" )($rootScope.$new());
      angular.element(body).append(modalElement);
    }

    function closeModal() {
    //  TODO
    }

    function loadModal(url, vm) {
      buffer = vm || {};
      $http.get(url)
        .then(
        function (data) {
          var modalElement = $compile( '<i-modal>'+ data.data+'</i-modal>')($rootScope.$new());
          angular.element(body).append(modalElement);
        },
        function (err) {
        //  error
        }
      );
    }

    function getBuffer() {
      return buffer;
    }
  }

})();
