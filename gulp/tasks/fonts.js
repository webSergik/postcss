import gulp from 'gulp';

gulp.task('fonts', () => {
  gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('public/fonts'));
});
