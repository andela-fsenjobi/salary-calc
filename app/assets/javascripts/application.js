// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require materialize-sprockets
//= require_tree .

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
