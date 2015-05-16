var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('build', function(){
  // HTML
  gulp.src('./app/**/*.html', {base: './app/'})
    .pipe(gulp.dest('./build/'));

  // Vendor JS
  gulp.src(['./vendor/react/react.js', './vendor/jquery/dist/jquery.js'])
    .pipe(gulp.dest('./build/vendor/'));

  // Custom JS
  gulp.src('./app/components/**/*.js')
    .pipe(gulp.dest('./build/components/'));

  // SASS
  gulp.src('./app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css/'));
});

gulp.task('watch', function(){
  gulp.watch(['app/**/*.html', 'app/**/*.js', 'app/**/*.scss'], ['build']);
});
