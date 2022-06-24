document.addEventListener('scroll', () => {
	let scrollPosition = window.scrollY;
	if(scrollPosition > 250){
		header.style.backgroundColor = 'grey';
	}else{
		header.style.backgroundColor= 'transparent';	
	}
})


const text = document.querySelector('.text');
const verse = document.querySelector('.verse')
const getVerse = async () => {
	const res = await fetch('https://type.fit/api/verses');
	const verses = await res.json();
	const num = Math.floor(Math.random()*verses.length);
	const item = verses[num];
	const vod = item.text;
	const verseName = item.verse;
	text.innerText = vod;
	verse.innerText = verseName;
	//console.log(item)
}
getVerse()

	//document.addEventListener(DOMContentLoaded, function())