'use strict'

var dezalgo = require('dezalgo')
var store = require('./store')

exports.get = function get (key, callback) {
  var value = store.getItem(key)
  dezalgo(callback)(null, value != null ? JSON.parse(value) : null)
}

exports.put = function put (key, value, callback) {
  store.setItem(key, JSON.stringify(value))
  dezalgo(callback || noop)(null)
}

exports.remove = function remove (key, callback) {
  store.removeItem(key)
  dezalgo(callback || noop)(null)
}

exports.clear = function clear (callback) {
  store.clear()
  dezalgo(callback || noop)(null)
}

function noop () {}
