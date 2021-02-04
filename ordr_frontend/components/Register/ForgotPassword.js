import { useState, useEffect, useLayoutEffect } from 'react'
import { Modal, Image, Form, InputGroup, Button } from 'react-bootstrap'
import styles from '../../styles/ForgotPassword.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { validateEmail } from '../../state/forgotPasswordValidation'

export default function ForgotPassword({ data }) {
    const [email, setEmail] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [hasSubmit, setHasSubmit] = useState(false)
    const [valid, setValid] = useState(false)
    const [disableButton, setDisableButton] = useState(true)

    const [layout, setLayout] = useState({
        type: '',
        title: '',
        description: '',
        cancel: '',
        submit: '',
        onCancel: '',
        onSubmit: '',
        imgSrc: ''
    })

    const ERROR_EMAIL_EMPTY = 'Please enter your registered e-mail'

    const handleBackToLogin = () => {
        data.closeModal()
        setHasSubmit(false)
        setEmail('')
        setLayout({
            type: layoutFirstStep.type,
            title: layoutFirstStep.title,
            description: layoutFirstStep.description,
            cancel: layoutFirstStep.cancel,
            submit: layoutFirstStep.submit,
            onCancel: layoutFirstStep.onCancel,
            onSubmit: layoutFirstStep.onSubmit,
            imgSrc: layoutFirstStep.imgSrc
        })
    }

    const layoutSecondStep = {
        type: 'receiveEmail',
        title: 'E-mail has been sent!',
        description: "Please check your e-mail's inbox and click the received link to reset password",
        cancel: '',
        submit: 'Back to login',
        onCancel: '',
        onSubmit: handleBackToLogin,
        imgSrc: '/email_sent.png'
    }

    const handleSendEmail = (validity) => {
        setHasSubmit(true)
        if (validity) {
            setLayout({
                type: layoutSecondStep.type,
                title: layoutSecondStep.title,
                description: layoutSecondStep.description,
                cancel: layoutSecondStep.cancel,
                submit: layoutSecondStep.submit,
                onCancel: layoutSecondStep.onCancel,
                onSubmit: layoutSecondStep.onSubmit,
                imgSrc: layoutSecondStep.imgSrc  
            })
        }
    }

    const handleCancel = () => {
        data.closeModal()
        setHasSubmit(false)
        setEmail('')
    }

    const layoutFirstStep = {
        type: 'sendEmail',
        title: 'Forgot your password?',
        description: 'Enter the e-mail address associated with your account to receive password reset instruction',
        cancel: 'Cancel',
        submit: 'Reset password',
        onCancel: handleCancel,
        onSubmit: handleSendEmail,
        imgSrc: '/forgot_password.png'
    }

    useEffect(() => {
        var { errorStrEmail } = validateEmail(email)

        if (errorStrEmail === '') {
            setValid(true)
            setDisableButton(false)
        } else if (errorStrEmail === 'empty' && !hasSubmit) {
            setValid(false)
            setDisableButton(false)
        } else {
            setValid(false)
            setDisableButton(true)
        }

        if (errorStrEmail === 'empty' && !hasSubmit) {
            setErrorEmail('')
        } else if (errorStrEmail === 'empty' && hasSubmit) {
            setErrorEmail(ERROR_EMAIL_EMPTY)
        } else {
            setErrorEmail(errorStrEmail)
        }

    }, [errorEmail, email, hasSubmit])

    useEffect(() => {
        setLayout({
            type: layoutFirstStep.type,
            title: layoutFirstStep.title,
            description: layoutFirstStep.description,
            cancel: layoutFirstStep.cancel,
            submit: layoutFirstStep.submit,
            onCancel: layoutFirstStep.onCancel,
            onSubmit: layoutFirstStep.onSubmit,
            imgSrc: layoutFirstStep.imgSrc
        })
    }, [])

    return (
        <Modal centered={true} backdrop="static" keyboard={false} show={data.showModal} onHide={data.closeModal} contentClassName={styles.modal} backdropClassName={styles.backdrop}>
            <Modal.Body>
                <Image src={layout.imgSrc} className={styles.image}></Image>
                <p className={styles.title}>{layout.title}</p>
                <p className={styles.info}>{layout.description}</p>
                {layout.type === 'sendEmail' ?
                <div>
                    <InputGroup className={styles.search}>
                        <InputGroup.Prepend>
                            <InputGroup.Text className={styles.inputGroup}>
                                <FontAwesomeIcon icon={faEnvelope} className={styles.searchIcon}/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type='email'
                            className={styles.searchInput}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Search'
                        />
                    </InputGroup>
                    <Form.Text className={styles.invalid}>
                        {errorEmail}
                    </Form.Text>
                </div>
                : ''}
                <div className='row justify-content-center'>
                    {layout.cancel !== '' ? <Button className={styles.button+' '+styles.cancel} onClick={layout.onCancel}>{layout.cancel}</Button> : ''}
                    <Button onClick={() => layout.onSubmit(valid)} type='submit' className={disableButton === true ? styles.button+' '+styles.submit+' '+styles.disabled : styles.button+' '+styles.submit}>{layout.submit}</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}