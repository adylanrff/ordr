import styles from '../styles/Step.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Step(props) {
    const { stepData } = props

    return (
        <div className={styles.container}>
            {stepData.position!==1 && stepData.status==='not done' ?
                <hr className={styles.lineNotDone} />            
            : stepData.position!==1 && (stepData.status==='done' || stepData.status==='current') ?
                <hr className={styles.lineDone} />
            : ''}
            <div className={styles.iconTitle}>
                <div className={stepData.status==='not done' ?
                styles.circle + ' ' + styles.gray
                :
                styles.circle + ' ' + styles.orange}>
                    <FontAwesomeIcon icon={stepData.icon} color='#FFFAEF' className={styles.icon} />
                </div>
                <p className={stepData.status==='current' ?
                styles.title + ' ' + styles.bold
                :
                styles.title}>{stepData.title}</p>
            </div>
        </div>
    )
}