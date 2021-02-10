import styles from '../../styles/NotFound.module.css'
import { Image, Button } from 'react-bootstrap'
import { useRouter } from 'next/router'

export default function NotFound() {

    const goToHomePage = () => {
        window.location.replace('/home')
    }

    return (
        <div className={styles.container}>
            <Image src='/not_found.png' className={styles.image} />
            <p className={styles.title}>Oh no! You got lost</p>
            <p className={styles.description}>We could not found what you are looking for</p>
            <Button onClick={goToHomePage} className={styles.button}>Click here to go to homepage</Button>
            <Button className={styles.buttonContact}>Contact us for help</Button>
        </div>
    )
}