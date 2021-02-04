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