// call, apply, bind

// let obj = {
// 	m: f1
// }

// function f1();

// f1() – window;
// m.f1() - obj;

// class Person(){}
// let Anna = new Person(); - {}

// let dog = {
// 	name: 'dog',
// }

// let obj = {
// 	func: f1
// }

// function f1(x,y){
// 	console.log(x,y,this);
// }

// // f1(10,20); // 10, 20, window
// // f1.call(dog,100,200); //100, 200, dog
// // f1.apply(dog,[100,200]); //100, 200, dog
// // obj.func(300,400); //300,400,obj

// let f2 = f1.bind(dog);
// f2(100,400);

// Первый пример:
// let info = {
//   x: 100
// }

// function f(a,b){
//   console.log(this);
//   console.log(a,b,this.x);
// }

// f.bind(info)(2,3);

// Второй пример:
// let info = {
//   x: 100
// }

// function f(){
//   console.log(this);
// }

// let data = {
//   m: f.bind(info)
// }

// data.m();

// Event Loop

// Node, npm

// import {Zeus} from './js/task-1.js';
// import {Poseidon} from './js/task-2.js';

// import {encode} from './js/encode.js';
// import {decode} from './js/decode.js';

// let codeString = encode('Hello, world');
// console.log(codeString);

// console.log(decode(codeString));

// function summ(x,y){
// 	return x+y;
// }

// console.log( summ(10,20) );
// console.log('hello');

// setTimeout(function(){console.log('hello')},1000);

// console.log('here');




