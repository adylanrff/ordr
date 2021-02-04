import styles from '../../styles/ContactForm.module.css'
import FormInput from './FormInput'
import { Form, Button } from 'react-bootstrap'

export default function ContactForm({ forms, onSubmit, disable }) {

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
        <div className={styles.container}>
            <p className={styles.title}>Or...</p>
            <p className={styles.info}>You can fill in this form to get a faster response from our team</p>
            <Form>
                <p className={styles.requireInfo}>*Required</p>
                {renderForm(forms)}
                <div className={styles.alignRight}>
                    <Button onClick={onSubmit} className={disable === true ? styles.button+' '+styles.disabled : styles.button} type="submit">Submit</Button>
                </div>
            </Form>
        </div>
    )
}