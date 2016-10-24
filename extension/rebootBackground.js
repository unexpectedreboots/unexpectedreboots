
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('in extension')

  //$scope.sendText(request.data)
  sendResponse({sample:'updated DB'})
  return true;
});
