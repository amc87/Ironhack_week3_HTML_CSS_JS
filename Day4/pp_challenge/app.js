var fs = require('fs');
function fileActions(err, file){ 
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);

    function findJonSnow() {
    	for (var i = 0; i < episodes.length; i++) {
    		desc = episodes[i].description;
    		substring = "Jon Snow";
    		if (desc.indexOf(substring) > -1) {
    			return ("I found Jon Snow at episode number " + episodes[i].episode_number);
    		};
    	};
    }

    function isBigEnough(value) {
	  return value.rating >= 8.5;
	}

	var episodes_filtered = episodes.filter(isBigEnough);

    var newNumbers = episodes_filtered.sort(function(a, b){
	  return a.episode_number - b.episode_number;
	});

    for (var i = 0; i < newNumbers.length; i++) {
    	console.log(newNumbers[i].title + " #: " + newNumbers[i].episode_number);
	    console.log(newNumbers[i].description);
	    var stars = "*".repeat(newNumbers[i].rating);
	    console.log("Rating: " + newNumbers[i].rating + " " + stars +"\n");
    };

    console.log(findJonSnow());
}
fs.readFile("./GoTEpisodes.json", 'utf8', fileActions);