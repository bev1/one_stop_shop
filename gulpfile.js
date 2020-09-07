const gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');

const browserSync = require('browser-sync').create();

const pathBuild = './dist/';
const pathSrc = './src/';

const pathFonts = [
    pathSrc + 'fonts/**/*'
];

gulp.task('sass', function () {
    return gulp.src(pathSrc + 'sass/**/*.+(sass|scss)')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer({overrideBrowserslist: ['last 15 versions'], cascade: false}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(pathBuild + 'css'));
});

gulp.task('cleanCSSBuild', () => {
    return gulp.src(pathBuild + 'css/main.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(pathBuild + 'css/'))
});

gulp.task('pug', function () {
    gulp.src('src/pages/**/*.pug')
        .pipe(pug({pretty: '\t'}))
        .pipe(gulp.dest('dist/'))
});

gulp.task('js', function () {
    return gulp.src(pathSrc + 'js/**/*.js')
        .pipe(gulp.dest('dist/js'));
});


gulp.task('img', function () {
    return gulp.src(pathSrc + 'img/**/*')
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('fontsDev', () => {
    return gulp.src(pathFonts)
        .pipe(gulp.dest(pathBuild + 'fonts'));
});

gulp.task('browserSync', () => {
    browserSync.init({
        server: pathBuild
    });
});

gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.+(sass|scss)', ['sass', 'cleanCSSBuild']).on('change', browserSync.reload);;
    gulp.watch('src/pages/**/*.+(jade|pug)', ['pug']).on('change', browserSync.reload);;
    gulp.watch('src/js/**/*.js', ['js']).on('change', browserSync.reload);;
    gulp.watch('src/img/**/*', ['img']).on('change', browserSync.reload);;
});

gulp.task('default', [
    'img',
    'js',
    'sass',
    'pug',
    'fontsDev',
    'cleanCSSBuild',
    'watch',
    'browserSync',
]);