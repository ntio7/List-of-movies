// Libs
const {series, dest, src, watch} = require('gulp');
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const purge = require('gulp-css-purge');
const minify = require('gulp-minify-css');

// Resources
const DESTINATION_ASSET_FOLDER = './content';
const ORIGIN_SASS_FOLDER = './content/scss/**/*.scss';

function buildSass(cb) {
    src([ORIGIN_SASS_FOLDER])
        .pipe(sass())
        //.pipe(purge())
        //.pipe(minify())
        .pipe(dest(`${DESTINATION_ASSET_FOLDER}/css`));
    cb();
}

function cleanSass(cb) {
    src([
        `${DESTINATION_ASSET_FOLDER}/css`
    ], {allowEmpty: true})
        .pipe(clean({force: true}));
    cb();
}

function watchSass(cb) {
    watch([ORIGIN_SASS_FOLDER], series(buildSass));
    cb();
}

// add here all default task
exports.default = series
(
    cleanSass,
    buildSass,
);

// Custom tasks
exports.watchSass = series(
    watchSass
);

