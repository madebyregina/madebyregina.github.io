const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    minify = require("gulp-minify"),
    htmlmin = require('gulp-htmlmin'),
    fileInclude = require('gulp-file-include');

function style() {
    return gulp.src('./sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        //.pipe(cleanCSS())
        .pipe(gulp.dest('../_static/assets/css'));
}
exports.style = style;

function scripts() {
    return gulp.src(['./js/vendors/*.js', './js/features/*.js', './js/custom.js'])
        .pipe(concat('custom.js'))
        .pipe(minify())
        .pipe(gulp.dest('../_static/assets/js'));
}
exports.scripts = scripts;

function minifyHtml() {
    return gulp.src(['./html/**/*.html', '!./html/partials/**'])
        .pipe(fileInclude({
            prefix: '@@',
            basepath: './html/partials/'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            conservativeCollapse: true,
            minifyCSS: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('../_static'));
}
exports.minifyHtml = minifyHtml;

function watch() {
    gulp.watch('./sass/**/*.scss', style);
    gulp.watch('./js/**/*.js', scripts);
    gulp.watch('./html/**/*.html', minifyHtml);
}
exports.watch = watch;

exports.default = gulp.series(
    gulp.parallel(style, scripts, minifyHtml),
    watch
);