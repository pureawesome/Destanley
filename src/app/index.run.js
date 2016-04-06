(function() {
  'use strict';

  angular
    .module('destanley')
    .run(runBlock)
    .run(ga);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

  function ga($log, $rootScope, $location, $window) {
    $rootScope.$on('$viewContentLoaded', function(event) {
      $window.ga('send', 'pageview', { page: $location.url() });
    });
  }
})();
