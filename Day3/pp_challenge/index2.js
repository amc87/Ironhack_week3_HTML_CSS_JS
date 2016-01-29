function caesarCipher(message, shift) {

	if (shift === undefined) {
		shift = -3;
	}
	var splitted = splitting(message);
	

	var translated = translate(splitted, shift);
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

	var joined = joining(translated);
	return joined;
}

function splitting(message) {
	var letters_array = message.split("");
	return letters_array;
}

function translate(letters_array, shift) {

	var translation = letters_array.map(function(letter) {
			return String.fromCharCode(isLetter(letter,shift));
		})
	return translation;
}

function joining(translation) {
	var joined = translation.join("");
	return joined;
}

function isLetter(letter, shift) {
	if ((letter >= "a" && letter <= "z") || (letter >= "A" && letter <= "Z")) {
		
		return (letter.charCodeAt(0) + shift);
	}
	else {
		return letter.charCodeAt(0);
	}
}

function alpha(asciiCode) {

}

var encrypted = caesarCipher("alex is a brutus", -10);

console.log(encrypted);
//=> "_orqrp"

