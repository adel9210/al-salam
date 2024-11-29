const { src, dest, watch, task } = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const gulp = require('gulp');

// CLEAN CSS FILES
gulp.task('clean-css', function () {
  return src('assets/css/*')
    .pipe(cleanCSS())
    .pipe(dest('assets/css'));
});

//  CONCAT CSS FILES
gulp.task('css-concat-ltr', function () {
  return gulp
    .src([
      'assets/css/swiper.min.css',
      'assets/css/jquery.fancybox.css',
      'assets/css/animate.min.css',
      'assets/css/style-ltr.min.css',
    ])
    .pipe(concat('styles-ltr.css'))
    .pipe(dest('assets/css'));
});

gulp.task('css-concat-rtl', function () {
  return gulp
    .src([
      'assets/css/swiper.min.css',
      'assets/css/jquery.fancybox.css',
      'assets/css/animate.min.css',
      'assets/css/style-rtl.min.css',
    ])
    .pipe(concat('styles-rtl.css'))
    .pipe(dest('assets/css'));
});

gulp.task('build-ltr-css', gulp.series('css-concat-ltr', 'clean-css'));
gulp.task('build-rtl-css', gulp.series('css-concat-rtl', 'clean-css'));


function build(cb) {
  console.log('Watched');
  cb()
}

gulp.task('build', gulp.series('build-ltr-css', 'build-rtl-css'));

// watch(['./src/scss/**/*.scss'], function (cb) {
//   task(build)
// })

gulp.task('watch', function () {
  gulp.watch(['./src/scss/**/*.scss'], gulp.series('build'));
});