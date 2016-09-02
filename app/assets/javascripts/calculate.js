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
        $('.state-average').html('$ ' + parseInt(data.state_average).format(2));
        $('.national-average').html('$ ' + parseInt(data.national_average).format(2));
        generateMap(data.state_name);
        $('.profession-name').html(data.plural_title);
        $('.profession-name-with-article').html(data.title_name_with_article);
        $('.percentage-diff').html(percentageDiff(data.state_average, data.national_average) + '%');
        $('.difference-qualifier').html(higherOrLower(data.state_average, data.national_average));
        $('.state-name').html(data.state_name);
        $('#search-results').show();
      });
    } else {
      Materialize.toast("Please fill in a Job Title", 3000);
    }
  })
});

function percentageDiff(stateAverage, nationalAverage) {
  stateAverage = parseInt(stateAverage);
  nationalAverage = parseInt(nationalAverage);
  return Math.abs((100 * (stateAverage - nationalAverage)/nationalAverage).format(2));
}

function higherOrLower(stateAverage, nationalAverage) {
  stateAverage = parseInt(stateAverage);
  nationalAverage = parseInt(nationalAverage);
  return stateAverage > nationalAverage ? "higher" : "lower";
}
