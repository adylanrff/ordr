import styles from '../../styles/Banner.module.css'
import classNames from 'classnames'
import { Image } from 'react-bootstrap'

export default function Banner() {
    const row = classNames('row', styles.container)
    const colText = classNames('col-xl-11 col-sm-10 col-10', styles.col)
    const colImage = classNames('col-xl-1 col-sm-2 col-2', styles.col)

    return (
        <div className={row}>
            <div className={colText}>
                <div className={styles.colText}>
                    <div className={styles.text}>
                        <p className={styles.title}>Welcome back, Guest!</p>
                        <p className={styles.info}>Keep your restaurant updated to give your customer complete experience</p>
                    </div>
                </div>
            </div>
            <div className={colImage}>
                <Image src='/FoodIllustration.png' className={styles.image} />
            </div>
        </div>
    )
}