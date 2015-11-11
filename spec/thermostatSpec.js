describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('it has a starting temperature of 20', function(){
    expect(thermostat.temperature).toEqual(thermostat.DEF_TEMP);
  });

  it('can increase the temperature', function() {
    thermostat.up();
   expect(thermostat.temperature).toEqual(thermostat.DEF_TEMP + 1);
  });

  it('can decrease the temperature', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(thermostat.DEF_TEMP - 1);
  });
});
