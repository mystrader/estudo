const {videos} = require("./filterData");


Array.protototype.filter = function (predicate){
	let result  = [];
	this.forEach(item => {
		if (predicate (item)) {
			result.push (item);
		}
	})
	return result;
};

const topRatingVideos = videos.filter(video => video.rating === 5);
console.log(topRatingVideos);

//Forma convecional
//
// let topRatedVideos = [];
// videos.forEach( video => {
// 	if (video.rating === 5){
// 		topRatedVideos.push(video)
// 	}
// });


