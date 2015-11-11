describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('it has a starting temperature of 20', function(){
    expect(thermostat.temperature).toEqual(20);
  });

});
