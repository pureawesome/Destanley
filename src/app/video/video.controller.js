(function() {
  'use strict';

  angular
    .module('destanley')
    .controller('VideoController', VideoController);

  /** @ngInject */
  function VideoController($timeout, servicesConfig) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';

    activate();

    function activate() {
      getData();
    }

    function getData() {
      vm.awesomeThings = servicesConfig.query({}, {'Page': 'video'});

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        //awesomeThing.rank = Math.random();
      });
    }
  }
})();
