import gulp from 'gulp';
import jade from 'gulp-jade';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';

gulp.task('jade', () => {
  gulp.src('app/pages/**/*.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true,
    }))
    .pipe(gulp.dest('public'))
    .pipe(browserSync.reload({ stream: true }));
});
