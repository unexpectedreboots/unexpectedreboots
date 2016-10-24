var myApp = angular.module('reboot', ['ngRoute','dropdownController'])
  myApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: '../views/dropdownDashBoard.html',
      controller: 'dropdown'
  })
});
