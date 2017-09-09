# true-noop

[![npm](https://img.shields.io/npm/dt/true-noop.svg)](https://www.npmjs.com/package/true-noop) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)  [![Build Status](https://travis-ci.org/jacobwarduk/true-noop.svg?branch=master)](https://travis-ci.org/jacobwarduk/true-noop) [![Codecov branch](https://img.shields.io/codecov/c/github/jacobwarduk/true-noop/master.svg)]()

The only _true_ 'no operation' module out there.

**Installation**
```javascript
npm install --save true-noop
```

**Usage**
```javascript
let noop = require('true-noop');

noop();
```

---

**What makes this a _true_ 'no operation' function?**

While other 'no-op' modules actually go ahead and create then return a new function, e.g.

`module.exports = function() {}`

`module.exports = () => () => {};`

`true-noop` exploits the fact that `Function.prototype` is in itself a function that does nothing and returns `undefined`.

`module.exports = Function.prototype;`
