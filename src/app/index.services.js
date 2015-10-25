(function() {
  'use strict';

  angular
    .module('destanley')
    .factory('servicesConfig', servicesConfig);

  function servicesConfig($resource, $http) {
    return $resource('http://localhost:3000/data/:Page.json', {}, {
      query: {'method':'GET', 'params':{'Page': '@Page' }, isArray:true}
    });

    //var get = $resource('http://localhost:3000/data/book.json');
  //  console.log(get);
//    return get;
    //return $http.get('http://localhost:3000/data/book.json')
      //.then(dataComplete)
      //.catch(dataFailed);

    function dataComplete(response) {
      console.log(response.data)
      return response.data;
    }

    function dataFailed(error) {
      console.log('XHR Failed for getContributors.\n' + angular.toJson(error.data, true))
    }
  }

})();
