const user = {
 name : 'igor'
};

 user.name = 24;
//  delete user.name;
 console.log(user);

 
let devices = {
	laptops: {
		mac: {
			serial: 123
		},
		lenovo: {
			serial: 424
		}
	}
}

let {laptops: {mac:{serial:mac}} } = devices;
console.log(mac);