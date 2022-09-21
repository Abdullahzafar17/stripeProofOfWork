
const db = require("../models/index")
const database = require("../config/database")

// db authentication
exports.initConnection = async () => {
  try {
    await database.authenticate()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

exports.find = async (tableName, params) => {
  const result = await db[tableName].findOne(params)
  return result
}
exports.create = async (tableName, params) => {
  const result = await db[tableName].create(params)
  return result
}

exports.findAll = async (tableName, params) => {
  const result = await db[tableName].findAll(params)
  return result
}

exports.delete = async (tableName, params) => {
  const result = await db[tableName].destroy(params)
  return result
}
exports.update = async (tableName, param1, param2) => {
  const result = await db[tableName].update(param1, param2)
  return result
}


