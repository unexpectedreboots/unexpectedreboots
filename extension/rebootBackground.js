

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('in background')
  console.log(request);
 
  if (request.action === 'reboot-content'){
    chrome.runtime.sendMessage(
      {action: 'reboot-background',
      data: request.data,
      url: request.url}, function(response) {
      console.log('response from popup: ', response)      
    });
    sendResponse({background:'updated DB'})
  } 
  

  return true;
});

 



