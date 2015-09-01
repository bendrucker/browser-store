'use strict'

var createStore = require('browser-async-store')
var storage = require('./store')

module.exports = createStore(storage)
