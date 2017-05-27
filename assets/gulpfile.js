var gulp = require('gulp'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    jsmin = require('gulp-jsmin'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    stylus = require('gulp-stylus'),
    imageop = require('gulp-image-optimization');
gulp.task('default', ['connect', 'watch']);

gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});
gulp.task('watch', function () {
    gulp.watch(['*.html'], ['html']);
    gulp.watch(['src/style/stylus/*.styl'], ['stylus']);
    gulp.watch(['src/style/css/*.css'], ['production-css']);
    gulp.watch(['src/js/*.js'], ['production-js-wrapper']);
    gulp.watch(['src/js-helper/*.js'], ['production-js-helper']);
    gulp.watch(['src/img/*.js'], ['production-img']);
});
gulp.task('html', function () {
    gulp.src('index.html')
        .pipe(connect.reload());
});
gulp.task('stylus', function () {
    return gulp.src('src/style/stylus/style.styl')
        .pipe(stylus())
        .pipe(gulp.dest('src/style/css/'))
        .pipe(connect.reload());
});


gulp.task('production-js-iframe', function () {
    return gulp.src(['src/js/lib/jquery.js',  'src/js/main.js'])
        .pipe(concat('robot.js'))
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../connect/'));
});


gulp.task('production-js-helper', function () {
    return gulp.src(['src/js/lib/jquery-old.js', 'src/js/lib/mcustomscrollbar.js', 'src/js-helper/slide-helper-open.js', 'src/js-helper/robot.js'])
        .pipe(concat('helper.js'))
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../web/js/'));
});

gulp.task('production-css-helper', function () {
    gulp.src(['src/style/css/lib/*.css', 'src/style/css/*.css'])
        .pipe(concat('style.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../web/css/'));
});


gulp.task('production-css-iframe', function () {
    gulp.src(['src/style/css/iframe/*.css'])
        .pipe(concat('style.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../web/connect/'));
});


gulp.task('production-img', function () {
    gulp.src(['src/img/*.png', 'src/img/*.jpg', 'src/img/*.gif', 'src/img/*.jpeg']).pipe(imageop({
        optimizationLevel: 10,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('../web/img/'));
});
