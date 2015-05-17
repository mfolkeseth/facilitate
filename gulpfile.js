var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var copy = require('gulp-copy');
var htmlbuild = require('gulp-htmlbuild');
var es = require('event-stream');

var buildDir = './build/';

gulp.task('build', ['copy-js', 'build-scss', 'copy-html', 'process-html']);

gulp.task('copy-js', function(){
  gulp.src([
      './vendor/angular/angular.js',
      './vendor/angular-route/angular-route.js',
      './vendor/jquery/dist/jquery.js',
      './vendor/foundation/js/foundation.js',
      './vendor/modernizr/modernizr.js',
      './vendor/fastclick/lib/fastclick.js'
    ])
    .pipe(copy(buildDir, {prefix: 0}));

  gulp.src('app/**/*.js')
    .pipe(copy(buildDir, {prefix: 1}));
});

gulp.task('copy-html', function(){
  gulp.src('app/components/**/*.html')
    .pipe(copy(buildDir, {prefix: 1}));
});

gulp.task('build-scss', function(){
  gulp.src('./app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('process-html', function(){
  gulp.src(['./app/index.html'])
    .pipe(htmlbuild({
      js: htmlbuild.preprocess.js(function (block) {
        // vendor
        block.write('vendor/angular/angular.js');
        block.write('vendor/angular-route/angular-route.js');
        block.write('vendor/jquery/dist/jquery.js');
        block.write('vendor/fastclick/lib/fastclick.js');
        block.write('vendor/modernizr/modernizr.js');
        block.write('vendor/foundation/js/foundation.js');

        //custom
        block.write('app.js');
        block.write('components/home/home.js');
        block.write('components/about/about.js');
        block.write('directives/navigation.js');
        block.write('directives/tasks.js');

        block.end();
      })
    }))
    .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function(){
  gulp.watch(['app/**/*.html', 'app/**/*.js', 'app/**/*.scss'], ['build']);
});
