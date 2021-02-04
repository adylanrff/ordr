import styles from '../../styles/ContactCard.module.css'
import classNames from 'classnames'
import { Image } from 'react-bootstrap'

export default function Contact({imgsrc, detail}) {
    const row = classNames('row align-items-center', styles.contact)

    return (
        <div className={row}>
            <div className='col-xl-1 col-2'>
                <Image src={imgsrc} className={styles.picContact} />
            </div>
            <div className='col-xl-11 col-10'>
                <p className={styles.detailContact}>{detail}</p>
            </div>
        </div>
    )
}