import styles from '../../styles/LandingPage.module.css'
import classNames from 'classnames'
import { Button, Image } from 'react-bootstrap'
import { landingPageRefs, LANDING_PAGE_REDIRECTS } from '../../state/global'
import { useRecoilState } from 'recoil'

export default function LandingIntro() {
    const picPhone = classNames('col-12', styles.picIntroPhone)
    const picPC = classNames('col', styles.picIntroPC)
    const row = classNames('row align-items-center', styles.rowIntro)

    const [landingPageRef, setLandingPageRefs] = useRecoilState(landingPageRefs)

    const findOutMoreHandler = () => setLandingPageRefs("INTRO")

    return (
        <div className={styles.containerIntro}>
            <div className="container-fluid">
                <div className={row}>
                    <div className={picPhone}>
                        <Image className={styles.picIntro} src='/FoodIllustration.png'></Image>
                    </div>
                    <div className="col">
                        <p className={styles.titleIntro}>Delicious food at your fingertips</p>
                        <p className={styles.infoIntro}>Say goodbye to the old-fashioned paper menus. Present your food menus with just one simple QR code.</p>
                        <div className={styles.buttonsIntro}>
                            <Button className={styles.buttonStart}>Get started</Button>
                            <Button className={styles.buttonFind} onClick={findOutMoreHandler}>Find out more</Button>
                        </div>
                    </div>
                    <div className={picPC}>
                        <Image className={styles.picIntro} src='/FoodIllustration.png'></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}
