const request = require('snekfetch');
const base = 'https://api.cardcastgame.com/v1';

module.exports = id => ({
  info() { return request.get(`${base}/decks/${id}`).then(r => r.body); },
  responses() { return request.get(`${base}/decks/${id}/responses`).then(r => r.body); },
  calls() { return request.get(`${base}/decks/${id}/calls`).then(r => r.body); },
  cost() { return request.get(`${base}/decks/${id}/cost`).then(r => r.body); },
});

module.exports.search = options => {
	const params = Object.entries(options).map(v => `${v[0]}=${encodeURIComponent(v[1])}`).join('&');
	return request.get(`${base}/decks?${params}`).then(r => r.body);
};