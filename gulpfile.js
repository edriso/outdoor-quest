const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sass = require('gulp-sass')(require('sass'));

// File path variables
const files = {
  scssPath: 'app/scss/**/*.scss',
  jsPath: 'app/js/**/*.js',
  htmlPath: 'views/**/*.html',
};

// SCSS task
function scssTask() {
  return gulp
    .src(files.scssPath)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'] }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist'));
}

// JS task
function jsTask() {
  return gulp
    .src(files.jsPath)
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
}

// Cache-busting task
function cacheBustTask() {
  const cbNumber = new Date().getTime();
  return gulp
    .src([files.htmlPath])
    .pipe(replace(/cb=\d+/g, `cb=${cbNumber}`))
    .pipe(gulp.dest('views'));
}

// Watch task
function watchTask() {
  gulp.watch([files.scssPath, files.jsPath], gulp.parallel(scssTask, jsTask));
}

// Build task
exports.build = gulp.series(gulp.parallel(scssTask, jsTask), cacheBustTask);

// Default task
exports.default = gulp.series(
  gulp.parallel(scssTask, jsTask),
  cacheBustTask,
  watchTask
);
