document.addEventListener('mouseup', function(event) {
  var selectedText = window.getSelection().toString();
  chrome.tabs.executeScript({
    code: 'alert(document.title)'
  });
  if (selectedText.length) {
    chrome.runtime.sendMessage({action: 'reboot-content',
    data: selectedText,
    url: window.location.href}, function(response) {
      console.log('rebootExt js, selectedText: ', selectedText);     
      console.log(response);
    });   
  }
});


