var myApp = angular.module('Markable', ['ngRoute','dropdownController'])
  myApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: '../views/dropdown.html',
      controller: 'dropdown'
  })
});
