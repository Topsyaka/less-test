const gulp = require('gulp');
const less = require('gulp-less');
const watch = require('gulp-watch');
const path = require('path');
 
gulp.task('less', function () {
  return gulp.src('./less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', () => {
  gulp.watch('./less/**', ['less'])
});

