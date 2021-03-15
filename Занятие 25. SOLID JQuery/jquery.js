// // Селекторы в jQuery

// let secondBlock = $("[data-name=second]");
// console.dir(secondBlock);

// //setInterval(()=>{secondBlock.toggleClass('success')},1000);

// // Методы для работы с классами
// // addClass
// // removeClass
// // toggleClass
// // css

// // secondBlock.css({
// // 	'background-color': 'green',
// // 	'color': 'white'
// // });

// // События в jQuery
// // secondBlock
// // 	.click(function(){
// // 		$(this).toggleClass('success');
// // 	});

// //Best-practice – работает быстрее и работает с теми элементами, которые были добавлены на страницу после ее загрузки.

// // $('body').append('<button id="knopka">Click</button>');

// // $('#knopka')
// // 	// .click(function(){
// // 	// 	$(this).toggleClass('success');
// // 	// })
// // 	.on('click', function(){
// // 		$(this).toggleClass('success');
// // 	})
// // 	.on('mouseenter', function(){
// // 		$(this).html('Hello');
// // 	})

// // $('input')
// // 	.on('change', function(){
// // 		console.log($(this).val());
// // 	})
// // 	.on('keydown', function(){
// // 		$('.afterInput').text($(this).val());
// // 	})
// // 	.on('keypress', function(event){
// // 		console.log(event.keyCode);
// // 	})

// // Анимация в jQuery

// // setInterval(()=>{
// // 	secondBlock.slideToggle(3000);
// // },1000);

// // secondBlock
// // 	.fadeOut()
// // 	.delay(3000)
// // 	.fadeIn();

// // hide/show
// // delay()
// // fadeIn() / fadeOut() / fadeToggle()
// // slideUp() / slideDown() / slideToggle(3000)

// // Работа с разметкой страницы в jQuery
// // html
// // prepend/append
// // before/after
// // secondBlock.unwrap();
// // wrap/unwrap
// // empty
// // remove
// // clone

// // let newSecond = secondBlock.clone();
// // $('body').prepend(newSecond);

// // Ajax запросы

// $.ajax({
// 	url : 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&json',
// 	cache: false,
// 	method: 'GET',
// 	success: data => {
// 		console.log(data);
// 	},
// 	error: error => {
// 		console.log(error);
// 	}
// })

// // либо
// const request = $.ajax({
// 		url : '12https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json',
// 		cache: false,
// 		method: 'GET',
// 		error: error => {
// 			console.log(error);
// 		}
// 	})
// 	.done(data => {
// 		console.log(data);
// 	})

// // POST
// $.ajax({
// 	url: "/wp-admin/admin-ajax.php",
// 	type: "POST",
// 	dataType: "JSON",
// 	data: {
// 		currency: value,
// 		currency_val: current,
// 		action: 'set_currency'
// 	},
// 	success: function (data) {}
// });


