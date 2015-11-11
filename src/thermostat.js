function Thermostat() {
  this.DEF_TEMP = 20
  this.temperature = this.DEF_TEMP;
}

Thermostat.prototype.up = function(){
  this.temperature ++;
}

Thermostat.prototype.down = function() {
  this.temperature --;
}
