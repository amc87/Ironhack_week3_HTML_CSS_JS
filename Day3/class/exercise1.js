var string1 = "80:70:90:100";

function averageColon(numbers) {
	var numbersArray = numbers.split(":");

	var sum = numbersArray.reduce(function(previous,actual) {
		return (parseInt(previous) + parseInt(actual));
	})

	var average = sum / numbersArray.length;

	return average;
}

var avg = averageColon(string1);
console.log(avg);