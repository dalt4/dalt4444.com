const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    cleanCSS = require('gulp-clean-css'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync');
sass.compiler = require('node-sass');

//----------------------gulp image-------------------------//

function image(nameG, src, dist) {
    gulp.task(nameG, () =>
        gulp.src(src)
            .pipe(imagemin())
            .pipe(gulp.dest(dist))
    );
}

image('img', 'app/img/*', 'dist/img')
image('certificate', 'app/img/certificate/certificates/*', 'dist/img/certificate/certificates/')
image('certificateMontain', 'app/img/certificate/montain/*', 'dist/img/certificate/montain/')
image('main', 'app/img/main/*', 'dist/img/main/')
image('mainAnimation1', 'app/img/main/animation1/*', 'dist/img/main/animation1/')
image('mainAnimation2', 'app/img/main/animation2/*', 'dist/img/main/animation2/')
gulp.task('mainAnimation3', () =>
    gulp.src('app/img/main/animation3/**/*')
        .pipe(gulp.dest('dist/img/main/animation3/'))
);
image('mainAnimation4', 'app/img/main/animation4/*', 'dist/img/main/animation4/')
image('book', 'app/img/main/book/*', 'dist/img/main/book/')
image('slider1', 'app/img/main/slider1/*', 'dist/img/main/slider1/')
image('slider2', 'app/img/main/slider2/*', 'dist/img/main/slider2/')
gulp.task('mainVideo', () =>
    gulp.src('app/img/main/video/*')
        .pipe(gulp.dest('dist/img/main/video/'))
);
image('portfolio', 'app/img/portfolio/*', 'dist/img/portfolio/')
image('img', 'app/img/*', 'dist/img')
image('img', 'app/img/*', 'dist/img')
image('img', 'app/img/*', 'dist/img')

gulp.task('allImage', gulp.parallel('img', 'certificate', 'certificateMontain', 'main', 'mainAnimation1',
    'mainAnimation2', 'mainAnimation3', 'mainAnimation4', 'book', 'slider1', 'slider2', 'mainVideo', 'portfolio'));

//----------------------gulp build------------------------//

gulp.task('appAll', () =>
    gulp.src('app/*')
        .pipe(gulp.dest('dist'))
);

gulp.task('css', () =>
    gulp.src('app/styles/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/styles/'))
);

gulp.task('uglify', () =>
    gulp.src('app/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts/'))
);

gulp.task('modules', () =>
    gulp.src('app/scripts/modules/*.js')
        .pipe(gulp.dest('dist/scripts/modules/'))
);

gulp.task('templates', () =>
    gulp.src('app/templates/*')
        .pipe(gulp.dest('dist/templates/'))
);

gulp.task('fonts', () =>
    gulp.src('app/fonts/*')
        .pipe(gulp.dest('dist/fonts'))
);

gulp.task('libs', () =>
    gulp.src('app/libs/*')
        .pipe(gulp.dest('dist/libs'))
);

gulp.task('build', gulp.parallel('appAll', 'css', 'uglify', 'modules', 'templates', 'fonts', 'libs'));

//--------------------gulp default------------------------//
gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: 'dalt.app',
        notify: false
    });
});

gulp.task('sass', function () {
    return gulp.src('app/styles/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 version', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('app/styles'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function () {
    return gulp.src('app/scripts/es6/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('app/scripts'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('code', function () {
    return gulp.src('app/**/*.php')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function () {
    gulp.watch('app/styles/*.scss', gulp.parallel('sass'));
    gulp.watch('app/**/*.php', gulp.parallel('code'));
    gulp.watch('app/scripts/es6/*.js', gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('sass', 'scripts', 'browser-sync', 'watch'));