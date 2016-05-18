'use strict';

angular.module('tutorialsApp').
    directive('tasks', function() {
        return {
            restrict: 'E',
            scope: {
                data:'='
            },
            templateUrl: 'views/directives/tasks.html',
           
        };
    });