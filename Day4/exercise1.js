var Car = function(model, noise) {
	this.model = model;
	this.noise = noise;
	

	
}



Car.prototype.numWheels = 4;

Car.prototype.sound = function() {
		console.log("This " + this.model + " has " + this.numWheels + " wheels and sounds like this: " + this.noise);
	}

var new_car = new Car("Polo", "BRRR!");

new_car.sound();