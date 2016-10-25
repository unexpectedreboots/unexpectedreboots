angular.module('dropdownController',[])
.controller('dropdown',function($scope) {
  $scope.selectedText = '';
  $scope.getSelectionText = function() {
    var text = "";
    if (window.getSelection) {
        $scope.selectedText = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        $scope.selectedText = document.selection.createRange().text;
    }
    return text;
  };
});
