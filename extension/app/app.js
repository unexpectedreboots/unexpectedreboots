var myApp = angular.module('Markable', [
  'ui.router',
  'dropdownController',
  'mainController' 
])

.config(function($stateProvider) {
  $stateProvider
  .state('/', {
    templateUrl: '../views/main.html',
    controller: 'main',
    authenticate: true
  })
  .when('/signIn', {
    templateUrl: '../views/signInOrUp.html',
    controller: 'dropdown',
    authenticate: false
  })
})
.run(function($rootScope,$location,Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    // if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
    //       $location.path('/signin');
  })
})
