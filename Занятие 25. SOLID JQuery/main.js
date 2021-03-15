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
};

class User{
	constructor(name, animals={}){
		this.name = name;
		this.animals = animals;
	}
}

//общий метод ( должен наследовать)
class Animal{
  //
	makeVoice(){
		return animalVoices[this.type] ? animalVoices[this.type] : 'voice for this animal not defined';
	}
}

//класс Cat является наследником Animal(унаследуют все методы Animal)
class Cat extends Animal{
  constructor(){
		super();
		this.type = 'cat'
	}

  //создать кота 
  static setCat(cat, user){
    //в любом случае создаем  экземпляр класса Cat
    let newCat = new Cat();
    //насыщаем св-ми 
    for(let key in cat){
      newCat[key]=cat[key];
    }
    return newCat;

  }
  //взять кота , созданного setCat и добавить нужному user
   static setuserCat(cat, user){

    let newCat = Cat.setCat(cat);//то что вернет setCat = newCat
    if(!user.animals.cats){
      //если объекта нет - создаем 
      user.animals.cats = {};
    }
      //добавляем в объект кота
      //ключ - user.animals.cats[cat.name]
      //значение - cat
    user.animals.cats[cat.name] = newCat;
   

  }
  //получить всех котов от user
  static getCats(user){
    if(user.animals.cats){
      // console.log(user.animals.cats);
      let cats = user.animals.cats;
      for(let key in cats){
        // console.log(cats);
        // console.log(key);
        let cat = cats[key];
        // console.log(cat);
        console.log(cat.kotikMethod());
      }
    }
  }
  kotikMethod(){
		return `${this.name} has kotikMethod`;
	}
  //дополнить метод makeVoice для кошки
  makeVoice(){
		let animalResult = super.makeVoice();
		return `${animalResult} – myuuuu.`;
	}

}


let Jack = new User('Jack');
console.log(Jack);

//добавим кота 
Cat.setuserCat(animals.cats.Sam, Jack);
Cat.setuserCat(animals.cats.Silvia, Jack);

Cat.getCats(Jack);

//не привязываем ни к какому user
let singleAlina = Cat.setCat(animals.cats.Alina);
console.log(singleAlina);


console.log(singleAlina.kotikMethod(),singleAlina.makeVoice());