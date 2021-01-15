import { useState } from 'react';
import RegisterForm from './RegisterForm'

export default function LoginInit() {

    const [usernameEmail, setUsernameEmail] = useState('')
    const [password, setPassword] = useState('')

    const fillForm = [{
        label: 'Username/E-mail',
        data: usernameEmail,
        setData: (e) => setUsernameEmail(e.target.value),
        placeholder: 'adylanazka or adylanazka@gmail.com',
        type: 'string'
    }, {
        label: 'Password',
        data: password,
        setData: (e) => setPassword(e.target.value),
        placeholder: 'at least 8 characters',
        type: 'password'
    }]

    const formatText = {
        title: 'Welcome back',
        bottomReg: "Don't have any account?",
        bottomBold: 'Register',
        submit: 'Sign in',
        href: '/register'
    }

    const onSubmitHandler = () => {
    }

    return (
        <RegisterForm fillForm={fillForm} formatText={formatText} onSubmitHandler={onSubmitHandler} />
    )
}