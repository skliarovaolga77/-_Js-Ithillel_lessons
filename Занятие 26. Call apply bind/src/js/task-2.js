let heros = document.querySelector('.heroes');
//запрос файла poseidon

class God2{
	constructor(){
	this.image = 'images/poseidon.png';
		
	}

	//запрос, создать
	async getData(){

		//делаем запрос на получение файла
		let request = await fetch('json/poseidon.json'),
		//ответ получим в response
			response = await request.json();
			//в info пойдет все что вернет response
			this.info = response;
				
				this.render();
				return response;

	}

	//render ждет рез-т (async)
	async render(){
			let tds = [];

		for(let key in this.info){
			let td = `<td>${key}: ${this.info[key]}</td>`;
			tds.push(td);
		}

		tds.unshift(`<td><img src="${this.image}" width="100"></td>`);

	
			let table = document.createElement('table');
		table.classList.add('poseidon');
		let tr = document.createElement('tr');

		table.append(tr);

		tr.innerHTML = tds.join('');
		tr.append(this.createBtn());

		heros.append(table);
	}

	createBtn(){

		let BtnTD = document.createElement('td');
		let helloBtn = document.createElement('button');
		helloBtn.innerHTML = 'Say, hello';
		helloBtn.addEventListener('click', this.poseidonHello);
		BtnTD.append(helloBtn);

		return BtnTD;
	}
	poseidonHello(){
		console.log('Poseidon, Hello');
	}


	
}
//подкоючаем к js
export let Poseidon = new God2();
Poseidon.getData();


