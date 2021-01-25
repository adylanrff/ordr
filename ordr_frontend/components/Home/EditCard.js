import styles from '../../styles/EditCard.module.css'
import CustomForm from '../Form'

export default function EditCard({formData, onSubmitHandler, onCancelHandler, layoutData, disableSubmit}) {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Edit Restaurant</p>
            <CustomForm
                type='editCardHome'
                formData={formData} 
                submitText={layoutData.submit}
                cancelText={layoutData.cancel}
                onSubmit={onSubmitHandler}
                onCancel = {onCancelHandler}
                disableSubmit={disableSubmit}
                anyRequired={layoutData.anyRequired}
            />
        </div>
    )
}