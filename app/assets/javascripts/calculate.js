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
        data.status === "fail" ? notify(data.message) : showResults(data)
      });
    } else {
      notify("Please fill in a Job Title")
    }
  })
});

function showResults(data) {
  var stateAverage =  parseInt(data.state_average),
      nationalAverage = parseInt(data.national_average),
      percentageDifference = percentageDiff(stateAverage, nationalAverage),
      differenceQualifier = higherOrLower(stateAverage, nationalAverage);

  $('.state-average').html('$ ' + stateAverage.format(2));
  $('.national-average').html('$ ' + nationalAverage.format(2));
  $('.profession-name').html(data.plural_title);
  $('.profession-name-with-article').html(data.title_name_with_article);
  $('.percentage-diff').html(percentageDifference + '%');
  $('.difference-qualifier').html(differenceQualifier);
  $('.state-name').html(data.state_name);
  
  generateMap(data.state_name);
  buildChart([stateAverage, nationalAverage], [percentageDifference, differenceQualifier]);
  $('#search-results').show();
}

function percentageDiff(stateAverage, nationalAverage) {
  return Math.abs((100 * (stateAverage - nationalAverage)/nationalAverage).format(2));
}

function higherOrLower(stateAverage, nationalAverage) {
  return stateAverage > nationalAverage ? "higher" : "lower";
}

function notify(message) {
  Materialize.toast(message, 3000);
}
