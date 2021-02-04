import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import RegisterForm from './RegisterForm'
import { validateUsername, validateEmail, validatePassword, validateAgreement } from '../../state/registerValidation'
import { userState } from '../../state/auth'
import TnC from './TnC'

export default function RegisterInit() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [agreement, setAgreement] = useState(false)

    const [valid, setValid] = useState(false)
    const [disabledSubmit, setDisabledSubmit] = useState(true)
    const [hasSubmit, setHasSubmit] = useState(false)

    const [errorMessageUname, setErrorMessageUname] = useState('')
    const [errorMessageEmail, setErrorMessageEmail] = useState('')
    const [errorMessagePassword, setErrorMessagePassword] = useState('')
    const [errorMessageChecked, setErrorMessageChecked] = useState('')

    const ERROR_MESSAGE_REQUIRED_UNAME = "Please enter your desired username"
    const ERROR_MESSAGE_REQUIRED_EMAIL = "Please enter your email"
    const ERROR_MESSAGE_REQUIRED_PASSWORD = "Please enter a password"
    const ERROR_MESSAGE_REQUIRED_AGREEMENT = "Please check this box to proceed"

    const [showTnc, setShowTnc] = useState(false)

    /* Global state */
    const [user, setUser] = useRecoilState(userState)

    const fillForm = [{
        label: 'Username',
        data: username,
        setData: (e) => setUsername(e.target.value),
        placeholder: 'adylanazka',
        type: 'string',
        control: "formBasicUsername",
        disabled: false,
        information: '',
        required: false,
        errorMessage: errorMessageUname
    }, {
        label: 'E-mail',
        data: email,
        setData: (e) => setEmail(e.target.value),
        placeholder: 'adylanazka@gmail.com',
        type: 'email',
        control: "formBasicEmail",
        disabled: false,
        information: '',
        required: false,
        errorMessage: errorMessageEmail
    }, {
        label: 'Password',
        data: password,
        setData: (e) => setPassword(e.target.value),
        placeholder: 'at least 8 characters',
        type: 'password',
        control: "formBasicPassword",
        disabled: false,
        information: '',
        required: false,
        errorMessage: errorMessagePassword
    }, {
        label: 'Agreement',
        label1: 'I agree to the',
        label2: 'Terms and Condition',
        data: agreement,
        setData: (e) => setAgreement(e.target.checked),
        showModal: () => setShowTnc(true),
        type: 'checkbox',
        control: "formBasicCheckbox",
        errorMessage: errorMessageChecked
    }]

    const formatText = {
        title: 'Create your account',
        bottomReg: 'Already have an account?',
        bottomBold: 'Sign in',
        submit: 'Create your account',
        href: '/login',
        nextStep: '/fillform',
        anyRequired: false
    }

    useEffect (() => {
        var { errorStrUsername } = validateUsername(username)
        var { errorStrEmail } = validateEmail(email)
        var { errorStrPassword } = validatePassword(password)
        var { errorStrAgreement } = validateAgreement(agreement)

        if ((errorStrUsername === '') && (errorStrEmail === '') && (errorStrPassword === '') && (errorStrAgreement === '')) {
            setDisabledSubmit(false)
            setValid(true)
        } else {
            setDisabledSubmit(true)
            setValid(false)
        }

        if (!hasSubmit || (hasSubmit && errorStrUsername!== 'empty')) {
            setErrorMessageUname(errorStrUsername)
        } else if (hasSubmit && errorStrUsername === 'empty') {
            setErrorMessageUname(ERROR_MESSAGE_REQUIRED_UNAME)
        }
        
        if (!hasSubmit || (hasSubmit && errorStrEmail!== 'empty')) {
            setErrorMessageEmail(errorStrEmail)
        } else if (hasSubmit && errorStrEmail === 'empty') {
            setErrorMessageEmail(ERROR_MESSAGE_REQUIRED_EMAIL)
        }
        
        if (!hasSubmit || (hasSubmit && errorStrPassword!== 'empty')) {
            setErrorMessagePassword(errorStrPassword)
        } else if (hasSubmit && errorStrPassword === 'empty') {
            setErrorMessagePassword(ERROR_MESSAGE_REQUIRED_PASSWORD)
        }

        if ((!hasSubmit && errorStrAgreement!== 'empty') || (hasSubmit && errorStrAgreement!== 'empty')) {
            setErrorMessageChecked(errorStrAgreement)
        } else if (hasSubmit && errorStrAgreement === 'empty') {
            setErrorMessageChecked(ERROR_MESSAGE_REQUIRED_AGREEMENT)
        }

        if (user.isAuthenticated === true) {
            window.location.replace('/fillform')
        }

    }, [username, email, password, agreement, hasSubmit, user])

    const onSubmitHandler = () => {
        event.preventDefault()
        setHasSubmit(true)
        if (valid) {
            setUser({
                ...user,
                userName: username,
                email: email,
                password: password,
                agreement: agreement,
                isAuthenticated: true
            })
        }
    }

    const tncModal = {
        showModal: showTnc,
        closeModal: () => setShowTnc(false)
    }

    return (
        <div>
            <TnC data={tncModal} />
            <RegisterForm type='Register' fillForm={fillForm} formatText={formatText} onSubmitHandler={onSubmitHandler} disableSubmit={disabledSubmit} errorMessage='' />
        </div>
    )
}