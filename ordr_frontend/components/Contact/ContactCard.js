import styles from '../../styles/ContactCard.module.css'
import Contact from './Contact'

export default function ContactCard({ contacts }) {
    const renderContacts = (contacts) => {
        return (
            contacts.map( contact => (
                <Contact key={contact.imgsrc} imgsrc={contact.imgsrc} detail={contact.detail} />
            ))
        )
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>Contact us</p>
            {renderContacts(contacts)}
        </div>
    )
}