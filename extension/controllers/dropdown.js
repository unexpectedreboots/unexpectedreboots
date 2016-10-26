angular.module('dropdownController',[])
.controller('dropdown',function($scope, $http, $location) {
  $scope.signUp = function() {
    console.log('this clicked!')
    $location.path('/main');
    // $http({ 
    //   method: 'POST',
    //   url: '/api/register',
    //   data: {email: $scope.email, username: $scope.username, password: $scope.password},
    //   headers:{'Content-Type': 'application/json'} 
    // }).then(function(err,response) {
    //   // if(response) {
    //   //   //redirect
        
    //   // }
    // });
  };
  $scope.logIn = function() {
    console.log('this clicked!')
    $location.path('/main');
    // $http({ 
    //   method: 'POST',
    //   url: '/api/login',
    //   data: {email: $scope.email, username: $scope.username, password: $scope.password},
    //   headers:{'Content-Type': 'application/json'} 
    // }).then(function(err,response) {
    //   // if(response) {
    //   //   //redirect
        
    //   // }
    // });
  }
});
