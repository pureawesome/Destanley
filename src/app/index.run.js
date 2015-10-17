(function() {
  'use strict';

  angular
    .module('destanley')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
