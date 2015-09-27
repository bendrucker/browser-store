'use strict'

var createStore = require('browser-async-store')
var storage = require('./storage')

module.exports = createStore(storage)
