'use strict';
angular.module("myApp", ["semanticDropdown"])
    .controller("MyController", ['$scope', function ($scope) {
        $scope.values = [{ id: 1, text: 'Male'}, { id: 2, text: 'Female'}, { id: 3, text: 'This is a pretty long text to test how that looks'}];
    }]);
