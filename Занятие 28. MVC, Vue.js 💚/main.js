// let app = new Vue({
// 	el: '#app', // ссылка на элемент
// 	data: {
// 		x: 10,
// 		y: 200,
// 		list: [1,2,3,4],
// 		message: 300,
// 		info: {
// 			adress: 'Mechnikova',
// 			code: 24426,
// 			city: 'Kiev'
// 		},
// 		add: {}
// 	}
// })

// console.log(app);

// app.x = 100;
// console.log(app.x);

// setTimeout(() => {
// 	console.log(app.new);
	// app.new = 'new';
// }, 1000);

// setTimeout(()=>{Vue.set(app.add,'z',100)},2000);

// let app2 = new Vue({
// 	el: '#app2',
// 	data: {
// 		className: 'active',
// 		appearance: 'transition: 0.2s; color: red;',
// 		value: 10,
// 		example: 'HELLO'
// 	}
// })

// setInterval(()=>{
// 	app2.value = Math.floor(Math.random()*10);
// },1000)

// let app3 = new Vue({
// 	el: '#app3',
// 	data: {
// 		seen: false
// 	}
// })

// setInterval(()=>{app3.seen = !app3.seen},1000);

// let app4 = new Vue({
// 	el: '#app4',
// 	data: {
// 		item: [10,20],
// 		list: [
// 			{
// 				text: 'Hello, 🐶'
// 			},
// 			{
// 				title: 'Hello, 🐹'
// 			},
// 			{
// 				text: ''
// 			},
// 			{
// 				text: 'Hello, 🦁'
// 			},
// 			{
// 				text: 'Hello, 🐻'
// 			}
// 		],
// 		mass: {
// 			x: 10,
// 			y: 20,
// 			z: 30
// 		}
// 	}
// })

// let app5 = new Vue({
// 	el: '#app5',
// 	data: {
// 		counter: 3,
// 		x: 100
// 	},
// 	methods: {
// 		calculate(value){
// 			return value*10;
// 		},
// 		onClick(x,e,y){
// 			console.log(x,e,y);
// 			this.counter++;
// 		}
// 	}
// })

// let appClass = new Vue({
// 	el: '#appClass',
// 	data: {
// 		className: 'active',
// 		classList: ['cat','dog','lion']
// 	},
// 	methods: {
// 		generateClass(){
// 			let min = 0,
// 				max = this.classList.length,
// 				randomIndex = Math.floor(Math.random() * (max - min)) + min,
// 				randomClass = this.classList[randomIndex];

// 			this.className = randomClass;
// 		}
// 	}
// })

// let app6 = new Vue({
// 	el: '#app6',
// 	data: {
// 		message: 'Hello',
// 		show: true
// 	},
// 	methods: {
// 		// onInput(event){
// 		// 	//console.log(arguments);
// 		// 	console.log(event.target.value);
// 		// 	this.message = event.target.value;
// 		// }
// 	}
// })

// let appData = {
// 	x: 60,
// 	y: 200,
// 	summ: '',
// 	example: 'text',
// 	inner: {
// 		z: 120
// 	}
// }

// function onClick(){
// 	this.summ = +this.summ + this.x;
// }

// let app7 = new Vue({
// 	el: '#app7',
// 	data: appData,
// 	methods: {
// 		onClick,
// 		getCustomValue(){
// 			return this.x + this.y + this.inner.z;
// 		}
// 	},
// 	beforeCreate(){
// 		console.log('before Create');
// 		console.log(this);
// 		// debugger;
// 	},
// 	created(){
// 		// нет привязки к el
// 		console.log('created');
// 		console.log(this);
// 		this.x = 100000;
// 		//debugger;
// 	},
// 	beforeMount(){
// 		console.log(this);
// 		console.log('before Mount');
// 		//debugger;
// 	},
// 	mounted(){
// 		console.log(this);
// 		console.log('mounted');
// 		//debugger;
// 	},
// 	beforeUpdate(){
// 		console.log('before Update');
// 		//debugger;
// 	},
// 	updated(){
// 		console.log('updated');
// 		//debugger;
// 	},
// 	beforeDestroy(){
// 		console.log('before Destroy');
// 	},
// 	destoyed(){
// 		console.log('destoyed');
// 	}
// })

// app7.$destroy();
