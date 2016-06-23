import gulp from 'gulp';
import webpackStream from 'webpack-stream';
import named from 'vinyl-named';
import browserSync from 'browser-sync';

const webpack = webpackStream.webpack;

gulp.task('webpack', () => {
  const options = {
    watch: true,
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }],
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
    ],
  };
  gulp.src('app/js/*.js')
    .pipe(named())
    .pipe(webpackStream(options))
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.reload({ stream: true }));
});
