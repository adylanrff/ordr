import { useState } from 'react';
import RegisterForm from './RegisterForm'

export default function RegisterInit() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const fillForm = [{
        label: 'Username',
        data: username,
        setData: (e) => setUsername(e.target.value),
        placeholder: 'adylanazka',
        type: 'string',
        control: "formBasicEmail"
    }, {
        label: 'E-mail',
        data: email,
        setData: (e) => setEmail(e.target.value),
        placeholder: 'adylanazka@gmail.com',
        type: 'email',
        control: "formBasicEmail"
    }, {
        label: 'Password',
        data: password,
        setData: (e) => setPassword(e.target.value),
        placeholder: 'at least 8 characters',
        type: 'password',
        control: "formBasicEmail"
    }]

    const formatText = {
        title: 'Create your account',
        bottomReg: 'Already have an account?',
        bottomBold: 'Sign in',
        submit: 'Create your account',
        href: '/login'
    }

    const onSubmitHandler = () => {
    }

    return (
        <RegisterForm fillForm={fillForm} formatText={formatText} onSubmitHandler={onSubmitHandler} />
    )
}