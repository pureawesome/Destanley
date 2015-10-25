(function() {
  'use strict';

  angular
    .module('destanley')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';

    activate();

    function activate() {
      getWebDevTec();
    }

    function getWebDevTec() {
      //vm.awesomeThings = webDevTec.getTec();

      //angular.forEach(vm.awesomeThings, function(awesomeThing) {
      //  awesomeThing.rank = Math.random();
      //});
    }
  }
})();
