'use strict'

var hasLocal = require('has-local-storage')
var hasSession = require('has-session-storage')
var shim = require('localStorage')
var window = require('global/window')

module.exports = hasLocal ? window.localStorage : hasSession ? window.sessionStorage : shim
