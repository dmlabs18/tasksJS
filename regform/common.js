var arrKeys = []
var arrEmail = []
var nameInput = document.querySelector ( "#login" )
var passInput = document.querySelector ( "#password" )
var emailInput = document.querySelector ( "#inputEmail" )
var avaInput = document.querySelector ( "#avatar" )

nameInput.value = ""
emailInput.value = ""
var shaKey = Sha256.hash (nameInput.value + passInput.value);

fetch ( "db.json" )
.then ( response => {
	response.json().then ( response => {
		response.forEach(item => {
			arrKeys.push(item.key)
			arrEmail.push(item.email)
		});
	})
})

function changeForm() {
	if (!emailInput.value) {
		emailInput.style.backgroundColor="rgb(255, 214, 214)"
	} else {
		if (arrEmail.indexOf(emailInput.value) !== -1) {
			document.querySelector ('#emailForm').style.display="none";
			document.querySelector ('#regForm').style.display="block";
		} else {
			document.querySelector ('#emailForm').style.display="none";
			document.querySelector ('#regForm').style.display="block";
			document.getElementById('avatar').disabled = false;
			document.body.innerHTML += `<span style="display:block; font-weight: bold; color: red; text-align: center; text-transform: uppercase; padding: 5px">This mail is not registered. Register, please!</span>`;
		}
	}
}

function regForm () {
	if (!nameInput.value || !passInput.value) {
		nameInput.style.backgroundColor="rgb(255, 214, 214)"
		passInput.style.backgroundColor="rgb(255, 214, 214)"
	} else {
		var sshKey = Sha256.hash ( nameInput.value + passInput.value )
		if (arrKeys.indexOf(sshKey) !== -1) {
			fetch ( "db.json" )
			.then ( response => {
				response.json().then ( response => {
					response.forEach(item => {
						if(item.key === sshKey ) {
							document.body.innerHTML =`<img src="https://www.xactplacements.co.uk/wp-content/uploads/2018/03/cheer-welcome-still.jpg" style='width: 100%; max-width: 400px; margin: 0 auto; display: block;'>
							<span style="display:block; font-size:33px; font-weight: bold; color: #123; text-align: center; text-transform: uppercase; padding: 5px">Welcome, ${item.name}!</span>
							<img src=${item.avatar} style='width: 100px; margin: 0 auto; display: block; border-radius: 50%;'>`;
						}
					});
				})
			})
		} else {
			document.body.innerHTML =`<img src="http://spec-literatura.lg.ua/sites/default/files/403.png" style='width: 100%; max-width: 400px; margin: 0 auto; display: block;'><span style="display:block; font-size:25px; text-align: center; font-weight: bold; color: #800000; text-transform: uppercase; padding: 5px">Вы ввели неверный логин или пароль...</span>`;
		}
	}
}