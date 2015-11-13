import gulp from 'gulp'
import sequelizeFixtures from 'sequelize-fixtures'
const $ = require('gulp-load-plugins')()

gulp.task('serve', () => {
  return $.nodemon({
    script: 'server.js',
    exec: './node_modules/.bin/babel-node'
  })
})

gulp.task('db:seed', async () => {
  const models = require('./models')
  await sequelizeFixtures.loadFile('./config/initial-data/data.js', models)
})
