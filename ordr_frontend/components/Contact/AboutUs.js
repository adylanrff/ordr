import { render } from 'react-dom'
import styles from '../../styles/AboutUs.module.css'
import Collaborator from './Collaborator'

export default function AboutUs({ collaborators }) {

    const renderCollaborators = (collaborators) => {
        return (
            collaborators.map(collaborator => (
                <div key={collaborator.name}>
                    <Collaborator person={collaborator} />
                </div>
            ))
        )
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>About us</p>
            {renderCollaborators(collaborators)}
        </div>
    )
}