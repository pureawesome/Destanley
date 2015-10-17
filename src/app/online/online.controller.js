(function() {
  'use strict';

  angular
    .module('destanley')
    .controller('OnlineController', OnlineController);

  /** @ngInject */
  function OnlineController($timeout, webDevTec) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';

    activate();

    function activate() {
      getWebDevTec();
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
