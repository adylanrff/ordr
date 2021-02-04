import styles from '../../styles/HowCard.module.css'
import HowStep from './HowStep'

export default function HowCard({ data }) {

    const renderHow = (hows) => {
        return (
            hows.map(how => (
                <div key={how.number}>
                    <HowStep key={how.number} how={how} length={hows.length} />
                </div>
            ))
        )
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>How it works</p>
            {renderHow(data)}
        </div>
    )
}