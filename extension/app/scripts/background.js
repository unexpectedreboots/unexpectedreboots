chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) { 
  console.log('background script triggered');    
  var username = localStorage.getItem('username');
  var selection = request.selection;
  $.ajax({
    type: "POST",
    url: 'http://127.0.0.1:3000/api/markups/create',
    data: {
      username: username,
      selection: selection
    },
    success: function() {
      alert('success');
    }
  });
});

