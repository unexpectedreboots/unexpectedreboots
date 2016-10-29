chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab ) {
  if ( changeInfo.status === 'complete' ) {
    var username = localStorage.getItem('username');
    var tab = tabId;
    $.ajax({
      type: 'GET',
      url: 'http://104.237.1.118:3000/test/users/markups',
      data: {username: username},
      success: function(response) {
        alert(JSON.stringify(response) + 'markups yo');
        chrome.tabs.sendMessage(tab, {selection: response[0]});
      }
    })        
  }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) { 
  console.log('background script triggered');    
  var username = localStorage.getItem('username');
  var selection = request.selection;
  var url = '';
  var title = '';
  var text = request.text;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    url = tabs[0].url;
    title = tabs[0].title;
  //need url, title, and text
    $.ajax({
      type: "POST",
      url: 'http://104.237.1.118:3000/test/markups/create',
      data: {
        username: username,
        anchor: selection,
        url: url,
        title: title,
        text: request.text,
        comment: null
      },
      success: function() {
        alert('success');
      }
    })
  });
});

