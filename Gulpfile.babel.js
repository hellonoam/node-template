import gulp from 'gulp'
const $ = require('gulp-load-plugins')()

gulp.task('serve', () => {
  return $.nodemon({
    script: 'server.js',
    exec: './node_modules/.bin/babel-node'
  })
})
