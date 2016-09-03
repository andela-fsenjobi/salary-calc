function buildChart(dataset, percentage) {
  $('#chart').empty();
  var pie=d3.layout.pie()
    .value(function(d){return d})
    .sort(null)
    .padAngle(.03);

  var w = 150,
      h = 150,
      outerRadius = w/2,
      innerRadius = 50;

  var arc=d3.svg.arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius);

  var svg=d3.select("#chart")
    .append("svg")
    .attr({ width: w, height: h, class: 'shadow' })
    .append('g')
    .attr({transform:'translate('+w/2+','+h/2+')'});

  var path=svg.selectAll('path')
    .data(pie(dataset))
    .enter()
    .append('path')
    .attr({
        d:arc,
        fill:function(d,i){
            return i === 0 ? "#0000ff" : "#666666";
        }
    });

  path.transition()
    .duration(1000)
    .attrTween('d', function(d) {
        var interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
        return function(t) {
            return arc(interpolate(t));
        };
    });

  svg.append('text')
      .attr({
          x:-23,
          y:4
      })
      .text(function () {
        var sign = percentage[1] === "higher" ? "%+" : "%-"
        return percentage[0] + sign
      })
      .style({
          fill:'#929DAF',
          'font-size':'14px'
      });
}
