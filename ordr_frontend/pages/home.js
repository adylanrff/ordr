import { useRef } from 'react'
import NavigationBar from '../components/NavigationBar'
import Overlay from '../components/Overlay'
import Homepage from '../components/Home/Homepage'
import Footer from '../components/Footer'

export default function Home() {

    const pageRef = useRef(null)

    return (
        <div ref={pageRef}>
            <NavigationBar type='home' />
            <Overlay pageRef={pageRef} />
            <Homepage />
            <Footer type='home' />
        </div>
    )
}
