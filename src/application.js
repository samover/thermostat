$(document).ready(function() {
  thermostat = new Thermostat();
  $('div#display').css('background-color', 'yellow');

  $('p#showTemperature').text(thermostat.showTemperature());
  $('span#isPowerSaving').text(function() {
    if (thermostat.isPowerSaving()) { return 'ON' }
    return 'OFF';
  });

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
    $('span#isPowerSaving').text('OFF')
  });

  $('#turnPowerSavingOn').click(function() {
    thermostat.turnPowerSavingOn();
    $('span#isPowerSaving').text('ON')
  });

  function displayReset() {
    var colour;
    $('#showTemperature').text(thermostat.showTemperature());
    if (thermostat.display() === 'low-usage') {
      colour = 'green';
    }

    if (thermostat.display() === 'medium-usage') {
      colour = 'yellow';
    }

    if (thermostat.display() === 'high-usage') {
      colour = 'red';
    }

    $('div#display').css('background-color', colour);
  }
});
