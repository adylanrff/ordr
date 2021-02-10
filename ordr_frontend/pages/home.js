import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { currentMenuState } from '../state/global'
import NavigationBar from '../components/NavigationBar'
import Overlay from '../components/Overlay'
import Homepage from '../components/Home'
import Footer from '../components/Footer'

export default function Home() {

    const pageRef = useRef(null)

    const [currentMenu, setCurrentMenu] = useRecoilState(currentMenuState)
    const [verified, setVerified] = useState(false)

    const router = useRouter()

    const {
        query: { id }
    } = router

    useEffect(() => {
        if ((id) && (!verified)) {
            if (id === '1' || id === '2' || id === '3' || id === '4') {
                setCurrentMenu(id)
            }
            setVerified(true)
        }
    })

    return (
        <div ref={pageRef}>
            <NavigationBar type='home' />
            <Overlay pageRef={pageRef} />
            <Homepage />
            <Footer type='home' />
        </div>
    )
}
