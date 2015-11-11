describe('Thermostat', function(){
  var thermostat;
  var down;
  var min_temp;
  var def_temp;

  beforeEach(function(){
    thermostat = new Thermostat();
    down = function() { thermostat.down(); };
    min_temp = thermostat.MIN_TEMP;
    def_temp = thermostat.DEF_TEMP;
  });

  it('it has a starting temperature of' + def_temp, function(){
    expect(thermostat.temperature).toEqual(def_temp);
  });

  // As a user
  // So I won't freeze to death
  // I want the thermostat to tell me when min temp has been reached
  it('has a minimum temperture of' + min_temp, function(){
    for(var i = 0; i < (def_temp - min_temp); i++) {
      thermostat.down();
    }
    expect(down).toThrowError('Minimum temperature reached');
  });

  it('can increase the temperature', function() {
    thermostat.up();
   expect(thermostat.temperature).toEqual(def_temp + 1);
  });

  it('can decrease the temperature', function(){
    thermostat.down();
    expect(thermostat.temperature).toEqual(def_temp - 1);
  });
});
