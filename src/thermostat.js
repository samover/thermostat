function Thermostat() {
  this.DEF_TEMP = 20;
  this.MIN_TEMP = 10;
  this._temperature = this.DEF_TEMP;
  this._powerSaving = true;
}

Thermostat.prototype.showTemperature = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(){
  this._temperature ++;
};

Thermostat.prototype.down = function() {
  if (this._temperature <= this.MIN_TEMP) { throw new Error('Minimum temperature reached');}
  this._temperature --;
};

Thermostat.prototype.turnPowerSavingOff = function() {
  this._powerSaving = false;
};

Thermostat.prototype.turnPowerSavingOn = function() {
  this._powerSaving = true;
};

Thermostat.prototype.showPowerSaving = function() {
  return this._powerSaving;
};
