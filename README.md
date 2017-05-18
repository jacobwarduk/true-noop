# true-noop

The only _real_ 'no operation' module out there.

**Installation**
```javascript
npm install --save real-noop
```

**Usage**
```javascript
let noop = require('real-noop');

noop();
```

**Why is this a _real_ 'no operation' function**
Because most other implementations _do_ actually perform an operation.

`module.exports = function() {}`

`module.exports = () => () => {};`

The only _real_ 'no-op' is `Function.prorotype`.
