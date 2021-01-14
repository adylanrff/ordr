import { useRef, useEffect } from 'react'
import styles from '../../styles/LandingPage.module.css'
import { scrollToTargetAdjusted } from '../../utils/scroll'
import Collaborator from './Collaborator'
import Contact from './Contact'
import { landingPageRefs, LANDING_PAGE_REDIRECTS } from '../../state/global'
import { useRecoilState } from 'recoil'

export default function LandingContact() {
    const collaborators = [{
        imgsrc: '/foto_azka.jpg',
        name: 'Azka Nabilah Mumtaz',
        experience: 'Frontend Engineer Intern @ Tokopedia '
    }, {
        imgsrc: '/foto_ody.jpg',
        name: 'Adylan Roaffa Ilmy',
        experience: 'Software Engineer @ Shopee Singapore'
    }]

    const ourContacts = [{
        imgsrc: '/phone.png',
        detail: '+6281234561789'
    }, {
        imgsrc: '/email.png',
        detail: 'adylanazka@gmail.com',
    }, {
        imgsrc: '/address.png',
        detail: 'Jl. Nangka Merisi Permai B7/18, Semarang'
    }]

    const contactRef = useRef(null)
    const [landingPageRef, setLandingPageRef] = useRecoilState(landingPageRefs)

    useEffect(() => {
        if (landingPageRef == LANDING_PAGE_REDIRECTS.CONTACT) {
            scrollToTargetAdjusted(contactRef.current)
        }
        setLandingPageRef("")
    }, [landingPageRef])

    const renderCollaborators = (persons) => {
        return (
            persons.map ( person => (
                <Collaborator key={person.name} imgsrc={person.imgsrc} name={person.name} experience={person.experience} />
            ))
        )
    }

    const renderContacts = (contacts) => {
        return (
            contacts.map( contact => (
                <Contact key={contact.imgsrc} imgsrc={contact.imgsrc} detail={contact.detail} />
            ))
        )
    }

    return (
        <div ref={contactRef} className={styles.containerContact}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-8 col-lg-8 col-md-7' style={{paddingRight: '25px'}}>
                        <p className={styles.titleCollaborator}>Our team</p>
                        {renderCollaborators(collaborators)}
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-5'>
                        <p className={styles.titleContact}>Contact us</p>
                        {renderContacts(ourContacts)}
                    </div>
                </div>
            </div>
        </div>
    )
}