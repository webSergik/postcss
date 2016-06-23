import gulp from 'gulp';

gulp.task('watch', () => {
  gulp.watch('app/css/**/*.css', ['postcss']);
  gulp.watch('app/pages/**/*.jade', ['jade']);
  gulp.watch('app/js/**/*.js', ['javascript']);
  gulp.watch('app/img/**/*.*', ['images']);
  gulp.watch('app/fonts/**/*.*', ['fonts']);
  gulp.watch('app/data/**/*.*', ['json']);
});
