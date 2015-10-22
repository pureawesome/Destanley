(function() {
  'use strict';

  angular
    .module('destanley')
    .factory('servicesConfig', servicesConfig);

  function servicesConfig($resource) {
    var data = $resource('http://localhost:3000/data/book.json', {}, {
      query: {method:'GET', isArray:true}
    });
    console.log(data.toJson);
    return data;
    function dataComplete(response) {
      return response;
    }

    function dataFailed(error) {
      console.log('XHR Failed for getContributors.\n' + angular.toJson(error.data, true))
    }
  }

})();
