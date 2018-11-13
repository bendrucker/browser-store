# browser-store [![Build Status](https://travis-ci.org/bendrucker/browser-store.svg?branch=master)](https://travis-ci.org/bendrucker/browser-store) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/browser-store.svg)](https://greenkeeper.io/)

> Async browser storage with Node fallback

Uses local storage, then session storage, then an in-memory store if neither are available.


## Install

```
$ npm install --save browser-store
```


## Usage

```js
var store = require('browser-store')

store.put('foo', 'bar', function (err) {
  //=> err === null
  store.get('foo', function (err, value) {
    //=> err === null
    //=> value === 'bar'  
  })
})
```

## API

#### `store.get(key, callback)` -> `undefined`

Get data from the store. Parses as JSON.

##### key

*Required*  
Type: `string`

##### callback

*Required*  
Type: `function`  
Arguments: `err, value`

#### `store.put(key, value, [callback])` -> `undefined`

Add an item to the store (or overwrite an existing item). Data will be stringified as JSON.

##### key

*Required*  
Type: `string`

##### value

*Required*  
Type: `any`

##### callback

*Required*  
Type: `function`  
Arguments: `err`

#### `store.remove(key, [callback])` -> `undefined`

Remove an item.

##### key

*Required*  
Type: `string`

##### callback

*Required*  
Type: `function`  
Arguments: `err`

#### `store.clear([callback])` -> `undefined`

Clear the store.

##### callback

*Required*  
Type: `function`  
Arguments: `err`

## Related

* [browser-async-store](https://github.com/bendrucker/browser-async-store): the engine for browser-store
* [browser-store](https://github.com/bendrucker/browser-store): an API compatible alternative that only uses `sessionStorage`

## License

MIT © [Ben Drucker](http://bendrucker.me)
