var myApp = angular.module('reboot', ['ngRoute','dropdownController'])
  myApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: '../views/dropdown.html',
      controller: 'dropdown'
  })
});
