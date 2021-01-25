export const validateUsername = (username) => {
    // ex: this username has been taken
    if (!username) {
        return {
            errorStrUsername: 'empty'
        }
    } else {
        return {
            errorStrUsername: ''
        }
    }
}

export const validateEmail = (email) => {
    // ex: this email has been taken
    if (!email) {
        return {
            errorStrEmail: 'empty'
        }
    } else {
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isEmail = regexEmail.test(String(email).toLowerCase());
        if (!isEmail) {
            return {
                errorStrEmail: 'Please give us a valid email, ex: xxx@xxx.com'
            }
        } else {
            return {
                errorStrEmail: ''
            }
        }
    }
}

export const validateUnameEmail = (usernameEmail) => {
    if (!usernameEmail) {
        return {
            errorStrUnameEmail: 'empty'
        }
    } else {
        return {
            errorStrUnameEmail: ''
        }
    }
}

export const validatePassword = (password) => {
    if (!password) {
        return {
            errorStrPassword: 'empty'
        }
    } else {
        const MINIMUM_NUMBER_LENGTH = 8
        var passLength = password.length
        if (passLength < MINIMUM_NUMBER_LENGTH) {
            return {
                errorStrPassword: 'A password must be at least 8 characters long'
            }
        } else {
            return {
                errorStrPassword: ''
            }
        }
    }
}

export const validatePasswordLogin = (password) => {
    if (!password) {
        return {
            errorStrPassword: 'empty'
        }
    } else {
        return {
            errorStrPassword: ''
        }
    }
}

export const validateAgreement = (agreement) => {
    if (agreement === false) {
        return {
            errorStrAgreement: 'empty'
        }
    } else if (agreement === true) {
        return {
            errorStrAgreement: ''
        }
    }
}