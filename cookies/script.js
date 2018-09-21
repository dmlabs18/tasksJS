var nameInput = document.querySelector ( "#login" )
var passInput = document.querySelector ( "#pass" )
var emailInput = document.querySelector ( "#mail" )
var labels = document.querySelectorAll ( "label" )
var submitButton = document.querySelector ( "#submitEmail" )

// var shaKey = Sha256.hash (nameInput.value + passInput.value + emailInput.value)
// var userKeys = [
// {
// 	"login": "john",
// 	"pass": "watcher",
// 	"email": "john@mail.stark",
// 	"key": "730f75dafd73e047b86acb2dbd74e75dcb93272fa084a9082848f2341aa1abb6",
// 	"token": "0e7f3c5c909ce8afb978a208d639e85af2171df2ec0003a07f13ad97878ef053"
// }
// ]

labels.forEach ( x => x.style.display = "none" )

function registerUser () {
	nameInput.display = "block"
	passInput.display = "block"
	emailInput.display = "block"
	labels.forEach ( x => x.style.display = "block" )
	submitButton.style.display = "block"
}

// function loginUser () {
// 	nameInput.style.display = "block"
// 	passInput.style.display = "block"
// 	emailInput.style.display = "block"
// }

function getCookies () {
	var res = document.cookie.split ( "; " ).map ( x =>  {
		var tmp = x.split ( "=" )
		var elem = {}
		elem [ tmp [0] ] = tmp [1]
		return elem
	})
	return Object.assign ( {}, ...res )
}

function recordCookies() {
	document.cookie =`location=${location.href}; `
	document.cookie =`username=${nameInput.value}; `
	document.cookie =`email=${emailInput.value}; `
	document.cookie =`token=${Sha256.hash ( passInput.value )}; `
}

let user = getCookies ()
console.log ( user )

if ( !user.username ) registerUser ()
	else {
		nameInput.value = user.username
		nameInput.disabled = true
		emailInput.value = user.email
		emailInput.disabled = true
		labels[1].style.display = "block"
		//submitButton.style.display = "none"

		passInput.onchange = function ( event ) {
			let digest = Sha256.hash ( passInput.value )
			if ( digest !== user.token ) {
				passInput.style.color = "red"
				labels[1].innerText = "Invalid password"
				labels[1].style.color = "red"
			}
			else {
				nameInput.style.display = "none"
				passInput.style.display = "none"
				emailInput.style.display = "none"
				submitButton.style.display = "none"
				labels[1].innerText = `Welcome, ${user.username}`
				labels[1].style.color = "#fa0"
				var pict = document.body.appendChild ( document.createElement ( 'img' ) )
				pict.src = "https://wallpapershome.com/images/pages/pic_v/16046.jpg"
				pict.width = "300"
			}
		}
	}