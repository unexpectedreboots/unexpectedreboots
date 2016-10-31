var myApp = angular.module('Markable', [
  'ui.router',
  'dropdownController',
  'mainController',
  'Markable.directives'
])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '../views/main.html',
    controller: 'main',
    authenticate: true
  })
  .state('login', {
    url: '/login',
    templateUrl: '../views/signInOrUp.html',
    controller: 'dropdown',
    authenticate: false
  });
})
.run(['$state', function ($state) {
  console.log($state);
}])
.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function (evt, toState) {

    chrome.cookies.getAll({url: 'http://104.237.1.118:3000/dashboard.html'}, function(cookie) {
      console.log('cookie:', cookie);
      if (cookie) {
        if (!cookie.length > 0) {
          if (toState.authenticate) {
            evt.preventDefault();
            $state.transitionTo('login');
          }  
        }
      }
    });
  });
});

