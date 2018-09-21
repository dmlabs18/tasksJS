location.hash = "#part01"
localStorage.setItem ( "pageId", location.hash )
localStorage.setItem ( "startTime", Date.now() )

var num = (function counter() {
	var x = 0;
	return function() {
		if(x===4) return x = 0
			return x++;
	};
})()

function locationHashChanged() {
	var answer = [
	{
		title: 'You hacked us!',
		ref: 'https://t3.ftcdn.net/jpg/01/07/65/04/500_F_107650408_zF7EPonabS3quaksOGedb7axiDOdGxm5.jpg'
	},
	{
		title: 'We will find you by IP!',
		ref: 'http://lostfilm.info/images/news/54977.jpg'
	},
	{
		title:  'I arranged for you. They hurry up to you!',
		ref: 'https://p4.tabor.ru/feed/2018-02-17/11486577/841790_760x500.jpg'
	},
	{
		title: 'Stop it!',
		ref: 'http://www.banklawyersblog.com/.a/6a00d8341c652b53ef01b8d077a978970c-800wi'
	}
	]

	if (location.hash !== localStorage.pageId) {
		var temp = answer[num()]
		document.querySelector('h1').innerHTML = `${temp.title}`
		document.querySelector('#text').innerHTML = `<img src=${temp.ref} alt="dogs">`
		localStorage.startTime = Date.now()
		localStorage.pageId = location.hash
	}
}

window.onhashchange = locationHashChanged