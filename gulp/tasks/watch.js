var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch(["app/sass/**/*.scss"], ['sass']);
  gulp.watch(["app/css/**/*.css"], ['postcss']);
  gulp.watch(["app/pages/**/*.jade"], ['jade']);
  gulp.watch(["app/js/**/*.js"], ['javascript']);
  gulp.watch(["app/*.html"], ['html']);
  gulp.watch(["app/components/**/*.html"], ['components']);
  gulp.watch(["app/images/**/*.svg"], ['sprites']);
});
