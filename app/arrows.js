document.querySelectorAll('section div a').forEach(a=>{
	a.addEventListener('click',dropDown)
})


function dropDown(e){
	e.preventDefault()
	console.log(e.target.parentNode)
	if(e.target.parentNode.nodeName=='A'){
		e.target.classList.toggle('active')
		e.target.parentNode.parentNode.children[1].classList.toggle('active')
	}else if(e.target.parentNode.nodeName=='SPAN'||e.target.parentNode.nodeName=='svg'){
		e.target.parentNode.classList.toggle('active')
	}
}
