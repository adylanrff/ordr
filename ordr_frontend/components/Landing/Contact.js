import styles from '../../styles/LandingPage.module.css'
import classNames from 'classnames'
import { Image } from 'react-bootstrap'

export default function Contact({imgsrc, detail}) {
    const row = classNames('row align-items-center', styles.contact)

    return (
        <div className={row}>
            <div className='col-xl-2 col-lg-3 col-md-2 col-sm-1 col-2'>
                <Image src={imgsrc} className={styles.picContact} />
            </div>
            <div className='col-xl-10 col-lg-9 col-md-10 col-sm-11 col-10'>
                <p className={styles.detailContact}>{detail}</p>
            </div>
        </div>
    )
}