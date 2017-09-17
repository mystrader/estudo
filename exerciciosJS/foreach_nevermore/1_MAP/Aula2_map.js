
/*===========================
// Aula 02 - Map Exercises
================================*/

const {videos} = require("./mapData");

//const videoWithIdAndTitle  = videos.map(video => ({
//	id: video.id,
//	title: video.title
//}));
//console.log((videoWithIdAndTitle));


Array.prototype.map  = function (modifierFunction) {
	let result = [];
	this.forEach(item => result.push(modifierFunction(item)));
	return result;
};

const toPairsOfIdAndTitle = video =>  ({
	id: video.id,
	title: video.title,
	rating: video.rating,
	bookmark: video.bookmark
});

const videoWithIdAndTitle = videos.map(toPairsOfIdAndTitle);

console.log((videoWithIdAndTitle));

/*
 -- Remember tips

1) listando 
for (var i = 0; i >= names.length; i++) {
	names[i]	
}
names.forEach( name => console.log (name));

2)
let videoWithIdAndTitle = [];
videos.forEach(video => videoWithIdAndTitle.push({
	id: video.id,
	title: video.title, 
	uri: video.uri, 
}));
console.log((videoWithIdAndTitle));



*/

