import styles from '../../styles/ResetPassword.module.css'
import { useEffect, useState } from 'react'
import { validateNewPassword, validateConfirmPassword } from '../../state/personalInfoValidation'
import CustomForm from '../Form'
import ConfirmModal from '../ConfirmModal'

export default function ResetPassword() {
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

    useEffect(() => {
        var { errorStrNewPassword } = validateNewPassword(newPassword)
        var { errorStrConfirmPassword } = validateConfirmPassword(newPassword, confirmPassword)

        if ((errorStrNewPassword === '' && errorStrConfirmPassword === '')) {
            setDisableSubmit(false)
            setValid(true)
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
        <div className={styles.container}>
            <ConfirmModal type='Confirmation' layoutData={layoutConfirmModal} />
            <div className={styles.card}>
                <div>
                    <div className={styles.text}>
                        {/* <Image src='/reset_password.png' className={styles.image} /> */}
                        <p className={styles.title}>Reset your password</p>
                        <p className={styles.information}>Fill in this form to continue</p>
                    </div>
                    <div className={styles.form}>
                        <CustomForm
                            type='resetPass'
                            formData={fillForm} 
                            submitText='Reset password'
                            cancelText='Back to login'
                            onSubmit={onSubmitHandler}
                            onCancel={onCancelHandler}
                            disableSubmit={disableSubmit}
                            anyRequired={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}