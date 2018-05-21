function drawSelect(genres) {	
	var select = document.getElementById('select');
	for (var key in genres) {
		var newOption = document.createElement('option');
		newOption.innerHTML = genres[key];
		select.appendChild(newOption);
	}	
}
drawSelect(data.genres);



var buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', function () {
	var elements = document.getElementsByTagName('tr');
	var a = elements.length;
	for (var i = a-1; i >= 0; i--) {
		if (i > 0) {
			elements[i].remove();
		}
	}	
//	if (document.getElementsByTagName('p').length !== 0) {
//		console.log(document.getElementsByTagName('p'));
//		document.getElementsByTagName('p').remove();		
//	}

	
	var selectValue = document.getElementById('select').value;
	var fromId = document.getElementById('fromId').value;
	var toId = document.getElementById('toId').value;	
	var movies = data.movies;

	if (selectValue != '') {
		movies = movies.filter(
		function (movie) {
			return movie.genres.includes(selectValue);
		});
	}
	
	if (fromId === '') {
		fromId = '0';
	}
	if (toId === '') {
		toId = '9999';
	}
	
	movies = movies.filter(
		function (movie) {
			return ((+movie.year >= +fromId) && (+movie.year <= +toId));
		});
	
	movies = movies.map(
		function(movie) {
			return [movie.title, movie.year, movie.genres];
	});	
	
	drawTable(movies);
	console.log(movies);
	if (movies.length !== 0) {
        document.getElementById('table').style.visibility = "visible";	
	} else {
		var p = document.createElement('p');
		var tt = document.createTextNode('фильмов не найдено');
		document.getElementById('table').parentNode.appendChild(p);
		p.appendChild(tt);
		document.getElementById('table').style.visibility = "hidden";
	}
});


function drawTable (movies) {
	var table = document.getElementById('table');
	for (var i = 0; i < movies.length; i++) {
		var tr = document.createElement('tr');
		table.appendChild(tr);
		for (var j = 0; j < movies[i].length; j++) {
			var td = document.createElement('td');
			tr.appendChild(td);
			var t = document.createTextNode(movies[i][j]);
			td.appendChild(t);
		}
	}	
}	