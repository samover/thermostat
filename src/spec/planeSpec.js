describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane;
  });

  // As an air traffic controller
  // So planes can land safely at my airport
  // I would like to instruct a plane to land

  it ('plane can land', function() {
    plane.land();
    expect(plane.isLanded).toBe(true);
  });

  //   As an air traffic controller
  //  So planes can take off safely from my airport
  // I would like to instruct a plane to take off

  it('plane can take off', function(){
    plane.isLanded = true;
    plane.takeOff();
    expect(plane.isLanded).toBe(false);
  });

});
