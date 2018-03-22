//引入包
var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var sass    = require('gulp-ruby-sass');

//task
// gulp.task('minifyCss', function(){
// 	return gulp.src('./src/scss/*.css').pipe(cleanCss()).pipe(gulp.dest('./dist/css/'))
// });
//操作sass
gulp.task('sass', function () {
	return sass('./src/scss/*.scss', {
		style: 'compressed'
		// style:'compact'
	}).pipe(gulp.dest('./dist/css/'));
});
//压缩js
gulp.task('minifyJs', function(){
	return gulp.src('./src/js/*.js').pipe(gulp.dest('./dist/js/'));
});

//新建刷新任务
gulp.task('reload',['sass','minifyJs'], function (){
	gulp.src('./index.html').pipe(connect.reload());
});

//新建默认任务
gulp.task('default',['sass','minifyJs'],function() {
	//开启服务器
	connect.server({
		livereload:true
	});

	//监听命令
	gulp.watch(['./src/scss/*.scss', './src/js/*.js'], ['reload']);
})