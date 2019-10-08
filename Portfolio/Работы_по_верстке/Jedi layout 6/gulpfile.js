var syntax        = 'sass', // Syntax: sass or scss;
	gulpversion   = '4'; // Gulp version: 3 or 4


var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS     = require('gulp-clean-css'),
	rename       = require('gulp-rename'),
	browserSync  = require('browser-sync'),//.create(),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglify');
	

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		browser: 'chrome',
		notify: false
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('code', function() {
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({ stream: true }))
});	

gulp.task('styles', function() {
	return gulp.src('app/'+syntax+'/**/*.'+syntax+'')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(cleanCSS())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});


gulp.task('scripts', function() {
	return gulp.src([
		'./app/libs/modernizr/modernizr.js',
		'./app/libs/jquery/jquery-1.11.2.min.js',
		'./app/libs/waypoints/waypoints.min.js',
		'./app/libs/animate/animate-css.js',
		'./app/libs/superfish/dist/js/superfish.min.js',
		'./app/libs/owl.carousel/dist/owl.carousel.min.js',
		'./app/libs/jQuery.mmenu/dist/jquery.mmenu.all.js',
		'./app/libs/equalheights/equalheights.js',
		'./app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
		])
		.pipe(concat('libs.js'))
		// .pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./app/js/'))
		.pipe(browserSync.reload({ stream: true }))
});

if (gulpversion == 3) {
	gulp.task('watch', ['styles', 'scripts', 'browser-sync'], function() {
		gulp.watch('app/'+syntax+'/**/*.'+syntax+'', ['styles']);
		gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['scripts']);
		gulp.watch('app/*.html', ['code'])
	});
	gulp.task('default', ['watch']);
}

if (gulpversion == 4) {
	gulp.task('watch', function() {
		gulp.watch('app/'+syntax+'/**/*.'+syntax+'', gulp.parallel('styles'));
		gulp.watch(['libs/**/*.js', 'app/js/common.js'], gulp.parallel('scripts'));
		gulp.watch('app/*.html', gulp.parallel('code'))
	});
	gulp.task('default', gulp.parallel('watch', 'styles', 'scripts', 'browser-sync'));
}
