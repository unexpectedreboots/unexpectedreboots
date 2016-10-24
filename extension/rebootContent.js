

document.addEventListener('mouseup',function(event)
{
  var selectedText = window.getSelection().toString();
		
  if (selectedText.length) {
  	
		
  	chrome.runtime.sendMessage(
  		{action: 'reboot-content',
  		data: selectedText,
  		url: window.location}, function(response) {
			console.log('rebootExt js, selectedText: ', selectedText)
			console.log(response);
		  
		});
    
  }
})


