let submitButton = document.querySelector('#submit-button');

function clickListener(event){
	event.preventDefault();

	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value;
	let messageText = messageInput.value;

	console.log('email:', emailText, 'message:', messageText);

	let errorText = document.querySelector('.error')
	if(emailValidate(emailText)!==true){
		errorText.style.visibility = 'visible';
		console.log('The email address must contain @');
		return false;
	}
	errorText.style.visibility = 'hidden';
	emailInput.value = "";
	messageInput.value = "";
	console.log('Thanks for your message');
}

function emailValidate(email){
	if(email.includes('@')){
		return true;
	}
	else{
		return false;
	}
}

submitButton.addEventListener('click', clickListener);