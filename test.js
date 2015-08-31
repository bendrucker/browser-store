'use strict'

var test = require('tape')
var store = require('./')

test('write', function (t) {
  t.plan(1)
  store.set('foo', {bar: 'baz'}, function (err) {
    if (err) return t.end(err)
    t.pass('saved')
  })
})

test('read', function (t) {
  t.plan(1)
  store.get('foo', function (err, value) {
    if (err) return t.end(err)
    t.deepEqual(value, {bar: 'baz'})
  })
})

test('remove', function (t) {
  t.plan(1)
  store.remove('foo', function (err) {
    if (err) return t.end(err)
    store.get('foo', function (err, value) {
      if (err) return t.end(err)
      t.equal(value, null)
    })
  })
})
