document.addEventListener('mouseup',function(event) {
  var selectedText = window.getSelection().toString();
  var parentElement = window.getSelection().anchorNode.parentElement;
  console.log(parentElement);
  if (selectedText.length) {
    console.log(Document.activeElement);
    // console.log(window.getSelection());
    // var node = document.createElement("H1");
    // var textnode = document.createTextNode("test");
    // console.log(node,'node')
    // node.appendChild(textnode);
    // parentElement.appendChild(node);
    // console.log(selectedText);
  }
});
