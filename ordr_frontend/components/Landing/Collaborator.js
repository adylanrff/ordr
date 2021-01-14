import styles from '../../styles/LandingPage.module.css'
import classNames from 'classnames'
import { Image } from 'react-bootstrap'

export default function Collaborator({imgsrc, name, experience}) {
    const row = classNames('row align-items-center', styles.person)

    return (
        <div className={row}>
            <div className='col-xl-3 col-lg-3 col-md-4 col-sm-3 col-12'>
                <Image src={imgsrc} className={styles.picCollaborator} roundedCircle />
            </div>
            <div className='col-xl-9 col-lg-9 col-md-8 col-sm-9 col-12'>
                <p className={styles.name}>{name}</p>
                <p className={styles.experience}>{experience}</p>
            </div>
        </div>
    )
}