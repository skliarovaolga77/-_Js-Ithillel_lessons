
class User {


  	static userAuthForm(e){
       e.preventDefault();

      //наша форма это this
       let form = this;
       //в форме ищем input
      let name = form.querySelector('input[data-name="name"]');
		  let email = form.querySelector('input[data-name="email"]');


      //name.value - точто записали в ипут
      if(!formValidation.text(name.value)){
        name.classList.add('error');
      } else {
        // console.log(name.value, email.value, userColor.value, userData.dataset.color); 
        // вывод Склярова Оля skliarovaolga77@gmail.com orange true
        //для отправки создали user
        let user = {
          name: name.value,
          email: email.value,
          color: userColor.value,
          colorChange : userData.dataset.color
        }
        //  console.log(user);
        //как только собрали данные отдаем эти данные внутрь метода sendUserData
        User.sendUserData(user);// и отправляем данные

      }

    }

    //для статистики , для передачи на бэкэнд
    static userColorChange(){
      userData.dataset.color = 'true';
    }

    //отправляем собранные нами данные
    //data - данные
    ///article/fetch/post/user - куда отправить данные ( это url дает нам бэкенд)
    static async sendUserData(data){
      let response = await fetch('/article/fetch/post/user', {
        method: 'POST',
        body: JSON.stringify(data)
      });

      let result = await response.json();
      alert(result.message);
    }


}

//проверка
class formValidation{
  //string данные с нашего инпута
	static text(string){
    // console.log(string);
		return string.length>=10 ? true : false;
	}
}


let userAuth = document.querySelector('#userAuth');
userAuth.addEventListener('submit', User.userAuthForm);

//данные по смене цвета
let userColor = document.querySelector('#userColor');
userColor.addEventListener('change', User.userColorChange);

let userData = document.querySelector('#userData');




