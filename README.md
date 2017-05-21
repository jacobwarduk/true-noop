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

While other 'no-op' modules actually go ahead and create and return a new function, e.g.

`module.exports = function() {}`

`module.exports = () => () => {};`

`true-noop` exploits the fact that `Function.prototype` is in itself a function that does nothing and returns `undefined`.

`module.exports = Function.prototype;`
