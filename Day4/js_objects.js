var animal = {
	name: "markov",
	noise: "grrrr",
	makeNoise: function(noise) {
		console.log("Making " + noise);
	}
};

animal.specie = "cat";
animal.name = "garfield";


// console.log(animal);

// animal.makeNoise("wwwuuuuuuu!!");




////

var Animal = function(name, noise) {
	this.name = name;
	this.noise = noise;
	this.makeNoise = function() {
		console.log(this.name + " is doing " + this.noise);
	}
}

var cat = new Animal("markov", "grrrrrrr" );

cat.makeNoise();
console.log(cat.makeNoise());

