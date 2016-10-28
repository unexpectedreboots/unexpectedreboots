chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {     
    if(request) {
     if(request.action === 'add') {
      var username = localStorage.getItem('username');
      $.post('1')
      storageService.add(request.data);
     }
    }

});