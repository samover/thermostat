 //'use strict';

describe('Thermostat', function(){
  var thermostat;
  var down;
  var min_temp;
  var def_temp;
  var up;

  beforeEach(function(){
    thermostat = new Thermostat();
    down = function() { thermostat.down(); };
    min_temp = thermostat.MIN_TEMP;
    def_temp = thermostat.DEF_TEMP;
    up = function() { thermostat.up(); };
  });

  it('it has a starting temperature of' + def_temp, function(){
    expect(thermostat.showTemperature()).toEqual(def_temp);
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
   expect(thermostat.showTemperature()).toEqual(def_temp + 1);
  });

  it('can decrease the temperature', function(){
    thermostat.down();
    expect(thermostat.showTemperature()).toEqual(def_temp - 1);
  });

  it('power saving mode can be turned off', function(){
    thermostat.turnPowerSavingOff();
    expect(thermostat.showPowerSaving()).toBe(false);
  });

  it('power saving mode can be turned on', function(){
    thermostat.turnPowerSavingOff();
    thermostat.turnPowerSavingOn();
    expect(thermostat.showPowerSaving()).toBe(true);
  });

  it('throws error when max_temp with powersaving on', function() {
    for(var i = 0; i < max_temp(); i++) { thermostat.up(); }
    expect(up).toThrowError('Maximum temperature reached');
  });

  it('throws error when max_temp with powersaving off', function() {
    thermostat.turnPowerSavingOff();
    for(var i = 0; i < max_temp(); i++) { thermostat.up(); }
    expect(up).toThrowError('Maximum temperature reached');
  });
});
