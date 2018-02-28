
/*
var gulp = require('gulp');

// gulp plugins and utils
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var zip = require('gulp-zip');

// postcss plugins
var autoprefixer = require('autoprefixer');
var colorFunction = require('postcss-color-function');
var cssnano = require('cssnano');
var customProperties = require('postcss-custom-properties');
var easyimport = require('postcss-easy-import');


//browser sync
var browserSync = require('browser-sync').create();

var swallowError = function swallowError(error) {
    gutil.log(error.toString());
    gutil.beep();
    this.emit('end');
};

var nodemonServerInit = function () {
    livereload.listen(1234);
};

gulp.task('build', ['css'], function (/* cb *) { // dont forget to add /
    return nodemonServerInit();
});

gulp.task('css', function () {
    var processors = [
        easyimport,
        customProperties,
        colorFunction(),
        autoprefixer({browsers: ['last 2 versions']}),
        cssnano()
    ];

    return gulp.src('assets/css/*.css')
        .on('error', swallowError)
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/built/'))
        .pipe(livereload())
        .on('change', browserSync.reload);
});

gulp.task('watch', function () {
    gulp.watch('assets/css/**', ['css']);
});

gulp.task('zip', ['css'], function() {
    var targetDir = 'dist/';
    var themeName = require('./package.json').name;
    var filename = themeName + '.zip';

    return gulp.src([
        '**',
        '!node_modules', '!node_modules/**',
        '!dist', '!dist/**'
    ])
        .pipe(zip(filename))
        .pipe(gulp.dest(targetDir));
});

// ***** ADDED STUFF FOR BROWSER SYNC *****

gulp.task('serve', function () {

    browserSync.init({
        proxy: "http://localhost:2368"
    });

    gulp.watch("./**//*.hbs").on('change', browserSync.reload);
    gulp.watch("./assets/css/*.css").on('change', browserSync.reload);
});



// **** END OF ADDED STUFF FOR BROWSER SYNC ****

gulp.task('default', ['build','serve'], function () {
    gulp.start('watch');
});


*/

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching css/html files
gulp.task('serve', ['css'], function () {

    browserSync.init({
        proxy: "http://localhost:2368"
    });

    gulp.watch("./assets/css/*.css", ['css']);
    gulp.watch("./**/*.hbs").on('change', browserSync.reload);
});

// auto-inject CSS into browsers
gulp.task('css', function () {
    return gulp.src("./assets/css/*.css")
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);