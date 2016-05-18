'use strict';

/**
 * @ngdoc function
 * @name tutorialsApp.controller:TomscontrollerCtrl
 * @description
 * # TomscontrollerCtrl
 * Controller of the tutorialsApp
 */
angular.module('tutorialsApp')
  .controller('TomscontrollerCtrl', ['$scope', '$interval', 'TasksService', function ($scope, $interval, TasksService) {
      $scope.tasks = TasksService.getTasks();

    }]);
