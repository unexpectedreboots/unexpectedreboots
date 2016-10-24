
document.addEventListener('mouseup',function(event)
{
  var selectedText = window.getSelection().toString();
		
  if(selectedText.length) {		
  	console.log('rebootExt js, selectedText: ', selectedText)
		chrome.runtime.sendMessage({data: "selectedText"}, function(response) {
		  console.log(response);
		});
    
  }
})