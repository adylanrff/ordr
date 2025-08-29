import Head from 'next/head'
import styles from '../../styles/ContactPage.module.css'
import SideMenu from '../Home/SideMenu/SideMenu'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'
import AboutUs from './AboutUs'
import ConfirmModal from '../ConfirmModal'
import classNames from 'classnames'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ContactPage() {

    const router = useRouter()

    const changeMenuHandler = (id) => {
        router.push({
            pathname: '/home',
            query: { id: id },
          }, '/home')
    }

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const [errorName, setErrorName] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const [hasSubmit, setHasSubmit] = useState(false)
    const [disableSubmit, setDisableSubmit] = useState(true)
    const [valid, setValid] = useState(false)
    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const generateError = () => {
        if (hasSubmit && name === '') {
            setErrorName('Please enter your name')
        } else if (!hasSubmit && name === '') {
            setErrorName('empty')
        } else {
            setErrorName('')
        }

        if (hasSubmit && message === '') {
            setErrorMessage('Please enter your message')
        } else if (!hasSubmit && message === '') {
            setErrorMessage('empty')
        } else {
            setErrorMessage('')
        }
    }
    
    const menus = [{
        number: 1,
        imgsrc: '/home_info.png',
        desc: "Restaurant's Information",
        status: 'non-active',
        setMenu: changeMenuHandler
    }, {
        number: 2,
        imgsrc: '/home_menu.png',
        desc: "Menu Book",
        status: 'non-active',
        setMenu: changeMenuHandler
    }, {
        number: 3,
        imgsrc: '/home_qr.png',
        desc: "Print QR Code",
        status: 'non-active',
        setMenu: changeMenuHandler
    }, {
        number: 4,
        imgsrc: '/home_user.png',
        desc: "Profile",
        status: 'non-active',
        setMenu: changeMenuHandler
    }]

    const contactData = [{
        imgsrc: '/phone_white.png',
        detail: '+628123456789'
    }, {
        imgsrc: '/email_white.png',
        detail: 'guest@gmail.com',
    }, {
        imgsrc: '/address_white.png',
        detail: 'Jl. Jalan Yuk 123'
    }]

    const fillForm = [{
        label: 'Name',
        placeholder: 'Your name',
        type: 'string',
        as: '',
        value: name,
        setValue: (e) => setName(e.target.value),
        required: true,
        errorMessage: errorName
    }, {
        label: 'Message',
        placeholder: 'Your message',
        type: 'string',
        as: 'textarea',
        value: message,
        setValue: (e) => setMessage(e.target.value),
        required: true,
        errorMessage: errorMessage
    }]

    const handleCancelConfirmModal = () => {
        setShowConfirmModal(false)
    }

    const handleSubmitConfirmModal = () => {
        /* put post to backend here */

        setName('')
        setMessage('')

        setHasSubmit(false)
        setDisableSubmit(true)
        setValid(false)

        setShowConfirmModal(false)
    }

    const layoutModal = {
        title: 'Confirm Message',
        detail: "Are you sure you want to send this message to our team?",
        cancel: 'Cancel',
        submit: 'Confirm',
        image: '/approval.png',
        showModal: showConfirmModal,
        handleCancel: handleCancelConfirmModal,
        handleConfirm: handleSubmitConfirmModal, 
    }

    const collaborators = [{
        imgsrc: '/foto_azka.jpg',
        name: 'Azka Nabilah Mumtaz',
        experience: 'Frontend Engineer Intern @ Tokopedia '
    }]

    const box = classNames('col-4', styles.box)

    useEffect(() => {
        generateError()

        if ((errorName === '') && (errorMessage === '') && (name !== '') && (message !== '')) {
            setValid(true)
            setDisableSubmit(false)
        } else if ((errorName !== 'empty' && errorName !== '') || (errorMessage !== 'empty' && errorMessage !== '')) {
            setValid(false)
            setDisableSubmit(true)
        } else {
            setValid(false)
            setDisableSubmit(false)
        }
    }, [errorName, errorMessage, name, message, valid, hasSubmit])

    const handleSubmit = (validity) => {
        event.preventDefault()
        setHasSubmit(true)
        if (validity) {
            setShowConfirmModal(true)
        }
    }

    return (
        <div className={styles.container}>
            <ConfirmModal type='Confirmation' layoutData={layoutModal}  />
            <Head>
                <title>Qrder | Contact us</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/> 
            </Head>
            <div className='row'>
                <div className='col-md-4 col-sm-4 col-12'>
                    <SideMenu currentView='contact' menus={menus} />
                </div>
                <div className='col-md-5 col-sm-8 col-12'>
                    <ContactCard contacts={contactData} />
                    <ContactForm forms={fillForm} onSubmit={() => handleSubmit(valid)} disable={disableSubmit} />
                </div>
                <div className={box} />
                <div className='col-md-3 col-sm-8 col-12'>
                    <AboutUs collaborators={collaborators} />
                </div>
            </div>
        </div>
    )
}