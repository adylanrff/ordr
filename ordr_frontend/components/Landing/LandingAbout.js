import { useRef, useEffect } from 'react'
import styles from '../../styles/LandingPage.module.css'
import { Image } from 'react-bootstrap'
import classNames from 'classnames'
import { scrollToTargetAdjusted } from '../../utils/scroll'
import { landingPageRefs, LANDING_PAGE_REDIRECTS } from '../../state/global'
import { useRecoilState } from 'recoil'

export default function LandingAbout() {
    const rightAbout = classNames('col', styles.rightAbout)
    const colImage = classNames('col-12 col-md', styles.colImageAbout)
    const rowTitleMobile = classNames('row align-items-center', styles.rowMobileAbout)

    const introRef = useRef(null)
    const [landingPageRef, setLandingPageRef] = useRecoilState(landingPageRefs)

    useEffect(() => {
        if (landingPageRef == LANDING_PAGE_REDIRECTS.INTRO) {
            scrollToTargetAdjusted(introRef.current)
        }
        setLandingPageRef("")
    }, [landingPageRef])

    return (
        <div ref={introRef} className={styles.containerAbout}>
            <div className='container-fluid'>
                <div className={rowTitleMobile}>
                    <p className={styles.titleAboutMobile}>What is Qrder?</p>         
                </div>
                <div className='row align-items-center'>
                    <div className={colImage}>
                        <Image className={styles.picAbout} src='/qrder.png'></Image>
                    </div>
                    <div className={rightAbout}>
                        <p className={styles.titleAbout}>What is Qrder?</p>
                        <p className={styles.infoAbout}>Qrder is a free website that can create a digital menus and publish them with a simple QR code. Create, modify, and share your menu. No download required. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}