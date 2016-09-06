// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function(){
  $('#auto-suggest-title').hide();

  $('#job-title').on('keyup', function (e) {
    $('#auto-suggest-title').empty();
    var q = e.target.value;
    $.ajax('/job_title/search?q=' + q)
      .done(function (data) {
        $('#auto-suggest-title').show();

        $.each(data, function (index, value) {
          $('#auto-suggest-title').append(`<a class="collection-item">` + value.name + `</a>`);
        });

        $('#auto-suggest-title .collection-item').on('click', function(e){
          var text = e.target.text;
          $('#job-title').val(text);
          $('#auto-suggest-title').hide();
        });
      });
  });

  $('#auto-suggest-title .collection-item').on('click', function(e){
    var text = e.target.text;
    $('#job-title').val(text);
    $('#auto-suggest-title').hide();
  });

  $('#state-input').on('focusin', function () {
    $('#auto-suggest-title').hide();
  });
});
