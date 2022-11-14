const pwd = document.querySelector('input#pwd');
const confirmPwd = document.querySelector('input#confirm-pwd');
const pwdValidation = document.querySelector('.validation');
const confPwdValidation = document.querySelector('.confvalidation');


pwd.addEventListener('keyup', () =>{
    PwdValidation(pwd, confirmPwd, pwdValidation, confPwdValidation);
});
confirmPwd.addEventListener('keyup', () =>{
    PwdValidation(confirmPwd, pwd, confPwdValidation, pwdValidation);
});


function PwdValidation(field, compareField, msg1, msg2) {
    if (field.value == compareField.value) {
        msg1.textContent = "Passwords matching";
        msg1.classList.remove('error');
        msg2.textContent = "Passwords matching";
        msg2.classList.remove('error');
    }

    else {
        msg1.textContent = "Passwords do not match";
        msg1.classList.add('error');
        msg2.textContent = "Passwords do not match";
        msg2.classList.add('error');
    }
    if (!field.validity.valid) {
        msg1.textContent += ", invalid password format, needs at least one of each: uppercase, special character, number";
        msg1.classList.add('error');
    }
}

