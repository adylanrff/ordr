import styles from '../../styles/LandingPage.module.css'
import { Image } from 'react-bootstrap'

export default function HowCard({ imgsrc, title, info }) {
    return (
        <div className={styles.howCard}>
            <Image className={styles.picHow} src={imgsrc} />
            <p className={styles.titleHowCard}>{title}</p>
            <p className={styles.infoHowCard}>{info}</p>
        </div>
    )
}