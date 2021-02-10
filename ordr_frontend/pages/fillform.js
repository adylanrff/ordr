import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import NavigationBar from '../components/NavigationBar'
import PersonalInformation from '../components/Register/GetStartedForm/PersonalInformation'
import RestaurantInformation from '../components/Register/GetStartedForm/RestaurantInformation'
import Footer from '../components/Footer'
import Overlay from '../components/Overlay'
import { updateUser } from '../lib/supabase'
import { useAuth } from '../context/auth'

export default function FillFormPage() {

    const [username, setUsername] = useState('adylanazka')
    const [email, setEmail] = useState('adylanazka@gmail.com')
    const [fullname, setFullname] = useState('')
    const [telephone, setTelephone] = useState('')

    const [restoname, setRestoname] = useState('')
    const [address, setAddress] = useState('')
    const [restoTelephone, setRestoTelephone] = useState('')
    const [description, setDescription] = useState('')

    const [hasSubmitPerson, setHasSubmitPerson] = useState(false)
    const [hasSubmitResto, setHasSubmitResto] = useState(false)

    const [currentStep, setCurrentStep] = useState(1)
    const { currentUser } = useAuth()

    const dataPersonal = [{
        data: username,
        setter: (e) => setUsername(e.target.value)
    }, {
        data: email,
        setter: (e) => setEmail(e.target.value)
    }, {
        data: fullname,
        setter: (e) => setFullname(e.target.value)
    }, {
        data: telephone,
        setter: setTelephone
    }]

    const dataRestaurant = [{
        data: restoname,
        setter: (e) => setRestoname(e.target.value)
    }, {
        data: address,
        setter: (e) => setAddress(e.target.value)
    }, {
        data: restoTelephone,
        setter: setRestoTelephone
    }, 
    {
        data: description,
        setter: (e) => setDescription(e.target.value)
    }]

    const submittedPerson = {
        data: hasSubmitPerson,
        setter: setHasSubmitPerson
    }

    const submittedResto = {
        data: hasSubmitResto,
        setter: setHasSubmitResto
    }

    const onPersonalInfoSubmitHandler = () => {
        window.scrollTo(0,0)
        setCurrentStep(2)
    }

    const onRestaurantInfoSubmitHandler = async () => {
        /* put post to backend here */ 
        const { error } = await updateUser(currentUser.uid, {
            fullname,
            user_phone_number: telephone,
            restaurant_address: address,
            restaurant_name: restoname,
            restaurant_phone_number: restoTelephone,
            restaurant_description: description
        })
        
        if (!error) {
            window.scrollTo(0,0)
            window.location.replace('/home')
        }
    }

    const pageRef = useRef(null)

    return (
        <div ref={pageRef}>
            <Head>
                <title>Qrder | Fill form to continue</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
            </Head>
            <NavigationBar type='fillFormPage' loggedin={false} />
            <Overlay pageRef={pageRef} />
            {currentStep === 1 ?
                <PersonalInformation data={dataPersonal} setCurrentStep={setCurrentStep} hasSubmit={submittedPerson} onSubmitHandler={onPersonalInfoSubmitHandler}/>
            :
            <div>
                <RestaurantInformation data={dataRestaurant} setCurrentStep={setCurrentStep} hasSubmit={submittedResto} onSubmitHandler={onRestaurantInfoSubmitHandler} />
            </div>
            }
            <Footer />
        </div>
    )
}