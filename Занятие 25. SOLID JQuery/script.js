// const userRoles = {
// 	student: new Student(user),
// 	lector: new Lector(user),
// 	admin: new Admin(user)
// }

// class User{
// 	render(){
		
// 	}
// }


// let userWithRole = userRoles[this.role] && userRoles[this.role](this);


const animals = {
	cats: {
		Sam: {
			name: 'Sam',
			age: 3,
			color: 'orange'
		},
		Silvia: {
			name: 'Silvia'
		},
		Alina: {
			name: 'Alina'
		}
	},
	dogs: {
		Charlie: {
			name: 'Charlie'
		},
		Max: {
			name: 'Max'
		}
	}
};

const animalVoices = {
	cat: 'myu',
	dog: 'gav',
	lion: 'arrr'
}

class User{
	constructor(name, animals={}){
		this.name = name;
		this.animals = animals;
	}
}

class Animal{
	makeVoice(){
		return animalVoices[this.type] ? animalVoices[this.type] : 'voice for this animal not defined';
	}
}

class Cat extends Animal{

	constructor(){
		super();
		this.type = 'cat'
	}

	static setCat(cat){
		let newCat = new Cat();
		//console.log(newCat);
		for(let key in cat){
			newCat[key] = cat[key];
		}
		return newCat;
	}

	static setUserCat(cat,user){
		let newCat = Cat.setCat(cat);
		if(!user.animals.cats){
			user.animals.cats = {};
		}
		user.animals.cats[cat.name] = newCat;
	}

	static getCats(user){
		if(user.animals.cats){
			let cats = user.animals.cats;
			for(let key in cats){
				let cat = cats[key];
				console.log(cat.kotikMethod(),cat.makeVoice());
			}
		}
	}

	kotikMethod(){
		return `${this.name} has kotikMethod`;
	}

	makeVoice(){
		let animalResult = super.makeVoice();
		return `${animalResult} – myuuuu.`;
	}
}

let Jack = new User('Jack');
console.log(Jack);

Cat.setUserCat(animals.cats.Sam, Jack);
Cat.setUserCat(animals.cats.Silvia, Jack);

Cat.getCats(Jack);

let singleAlina = Cat.setCat(animals.cats.Alina);
console.log(singleAlina);

console.log(singleAlina.kotikMethod(),singleAlina.makeVoice());


