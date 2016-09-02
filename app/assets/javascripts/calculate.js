Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};

$(document).ready(function(){
  $('#search-results').hide();
  $('#calculate').on('click', function(){
    var state = $('#state').val(),
        title = $('#job-title').val(),
        stateName = $('#state').text();

    if (title != '') {
      $.ajax('/welcome/calculate/?state=' + state + '&title=' + title)
      .done(function (data) {
        $('#state-average').html('$ ' + parseInt(data[0]).format(2));
        $('#national-average').html('$ ' + parseInt(data[1]).format(2));
        generateMap(data[2]);
        $('#search-results').show();

      });
    } else {
      Materialize.toast("Please fill in a Job Title", 3000);
    }
  })
});
