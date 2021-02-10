import { useRef } from 'react'
import NavigationBar from '../components/NavigationBar'
import Overlay from '../components/Overlay'
import ContactPage from '../components/Contact'
import Footer from '../components/Footer'

export default function Contact() {
    const pageRef = useRef(null)

    return (
        <div ref={pageRef}>
            <NavigationBar type='home' />
            <Overlay pageRef={pageRef} />
            <ContactPage />
            <Footer type='home' />
        </div>
    )
}