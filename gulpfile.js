var gulp = require('gulp');
var shell = require('gulp-shell');


var jscs = require('gulp-jscs');
var isWin = /^win/.test(process.platform);
var mocha = require('gulp-mocha');

var jshint = require('gulp-jshint');

var stylish = require('jshint-stylish');


gulp.task('lint', function () {
  return gulp.src(['./src/**/*.js'], ['./test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});


gulp.task('jscs', function () {
  return gulp.src(['src/**/*.js', 'test/**/*.js'])
    .pipe(jscs());
});

gulp.task('test', function () {
  return gulp.src('test/**/*.spec.js')
    .pipe(mocha({
      reporter: 'spec',
      globals: {
        should: require('should')
      }
    }));
});


gulp.task('jsdoc', shell.task([
  (isWin) ?
  '"node_modules/.bin/jsdoc.cmd" -c ./doc-config.json' :
  './node_modules/.bin/jsdoc -c ./doc-config.json'
]));

gulp.task('build', ['lint','jscs','test']);