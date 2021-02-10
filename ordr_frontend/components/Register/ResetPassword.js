import { useEffect, useState } from 'react'
import { validateNewPassword, validateConfirmPassword } from '../../state/personalInfoValidation'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import ConfirmModal from '../ConfirmModal'
import GetStartedForm from './GetStartedForm'

export default function ResetPassword() {
    const stepData = [{
        position: 1,
        status: 'current',
        icon: faKey,
        title: 'Password'
    }]

    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorNewPassword, setErrorNewPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

    const [valid, setValid] = useState(false)
    const [disableSubmit, setDisableSubmit] = useState(true)
    const [hasSubmit, setHasSubmit] = useState(false)

    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const ERROR_MESSAGE_REQUIRED_NEW_PASSWORD = 'Please enter your new password'
    const ERROR_MESSAGE_REQUIRED_CONFIRM_PASSWORD = 'Please enter a password matches to your new password'

    const fillForm = [{
        label: "New password",
        data: newPassword,
        setData: (e) => setNewPassword(e.target.value),
        placeholder: "New password",
        type: 'password',
        control: "formBasicNewPassword",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorNewPassword
    }, {
        label: "Confirm password",
        data: confirmPassword,
        setData: (e) => setConfirmPassword(e.target.value),
        placeholder: "Password Confirmation",
        type: 'password',
        control: "formBasicConfirmPassword",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorConfirmPassword 
    }]

    const onSubmitHandler = (e) => {
        e.preventDefault()
        setHasSubmit(true)
        if (valid) {
            setShowConfirmModal(true)
        }
    }

    const onCancelHandler = (e) => {
        e.preventDefault()
        window.location.replace('/login')
    }

    const handleCancelConfirmModal = () => {
        setShowConfirmModal(false)
    }

    const handleSubmitConfirmModal = () => {
        /* put backend here */
        window.location.replace('/resetpassword/success')
    }

    const layoutConfirmModal = {
        title: 'Confirm Changes',
        detail: "Are you sure you want to replace your password with this password?",
        cancel: 'Cancel',
        submit: 'Confirm',
        image: '/approval.png',
        showModal: showConfirmModal,
        handleCancel: handleCancelConfirmModal,
        handleConfirm: handleSubmitConfirmModal,
    }

    const formatText = {
        title: 'Reset your password',
        information: 'Fill in this form below to reset your password',
        submit: 'Reset password',
        cancel: 'Back to login',
        anyRequired: true
    }

    useEffect(() => {
        var { errorStrNewPassword } = validateNewPassword(newPassword)
        var { errorStrConfirmPassword } = validateConfirmPassword(newPassword, confirmPassword)

        if ((errorStrNewPassword === '' && errorStrConfirmPassword === '')) {
            setDisableSubmit(false)
            setValid(true)
        } else if ((errorStrNewPassword !== 'empty' && errorStrNewPassword !== '') || (errorStrConfirmPassword !== 'empty' && errorStrConfirmPassword !== '')) {
            setDisableSubmit(true)
            setValid(false)
        } else if (!hasSubmit) {
            setDisableSubmit(false)
            setValid(false)
        } else {
            setDisableSubmit(true)
            setValid(false)
        }

        if (hasSubmit && errorStrNewPassword === 'empty') {
            setErrorNewPassword(ERROR_MESSAGE_REQUIRED_NEW_PASSWORD)
        } else if (!hasSubmit || errorStrNewPassword !== 'empty') {
            setErrorNewPassword(errorStrNewPassword)
        }

        if (hasSubmit && errorStrConfirmPassword === 'empty') {
            setErrorConfirmPassword(ERROR_MESSAGE_REQUIRED_CONFIRM_PASSWORD)
        } else if (!hasSubmit || errorStrConfirmPassword !== 'empty') {
            setErrorConfirmPassword(errorStrConfirmPassword)
        }

    }, [newPassword, confirmPassword, hasSubmit])

    return (
        <div>
            <ConfirmModal type='Confirmation' layoutData={layoutConfirmModal} />
            <GetStartedForm type='resetPass' stepData={stepData} layoutData={formatText} formData={fillForm} onSubmitHandler={onSubmitHandler} onCancelHandler={onCancelHandler} disableSubmit={disableSubmit} />
        </div>
    )
}