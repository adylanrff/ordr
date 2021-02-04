import styles from '../../../styles/QRCard.module.css'

export default function HowToQR() {
    return (
        <div className={styles.howCard}>
            <p className={styles.howTitle}>How to use the QR Code?</p>
            <p className={styles.howDescription}>1. Make sure you <span className={styles.bold}>have all your menus</span> in the menu book section</p>
            <p className={styles.howDescription}>2. Select <span className={styles.bold}>‘Print QR Code’ button</span> above to print the QR code along with a short usage guide for your customer</p>
            <p className={styles.howDescription}>3. <span className={styles.bold}>Adjust</span> the QR code you just printed with your table sign’s size</p>
            <p className={styles.howDescription} style={{marginBottom: '0px'}}>4. <span className={styles.bold}>Place the QR code on each table</span> at your restaurant. In addition, you can ask your customer to scan the QR code through their camera to access your menu</p>
        </div>
    )
}