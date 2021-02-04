import { useState } from 'react'
import { Form, Image, Button } from 'react-bootstrap'
import FormInput from '../../Form/FormInput'
import styles from '../../../styles/AddEditMenuCard.module.css'

export default function AddEditMenuCard({ layout, image, foodForm, submitHandler, cancelHandler, foodData, disableSubmit, errorMessagePicture }) {

    const [dragging, setDragging] = useState(false)
    const [fileName, setFileName] = useState('')

    const handleDragging = (e) => {
        e.preventDefault()
        setDragging(true)
    }

    const handleDragLeave = (e) => {
        e.preventDefault()
        setDragging(false)
    }

    const handleDragEnd = (e) => {
        e.preventDefault()
        setDragging(false)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        if (e.dataTransfer.files.length) {
            foodData.set({
                ...foodData.data,
                imgSrc: URL.createObjectURL(e.dataTransfer.files[0])
            })
            setFileName(e.dataTransfer.files[0].name)
        }
        setDragging(false)
    }

    const handleImageChange = (e) => {
        e.preventDefault()
        if (e.target.files[0]) {
            foodData.set({
                ...foodData.data,
                imgSrc: URL.createObjectURL(e.target.files[0])
            })
            setFileName(e.target.files[0].name)
        }
    }

    const renderForm = (forms) => {
        return (
            forms.map(form => (
                <div key={form.label}>
                    <FormInput type='editFoodCard' formData={form} />
                </div>
            ))
        )
    }
    return (
        <div className={styles.container}>
            <p className={styles.title}>{layout.title}</p>
            <p className={styles.description}>{layout.description}</p>
            <div className={styles.required}>
                <span>*</span>
                <span>Required</span>
            </div>
            <Form onSubmit={submitHandler}>
                <div className='row align-items-center'>
                    <div className='col-md-5 col-12'>
                        <p className={styles.label}>Picture*</p>
                        <div className={dragging === true ? styles.imageDropDragging : errorMessagePicture !== '' ? styles.invalidImageDrop : styles.imageDrop}>
                            <div className={styles.imageDropContainer} onDrop={handleDrop} onDragOver={handleDragging} onDragLeave={handleDragLeave} onDragEnd={handleDragEnd} >
                                <Image src={image === '' ? '/ImageUpload.png' : image} className={image === '' ? styles.noImage : styles.imagePreview} />
                                <p className={styles.fileName}>{fileName}</p>
                                <p className={dragging === true ? styles.textDropDragging : styles.textDrop}><span style={{fontFamily: 'Poppins-SemiBold'}}>Drag and drop</span> your image here or click here to <span style={{fontFamily: 'Poppins-SemiBold'}}>browse</span></p>
                                <input type='file' name='myFile' className={styles.dropZoneInput} onChange={handleImageChange} />
                            </div>
                        </div>
                        <p className={styles.invalid}>{errorMessagePicture}</p>
                    </div>
                    <div className='col-md-7 col-12'>
                        {renderForm(foodForm)}
                    </div>
                </div>
                <div className='row justify-content-end'>
                    <div className='col-12' style={{textAlign: 'end'}}>
                        <Button className={styles.button+' '+styles.cancel} onClick={cancelHandler}>
                            {layout.cancel}
                        </Button>
                        <Button className={disableSubmit === true ? styles.button+' '+styles.submit+' '+styles.disabled : styles.button+' '+styles.submit} type="submit">
                            {layout.submit}
                        </Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}