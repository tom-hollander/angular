'use strict';

describe('Service: tomsService', function () {

  // load the service's module
  beforeEach(module('tutorialsApp'));

  // instantiate service
  var tomsService;
  beforeEach(inject(function (_tomsService_) {
    tomsService = _tomsService_;
  }));

  it('should do something', function () {
    expect(!!tomsService).toBe(true);
  });

});
