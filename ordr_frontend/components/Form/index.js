import styles from '../../styles/Form.module.css'
import FormInput from './FormInput'
import { Form, Button } from 'react-bootstrap'

export default function CustomForm({ formData, submitText, onSubmit }) {

    const renderForm = (forms) => {
        return (
            forms.map(form => (
                <div key={form.label}>
                    <FormInput formData={form} />
                </div>
            ))
        )
    }

    return (
        <Form onSubmit={onSubmit}>
            {renderForm(formData)}
            <div className={styles.alignment}>
                <Button className={styles.submitButton} type="submit">
                    {submitText}
                </Button>
            </div>
        </Form>
    )
} 
