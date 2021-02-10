import styles from '../../styles/Form.module.css'
import FormInput from './FormInput'
import { Form, Button, Alert } from 'react-bootstrap'
import Link from 'next/link'

export default function CustomForm({ type, formData, submitText, cancelText, onSubmit, onCancel, disableSubmit, anyRequired, errorMessage, forgotPassword }) {

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
            {errorMessage !=='' && (type === 'Login' || type === 'Register') ? 
                <Alert className={styles.alert} variant='danger'>{errorMessage}</Alert>
            : '' }
            {anyRequired === true && (type === 'StepForm' || type === 'resetPass') ?
            <div className={styles.required}>
                <span>*</span>
                <span>Required</span>
            </div>
            : anyRequired === true && (type === 'editCardHome' || type === 'editFoodCard') ?
            <div className={styles.requiredNonStep}>
                <span>*</span>
                <span>Required</span>
            </div>
            : ''}
            {renderForm(formData)}
            {type==='Login' ?
            <div style={{textAlign: 'end'}}>
                <p onClick={forgotPassword} className={styles.forgotPassword}>Forgot your password?</p>
            </div>
            : ''}
            {type==='StepForm' || type==='editCardHome' || type === 'resetPass' ?
            <div className={styles.alignmentStep}>
                {cancelText !== '' ?
                <Button className={type==='StepForm' ? styles.buttonStep+' '+styles.cancel : type === 'resetPass' ? styles.buttonReset+' '+styles.cancel : styles.buttonNonStep+' '+styles.cancelNonStep} onClick={onCancel}>
                    {cancelText}
                </Button>
                : ''
                }
                {disableSubmit === true ?
                <Button className={type==='StepForm' ? styles.buttonStep+' '+styles.submit+' '+styles.disabled : type === 'resetPass' ? styles.buttonReset+' '+styles.submit+' '+styles.disabled : styles.buttonNonStep+' '+styles.submit+' '+styles.disabled} type="submit">
                    {submitText}
                </Button>
                :
                <Button className={type==='StepForm' ? styles.buttonStep+' '+styles.submit : type === 'resetPass' ? styles.buttonReset+' '+styles.submit : styles.buttonNonStep+' '+styles.submit} type="submit">
                    {submitText}
                </Button>}
            </div>
            : type === 'editFoodCard' ?
            ''
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
