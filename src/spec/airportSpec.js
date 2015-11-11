describe('Airport', function(){
  var airport;
  var plane;
  var land;
  var takeOff;

  beforeEach(function(){
    weather = { isStormy: function() {} };
    spyOn(weather, 'isStormy').and.returnValue(false);
    airport = new Airport(weather);
    plane = 'plane';
    airport._hangar = [];
    land = function() { airport.land(plane); };
    takeOff = function() { airport.takeOff(plane); };
  });

  describe('when creating a new airport', function() {
    it('can receive a default capacity', function() {

    });
  });

  describe('landing', function(){
    // As an air traffic controller
    // So planes can land safely at my airport
    // I would like to instruct a plane to land
    it('can tell a plane to land', function(){
      airport.land(plane);
      expect(airport.planes()).toContain(plane);
    });

    // As an air traffic controller
    // So that I can avoid collisions
    // I want to prevent airplanes landing when my airport if full
    it('can prevent landing when airport is full', function(){
      airport.capacity = 1;
      airport.land(plane);
      expect(land).toThrowError('Airport is full');
    });

  });

  describe('takeoff', function() {

    //   As an air traffic controller
    //  So planes can take off safely from my airport
    // I would like to instruct a plane to take off
    it('can tell a plane to takeoff', function(){
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes()).not.toContain(plane);
    });
 
    //As an air traffic controller
    //So that I can ensure safe take off procedures
    //I want planes only to take off from the airport they are at
    it('cannot take off if not at airport', function(){
      expect(takeOff).toThrowError('Plane not at airport');
    });

  });

  describe('stormy weather', function(){
    //As an air traffic controller
    //So that I can avoid accidents
    //I want to prevent airplanes landing or taking off when the weather is
    //stormy
    it('cannot land a plane', function(){
      weather.isStormy.and.returnValue(true);
      expect(land).toThrowError('Weather is stormy');
    });

    it('cannot takeoff', function(){
      airport.land(plane);
      weather.isStormy.and.returnValue(true);
      expect(takeOff).toThrowError('Weather is stormy');
    });
  });
});
