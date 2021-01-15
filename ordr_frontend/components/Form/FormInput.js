import styles from '../../styles/Form.module.css'
import { Form } from 'react-bootstrap'

export default function FormInput({ formData }) {
    return (
        <Form.Group controlId={formData.control}>
            <Form.Label className={styles.label}>{formData.label}</Form.Label>
            <Form.Control
                className={styles.input}
                type={formData.type}
                placeholder={formData.placeholder}
                value={formData.data}
                onChange={formData.setData}
            />
            <Form.Text className="text-muted" />
        </Form.Group>
    )
}