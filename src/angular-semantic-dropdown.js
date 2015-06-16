'use strict';
angular.module("semanticDropdown", [])
    .directive("semanticDropdown", function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                values: '=',
                selectedId: '=',
                placeholder: '@',
                class: '@'
            },
            controller: ['$scope', function ($scope) {
                $scope.$watchGroup(['selectedId', 'values'], function(data) {
                    var selectedId = data[0];
                    var values = data[1];

                    if (selectedId) {
                        for (var i = 0; i < values.length; i++) {
                            if (selectedId === values[i].id) {
                                $scope.selectedValue = values[i];
                            }
                        }
                    }
                });
            }],
            link: function(scope, element) {
                $(element).dropdown({
                    onChange: function(value) {
                        scope.$apply(function(scope) {
                            scope.selectedId = value;
                        });
                    }
                });
            },
            template:
            '<div class="ui selection dropdown {{class}}">' +
                '<input type="hidden" name="id">' +
                '<i class="dropdown icon"></i>' +
                '<div class="text" ng-class="{\'default\' : !selectedValue}">{{selectedValue ? selectedValue.text : placeholder}}</div>' +
                '<div class="menu">' +
                    '<div ng-repeat="value in values" class="item" ng-class="{\'active selected\' : selectedValue.id === value.id}" data-value="{{value.id}}">{{value.text}}</div>' +
                '</div>' +
            '</div>'
        }
    });
