
  function generateMap(city) {
    $("#country-map").empty();
    var width = 500;
    var height = 220;
    var projection = d3.geo.albersUsa()
               .translate([width/2, height/2])
               .scale([500]);
    var path = d3.geo.path()
             .projection(projection);

    var svg = d3.select("#country-map")
          .append("svg")
          .attr("width", width)
          .attr("height", height);

    d3.json("assets/us-states.json", function(json) {
      svg.selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("d", path)
        .style("stroke", "#fff")
        .style("stroke-width", "1")
        .style("fill", function(d) {

        var name = d.properties.NAME;
        if (name === city) {
          return "rgb(255,0,0)";
        } else {
          return "rgb(213,222,217)";
        }

      });
    });
  }
