var Viking = function(name, health, strength) {
	this.name = name;
	this.health = health;
	this.strength = strength;
}

var viking1 = new Viking("Alvaro", 100, 25 );

var viking2 = new Viking("Pepe", 70, 40 );

var Fight = function(fighter1, fighter2) {

	// console.log(fighter1.strength)

	

	var health_left1 = function() {
		if (fighter1.health < 5) {
			return "Fighter 1 losses";
		}
		else {
			var left =
			console.log(fighter2.health -= fighter1.strength);
			return health_left2();
		};

	}

	var health_left2 = function() {
		if (fighter2.health < 5) {
			return "Fighter 2 losses";
		}
		else {
			console.log(fighter1.health -= fighter2.strength);
			return health_left1();
		}
	}


health_left1();
	// var fighter1_turn = function() {
	// 	return fighter2.health = fighter2.health - fighter1.strength;
	// 	}
	
}

var fight1 = new Fight(viking1,viking2);