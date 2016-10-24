myApp.controller('rebootController', function($scope) {
	$scope.selectedText ='';
	$scope.msgCount = 0;
	
	
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	  console.log('in popup')
	  console.log(request);
	 
	  if (request.action === 'reboot-background'){
	    $scope.sendText(request)
	    sendResponse({background:'confimation from popup'})
	  } 
  	return true;
	});


	$scope.sendText = function(message) {
		$scope.selectedText = message.data;
		$scope.msgCount++;
		//alert('msg count: ' + $scope.msgCount)
		console.log($scope.selectedText)
		chrome.browserAction.setBadgeText({text:$scope.msgCount.toString()})
	}

})
