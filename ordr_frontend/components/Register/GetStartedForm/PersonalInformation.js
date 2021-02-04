import { useEffect, useState } from 'react'
import GetStartedForm from '.'
import { faTired, faUser } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { validateFullName, validatePhoneNumber } from '../../../state/personalInfoValidation'
import { userState } from '../../../state/auth'
import { useRecoilState } from 'recoil';

export default function PersonalInformation({data, setCurrentStep, hasSubmit}) {
    const stepData = [{
        position: 1,
        status: 'current',
        icon: faUser,
        title: 'Personal'
    }, {
        position: 2,
        status: 'not done',
        icon: faStore,
        title: 'Restaurant'
    }]

    const [valid, setValid] = useState(false)
    const [disabledSubmit, setDisabledSubmit] = useState(true)
    const [countryCode, setCountryCode] = useState('')

    const [errorMessageFullName, setErrorMessageFullName] = useState('')
    const [errorMessagePhone, setErrorMessagePhone] = useState('')

    const ERROR_MESSAGE_REQUIRED_FULLNAME = "Please enter your full name"
    const ERROR_MESSAGE_REQUIRED_PHONE = "Please enter your phone number"

    /* Global state */
    const [user, setUser] = useRecoilState(userState)

    const fillForm = [{
        label: 'Username',
        data: user.username,
        setData: (e) => setUser({...user, username: e.target.value}),
        placeholder: 'adylanazka',
        type: 'string',
        control: "formBasicEmail",
        disabled: true,
        information: 'You can change your username later on your dashboard',
        required: false,
        errorMessage: ''
    }, {
        label: 'E-mail',
        data: user.email,
        setData: (e) => setUser({...user, email: e.target.value}),
        placeholder: 'adylanazka@gmail.com',
        type: 'email',
        control: "formBasicEmail",
        disabled: true,
        information: 'You can change your e-mail later on your dashboard',
        required: false,
        errorMessage: '',
    }, {
        label: 'Full Name',
        data: data[2].data,
        setData: data[2].setter,
        placeholder: 'Your name',
        type: 'string',
        control: "formBasicEmail",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessageFullName
    }, {
        label: 'Phone number',
        data: data[3].data,
        setData: data[3].setter,
        placeholder: 'Format: +628123456789',
        type: 'tel',
        control: "formBasicEmail",
        changeCountryCode: setCountryCode,
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessagePhone
    }]

    const formatText = {
        title: 'Tell us more about yourself',
        information: 'Your account has been made. These informations will help our team to reach you if there is any problem',
        submit: 'Next',
        cancel: '',
        anyRequired: true
    }

    useEffect (() => {
        var { errorStrFullName } = validateFullName(data[2].data)
        var { errorStrPhoneNumber } = validatePhoneNumber(data[3].data, countryCode)

        if ((errorStrFullName === '') && (errorStrPhoneNumber === '')) {
            setDisabledSubmit(false)
            setValid(true)
        } else {
            setDisabledSubmit(true)
            setValid(false)
        }

        if (!hasSubmit.data || (hasSubmit.data && errorStrFullName!== 'empty')) {
            setErrorMessageFullName(errorStrFullName)
        } else if (hasSubmit.data && errorStrFullName === 'empty') {
            setErrorMessageFullName(ERROR_MESSAGE_REQUIRED_FULLNAME)
        }
        
        if (!hasSubmit.data || (hasSubmit.data && errorStrPhoneNumber!== 'empty')) {
            setErrorMessagePhone(errorStrPhoneNumber)
        } else if (hasSubmit.data && errorStrPhoneNumber === 'empty') {
            setErrorMessagePhone(ERROR_MESSAGE_REQUIRED_PHONE)
        }
        
    }, [data[2].data, data[3].data, hasSubmit.data])

    // Submit Handler for 'Next' Button
    const onSubmitHandler = () => {
        event.preventDefault()
        hasSubmit.setter(true)
        if (valid) {
            window.scrollTo(0,0)
            setCurrentStep(2)
        }
    }

    // Submit Handler for 'Skip' Button
    const onCancelHandler = () => {
        window.scrollTo(0,0)
        setCurrentStep(2)
    }

    return (
        <div>
            <GetStartedForm stepData={stepData} layoutData={formatText} formData={fillForm} onSubmitHandler={onSubmitHandler} onCancelHandler={onCancelHandler} disableSubmit={disabledSubmit} />
        </div>
    )
}