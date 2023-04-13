//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	get species(){
		return species;
	}
	makeSound(){
		console.log('A sound the animal makes');
	}
}

class Dog extends Animal {
	bark(){
		console.log('woof');
	}
}

class Cat extends Animal {
	purr(){
		console.log('purr');
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
