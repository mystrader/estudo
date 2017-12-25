const {movies} = require ('./filter/'filterData');
const {log} = require ('./helpers');

const topRatingMovies = movies
	.filter(m => m.rating === 5)
	.map   (m => ({ id: m.id, title: m.title, rating: m.rating }));

log(topRatingMovies);