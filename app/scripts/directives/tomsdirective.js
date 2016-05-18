'use strict';

/**
 * @ngdoc directive
 * @name tutorialsApp.directive:tomsDirective
 * @description
 * # tomsDirective
 */
angular.module('tutorialsApp')
  .directive('tom', function ( $interval) {
    return {
        restrict: 'E',
        template:'<div>{{before2}} {{before1}} {{current}}</div>' +
                 '<div>{{summary}}</div>',
        link: function ($scope) {
            $scope.summary = ' ';
            $interval(function () {
                
                $scope.before2 = $scope.before1 || 0;
                $scope.before1 = $scope.current || 1;
                $scope.current = $scope.before2 + $scope.before1;

                $scope.summary += $scope.current + ' ';
            }, 1000);

        }
     
    };
  });
