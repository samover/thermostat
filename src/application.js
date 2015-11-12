$(document).ready(function() {
  thermostat = new Thermostat();
  displayReset();
  powerSaving();

  $('#up').click(function() {
    thermostat.up();
    displayReset();
    } );

  $('#down').click(function() {
    thermostat.down();
    displayReset();
    } );

  $('#reset').click(function() {
    thermostat.reset();
    displayReset();
    } );

  $('#turnPowerSavingOff').click(function() {
    thermostat.turnPowerSavingOff();
    powerSaving();
  });

  $('#turnPowerSavingOn').click(function() {
    thermostat.turnPowerSavingOn();
    powerSaving();
  });

  function displayReset() {
    $('#showTemperature').text(thermostat.showTemperature());
    $('#display').attr('class', thermostat.display());
  }

  function powerSaving() {
   status = thermostat.isPowerSaving() ? 'ON' : 'OFF';
   $('span#isPowerSaving').text(status);
  };
});
