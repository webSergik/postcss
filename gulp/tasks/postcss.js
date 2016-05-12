import gulp from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import atImport from 'postcss-import';
import vars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import browserSync from 'browser-sync';
import sprites from 'postcss-sprites';

const opts = {
  stylesheetPath: './app/css',
  spritePath: './app/img/',
  filterBy: (image) => {
    if (!/\.png$/.test(image.url)) {
      return Promise.reject();
    }
    return Promise.resolve();
  },
};

const processors = [
  autoprefixer({ browsers: ['last 2 versions'] }),
  atImport,
  vars,
  nested,
  sprites(opts),
];

gulp.task('postcss', () => {
  gulp.src('app/css/*.css')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({ stream: true }));
});
