var fs = require("fs");

function sentenceLoader (file) {
	function splitSentences(){

	}
	fs.readfile(file, "utf8", splitSentences);
}
module.exports = sentenceLoader;
