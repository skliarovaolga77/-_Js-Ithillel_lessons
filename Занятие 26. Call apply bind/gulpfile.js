let gulp = require('gulp');

gulp.task('html',function(resolve){
	gulp
		.src(['src/index.html','src/about.html'])
		.pipe(gulp.dest('build/'));
	resolve();
})

gulp.task('images',function(done){
	gulp
		.src('src/images/*')
		.pipe(gulp.dest('build/images'));
	done();
})

gulp.task('css',function(done){
	gulp
		.src('src/css/style.css')
		.pipe(gulp.dest('build/css'));
	done();
})

gulp.task('all', gulp.series('html','images','css'));