angular.module('profileApp',['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
  // $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/views/home.html', 
    controller: 'homecontroller',
})
  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html', 
    controller: 'logincontroller',
})
  .state('blog', {
    url: '/blog',
    templateUrl: '/views/blog.html',
    controller: 'blogcontroller'
});
    

  $locationProvider.html5Mode(true);

  }]);



