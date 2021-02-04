import styles from '../../styles/AboutUs.module.css'
import { Image } from 'react-bootstrap'

export default function Collaborator({ person }) {
    return (
        <div className={styles.collaborator}>
            <Image src={person.imgsrc} className={styles.image} />
            <p className={styles.name}>{person.name}</p>
            <p className={styles.experience}>{person.experience}</p>
        </div>
    )
}