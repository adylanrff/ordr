import { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm'
import { validateUnameEmail, validatePasswordLogin } from '../../state/registerValidation'
import { validateLogin } from '../../state/auth'
import { userEmailState, userUsernameState, userPasswordState } from '../../state/auth'
import { useRecoilValue } from 'recoil'

export default function LoginInit() {

    const [usernameEmail, setUsernameEmail] = useState('')
    const [password, setPassword] = useState('')

    const [valid, setValid] = useState(false)
    const [disabledSubmit, setDisabledSubmit] = useState(true)
    const [hasSubmit, setHasSubmit] = useState(false)

    const [errorMessageUnameEmail, setErrorMessageUnameEmail] = useState('')
    const [errorMessagePassword, setErrorMessagePassword] = useState('')
    const [errorMessageLogin, setErrorMessageLogin] = useState('')

    const ERROR_MESSAGE_REQUIRED_UNAME_EMAIL = "Please enter your registered username or e-mail"
    const ERROR_MESSAGE_REQUIRED_PASSWORD = "Please enter the password of your registered account"

    const email = useRecoilValue(userEmailState)
    const username = useRecoilValue(userUsernameState)
    const passwordState = useRecoilValue(userPasswordState)

    const fillForm = [{
        label: 'Username/E-mail',
        data: usernameEmail,
        setData: (e) => setUsernameEmail(e.target.value),
        placeholder: 'Your registered username or e-mail',
        type: 'string',
        control: "formBasicEmail",
        disabled: false,
        information: '',
        required: false,
        errorMessage: errorMessageUnameEmail
    }, {
        label: 'Password',
        data: password,
        setData: (e) => setPassword(e.target.value),
        placeholder: 'Your password',
        type: 'password',
        control: "formBasicPassword",
        disabled: false,
        information: '',
        required: false,
        errorMessage: errorMessagePassword
    }]

    const formatText = {
        title: 'Welcome back',
        bottomReg: "Don't have any account?",
        bottomBold: 'Register',
        submit: 'Sign in',
        href: '/register',
        nextStep: '',
        anyRequired: false
    }

    useEffect (() => {
        var { errorStrUnameEmail } = validateUnameEmail(usernameEmail)
        var { errorStrPassword } = validatePasswordLogin(password)

        if ((errorStrUnameEmail === '') && (errorStrPassword === '')) {
            setDisabledSubmit(false)
            setValid(true)
        } else {
            setDisabledSubmit(true)
            setValid(false)
        }

        if (!hasSubmit || (hasSubmit && errorStrUnameEmail!== 'empty')) {
            setErrorMessageUnameEmail(errorStrUnameEmail)
        } else if (hasSubmit && errorStrUnameEmail === 'empty') {
            setErrorMessageUnameEmail(ERROR_MESSAGE_REQUIRED_UNAME_EMAIL)
        }
        
        if (!hasSubmit || (hasSubmit && errorStrPassword!== 'empty')) {
            setErrorMessagePassword(errorStrPassword)
        } else if (hasSubmit && errorStrPassword === 'empty') {
            setErrorMessagePassword(ERROR_MESSAGE_REQUIRED_PASSWORD)
        }
        
    }, [usernameEmail, password, hasSubmit])

    const onSubmitHandler = () => {
        event.preventDefault()
        setHasSubmit(true)
        if (valid) {
            var { errorStrLogin } = validateLogin(usernameEmail, password, username, email, passwordState)
            if (errorStrLogin === '') {
                setErrorMessageLogin(errorStrLogin)
                window.location.replace('/home')
            } else {
                setErrorMessageLogin(errorStrLogin)
            }
        }
    }

    return (
        <RegisterForm type='Login' fillForm={fillForm} formatText={formatText} onSubmitHandler={onSubmitHandler} disableSubmit={disabledSubmit} errorMessage={errorMessageLogin} />
    )
}