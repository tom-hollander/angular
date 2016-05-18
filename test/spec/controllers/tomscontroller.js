'use strict';

describe('Controller: TomscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('tutorialsApp'));

  var TomscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TomscontrollerCtrl = $controller('TomscontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TomscontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
