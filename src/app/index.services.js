(function() {
  'use strict';

  angular
    .module('destanley')
    .factory('servicesConfig', servicesConfig);

  function servicesConfig($resource) {
    return $resource('/data/:Page.json', {}, {
      query: {'method':'GET', 'params':{'Page': '@Page' }, isArray:true}
    });
  }

})();
