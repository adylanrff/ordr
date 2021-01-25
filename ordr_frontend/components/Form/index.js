import styles from '../../styles/Form.module.css'
import FormInput from './FormInput'
import { Form, Button, Alert } from 'react-bootstrap'
import Link from 'next/link'

export default function CustomForm({ type, formData, submitText, cancelText, onSubmit, onCancel, disableSubmit, anyRequired, errorMessage }) {

    const renderForm = (forms) => {
        return (
            forms.map(form => (
                <div key={form.label}>
                    <FormInput type={type} formData={form} />
                </div>
            ))
        )
    }

    return (
        <Form onSubmit={onSubmit}>
            {type==='Login' ?
                errorMessage!=='' ?
                <Alert className={styles.alert} variant='danger'>{errorMessage}</Alert>
                : ''
            : ''}
            {anyRequired === true && type === 'StepForm' ?
            <div className={styles.required}>
                <span>*</span>
                <span>Required</span>
            </div>
            : anyRequired === true && type === 'editCardHome' ?
            <div className={styles.requiredNonStep}>
                <span>*</span>
                <span>Required</span>
            </div>
            : ''}
            {renderForm(formData)}
            {type==='Login' ?
            <div style={{textAlign: 'end'}}>
                <Link href=''>
                    <p className={styles.forgotPassword}>Forgot your password?</p>
                </Link>
            </div>
            : ''}
            {type==='StepForm' || type==='editCardHome' ?
            <div className={styles.alignmentStep}>
                {cancelText !== '' ?
                <Button className={type==='StepForm' ? styles.buttonStep+' '+styles.cancel : styles.buttonNonStep+' '+styles.cancelNonStep} onClick={onCancel}>
                    {cancelText}
                </Button>
                : ''
                }
                {disableSubmit === true ?
                <Button className={type==='StepForm' ? styles.buttonStep+' '+styles.submit+' '+styles.disabled : styles.buttonNonStep+' '+styles.submit+' '+styles.disabled} type="submit">
                    {submitText}
                </Button>
                :
                <Button className={type==='StepForm' ? styles.buttonStep+' '+styles.submit : styles.buttonNonStep+' '+styles.submit} type="submit">
                    {submitText}
                </Button>}
            </div>
            :
            <div className={styles.alignment}>
                {disableSubmit === true ?
                <Button className={styles.submitButton+' '+styles.disabled} type="submit">
                    {submitText}
                </Button> 
                :
                <Button className={styles.submitButton} type="submit">
                    {submitText}
                </Button>
                }
            </div>
            }
        </Form>
    )
} 
