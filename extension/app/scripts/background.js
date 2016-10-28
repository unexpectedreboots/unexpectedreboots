chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) { 
  console.log('background script triggered');    
  var username = localStorage.getItem('username');
  var selection = request.selection;
  $.ajax({
    type: "POST",
    url: 'http://104.237.1.118:3000/test/markups/create',
    data: {
      username: username,
      anchor: selection
    },
    success: function() {
      alert('success');
    }
  });
});

