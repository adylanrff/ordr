import { useRef } from 'react'
import NavigationBar from '../components/NavigationBar'
import Overlay from '../components/Overlay'
import HowPage from '../components/How'
import Footer from '../components/Footer'

export default function How() {
    const pageRef = useRef(null)

    return (
        <div ref={pageRef}>
            <NavigationBar type='home' />
            <Overlay pageRef={pageRef} />
            <HowPage />
            <Footer type='home' />
        </div>
    )
}