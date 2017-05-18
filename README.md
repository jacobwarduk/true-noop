# true-noop

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

Because most other implementations _do_ actually perform an operation - the execution and return of the function.

`module.exports = function() {}`

`module.exports = () => () => {};`

The only _true_ 'no-op' is `Function.prototype`.
