var gulp = require("gulp");
var rocaBarchart = require("roca_barchart");

gulp.task("build:dependencies", function (done) {
  var builds = ["barchart", "list_accountant", "list_counter"].map(function(componentName) {
    var comp = require("roca_" + componentName);
    return comp.build({ outputPath: __dirname + "/dist/" + componentName });
  });

  Promise.all(builds).then(function (bundles) {
    console.log(bundles);
    done();
  }).catch(function(errors) {
    console.log(errors);
    done();
  });

});

gulp.task("default", ["build:dependencies"]);