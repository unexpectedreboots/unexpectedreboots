// $(document).ready(function() {
  var elements = document.querySelectorAll("p, li, em, span, h1, h2, h3, h4, h5, td, tr, th, tbody");
  
  // var elements = document.getElementsByTagName("*");
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
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request, 'request');
  var allSelections = request.selection;
  for (var i = 0; i < allSelections.length; i++) {

    var importedSelection = JSON.parse(allSelections[i].anchor);
    editor.importSelection(importedSelection);
    var html = '<span style="background-color: yellow;">' + getCurrentSelection() + '</span>';
    var sel = window.getSelection();
        var range;
            //Set new Content
            if (sel.getRangeAt && sel.rangeCount) {
                range = window.getSelection().getRangeAt(0);
                range.deleteContents();

                // Create a DocumentFragment to insert and populate it with HTML
                // Need to test for the existence of range.createContextualFragment
                // because it's non-standard and IE 9 does not support it
                if (range.createContextualFragment) {
                    fragment = range.createContextualFragment(html);
                } else {
                    var div = document.createElement('div');
                    div.innerHTML = html;
                    fragment = document.createDocumentFragment();
                    while ((child = div.firstChild)) {
                        fragment.appendChild(child);
                    }
            
                }
                var firstInsertedNode = fragment.firstChild;
                var lastInsertedNode = fragment.lastChild;
                range.insertNode(fragment);
                if (firstInsertedNode) {
                    range.setStartBefore(firstInsertedNode);
                    range.setEndAfter(lastInsertedNode);
                }
                sel.removeAllRanges();
                sel.addRange(range);
            }
    
  }
});
function getCurrentSelection() {

  var html = '', sel;
       if (typeof window.getSelection != 'undefined') {
           sel = window.getSelection();
           if (sel.rangeCount) {
               var container = document.createElement('div');
               for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                   container.appendChild(sel.getRangeAt(i).cloneContents());
               }
               html = container.innerHTML;
           }
       } else if (typeof document.selection != 'undefined') {
           if (document.selection.type == 'Text') {
               html = document.selection.createRange().htmlText;
           }
       }
  
  return html;
  
};