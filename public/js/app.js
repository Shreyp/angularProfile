angular.module('profileApp', [
  'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/partial-home.html',
        controller: 'homeController'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'views/partial-login.html',
        controller: 'loginController'
      })

      .state('blog', {
        url: '/blog',
        templateUrl: 'views/partial-blog.html',
        controller: 'blogController'
      });


  $locationProvider.html5Mode(true);
}]);

