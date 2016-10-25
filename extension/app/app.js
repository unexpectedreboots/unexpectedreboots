var myApp = angular.module('Markable', ['ngRoute','dropdownController'])
  myApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: '../views/dropdownDashBoard.html',
      controller: 'dropdown'
  })
});
