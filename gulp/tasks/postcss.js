var gulp = require('gulp'),
  postcss = require('gulp-postcss');
  autoprefixer = require('autoprefixer'),
  sourcemaps   = require('gulp-sourcemaps'),
  plumber = require('gulp-plumber'),
  atImport = require('postcss-import'),
  vars   = require('postcss-simple-vars'),
  nested   = require('postcss-nested'),
  lost = require('lost'),
  browserSync = require('browser-sync');

processors = [
  autoprefixer({ browsers: ['last 2 versions'] }),
  atImport,
  vars,
  nested,
  lost
];

gulp.task('postcss', function () {
  return gulp.src('app/css/*.css')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({stream: true}));
});
