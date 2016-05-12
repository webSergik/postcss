import gulp from 'gulp';
import babel from 'gulp-babel';
import browserSync from 'browser-sync';

gulp.task('javascript', () => {
  gulp.src('app/js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.reload({ stream: true }));
});
