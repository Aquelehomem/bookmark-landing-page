document.querySelector('footer section div form input').addEventListener('blur',checkEmail)
function checkEmail(e){
	var value=e.target.value.toLowerCase()
	var regex= new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'gi')
	if(regex.test(value)){
		e.target.parentNode.parentNode.classList.remove('active')
		e.target.placeholder="Enter your email"
		document.querySelector('.contactUs').classList.remove('active')
		return
	}else{
		e.target.parentNode.parentNode.classList.add('active')
		e.target.placeholder='example@email/com'
		document.querySelector('.contactUs').classList.add('active')
	}
}