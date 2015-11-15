(function() {
  'use strict';

  angular
    .module('destanley')
    .controller('OnlineController', OnlineController);

  /** @ngInject */
  function OnlineController($timeout, servicesConfig) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';

    activate();

    function activate() {
      getData();
    }

    function getData() {
      vm.awesomeThings = servicesConfig.query({}, {'Page': 'online'});

      // angular.forEach(vm.awesomeThings, function(awesomeThing) {
      //   awesomeThing.rank = Math.random();
      // });
    }
  }
})();
