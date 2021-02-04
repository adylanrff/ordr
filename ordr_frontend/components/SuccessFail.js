import styles from '../styles/SuccessFail.module.css'
import { Image, Button } from 'react-bootstrap'

export default function SuccessFail({ data }) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div>
                    <Image src={data.imgSrc} className={styles.image} />
                    <p className={styles.title}>{data.title}</p>
                    <p className={styles.information}>{data.description}</p>
                    <Button onClick={data.handleButton} className={styles.button+' '+styles.submit}>{data.button}</Button>
                </div>
            </div>
        </div>
    )
}