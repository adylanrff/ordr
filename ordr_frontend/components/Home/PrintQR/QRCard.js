import styles from '../../../styles/QRCard.module.css'
import QRCode from "react-qr-code"
import { Button } from 'react-bootstrap'

export default function QRCard() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <p className={styles.title}>Here is your QRCode</p>
                <div>
                    <QRCode value='www.google.com' bgColor='#FFFAEF' size={128} level='H' />
                </div>
                <Button className={styles.button} >Print QR Code</Button>
            </div>
        </div>

    )
}