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
      'postgresql://postgres:2aEAD155B6bGAdC6*6a3c4Gc2-Be-BA5@roundhouse.proxy.rlwy.net:57517/railway',
    )
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      )
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://mongo:gEagbbbef-5A2BhADBd3d25H-3Hgcdca@roundhouse.proxy.rlwy.net:58272',
    )
  }
}

export default new Database()
