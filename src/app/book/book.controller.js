(function() {
  'use strict';

  angular
    .module('destanley')
    .controller('BookController', BookController);

  /** @ngInject */
  function BookController($timeout, servicesConfig) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';

    activate();

    function activate() {
      getData();
    }

    function getData() {
      vm.awesomeThings = servicesConfig.query({}, {'Page': 'book'});
      
      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        //awesomeThing.rank = Math.random();
      });
    }
  }
})();
