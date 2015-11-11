'use strict';

function Thermostat() {
  this.DEF_TEMP = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_PS_ON = 25;
  this.MAX_TEMP_PS_OFF = 32;
  this._temperature = this.DEF_TEMP;
  this._powerSaving = true;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18
}

Thermostat.prototype.showTemperature = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(){
  if(this._temperature >= this.showMaxTemp()){ throw new Error('Maximum temperature reached');}
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

Thermostat.prototype.isPowerSaving = function() {
  return this._powerSaving;
};

Thermostat.prototype.showMaxTemp = function(){
  return this.isPowerSaving() ?  this.MAX_TEMP_PS_ON : this.MAX_TEMP_PS_OFF;
};

Thermostat.prototype.reset = function() {
  this._temperature = this.DEF_TEMP;
};

Thermostat.prototype.display = function(){
  if(this.showTemperature() < this.MEDIUM_ENERGY_USAGE_LIMIT){ return 'low-usage';};
  if (this.showTemperature() < this.MAX_TEMP_PS_ON) { return 'medium-usage'; };
  return 'high-usage';
};
