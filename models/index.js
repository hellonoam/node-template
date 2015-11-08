import ssaclAttributeRoles from 'ssacl-attribute-roles'
import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'

const basename  = path.basename(module.filename)
const env       = process.env.NODE_ENV || 'development'
const config    = require(__dirname + '/../config/config.json')[env]
const db        = {}

let sequelize

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable])
}
else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

ssaclAttributeRoles(sequelize)

fs
  .readdirSync(__dirname)
  .filter(file => file.slice(-3) === '.js' && file.indexOf('.') !== 0 && file !== basename)
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file))
    ssaclAttributeRoles(model)
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => db[modelName].associate && db[modelName].associate(db))

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

