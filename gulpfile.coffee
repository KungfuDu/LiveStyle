path =
  css: 'css/'
  scss: 'css/'

gulp = require('gulp')
$ = require('gulp-load-plugins')()

gulp.task 'sass', ->
  gulp.src "#{path.scss}*.scss"
  .pipe $.sass
    onError: console.error.bind(console,'Sass error : ')
  .pipe gulp.dest path.css

gulp.task 'default',->
  gulp.watch "#{path.scss}*.scss",['sass']
