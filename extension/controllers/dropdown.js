angular.module('dropdownController', [])

.controller('dropdown', function($scope, $http, $location) {

  $scope.signUp = function() {

    $http({ 
      method: 'POST',
      url: 'http://104.237.1.118:3000/api/users/register',
      params: {
        email: $scope.email, 
        username: $scope.username, 
        password: $scope.password
      },
      headers: {'Content-Type': 'application/json'}
    }).then(function(response) {
      if (response.data) {
        $location.path('/main');
      }
    });
  };

  
  $scope.logIn = function() {

    $http({ 
      method: 'POST',
      url: 'http://104.237.1.118:3000/api/users/login',
      params: {
        username: $scope.username, 
        password: $scope.password
      },
      headers:{'Content-Type': 'application/json'} 
    }).then(function(response) {
      if (response.data === true) {
        $location.path('/main');
      }
    });
  }
});
