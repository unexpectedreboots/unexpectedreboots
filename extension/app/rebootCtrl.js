myApp.controller('rebootController', function($scope) {
	$scope.selectedText='';
	$scope.sendText = function(message) {
		$scope.selectedText = message;
	}
	//$scope.selectedText="test"
})