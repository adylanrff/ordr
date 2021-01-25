import { useState, useEffect } from 'react'
import InformationCard from '../InformationCard'
import EditCard from '../EditCard'
import Banner from '../Banner'
import { validateRestoName, validateRestoAddress, validateRestoPhoneNumber } from '../../../state/restoInfoValidation'
import ConfirmModal from '../../ConfirmModal'

export default function RestaurantInfo() {

    const [currentView, setCurrentView] = useState('view')

    const [restoName, setRestoName] = useState("Ody's Heart")
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('Jl. Nangka Merisi Permai B7/18, Semarang')
    const [description, setDescription] = useState('Restoran enak mantap asik yahud')
    const [countryCode, setCountryCode] = useState('')

    const [tempRestoName, setTempRestoName] = useState('')
    const [tempPhoneNumber, setTempPhoneNumber] = useState('')
    const [tempAddress, setTempAddress] = useState('')
    const [tempDescription, setTempDescription] = useState('')

    const [valid, setValid] = useState(false)
    const [disabledSubmit, setDisabledSubmit] = useState(true)

    const [errorMessageResto, setErrorMessageResto] = useState('')
    const [errorMessageAddress, setErrorMessageAddress] = useState('')
    const [errorMessagePhoneNumber, setErrorMessagePhoneNumber] = useState('')

    const ERROR_MESSAGE_REQUIRED_RESTONAME = "Please enter your restaurant's name"
    const ERROR_MESSAGE_REQUIRED_RESTOADDRESS = "Please enter your restaurant's address"

    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const informations = [{
        title: "Restaurant's name",
        desc: restoName
    }, {
        title: 'Address',
        desc: address
    }, {
        title: 'Phone number',
        desc: phoneNumber
    }, {
        title: 'Description',
        desc: description
    }]

    const fillForm = [{
        label: "Restaurant's name",
        data: tempRestoName,
        setData: (e) => setTempRestoName(e.target.value),
        placeholder: "Your restaurant's name",
        type: 'string',
        control: "formBasicRestoName",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessageResto
    }, {
        label: "Address",
        data: tempAddress,
        setData: (e) => setTempAddress(e.target.value),
        placeholder: "Your restaurant's address",
        type: 'string',
        control: "formBasicAdress",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessageAddress
    }, {
        label: "Phone number",
        data: tempPhoneNumber,
        setData: setTempPhoneNumber,
        changeCountryCode: setCountryCode,
        placeholder: "Your restaurant's phone number",
        type: 'tel',
        control: "formBasicPhoneNumber",
        disabled: false,
        information: '',
        required: false,
        errorMessage: errorMessagePhoneNumber
    }, {
        label: "Description",
        data: tempDescription,
        setData: (e) => setTempDescription(e.target.value),
        placeholder: "What's in your restaurant?",
        type: 'string',
        control: "formBasicDescription",
        disabled: false,
        information: '',
        required: false,
        errorMessage: ''
    }]

    const onEditHandler = () => {
        setTempRestoName(restoName)
        setTempPhoneNumber(phoneNumber)
        setTempAddress(address)
        setTempDescription(description)
        setTempPhoneNumber(phoneNumber.replace('+', ''))
        setCurrentView('edit')
    }

    const buttons = [{
        id: 1,
        title: 'Edit',
        action: onEditHandler
    }]

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (valid) {
            setShowConfirmModal(true)
        }
    }

    const onCancelHandler = () => {
        setCurrentView('view')
        window.scrollTo(0,0)
    }

    const handleCancelConfirmModal = () => {
        setShowConfirmModal(false)
    }

    const handleSubmitConfirmModal = () => {
        setCurrentView('view')
        window.scrollTo(0,0)

        setRestoName(tempRestoName)
        if ((tempPhoneNumber === countryCode) || (tempPhoneNumber === '')) {
            setPhoneNumber('')
        } else {
            var phoneCode = '+'
            setPhoneNumber(phoneCode.concat(tempPhoneNumber))
        }
        setAddress(tempAddress)
        setDescription(tempDescription)

        setShowConfirmModal(false)
    }

    useEffect(() => {
        var { errorStrRestoName } = validateRestoName(tempRestoName)
        var { errorStrRestoAddress } = validateRestoAddress(tempAddress)
        var { errorStrRestoPhoneNumber } = validateRestoPhoneNumber(tempPhoneNumber, countryCode)

        if ((errorStrRestoName === '') && (errorStrRestoAddress === '') && (errorStrRestoPhoneNumber === '')) {
            setDisabledSubmit(false)
            setValid(true)
        } else {
            setDisabledSubmit(true)
            setValid(false)
        }

        if (errorStrRestoName === 'empty') {
            setErrorMessageResto(ERROR_MESSAGE_REQUIRED_RESTONAME)
        } else {
            setErrorMessageResto(errorStrRestoName)
        }
        
        if (errorStrRestoAddress === 'empty') {
            setErrorMessageAddress(ERROR_MESSAGE_REQUIRED_RESTOADDRESS)
        } else {
            setErrorMessageAddress(errorStrRestoAddress)
        }

        setErrorMessagePhoneNumber(errorStrRestoPhoneNumber)

    }, [tempRestoName, tempAddress, tempPhoneNumber, countryCode])

    const CARD_TITLE = 'Your Restaurant'

    const layoutEdit = {
        title: 'Edit Restaurant',
        submit: 'Submit',
        cancel: 'Cancel',
        anyRequired: true
    }

    const layoutConfirmModal = {
        title: 'Confirm Changes',
        detail: "Are you sure you want to make changes to your restaurant's information?",
        cancel: 'Cancel',
        submit: 'Confirm',
        image: '/approval.png',
        showModal: showConfirmModal,
        handleCancel: handleCancelConfirmModal,
        handleConfirm: handleSubmitConfirmModal,
    }

    return (
        <div>
            <Banner />
            <ConfirmModal layoutData={layoutConfirmModal}  />
            {currentView === 'view' ?
                <InformationCard informations={informations} title={CARD_TITLE} buttons={buttons} /> 
            :
                <EditCard formData={fillForm} onSubmitHandler={onSubmitHandler} onCancelHandler={onCancelHandler} disableSubmit={disabledSubmit} layoutData={layoutEdit} />
            }  
        </div>
    )
}