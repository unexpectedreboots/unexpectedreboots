angular.module('dropdownController', [])

.controller('dropdown', function($scope, $http, $location, $state) {
  $scope.signinMode = true;
  $scope.signupMode = false;
  $scope.usernamePattern = '^$|^[a-z]+[A-Za-z0-9_-.]+';
 
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
      console.log('then statement sign up', response);
      if (response.data) {
        localStorage.setItem('username', $scope.username);
        $state.transitionTo('home');
      }
    });
  };

  $scope.showSection = function (section) {
    if (section === 'login') {
      $scope.signinMode = true;
      $scope.signupMode = false;
    } else {
      $scope.signinMode = false;
      $scope.signupMode = true;
    }
  };

  $scope.logIn = function() {

    $http({ 
      method: 'POST',
      url: 'http://104.237.1.118:3000/api/users/login',
      params: {
        username: $scope.username, 
        password: $scope.password
      },
      headers: {'Content-Type': 'application/json'} 
    }).then(function(response) {
      console.log('then statement logIn', response);
      if (response.data === true) {
        localStorage.setItem('username', $scope.username);
        $state.transitionTo('home');
      }
    });
  };
});


