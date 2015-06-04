'use strict';
angular.module("semanticDropdown", [])
    .directive("semanticDropdown", function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                values: '=',
                selectedId: '=',
                placeholder: '@'
            },
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
                '<div class="ui search selection dropdown">' +
                    '<input type="hidden" name="id">' +
                    '<i class="dropdown icon"></i>' +
                    '<div class="default text">{{placeholder}}</div>' +
                    '<div class="menu">' +
                        '<div ng-repeat="value in values" class="item" data-value="{{value.id}}">{{value.text}}</div>' +
                    '</div>' +
                '</div>'
        }
    });
