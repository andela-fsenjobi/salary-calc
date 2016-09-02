// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){
  $('.parallax').parallax();
  var select = $('#state')

  function buildStatesSelect(city) {
    $.ajax('/states/index')
      .done(function(data){
        $.each(data, function (index, option) {
          if(option.name === city){
            select.append('<option value="'+option.id+'" selected="selected">'+option.name+'</option>');
          } else {
            select.append('<option value="'+option.id+'">'+option.name+'</option>')
          }
        });
        $('select').material_select();
      });
      return true;
  }

  geoip2.city(function(data){
    var city = data.city.names.en,
        select = $('#state');
    buildStatesSelect(city);
  }, function(err){
    buildStatesSelect("California");
  });

});
