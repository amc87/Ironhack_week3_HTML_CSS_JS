

var exampleArray = [2, -5, 10, 5, 4, -10, 0];


function zeroSum (numbersArray) {
	var result = [];
	for (var i = 0; i < exampleArray.length; i++) {
	
		var outerLoop = exampleArray[i];
		for (var j = i+1; j < exampleArray.length; j++) {
			
			var innerLoop = exampleArray[j];
			if (outerLoop + innerLoop === 0 ) {
				var pair = [i, j];
				result.push(pair);

			}
		};
	};

	return result;
}

var pairs = zeroSum(exampleArray);

console.log(pairs);