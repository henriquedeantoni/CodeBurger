import Sequelize from 'sequelize'
import mongoose from 'mongoose'

import Product from '../app/models/Product'
import User from '../app/models/User'
import Category from '../app/models/Category'

// import configDatabase from '../config/database'

const models = [User, Product, Category]

class Database {
  constructor() {
    this.init()
    this.mongo()
  }

  init() {
    this.connection = new Sequelize(
      'postgresql://postgres:F1CEcfA4-41FdgeDf6e3B5faGbfg3d4e@roundhouse.proxy.rlwy.net:39421/railway',
    )
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:a1fbGEGC-beh54eegFeFA-CHGggaf6FB@monorail.proxy.rlwy.net:46913',
    )
  }
}

export default new Database()
