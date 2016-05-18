'use strict';

/**
 * @ngdoc service
 * @name tutorialsApp.tomsService
 * @description
 * # tomsService
 * Service in the tutorialsApp.
 */
angular.module('tutorialsApp')
  .factory('TasksService', function () {
      var tasks = [
          { id: 1, name: 'task1' },
          { id: 2, name: 'task2' },
          { id: 3, name: 'task3' },
          { id: 4, name: 'task4' }
      ];

        var addTask = function(task) {
            tasks.push(task);
        };

        var removeTask = function() {
            //to implement    
            
        };

        var getTasks = function() {
            return tasks;
        };

        return {
            addTask: addTask,
            removeTask: removeTask,
            getTasks: getTasks
        };
    });
