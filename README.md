# node-cardcast
A tiny node.js Card Cast API.

## Example
```js
const cardcast = require('cardcast');

// View metadata about a deck
cardcast('949PJ')
  .info()
  .then(console.log);

// View call cards of a deck
cardcast('949PJ')
  .calls()
  .then(console.log);

// View response cards of a deck
cardcast('949PJ')
  .responses()
  .then(console.log);

// View the cost of printing a deck
cardcast('949PJ')
  .cost()
  .then(console.log);
```