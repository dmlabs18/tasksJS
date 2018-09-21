function removePicture (event, container) {
	container = container || document
	var link
	if(typeof(event) === 'string') link = event
		else link = event.srcElement.currentSrc
			var imgs = container.getElementsByTagName('img')
		for (var i = 0; i < imgs.length; i++) {
			if (imgs[i].getAttribute('src') === link) imgs[i].parentNode.removeChild(imgs[i])
		}
}

function addPicture (link, title, container) {
	title = title || 'picture'
	container = container || document.getElementById('container')
	var x = document.createElement("IMG")
	x.src = link
	x.alt = title
	x.ondblclick = removePicture
	container.appendChild(x)
}

var Gallery = function (file, container) {
	function XHR(url) {
		var xhr = new XMLHttpRequest()
		xhr.open('GET', url, false)
		xhr.send()
		if (xhr.status != 200) console.log( xhr.status + ': ' + xhr.statusText )
			else return JSON.parse(xhr.response)
		}
	XHR(file).forEach(obj => addPicture ( obj.ref, obj.title, container ))
}

Gallery.prototype.addPicture
Gallery.prototype.removePicture
var Vernissage = new Gallery ('db.json')
//var Vernissage2 = new Gallery ('db.json', document.getElementById('container2'))
//removePicture("https://images.pexels.com/photos/90912/pexels-photo-90912.jpeg")
//addPicture("https://s15.postimg.cc/m3oqx8ctn/js_cup_1.png")
//addPicture("https://s15.postimg.cc/m3oqx8ctn/js_cup_1.png", "title", document.getElementById('container2'))
//removePicture("https://s15.postimg.cc/m3oqx8ctn/js_cup_1.png", document.getElementById('container2'))