import styles from '../../styles/InformationCard.module.css'
import { Button } from 'react-bootstrap'

export default function InformationCard({title, informations, buttons}) {

    const renderInformations = (informations) => {
        return (
            informations.map(information => (
                <div key={information.title} className={styles.infoContainer}>
                    <p className={styles.infoTitle}>{information.title}</p>
                    {information.desc === '' ?
                        <p className={styles.invalidInfoDesc}>-</p>
                    :
                        <p className={styles.infoDesc}>{information.desc}</p>
                    }
                </div>
            ))
        )
    }

    const renderButtons = (buttons) => {
        return (
            buttons.map(button => (
                <div key={button.id} className={styles.buttoncontainer}>
                    <Button onClick={button.action} className={button.id === 1 ? styles.button : styles.button+' '+styles.buttonSpace}>{button.title}</Button>
                </div>
            ))
        )
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            {renderInformations(informations)}
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <div className={styles.buttonscontainer}>
                    {renderButtons(buttons)}
                </div>
            </div>
        </div>
    )
}