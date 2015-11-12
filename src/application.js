$(document).ready(function() {
  thermostat = new Thermostat();
  displayReset();
  var owData;
  displayWeather();

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

  function displayWeather() {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2de143494c0b295cca9337e1e96b00e0', function(data) {
      owData = data;
      $('#location').text(owData.name + ', ' + owData.sys.country);
      $('#temperature').text((owData.main.temp - 272.15).toFixed(1) + ' degrees Celsius');
      $('#windSpeed').text(owData.wind.speed + 'm/s');
      $('#weatherDescription').text(owData.weather.description);
      $('$icon').text("<img src= " + owData.weather.icon + ">");

    });
  }

});
