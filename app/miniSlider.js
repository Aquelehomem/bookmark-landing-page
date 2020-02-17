document.querySelectorAll('section ul li a').forEach(a=>{
	a.addEventListener('click',changeTab)
})
function changeTab(e){
	e.preventDefault()
	document.querySelectorAll('section ul li a').forEach(a=>{
		a.classList.remove('active')
	})
	document.querySelectorAll('.onFocus').forEach(a=>{
		a.style.opacity  = '0'
	})
	e.target.nextElementSibling.style.opacity='1'
	e.target.classList.add('active')
	var tabNumber=e.target.getAttribute('data-key')
	document.querySelectorAll('.slider').forEach(a=>{
		a.style.opacity = '0'
	})
	document.querySelectorAll('.slider')[tabNumber].style.opacity="1"
}
document.querySelectorAll('section ul li a').forEach(a=>{
	a.addEventListener('blur',removeHover)
})
function removeHover(e){
	e.target.nextElementSibling.style.opacity='0'	
	e.target.classList.remove('active')
}