import styles from '../styles/Footer.module.css'
import classNames from 'classnames'

export default function Footer() {
    const container = classNames('container-fluid', styles.container)
    const colLogoMobile = classNames('col-sm col-12', styles.logoColMobile)
    const colLogo = classNames('col-sm col-12', styles.logoCol)

    return (
        <div className={container}>
            <div className='row align-items-center'>
                <div className={colLogoMobile}>
                    <p className={styles.logo}>Qrder</p>
                </div>
                <div className='col-sm col-12s'>
                    <p className={styles.copyright}>Qrder © 2020 All Rights Reserved </p>
                </div>
                <div className={colLogo}>
                    <p className={styles.logo}>Qrder</p>
                </div>
            </div>
        </div>
    )
}