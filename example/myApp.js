'use strict';
angular.module("myApp", ["semanticDropdown"])
    .controller("MyController", ['$scope', function ($scope) {
        $scope.values = [{ id: 1, text: 'Male'}, { id: 2, text: 'Female'}, { id: 2, text: 'This is a pretty long text, which makes the box wider hoprefully'}];
    }]);
