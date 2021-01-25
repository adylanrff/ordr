import { atom, selector } from 'recoil'

export const userState = atom({
    key: 'userState',
    default: {
        fullName: 'Azka Roaffa Ilmy',
        username: 'adylanazka',
        email: 'adylanazka@gmail.com',
        phoneNumber: '+6281234561789',
        agreement: true,
        password: '190120291231',
        isAuthenticated: false,
    }
})

export const isAuthenticatedState = selector({
    key: 'isAuthenticatedState',
    get: ({get}) => {
        const user = get(userState)
        return user.isAuthenticated
    }
})

export const userFullNameState = selector({
    key: 'userFullNameState',
    get: ({get}) => {
        const user = get(userState)
        return user.fullName
    }
})

export const userUsernameState = selector({
    key: 'userUsernameState',
    get: ({get}) => {
        const user = get(userState)
        return user.username
    }
})

export const userEmailState = selector({
    key: 'userEmailState',
    get: ({get}) => {
        const user = get(userState)
        return user.email
    }
})

export const userPhoneNumberState = selector({
    key: 'userPhoneNumberState',
    get: ({get}) => {
        const user = get(userState)
        return user.phoneNumber
    }
})

export const userAgreementState = selector({
    key: 'userAgreementState',
    get: ({get}) => {
        const user = get(userState)
        return user.agreement
    }
})

export const userPasswordState = selector({
    key: 'userPasswordState',
    get: ({get}) => {
        const user = get(userState)
        return user.password
    }
})

export const validateLogin = (usernameEmail, password, username, email, passwordState) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isEmail = regexEmail.test(String(usernameEmail).toLowerCase());
    if (isEmail) {
        if (usernameEmail !== email) {
            return {
                errorStrLogin: 'Incorrect e-mail or password'
            }
        }
    } else {
        if (usernameEmail !== username) {
            return {
                errorStrLogin: 'Incorrect username or password'
            }
        }
    }

    if (password !== passwordState) {
        if (isEmail) {
            return {
                errorStrLogin: 'Incorrect e-mail or password'
            }
        } else {
            return {
                errorStrLogin: 'Incorrect username or password'
            }            
        }
    } else {
        return {
            errorStrLogin: ''
        }
    }
}