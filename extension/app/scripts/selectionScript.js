document.addEventListener('mouseup',function(event) {
  // var selectedText = window.getSelection();
  // var parentElement = window.getSelection().anchorNode.parentElement;
  // console.log(parentElement);
  // if (selectedText.length) {
    // console.log(selectedText);
    // console.log(Document.activeElement);
    // // console.log(window.getSelection());
    // // var node = document.createElement("H1");
    // // var textnode = document.createTextNode("test");
    // // console.log(node,'node')
    // // node.appendChild(textnode);
    // // parentElement.appendChild(node);
    // // console.log(selectedText);

    // console.log(window.getSelection().anchorNode.textContent.substring(
    //   window.getSelection().extentOffset,
    //   window.getSelection().anchorOffset));
  // }

  var savedSel = rangy.saveSelection();
  console.log(savedSel);
});
