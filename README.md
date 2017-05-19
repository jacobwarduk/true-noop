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

`Function.prototype` is in itself a function that does nothing and returns `undefined`. So rather than creating a _new_ function, as other modules do, e.g.

`module.exports = function() {}`

`module.exports = () => () => {};`

...we actually call it directly

`module.exports = Function.prototype`
