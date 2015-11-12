$(document).ready(function() {
  thermostat = new Thermostat();
  displayReset();

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
    displayReset();
  });

  $('#turnPowerSavingOn').click(function() {
    thermostat.turnPowerSavingOn();
    displayReset();
  });

  function displayReset() {
    $('#showTemperature').text(thermostat.showTemperature());
    $('#display').attr('class', thermostat.display());
    $('span#isPowerSaving').text(thermostat.isPowerSaving() ? 'ON' : 'OFF');
  }

});
