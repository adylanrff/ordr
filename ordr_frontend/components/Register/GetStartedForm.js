import styles from '../../styles/GetStartedForm.module.css'
import Step from '../Step'
import CustomForm from '../Form'

// Form for second and third step, which is completing personal and restaurant's information

export default function GetStartedForm({formData, stepData, layoutData, onSubmitHandler, onCancelHandler, disableSubmit}) {

    const renderStep = (steps) => {
        return (
            steps.map(step => (
                <Step key={step.position} stepData={step} />
            ))
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.row}>
                    {renderStep(stepData)}
                </div>
                <div className={styles.text}>
                    <p className={styles.title}>{layoutData.title}</p>
                    <p className={styles.information}>{layoutData.information}</p>
                </div>
                <div className={styles.form}>
                    <CustomForm
                            type='StepForm'
                            formData={formData} 
                            submitText={layoutData.submit}
                            cancelText={layoutData.cancel}
                            onSubmit={onSubmitHandler}
                            onCancel = {onCancelHandler}
                            disableSubmit={disableSubmit}
                            anyRequired={layoutData.anyRequired}
                    />
                </div>
            </div>
        </div>
    )
}