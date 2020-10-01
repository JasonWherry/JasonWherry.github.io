// // $('.carousel').carousel({
// //   interval: 2000
// // })


// // open image in new tab
// function clickImage(){

// 	// variables
// 	var outerDiv = document.getElementsByClassName("carousel-inner")[0];
// 	var div = document.getElementById("img").getElementsByClassName("carousel-item active")[0];
// 	var img = div.getElementsByClassName("d-block w-100")[0];
// 	var url = img.src;

// 	// Alert Messages
// 	// alert(outerDiv)
// 	// alert("Carousel-item: " + div);
// 	// alert("IMG element: " + img);
// 	// alert("URL: " + url)

// 	// open image in new window
// 	window.open(url, 'Image');

// }
// open current carousel image in new tab
function clickImage(){

	// variables
	var outerDiv = document.getElementsByClassName("carousel-inner")[0];
	var div = document.getElementById("img").getElementsByClassName("carousel-item active")[0];
	var img = div.getElementsByClassName("d-block w-100")[0];
	var url = img.src;

	// Alert Messages
	// alert(outerDiv)
	// alert("Carousel-item: " + div);
	// alert("IMG element: " + img);
	// alert("URL: " + url)

	// open image in new window
	window.open(url, 'Image');
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// I hard-coded this function. the figure var is not dynamic; optimized version SHOULD search for file diffferently.
function getAudio() {
	var figure = document.getElementById("file_1").innerHTML;

	// parse figure for src
	var parts = figure.split('"');

	// loop through parsed string (array) 
	// for (i = 0; i < parts.length; i++) {
	// 	alert("i:" + i + parts[i]);
	// }

	// alert("src: " + parts[3]);
	
	var path = parts[3];
	var pathPart = path.split('/');
	// alert(pathPart);
	var filename = pathPart[1];
	// alert(filename);

	download(filename, path);
}