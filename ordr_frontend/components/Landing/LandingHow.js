import { useRef, useEffect } from 'react'
import styles from '../../styles/LandingPage.module.css'
import classNames from 'classnames'
import HowCard from './HowCard'
import { useRecoilState } from 'recoil'
import { scrollToTargetAdjusted } from '../../utils/scroll'
import { landingPageRefs, LANDING_PAGE_REDIRECTS } from '../../state/global'

export default function LandingHow() {
    const guideText = [{
        imgsrc: '/login_how.png',
        title: 'Step One',
        info: 'Register your account and fill in the restaurant info'
    }, {
        imgsrc: '/menu_how.png',
        title: 'Step Two',
        info: 'Create your digital menu and pick your recommended dishes' 
    }, {
        imgsrc: '/qrcode_how.png',
        title: 'Step Three',
        info: 'Print and show the QR Code to your customers!' 
    }]

    const flex = classNames('col-12 col-lg-3 col-md-4', styles.displayFlex)
    const rowFlex = classNames('row justify-content-center', styles.rowFlex)

    const howRef = useRef(null)
    const [landingPageRef, setLandingPageRef] = useRecoilState(landingPageRefs)

    useEffect(() => {
        if (landingPageRef == LANDING_PAGE_REDIRECTS.HOW) {
            scrollToTargetAdjusted(howRef.current)
        }
        setLandingPageRef("")
    }, [landingPageRef])

    const renderCard = (guides) => {
        return (
            guides.map( guide => (
            <div key={guide.title} className={flex}>
                <HowCard imgsrc={guide.imgsrc} title={guide.title} info={guide.info} />
            </div>
            ))
    )}

    return (
        <div ref={howRef} className={styles.containerHow}>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <p className={styles.titleHow}>How it works</p>
                </div>
                <div className={rowFlex}>
                    {renderCard(guideText)}
                </div>
            </div>
        </div>
    )
}