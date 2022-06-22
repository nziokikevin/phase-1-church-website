const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cf53fe73d5msh2cc045188fbfc09p185443jsn07764d73668e',
		'X-RapidAPI-Host': 'bible-references.p.rapidapi.com'
	}
};

fetch('https://bible-references.p.rapidapi.com/api/verses/kjv/Genesis/Genesis%201', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));