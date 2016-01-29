
var new_array = [];

function decode(array) {
	array.forEach(function (word, index) {
		var letter = word.charAt(index % 5);
		new_array.push(letter);
	})

	message = new_array.join("");

	return message;
}

module.exports = decode;

