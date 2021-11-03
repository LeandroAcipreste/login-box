const init = () => {
    const validateEmail = (event) =>{
         const input = event.currentTarget;
         const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
         const emailTest = regex.test(input.value);

         if(!emailTest){
             submitButton.setAttribute('disable', 'disable');
             input.nextElementSibling.classList.add('error');
         } else {
             submitButton.removeAttribute('disable');
             input.nextElementSibling.classList.remove('error')
         }

    }
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login_submit');

    inputEmail.addEventListener('input', validateEmail);

    if(submitButton){
        submitButton.addEventListener('click',(event) => {
            event.preventDefault();
            

            fetch('https://reqres.in/api/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email:inputEmail.vallue,
                    password: inputPassword.value,
                })
            }).then((response) =>{
                return response.json();
            }).then((data) =>{
                console.log(data)
            })
        })
    }
}

window.onload = init