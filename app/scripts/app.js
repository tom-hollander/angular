'use strict';

/**
 * @ngdoc overview
 * @name tutorialsApp
 * @description
 * # tutorialsApp
 *
 * Main module of the application.
 */
angular
  .module('tutorialsApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/toms', {
        templateUrl: 'views/toms.html',
        controller: 'TomscontrollerCtrl',
        controllerAs: 'tomsController'
      })
      
      .otherwise({
        redirectTo: '/'
      });
  });

