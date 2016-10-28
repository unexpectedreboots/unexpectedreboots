$(document).ready(function() {
  var elements = document.querySelectorAll("p, li, span, h1, h2, h3, h4, h5, td, tr, th, tbody");
  var HighlighterButton = MediumEditor.extensions.button.extend({
      name: 'highlighter',
      tagNames: ['mark'],
      contentDefault: '<b>H</b>',
      contentFA: '<i class="fa fa-paint-brush"></i>',
      aria: 'Hightlight',
      action: 'highlight',

      init: function () {
          MediumEditor.extensions.button.prototype.init.call(this);
          this.button.classList.add('medium-editor-action');
      },

      handleClick: function (event) {
          this.classApplier.toggleSelection();

          this.base.checkContentChanged();
      }
  });
  editor = new MediumEditor(elements, {
    anchorPreview: false,
    placeholder: false,
    disableEditing: false,
    toolbar: {
      buttons: ['bold', 'italic']
    },
    // extensions: {
    //     'highlighter': new HighlighterButton()
    //   }
  });
  editor.subscribe('editableInput', function (event, editable) {
      // Do some work
      console.log(event, 'event');
      console.log(editable,'editable');

  });
  var flag = false;
  var testExport = '';
  document.addEventListener('mouseup', function(event) {
    console.log(editor.checkSelection(), 'editor.checkSelection');
    // console.log(editor.getFocusedElement(), 'editor.getFocusedElement');
    console.log(JSON.stringify(editor.exportSelection()), 'editor.exportSelection');
    if (!flag) {
      testExport = editor.exportSelection();
      console.log('before send');
      flag = true;
      chrome.runtime.sendMessage({
        action : 'add',
        selection: JSON.stringify(testExport)
      }, function(response) {
        console.log('received a response', response)
      });
    }

  });
});
//need to send storage object from background script to server
//   window.onkeyup = function(e) {
//     console.log('window');
//     editor.importSelection(testExport);
//     if (e.keyCode === 119) {
//       console.log('more stuff');
//       editor.importSelection(testExport);
//     }
//   };
//   // document.addEventListener('onscroll', function(event) {
//   //   editor.importSelection(testExport);
//   //   console.log('triggered');
//   // })
// });



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
