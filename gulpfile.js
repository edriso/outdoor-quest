const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('autoprefixer');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sass = require('gulp-sass')(require('sass'));
const ejs = require('gulp-ejs');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');

// File path variables
const files = {
  scssPath: 'src/scss/**/*.scss',
  jsPath: 'src/js/**/*.js',
  ejsPath: 'src/views/**/*.ejs',
  htmlPath: 'dist/views/**/*.html',
};

// ejs task
function ejsTask() {
  return gulp
    .src('src/views/pages/*.ejs')
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('dist/views'));
}

// SCSS task
function scssTask() {
  const plugins = [
    postcssImport(),
    tailwindcss(),
    autoprefixer(),
    cssnano()
  ];

  return gulp
    .src(files.scssPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('dist'));
}

// JS task
function jsTask() {
  return gulp
    .src(files.jsPath)
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
}

// Cache-busting task
function cacheBustTask() {
  const cbNumber = new Date().getTime();
  return gulp
    .src([files.htmlPath])
    .pipe(replace(/cb=\d+/g, `cb=${cbNumber}`))
    .pipe(gulp.dest('dist/views'));
}

// Watch task
function watchTask() {
  gulp.watch(
    [files.scssPath, files.jsPath, files.ejsPath],
    gulp.parallel(scssTask, jsTask, ejsTask),
  );
}

// Build task
exports.build = gulp.series(
  gulp.parallel(scssTask, jsTask, ejsTask),
  cacheBustTask,
);

// Default task
exports.default = gulp.series(
  gulp.parallel(scssTask, jsTask, ejsTask),
  cacheBustTask,
  watchTask,
);
