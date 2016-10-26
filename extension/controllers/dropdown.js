angular.module('dropdownController',[])
.controller('dropdown',function($scope, $http, $location) {
  $scope.signUp = function() {
    console.log('this clicked!')
    $http({ 
      method: 'POST',
      url: 'http://104.237.1.118:3000/api/register',
      params: {email: $scope.email, username: $scope.username, password: $scope.password},
      headers:{'Content-Type': 'application/json'} 
    }).then(function(response) {
      if(response.data) {
        $location.path('/main');
      }
    });
  };
  $scope.logIn = function() {
    console.log('this clicked!')
    $http({ 
      method: 'POST',
      url: 'http://104.237.1.118:3000/api/login',
      params: {email: $scope.email, username: $scope.username, password: $scope.password},
      headers:{'Content-Type': 'application/json'} 
    }).then(function(response) {
      if(response.data === true) {
        $location.path('/main');
      }
    });
  }
});
