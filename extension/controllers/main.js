angular.module('mainController', ['ui.router'])

.controller('main', function($scope, $http, $location, $state) {
  $scope.testSession = function() {
    $http({ 
      method: 'POST',
      url: 'http://104.237.1.118:3000/test/groups/users',
      params: {groupID: '1'}
    }).then(function(response) {
      console.log(response);
      console.log('inside testSession');
    });
    console.log('outside of post request');
  },
  $scope.signOut = function() {
    chrome.cookies.remove({url: 'http://104.237.1.118:3000/', name: 'connect.sid'}, function(removedCookie) {
      console.log(removedCookie);
      localStorage.removeItem('username');
        
      $state.transitionTo('login');
    });
  };
});
