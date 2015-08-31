'use strict'

var hasLocal = require('has-local-storage')
var hasSession = require('has-session-storage')
var window = require('global/window')

if (!hasLocal && !hasSession) {
  throw new Error('Web storage not supported')
}

module.exports = hasLocal ? window.localStorage : window.sessionStorage
