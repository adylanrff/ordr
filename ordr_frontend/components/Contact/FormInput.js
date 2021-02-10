import styles from '../../styles/ContactForm.module.css'
import { Form } from 'react-bootstrap'

export default function FormInput({ formData }) {
    return (
        <Form.Group>
            <Form.Label className={styles.label}>{formData.label}{formData.required === true ? <span>*</span> : ''}</Form.Label>
            {formData.as === '' ?
                <Form.Control
                    className={styles.input}
                    value={formData.value}
                    type={formData.type}
                    onChange={formData.setValue}
                    placeholder={formData.placeholder}
                    isInvalid={formData.errorMessage === '' || formData.errorMessage === 'empty' ? false : true}
                />
            :
                <Form.Control
                    className={styles.textarea}
                    value={formData.value}
                    type={formData.type}
                    onChange={formData.setValue}
                    placeholder={formData.placeholder}
                    as='textarea'
                    isInvalid={formData.errorMessage === '' || formData.errorMessage === 'empty' ? false : true}
                />
            }
            {formData.errorMessage !== '' && formData.errorMessage !== 'empty' ?
            <Form.Text className={styles.invalid}>
                {formData.errorMessage}
            </Form.Text>
            : ''}
        </Form.Group>
    )
}