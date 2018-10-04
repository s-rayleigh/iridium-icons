/**
 * Gulp file for icons build.
 * @author rayleigh <rayleigh@protonmail.com>
 * @license MIT
 */

const gulp     = require('gulp'),
	  del      = require('del'),
	  imageMin = require('gulp-imagemin'),
	  svg2png  = require('gulp-svg2png');

const clean = () => del('dist/*');

const buildSvg = () => {
	return gulp.src('src/*')
		.pipe(imageMin())
		.pipe(gulp.dest('dist/svg'));
};

const buildPng = () => {
	return gulp.src('src/*')
		.pipe(svg2png({width: 512, height: 512}))
		.pipe(gulp.dest('dist/png'));
};

const build = gulp.series(clean, gulp.parallel(buildSvg, buildPng));

module.exports = {
	clean: clean,
	build: build
};