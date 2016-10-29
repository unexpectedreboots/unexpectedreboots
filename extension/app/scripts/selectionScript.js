$(document).ready(function() {
  // var elements = document.querySelectorAll("p, li, em, span, h1, h2, h3, h4, h5, td, tr, th, tbody");
  var elements = document.getElementsByTagName("*");
  var postSelection = function(targetText) {
    var testExport = editor.exportSelection();
    console.log('before send');
    chrome.runtime.sendMessage({
      action : 'add',
      selection: JSON.stringify(testExport),
      text: targetText
    }, function(response) {
      console.log('received a response', response)
    });
  }
  editor = new MediumEditor(elements, {
    anchorPreview: false,
    placeholder: false,
    disableEditing: true,
    toolbar: {
      buttons: ['bold', 'italic','sendSelection']
    },
    extensions: {
        'sendSelection': new MediumButton({
          label: 'Send',
          start: '<span style="background-color: powderblue;">',
          end: '</span>',
          action: function(html, mark) {
            postSelection(html);
            alert(html);
            return html;
          }
        })
      }
  });
  editor.subscribe('editableInput', function (event, editable) {
      // Do some work
      console.log(event, 'event');
      console.log(editable,'editable');

  });
});
// document.addEventListener('mouseup',function(event) {
//   // var selectedText = window.getSelection();
//   // var parentElement = window.getSelection().anchorNode.parentElement;
//   // console.log(parentElement);
//   // if (selectedText.length) {
//     // console.log(selectedText);
//     // console.log(Document.activeElement);
//     // // console.log(window.getSelection());
//     // // var node = document.createElement("H1");
//     // // var textnode = document.createTextNode("test");
//     // // console.log(node,'node')
//     // // node.appendChild(textnode);
//     // // parentElement.appendChild(node);
//     // // console.log(selectedText);

//     // console.log(window.getSelection().anchorNode.textContent.substring(
//     //   window.getSelection().extentOffset,
//     //   window.getSelection().anchorOffset));
//   // }

//   var savedSel = rangy.saveSelection();
//   console.log(savedSel);
// });
//to use later
// var HighlighterButton = MediumEditor.extensions.button.extend({
//     name: 'highlighter',
//     tagNames: ['mark'],
//     contentDefault: '<b>H</b>',
//     contentFA: '<i class="fa fa-paint-brush"></i>',
//     aria: 'Hightlight',
//     action: 'highlight',

//     init: function () {
//         MediumEditor.extensions.button.prototype.init.call(this);
//         this.button.classList.add('medium-editor-action');
//     },

//     handleClick: function (event) {
//         this.classApplier.toggleSelection();

//         this.base.checkContentChanged();
//     }
// });