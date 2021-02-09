import { useEffect, useState } from 'react'
import GetStartedForm from '.'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { validateRestoName, validateRestoAddress, validateRestoPhoneNumber } from '../../../state/restoInfoValidation'

export default function RestaurantInformation({data, setCurrentStep, hasSubmit}) {
    const stepData = [{
        position: 1,
        status: 'done',
        icon: faUser,
        title: 'Personal'
    }, {
        position: 2,
        status: 'current',
        icon: faStore,
        title: 'Restaurant'
    }]

    const [valid, setValid] = useState(false)
    const [disabledSubmit, setDisabledSubmit] = useState(true)
    const [countryCode, setCountryCode] = useState('')

    const [errorMessageRestoName, setErrorMessageRestoName] = useState('')
    const [errorMessageRestoAddress, setErrorMessageRestoAddress] = useState('')
    const [errorMessagePhone, setErrorMessagePhone] = useState('')

    const ERROR_MESSAGE_REQUIRED_RESTONAME = "Please enter your restaurant's name"
    const ERROR_MESSAGE_REQUIRED_RESTOADDRESS = "Please enter your restaurant's address"

    const fillForm = [{
        label: "Restaurant's name",
        data: data[0].data,
        setData: data[0].setter,
        placeholder: "Your restaurant's name",
        type: 'string',
        control: "formBasicRestoName",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessageRestoName
    }, {
        label: 'Address',
        data: data[1].data,
        setData: data[1].setter,
        placeholder: "Your restaurant's address",
        type: 'string',
        control: "formBasicAddress",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessageRestoAddress
    }, {
        label: 'Phone number',
        data: data[2].data,
        setData: data[2].setter,
        changeCountryCode: setCountryCode,
        placeholder: "Your restaurant's phone number",
        type: 'tel',
        control: "formBasicPhoneNumber",
        disabled: false,
        information: '',
        required: false,
        errorMessage: errorMessagePhone
    }, {
        label: 'Description',
        data: data[3].data,
        setData: data[3].setter,
        placeholder: "What's in your restaurant?",
        type: 'string',
        control: "formBasicDescription",
        disabled: false,
        information: '',
        required: false,
        errorMessage: ''
    }]

    const formatText = {
        title: 'Tell us more about your restaurant',
        information: 'Your account has been made. These informations will help our team to verify your restaurant and generate your QR Code',
        submit: 'Finish',
        cancel: 'Previous',
        anyRequired: true
    }

    useEffect (() => {
        var { errorStrRestoName } = validateRestoName(data[0].data)
        var { errorStrRestoAddress } = validateRestoAddress(data[1].data)
        var { errorStrRestoPhoneNumber } = validateRestoPhoneNumber(data[2].data, countryCode)

        if ((errorStrRestoName === '') && (errorStrRestoAddress === '')) {
            setDisabledSubmit(false)
            setValid(true)
        } else if ((errorStrRestoName !== 'empty' && errorStrRestoName !== '') || (errorStrRestoAddress !== 'empty' && errorStrRestoAddress !== '')) {
            setDisabledSubmit(true)
            setValid(false)
        } else if (!hasSubmit.data) {
            setDisabledSubmit(false)
            setValid(false)
        } else {
            setDisabledSubmit(true)
            setValid(false)
        }

        if (!hasSubmit.data || (hasSubmit.data && errorStrRestoName!== 'empty')) {
            setErrorMessageRestoName(errorStrRestoName)
        } else if (hasSubmit.data && errorStrRestoName === 'empty') {
            setErrorMessageRestoName(ERROR_MESSAGE_REQUIRED_RESTONAME)
        }
        
        if (!hasSubmit.data || (hasSubmit.data && errorStrRestoAddress!== 'empty')) {
            setErrorMessageRestoAddress(errorStrRestoAddress)
        } else if (hasSubmit.data && errorStrRestoAddress === 'empty') {
            setErrorMessageRestoAddress(ERROR_MESSAGE_REQUIRED_RESTOADDRESS)
        }

        setErrorMessagePhone(errorStrRestoPhoneNumber)
        
    }, [data[0].data, data[1].data, data[2].data, hasSubmit.data, countryCode])

    // Submit Handler for 'Next' Button
    const onSubmitHandler = () => {
        event.preventDefault()
        hasSubmit.setter(true)
        if (valid) {
            /* put post to backend here */
            window.scrollTo(0,0)
            window.location.replace('/home')
        }
    }

    // Submit Handler for 'Previous' Button
    const onPreviousHandler = () => {
        window.scrollTo(0,0)
        setCurrentStep(1)
    }

    return (
        <div>
            <GetStartedForm type='StepForm' stepData={stepData} layoutData={formatText} formData={fillForm} onSubmitHandler={onSubmitHandler} onCancelHandler={onPreviousHandler} disableSubmit={disabledSubmit} />
        </div>
    )
}