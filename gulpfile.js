const { src, dest, series, parallel } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
function minifyCSS() {
  return src('**/style.css') 
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(dest('dist/css'));
}
function minifyJS() {
  return src('**/script.js') 
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'));
}
exports.default = parallel(minifyCSS, minifyJS);
