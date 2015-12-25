var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: ['./src', './node_modules/requirejs']
    }
  });

  gulp.watch('src/**/*.*').on('change', browserSync.reload);

});

gulp.task('default', ['browser-sync']);