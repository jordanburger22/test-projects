

export function validateLoginForm(mail, password) {
    const isMailValid = validateMail(mail)
    const isPasswordValid = validatePassword(password)

    return isMailValid && isPasswordValid
}


function validatePassword(password) { 
    return password.length >= 6 && password.length <= 12

}

function validateMail(mail) {

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

   return emailPattern.test(mail)
}



export function validateRegisterForm({mail, password, username}){
    return validateMail(mail) && validatePassword(password) && validateUsername(username)

}

function validateUsername(username) {
    return username.length >= 3 && username.length <= 12
}