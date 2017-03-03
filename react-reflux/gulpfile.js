var path = require('path');
var del = require('del');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// set variable via $ gulp --type production
var environment = $.util.env.type || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('./webpack.config.js').getConfig(environment);

var port = $.util.env.port || 1337;
var app = 'app/';
var dist = 'dist/';

// https://github.com/ai/autoprefixer
var autoprefixerBrowsers = [
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 6',
    'opera >= 23',
    'ios >= 6',
    'android >= 4.4',
    'bb >= 10'
];

gulp.task('scripts', function () {
    return gulp.src(webpackConfig.entry)
        .pipe($.webpack(webpackConfig))
        .pipe(isProduction ? $.uglify() : $.util.noop())
        .pipe(gulp.dest(dist + 'js/'))
        .pipe($.size({title: 'js'}))
        .pipe($.connect.reload());
});

// copy html from app to dist
gulp.task('html', function () {
    return gulp.src(app + 'index.html')
        .pipe(gulp.dest(dist))
        .pipe($.size({title: 'html'}))
        .pipe($.connect.reload());
});

// gulp.task('styles',function(cb) {
//
//   // convert stylus to css
//   return gulp.src(app + 'stylus/main.styl')
//     .pipe($.stylus({
//       // only compress if we are in production
//       compress: isProduction,
//       // include 'normal' css into main.css
//       'include css' : true
//     }))
//     .pipe($.autoprefixer({browsers: autoprefixerBrowsers}))
//     .pipe(gulp.dest(dist + 'css/'))
//     .pipe($.size({ title : 'css' }))
//     .pipe($.connect.reload());
//
// });

gulp.task('css', function () {
    return gulp.src(app + 'css/**/*.css')
        .pipe($.size({title: 'css'}))
        .pipe(gulp.dest(dist + 'css/'))
        .pipe($.connect.reload());
});

// add livereload on the given port
gulp.task('serve', function () {
    $.connect.server({
        root: dist,
        port: port,
        livereload: {
            port: 35729
        }
    });
});

// copy images
gulp.task('images', function () {
    return gulp.src(app + 'images/**/*.{png,jpg,jpeg,gif,ico}')
        .pipe($.size({title: 'images'}))
        .pipe(gulp.dest(dist + 'images/'));
});

// copy favicon
gulp.task('favicon', function () {
    return gulp.src(app + 'favicon.ico')
        .pipe(gulp.dest(dist));
});

// watch styl, html and js file changes
gulp.task('watch', function () {
    gulp.watch(app + 'css/*.css', ['css']);
    gulp.watch(app + 'index.html', ['html']);
    gulp.watch(app + 'scripts/**/*.js', ['scripts']);
    gulp.watch(app + 'scripts/**/*.jsx', ['scripts']);
});

// remove bundels
gulp.task('clean', function (cb) {
    return del([dist], cb);
});


// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['images', 'favicon', 'html', 'scripts', 'css', 'serve', 'watch']);

// waits until clean is finished then builds the project
gulp.task('build', ['clean'], function () {
    gulp.start(['images', 'favicon', 'html', 'scripts', 'css']);
});