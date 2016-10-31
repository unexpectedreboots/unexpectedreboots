chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab ) {
  if ( changeInfo.status === 'complete' ) {
    var username = localStorage.getItem('username');
    var tabUrl = tab.url;
    var userMarkups = [];
    if (username) {
      var tab = tabId;
      $.ajax({
        type: 'GET',
        url: 'http://104.237.1.118:3000/test/users/markups',
        data: {username: username},
        success: function(response) {
          for (var i = 0; i < response.length; i++) {
            if (tabUrl === response[i].url) {
              userMarkups.push(response[i]);
            }
          }
          if (userMarkups.length) {
            chrome.tabs.sendMessage(tab, {selection: userMarkups});
          }
          //get all groups for a user
          $.ajax({
            type: 'GET',
            url: 'http://104.237.1.118:3000/test/users/groups',
            data: {username: username},
            success: function(response) {
              var groups = [];
              for(var i = 0; i< response.length; i++) {
                groups.push(response[i].groupid);
              }
              //get all messages from groups
              for(var j = 0; j < groups.length; j++) {
                $.ajax({
                  type: 'GET',
                  url: 'http://104.237.1.118:3000/api/groups/markups',
                  data: {groupID: groups[j]},
                  success: function(response) {
                    var groupMarkups = [];
                    for (var x = 0; x < response.length; x++) {
                      if (tabUrl === response[x].url) {
                        groupMarkups.push(response[x]);
                      }
                    };
                    if (groupMarkups.length) {
                    chrome.tabs.sendMessage(tab, {selection: groupMarkups});
                    };
                  }
                })
              };
            } 
          })
        }
      });
    }
  }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) { 
  console.log('background script triggered');    
  var username = localStorage.getItem('username');
  if (username) {
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
        url: 'http://104.237.1.118:3000/api/markups/create',
        data: {
          username: username,
          anchor: selection,
          url: url,
          title: title,
          text: request.text,
          comment: null
        },
        success: function() {
          // alert('success');
        }
      });
      $.ajax({
        type: 'GET',
        url: 'http://104.237.1.118:3000/test/users/groups',
        data: {username: username},
        success: function(response) {
          var postGroups = [];
          if(Array.isArray(response)){
            for(var i = 0; i < response.length; i++) {
              postGroups.push(response[i].groupid);
            }
            // alert(postGroups);
            for (var j = 0; j <postGroups.length; j++) {
              $.ajax({
                type: 'POST',
                url: 'http://104.237.1.118:3000/test/markups/share',
                data: {
                  username: username,
                  anchor: selection,
                  url: url,
                  title: title,
                  text: request.text,
                  comment: null,
                  groupID: postGroups[j]
                },
                success: function() {
                },
                error: function(obj,string,other) {
                  // alert(obj + string + other)
                }
              });
            }
          }
        }
      });
    });
  } 
})

