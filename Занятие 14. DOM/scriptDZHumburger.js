// Example

// const Pets = {
// 	dogs: {
// 		Bella: {
// 			name: 'Bella',
// 			age: 2,
// 			icon: 'ðĐ'
// 		},
// 		Charlie: {
// 			name: 'Charlie',
// 			age: 3,
// 			icon: 'ðâðĶš'
// 		},
// 		Max: {
// 			name: 'Max',
// 			age: 10,
// 			icon: 'ð'
// 		}
// 	},
// 	cats: {
// 		Sam: {
// 			name: 'Sam',
// 			age: 9,
// 			icon: 'ð'
// 		},
// 		Simba: {
// 			name: 'Simba',
// 			age: 0.3,
// 			icon: 'ðą'
// 		},
// 	},
// 	birds: {
// 		Jasper: {
// 			name: 'Jasper',
// 			age: 3,
// 			icon: 'ðĶ'
// 		},
// 		Lola: {
// 			name: 'Lola',
// 			age: 2,
// 			icon: 'ðĶĒ'
// 		},
// 	}
// }
// console.log(Pets);

// let date = new Date(),
// 	year = date.getFullYear();

// class Person{
// 	constructor(name, pets={}){
// 		this.name = name;
// 		this.pets = pets;
// 	}

// 	setPet(type, animal){
// 		if(!this.pets[type]){
// 			this.pets[type] = [animal];
// 		} else{
// 			this['pets'][type].push(animal);
// 		}
// 	}

// 	setYearOfBirth(type){
// 		if(type){
// 			this.setYearforPet(type);
// 		} else{
// 			for(let key in this.pets){
// 				this.setYearforPet(key);
// 			}
// 		}
// 	}

// 	setYearforPet(type){
// 		let animals = this.pets[type];

// 		if(animals.length>0){
// 			animals.map(function(animal){
// 				if(animal.age){
// 					animal.birth = year-animal.age;
// 				}
// 				return animal;
// 			})
// 		}
// 	}

// 	getPetsIcon(type){
// 		let animals = this.pets[type];

// 		if(type){
// 			this.getIcon(animals);
// 		} else{
// 			for(let key in this.pets){
// 				this.getIcon(this.pets[key]);
// 			}
// 		}

// 	}

// 	getIcon(animals){
// 		animals.forEach(function(animal){
// 			let icon = animal.icon ? `${animal.icon} for ${animal.name}` : `Icon not exist for ${animal.name}`;
// 			console.log(icon);
// 		})
// 	}

// }

/