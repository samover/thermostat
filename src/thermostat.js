function Thermostat() {
  this.DEF_TEMP = 20;
  this.MIN_TEMP = 10;
  this.temperature = this.DEF_TEMP;
}

Thermostat.prototype.up = function(){
  this.temperature ++;
}

Thermostat.prototype.down = function() {
  if (this.temperature <= this.MIN_TEMP) { throw new Error('Minimum temperature reached');}
  this.temperature --;
}
