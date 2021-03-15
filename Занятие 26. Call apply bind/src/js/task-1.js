let heros = document.querySelector('.heroes');

class God{
	constructor(){
		this.image = 'images/zeus.svg';
	}

	async getData(){
		let request = await fetch('json/zeus.json'),
			response = await request.json();
		this.info = response;

		this.render();
		return response;
	}

	async render(){
		let tds = [];

		for(let key in this.info){
			let td = `<td>${key}: ${this.info[key]}</td>`;
			tds.push(td);
		}

		tds.unshift(`<td><img src="${this.image}" width="100"></td>`);

		let table = document.createElement('table');
		table.classList.add('zeus');
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

		helloBtn.addEventListener('click', this.zeusHello);

		BtnTD.append(helloBtn);

		return BtnTD;
	}

	zeusHello(){
		console.log('zeus, Hello');
	}
}

//подкоючаем к js
export let Zeus = new God();
Zeus.getData();







