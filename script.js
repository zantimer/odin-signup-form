const pwd = document.querySelector('input#pwd');
const confirmPwd = document.querySelector('input#confirm-pwd');
const pwdValidation = document.querySelector('.validation');
const confPwdValidation = document.querySelector('.confvalidation');

console.log(pwd);
console.log(confirmPwd);
pwd.addEventListener('keyup', () =>{
    if (pwd.value == confirmPwd.value)
    {
        pwdValidation.textContent = "Passwords matching";
        confPwdValidation.textContent = "Passwords matching";
        pwdValidation.classList.remove('error');
        confPwdValidation.classList.remove('error');
    }
    else
    {
        pwdValidation.textContent = "Passwords do not match";
        pwdValidation.classList.add('error');
        confPwdValidation.textContent = "Passwords do not match"
        confPwdValidation.classList.add('error');
    }
    if (!pwd.validity.valid)
    {
        pwdValidation.textContent += ", invalid password format, needs at least one of each: uppercase, special character, number";
        pwdValidation.classList.add('error');
    }
});
confirmPwd.addEventListener('keyup', () =>{
    if (pwd.value == confirmPwd.value)
    {
        pwdValidation.textContent = "Passwords matching";
        confPwdValidation.textContent = "Passwords matching";
        pwdValidation.classList.remove('error');
        confPwdValidation.classList.remove('error');
    }
    else
    {
        pwdValidation.textContent = "Passwords do not match";
        pwdValidation.classList.add('error');
        confPwdValidation.textContent = "Passwords do not match"
        confPwdValidation.classList.add('error');
    }
    if (!confirmPwd.validity.valid)
    {
        confPwdValidation.textContent += ", invalid password format, needs at least one of each: uppercase, special character, number";
        confPwdValidation.classList.add('error');
    }
});


