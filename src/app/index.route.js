(function() {
  'use strict';

  angular
    .module('destanley')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/book', {
        templateUrl: 'app/book/book.html',
        controller: 'BookController',
        controllerAs: 'book'
      })
      .when('/online', {
        templateUrl: 'app/online/online.html',
        controller: 'OnlineController',
        controllerAs: 'online'
      })
      .when('/video', {
        templateUrl: 'app/video/video.html',
        controller: 'VideoController',
        controllerAs: 'video'
      })
      .otherwise({
        redirectTo: '/'
      });

      if (window.history && window.history.pushState) {
       $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
        });
      }
  }

})();
