(function() {
  'use strict';

  angular
    .module('destanley')
    .controller('BookController', BookController);

  /** @ngInject */
  function BookController($timeout, webDevTec, servicesConfig) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';

    activate();

    function activate() {
      getWebDevTec();
    }

    function getWebDevTec() {
      vm.awesomeThings = servicesConfig.query({}, {'Page': 'book'});
      console.log(vm.awesomeThings);
      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        //awesomeThing.rank = Math.random();
      });
    }
  }
})();
