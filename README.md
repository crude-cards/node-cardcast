# node-cardcast
A tiny node.js Card Cast API.

## Examples
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
	
// Search for decks
cardcast
  .search({
    search: 'me too thanks',
    sort: 'created_at'
  })
  .then(console.log);
```

### Searching
`cardcast.search` takes the following options (`?` denotes optional):
- `?category`
	- Structure:
		- `technology` (single category)
		- `technology,gaming` (multiple categories are comma-delimited)
	- Categories:
		- `books`
		- `community`
		- `gaming`
		- `movies`
		- `music`
		- `sports`
		- `technology`
		- `television`
		- `translation`
		- `other`
		- `random`
- `?sort`
	- Rating: `rating`
	- Name: `name`
	- Time: `created_at`
	- Size: `card_count`
- `?direction`
	-	The direction of the `sort` parameter
	- Can be `asc` or `desc`
- `?limit`
	- Integer in the range `1` and `50` (inclusive)
- `?offset`
	- The offset (pagination)
- `?author`
	- The username of the author of the deck
- `search`
	- The search query