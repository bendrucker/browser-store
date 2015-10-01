'use strict'

var hasLocal = require('has-local-storage')
var hasSession = require('has-session-storage')
var Storage = require('storage-sham')
var window = require('global/window')

module.exports = hasLocal ? window.localStorage : hasSession ? window.sessionStorage : Storage()
