import gulp from 'gulp';

gulp.task('json', () => {
  gulp.src('app/data/**/*')
    .pipe(gulp.dest('public/data'));
});
