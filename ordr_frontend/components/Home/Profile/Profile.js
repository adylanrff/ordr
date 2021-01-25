import { useState, useEffect } from 'react'
import InformationCard from '../InformationCard'
import EditCard from '../EditCard'
import Banner from '../Banner'
import { validateFullName, validatePhoneNumber, validateOldPassword, validateNewPassword, validateConfirmPassword } from '../../../state/personalInfoValidation'
import { validateUsername, validateEmail } from '../../../state/registerValidation'
import ConfirmModal from '../../ConfirmModal'

export default function Profile() {

    const [currentView, setCurrentView] = useState('view')

    const [fullName, setFullName] = useState('Azka Roaffa Ilmy')
    const [username, setUsername] = useState('azkanab')
    const [email, setEmail] = useState('adylanazka@gmail.com')
    const [phoneNumber, setPhoneNumber] = useState('+6281234567890')
    const [countryCode, setCountryCode] = useState('')
    const [password, setPassword] = useState('190120291231')
    const [oldPassword, setOldPassword] = useState('')

    const [tempFullName, setTempFullName] = useState('')
    const [tempUsername, setTempUsername] = useState('')
    const [tempEmail, setTempEmail] = useState('')
    const [tempPhoneNumber, setTempPhoneNumber] = useState('')
    const [tempPassword, setTempPassword] = useState('')
    const [confirmTempPassword, setConfirmTempPassword] = useState('')

    const [valid, setValid] = useState(false)
    const [disabledSubmit, setDisabledSubmit] = useState(true)

    const [errorMessageFullName, setErrorMessageFullName] = useState('')
    const [errorMessageUsername, setErrorMessageUsername] = useState('')
    const [errorMessageEmail, setErrorMessageEmail] = useState('')
    const [errorMessagePhoneNumber, setErrorMessagePhoneNumber] = useState('')
    const [errorMessageOldPassword, setErrorMessageOldPassword] = useState('')
    const [errorMessageNewPassword, setErrorMessageNewPassword] = useState('')
    const [errorMessageConfirmPassword, setErrorMessageConfirmPassword] = useState('')

    const ERROR_MESSAGE_REQUIRED_FULLNAME = "Please enter your full name"
    const ERROR_MESSAGE_REQUIRED_USERNAME = "Please enter your username"
    const ERROR_MESSAGE_REQUIRED_EMAIL = "Please enter your e-mail"
    const ERROR_MESSAGE_REQUIRED_PHONENUMBER = "Please enter your phone number"

    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const informations = [{
        title: "Full name",
        desc: fullName
    }, {
        title: 'Username',
        desc: username
    }, {
        title: 'E-mail',
        desc: email
    }, {
        title: 'Phone number',
        desc: phoneNumber
    }]

    const fillFormEdit = [{
        label: "Full name",
        data: tempFullName,
        setData: (e) => setTempFullName(e.target.value),
        placeholder: "Your full name",
        type: 'string',
        control: "formBasicFullName",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessageFullName
    }, {
        label: "Username",
        data: tempUsername,
        setData: (e) => setTempUsername(e.target.value),
        placeholder: "Your username",
        type: 'string',
        control: "formBasicFullName",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessageUsername
    }, {
        label: "E-mail",
        data: tempEmail,
        setData: (e) => setTempEmail(e.target.value),
        placeholder: "Your personal e-mail",
        type: 'email',
        control: "formBasicEmail",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessageEmail
    }, {
        label: "Phone number",
        data: tempPhoneNumber,
        setData: setTempPhoneNumber,
        changeCountryCode: setCountryCode,
        placeholder: "Your personal phone number",
        type: 'tel',
        control: "formBasicPhoneNumber",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessagePhoneNumber
    }]

    const fillFormPassword = [{
        label: "Old password",
        data: oldPassword,
        setData: (e) => setOldPassword(e.target.value),
        placeholder: "Your password",
        type: 'password',
        control: "formBasicOldPassword",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessageOldPassword
    }, {
        label: "New password",
        data: tempPassword,
        setData: (e) => setTempPassword(e.target.value),
        placeholder: "New password",
        type: 'password',
        control: "formBasicNewPassword",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessageNewPassword
    }, {
        label: "Confirm password",
        data: confirmTempPassword,
        setData: (e) => setConfirmTempPassword(e.target.value),
        placeholder: "Password Confirmation",
        type: 'password',
        control: "formBasicConfirmPassword",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessageConfirmPassword 
    }]

    const onEditHandler = () => {
        setTempFullName(fullName)
        setTempUsername(username)
        setTempEmail(email)
        setTempPhoneNumber(phoneNumber.replace('+', ''))
        setCurrentView('edit')
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (valid) {
            setShowConfirmModal(true)
        }
    }

    const onCancelHandler = () => {
        setCurrentView('view')
        window.scrollTo(0,0)

        setOldPassword('')
        setTempPassword('')
        setConfirmTempPassword('')
        setValid(false)
        setDisabledSubmit(true)
    }

    const handleCancelConfirmModal = () => {
        setShowConfirmModal(false)
    }

    const handleSubmitConfirmModalEdit = () => {
        setCurrentView('view')
        window.scrollTo(0,0)

        setFullName(tempFullName)
        setUsername(tempUsername)
        setEmail(tempEmail)
        if ((tempPhoneNumber === countryCode) || (tempPhoneNumber === '')) {
            setPhoneNumber('')
        } else {
            var phoneCode = '+'
            setPhoneNumber(phoneCode.concat(tempPhoneNumber))
        }

        setValid(false)
        setDisabledSubmit(true)
        setShowConfirmModal(false)
    }

    const handleSubmitConfirmModalChangePass = () => {
        setCurrentView('view')
        window.scrollTo(0,0)

        setPassword(tempPassword)
        setOldPassword('')
        setTempPassword('')
        setConfirmTempPassword('')

        setValid(false)
        setDisabledSubmit(true)
        setShowConfirmModal(false)
    }

    const buttons = [{
        id: 1,
        title: 'Change password',
        action: () => setCurrentView('changePass')
    }, {
        id: 2,
        title: 'Edit',
        action: onEditHandler
    }]

    useEffect(() => {
        if (currentView === 'edit') {
            var { errorStrFullName } = validateFullName(tempFullName)
            var { errorStrUsername } = validateUsername(tempUsername)
            var { errorStrEmail } = validateEmail(tempEmail)
            var { errorStrPhoneNumber } = validatePhoneNumber(tempPhoneNumber, countryCode)
    
            if ((errorStrFullName === '') && (errorStrUsername === '') && (errorStrEmail === '') && (errorStrPhoneNumber === '')) {
                setDisabledSubmit(false)
                setValid(true)
            } else {
                setDisabledSubmit(true)
                setValid(false)
            }
    
            if (errorStrFullName === 'empty') {
                setErrorMessageFullName(ERROR_MESSAGE_REQUIRED_FULLNAME)
            } else {
                setErrorMessageFullName(errorStrFullName)
            }
    
            if (errorStrUsername === 'empty') {
                setErrorMessageUsername(ERROR_MESSAGE_REQUIRED_USERNAME)
            } else {
                setErrorMessageUsername(errorStrUsername)
            }
    
            if (errorStrEmail === 'empty') {
                setErrorMessageEmail(ERROR_MESSAGE_REQUIRED_EMAIL)
            } else {
                setErrorMessageEmail(errorStrEmail)
            }
    
            if (errorStrPhoneNumber === 'empty') {
                setErrorMessagePhoneNumber(ERROR_MESSAGE_REQUIRED_PHONENUMBER)
            } else {
                setErrorMessagePhoneNumber(errorStrPhoneNumber)
            }
        } else if (currentView === 'changePass') {
            var { errorStrOldPassword } = validateOldPassword(oldPassword, password)
            var { errorStrNewPassword } = validateNewPassword(tempPassword)
            var { errorStrConfirmPassword } = validateConfirmPassword(tempPassword, confirmTempPassword)

            if ((errorStrOldPassword === '') && (errorStrNewPassword === '') && (errorStrConfirmPassword === '')) {
                setDisabledSubmit(false)
                setValid(true)
            } else {
                setDisabledSubmit(true)
                setValid(false)
            }

            if (errorStrOldPassword !== 'empty') {
                setErrorMessageOldPassword(errorStrOldPassword)
            } else {
                setErrorMessageOldPassword('')
            }

            if (errorStrNewPassword !== 'empty') {
                setErrorMessageNewPassword(errorStrNewPassword)
            } else {
                setErrorMessageNewPassword('')
            }

            if (errorStrConfirmPassword !== 'empty') {
                setErrorMessageConfirmPassword(errorStrConfirmPassword)
            } else {
                setErrorMessageConfirmPassword('')
            }
        }
    }, [tempFullName, tempUsername, tempEmail, tempPhoneNumber, countryCode, currentView, tempPassword, confirmTempPassword, oldPassword, password])

    const CARD_TITLE = 'Your Profile'

    const layoutEdit = {
        title: 'Edit Profile',
        submit: 'Submit',
        cancel: 'Cancel',
        anyRequired: true
    }
    
    const layoutChangePass = {
        title: 'Change Password',
        submit: 'Submit',
        cancel: 'Cancel',
        anyRequired: true
    }

    const layoutConfirmEdit = {
        title: 'Confirm Changes',
        detail: "Are you sure you want to make changes to your profile?",
        cancel: 'Cancel',
        submit: 'Confirm',
        image: '/approval.png',
        showModal: showConfirmModal,
        handleCancel: handleCancelConfirmModal,
        handleConfirm: handleSubmitConfirmModalEdit,
    }

    const layoutConfirmChangePass = {
        title: 'Confirm Changes',
        detail: "Are you sure you want to make changes to your password?",
        cancel: 'Cancel',
        submit: 'Confirm',
        image: '/approval.png',
        showModal: showConfirmModal,
        handleCancel: handleCancelConfirmModal,
        handleConfirm: handleSubmitConfirmModalChangePass,
    }

    return (
        <div>
            <Banner />
            <ConfirmModal layoutData={currentView === 'edit' ? layoutConfirmEdit : layoutConfirmChangePass}  />
            {currentView === 'view' ?
                <InformationCard informations={informations} title={CARD_TITLE} buttons={buttons} />
            : currentView === 'edit' ?
                <EditCard formData={fillFormEdit} onSubmitHandler={onSubmitHandler} onCancelHandler={onCancelHandler} disableSubmit={disabledSubmit} layoutData={layoutEdit} />
            :
                <EditCard formData={fillFormPassword} onSubmitHandler={onSubmitHandler} onCancelHandler={onCancelHandler} disableSubmit={disabledSubmit} layoutData={layoutChangePass} />
            }
        </div>
    )
}