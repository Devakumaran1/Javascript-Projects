const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');




form.addEventListener('submit',(e)=>{
    e.preventDefault()
//    if(! validateInputs()){
//     e.preventDefault()
//    }
//    store
   if (validateInputs()) {
    storeFormData();
    window.location.href = 'success.html'; // Redirect to the new page
}
});

function validateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const cpasswordVal=cpassword.value.trim();
    let success=true;
// usename
    if(usernameVal===''){
        success=false
        setError(username,'Username is required')
    }
    else{
        setSuccess(username)
    }
// email
    if(emailVal===''){
       success=false
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success=false
        setError(email,'Please enter valid email')
    }
    else{
        setSuccess(email)
    }
// password
    if(passwordVal===''){
       success=false
        setError(password,'password required')
    }
    else if(passwordVal.length<8){
        success=false
        setError(password,'password must be 8 characters')

    }
    else{
        setSuccess(password)
    }
// cpassword
    if(cpasswordVal===''){
        success=false
        setError(cpassword,'confrim password is required')
    }
    else if(cpasswordVal!=passwordVal){
        success=false
        setError(cpassword,'password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    return success
}

// validtae passs

function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement= inputGroup.querySelector('.error');

    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement= inputGroup.querySelector('.error');

    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    );
};

//stored

function storeFormData() {
    const formData = {
        username: username.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
        cpassword: cpassword.value.trim(),
    };


    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));

    // localStorage.setItem('formData', JSON.stringify(formData));
    username.value = '';
    email.value = '';
    password.value = '';
    cpassword.value = '';
    
    form.reset();
}