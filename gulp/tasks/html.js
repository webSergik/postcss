import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('html', () => {
  gulp.src('app/*.html')
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({stream: true}));
});
