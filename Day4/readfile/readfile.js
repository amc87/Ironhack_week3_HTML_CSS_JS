var fs = require("fs");

function print(error, content) {
	if (error) {
		console.log("Sorry, there was an error!");
	}
	else {
		lines = content.split("\n");
		for (var line = 0; line < lines.length; line++) {
			console.log(lines[line]);
			console.log("-----------");
		};
	}
}

fs.readFile("file.txt", "utf8", print);