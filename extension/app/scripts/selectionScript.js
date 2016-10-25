// var highlighterApp = angular.module('highlighter', []);
// document.addEventListener('load', function() {
//   var html = document.querySelector('html');
//   html.setAttribute('class', 'ng-app');
//   var viewport = document.getElementById('viewport');
//   viewport.setAttribute('ng-controller', 'MainController');
// });
document.addEventListener('mouseup',function(event) {
  var selectedText = window.getSelection().toString();
  var parentElement = window.getSelection().anchorNode.parentElement;
  console.log(parentElement);
  if (selectedText.length) {
    console.log(Document.activeElement);
    console.log(window.getSelection());
    var node = document.createElement("H1");
    var textnode = document.createTextNode("test");
    console.log(node,'node')
    node.appendChild(textnode);
    parentElement.insertAfter(node);
  console.log(selectedText);
  }
});
