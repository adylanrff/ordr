import styles from '../styles/Loader.module.css'

export default function Loader() {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.spinner}>
                    <div className={styles.doubleBounce1}></div>
                    <div className={styles.doubleBounce2}></div>
                </div>
                <div className={styles.containerText}>
                    <div className={styles.loading}>
                        <div className={styles.loadingLetter}>L</div>
                        <div className={styles.loadingLetter}>o</div>
                        <div className={styles.loadingLetter}>a</div>
                        <div className={styles.loadingLetter}>d</div>
                        <div className={styles.loadingLetter}>i</div>
                        <div className={styles.loadingLetter}>n</div>
                        <div className={styles.loadingLetter}>g</div>
                    </div>
                </div>
            </div>
        </div>
    )
}