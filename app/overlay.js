document.addEventListener('DOMContentLoaded',()=>{
	document.querySelector('.toggler').checked=false
})
document.querySelector('.toggler').addEventListener('click',e=>{
	if(e.target.checked===true){
		document.querySelector('.overlay').classList.add('active')
		document.querySelector('.menu-wrap .hamburguer>div').classList.add('active')
		document.querySelector('.logo').classList.add('active')
		document.querySelector('nav').classList.add('active')
	}else{
		document.querySelector('.overlay').classList.remove('active')
		document.querySelector('.menu-wrap .hamburguer>div').classList.remove('active')
		document.querySelector('.logo').classList.remove('active')
		document.querySelector('nav').classList.remove('active')
	}
})