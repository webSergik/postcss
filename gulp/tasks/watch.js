var gulp = require('gulp');

gulp.task('watch', function () {
  gulp.watch('app/css/**/*.css', ['postcss']);
  gulp.watch('app/pages/**/*.jade', ['jade']);
  gulp.watch('app/js/**/*.js', ['javascript']);
  gulp.watch('app/img/**/*.*', ['images']);
  gulp.watch('app/fonts/**/*.*', ['fonts']);
});
