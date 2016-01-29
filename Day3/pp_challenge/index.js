function caesarCipher(message, shift) {

	if (shift === undefined) {
		shift = -3;
	}
	var splitted = splitting(message);
	var translated = translate(splitted, shift);
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

	var alphabetUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	var alphabetDown = "abcdefghijklmnopqrstuvwyz".split("");
	
	if (alphabetUp.indexOf(letter) !== -1) {
		var new_alpha_letter = alphabetUp[(letter.charCodeAt(0) + shift) % 25].charCodeAt(0);
		return new_alpha_letter;
	}
	else if (alphabetDown.indexOf(letter) !== -1) {
		var new_alpha_letter = alphabetDown[(letter.charCodeAt(0) + shift) % 25].charCodeAt(0);
		return new_alpha_letter;
	}
	else {
		var new_alpha_letter = letter.charCodeAt(0);
		return new_alpha_letter;
	}
}



var encrypted = caesarCipher("Alvaro is a brUtus + ^ 0", 9);

console.log(encrypted);
//=> "_orqrp"

