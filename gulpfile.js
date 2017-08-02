/**
 * Gulp file for icons build.
 * @author rayleigh <rayleigh@protonmail.com>
 * @license MIT
 */

const gulp = require('gulp');
const del = require('del');
const rename = require('gulp-rename');
const imageMin = require('gulp-imagemin');
const runSequence = require('run-sequence');
const svg2png = require('gulp-svg2png');

gulp.task('clear', del.sync('dist/*'));

gulp.task('build:svg', () =>
{
	gulp.src('src/*')
		.pipe(imageMin())
		.pipe(gulp.dest('dist/svg'));
});

gulp.task('build:png', () =>
{
	gulp.src('src/*')
		.pipe(svg2png({width: 512, height: 512}))
		.pipe(gulp.dest('dist/png'));
});

gulp.task('build', (c) =>
{
	runSequence('clear', ['build:svg', 'build:png'], c);
});

gulp.task('default', ['build']);