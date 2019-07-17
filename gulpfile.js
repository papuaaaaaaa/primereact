const {parallel, dest, src} = require('gulp');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
const rename = require('gulp-rename');
const flatten = require('gulp-flatten');

const css = () => src([
    'src/components/common/Common.css',
    'src/components/**/*.css'
])
    .pipe(concat('primereact.css'))
    .pipe(dest('resources'))
    .pipe(uglifycss({"uglyComments": true}))
    .pipe(rename('primereact.min.css'))
    .pipe(dest('resources'));

const themes = () => src([
    'public/resources/themes/**/*'
]).pipe(dest('resources/themes'));

const images = () => src(['src/components/**/images/*.png', 'src/components/**/images/*.gif'])
    .pipe(flatten())
    .pipe(dest('resources/images'));

const build = () => src(['exports/*.js', 'exports/*.d.ts']).pipe(dest('./'));

exports.default = parallel(build, css, images, themes);

