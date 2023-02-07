const span = document.querySelector('button');
const body = document.querySelector('body');
const h3 = document.querySelector('h3');

button.addEventListener('click', () =>{
	let color = '#';
	color += Math.random().toString(16).slice(2,8);
	body.style.backgroundColor = color;
	h3.innerText = color;
});