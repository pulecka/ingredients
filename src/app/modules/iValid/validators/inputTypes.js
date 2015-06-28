/**
 * Created by bionaut on 20/06/15.
 */

(function(){
  'use strict';
  angular.module('iValid.module')
    .config(Config);

  Config.$inject = ['iValidProvider'];
  function Config(iValidProvider) {

    iValidProvider.newValidator('number', null, 'This is not a number');
    iValidProvider.newValidator('email', null, 'This is not an valid email');
    iValidProvider.newValidator('date', null, 'This is not a valid date');
    iValidProvider.newValidator('url', null, 'This is not a valid url');

    iValidProvider.newValidator('required', null, 'This field is required!');

  }
})();
