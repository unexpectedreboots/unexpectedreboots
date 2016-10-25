String.prototype.hashCode = function() {
  var hash = 0;
  if (this.length === 0) {
    return hash;
  }
  for (i = 0; i < this.length; i++) {
    char = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('in background');
  if (request.action === 'reboot-content') {
    var objToStore = {};
    objToStore.url = request.url;
    objToStore.message = request.data;
    objToStore.createdAt = new Date();
    objToStore.position = [];
    chrome.storage.local.set({hashCode: objToStore}, function() {
      // Notify that we saved.
      console.log('highlight saved');
    });

    chrome.runtime.sendMessage(
    {action: 'reboot-background',
    data: request.data,
    url: request.url}, function(response) {
      console.log('response from popup: ', response);      
    });
    sendResponse({background: 'updated DB'});
  } 
  return true;
});

 