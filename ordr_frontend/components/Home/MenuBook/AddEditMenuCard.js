import { useState } from 'react'
import { Form, Image, Button } from 'react-bootstrap'
import FormInput from '../../Form/FormInput'
import styles from '../../../styles/AddEditMenuCard.module.css'

export default function AddEditMenuCard({ layout, image, foodForm, submitHandler, cancelHandler, foodData, disableSubmit, errorMessage }) {

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

    const addFlavor = (flavor) => {
        var newFlavour = [...foodData.data.flavors]
        if (foodData.data.flavors.includes(flavor) === true) {
            var index = newFlavour.indexOf(flavor);
            newFlavour.splice(index, 1)
        } else {
            newFlavour.push(flavor)
        }
        foodData.set({
            ...foodData.data,
            flavors: newFlavour
        })
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
                <div className='row'>
                    <div className='col-md-5 col-12'>
                        <p className={styles.label}>Picture*</p>
                        <div className={dragging === true ? styles.imageDropDragging : errorMessage.picture !== '' ? styles.invalidImageDrop : styles.imageDrop}>
                            <div className={styles.imageDropContainer} onDrop={handleDrop} onDragOver={handleDragging} onDragLeave={handleDragLeave} onDragEnd={handleDragEnd} >
                                <Image src={image === '' ? '/ImageUpload.png' : image} className={image === '' ? styles.noImage : styles.imagePreview} />
                                <p className={styles.fileName}>{fileName}</p>
                                <p className={dragging === true ? styles.textDropDragging : styles.textDrop}><span style={{fontFamily: 'Poppins-SemiBold'}}>Drag and drop</span> your image here or click here to <span style={{fontFamily: 'Poppins-SemiBold'}}>browse</span></p>
                                <input type='file' name='myFile' className={styles.dropZoneInput} onChange={handleImageChange} />
                            </div>
                        </div>
                        <p className={styles.invalid}>{errorMessage.picture}</p>
                    </div>
                    <div className='col-md-7 col-12'>
                        {renderForm(foodForm)}
                        <div style={{marginTop: '10px'}}>
                            <p className={styles.label}>Course*</p>
                            <label className={styles.containerRadio}>
                                <input value='appetizer' onChange={(e) => foodData.set({...foodData.data, course: e.target.value})} type="radio" name="radio" checked={foodData.data.course === 'appetizer' ? true: false} />
                                <span className={errorMessage.course === '' ? styles.checkmarkRadio : styles.checkmarkRadio+' '+styles.invalidCheck}></span>
                                <span className={styles.labelCheck}>Appetizer</span>
                            </label>
                            <label className={styles.containerRadio}>
                                <input value='main' onChange={(e) => foodData.set({...foodData.data, course: e.target.value})} type="radio" name="radio" checked={foodData.data.course === 'main' ? true: false} />
                                <span className={errorMessage.course === '' ? styles.checkmarkRadio : styles.checkmarkRadio+' '+styles.invalidCheck}></span>
                                <span className={styles.labelCheck}>Main course</span>
                            </label>
                            <label className={styles.containerRadio}>
                                <input value='dessert' onChange={(e) => foodData.set({...foodData.data, course: e.target.value})} type="radio" name="radio" checked={foodData.data.course === 'dessert' ? true: false} />
                                <span className={errorMessage.course === '' ? styles.checkmarkRadio : styles.checkmarkRadio+' '+styles.invalidCheck}></span>
                                <span className={styles.labelCheck}>Dessert</span>
                            </label>
                            <p className={styles.invalid}>{errorMessage.course}</p>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <p className={styles.label}>Flavour(s)*</p>
                            <label className={styles.containerCheck}>
                                <input type="checkbox" value='sweet' onChange={(e) => addFlavor(e.target.value)} checked={foodData.data.flavors.includes('sweet') === true ? true : false} />
                                <span className={errorMessage.flavors === '' ? styles.checkmarkCheck : styles.checkmarkCheck+' '+styles.invalidCheck}></span>
                                <span className={styles.labelCheck}>Sweet</span>
                            </label>
                            <label className={styles.containerCheck}>
                                <input type="checkbox" value='sour' onChange={(e) => addFlavor(e.target.value)} checked={foodData.data.flavors.includes('sour') === true ? true : false} />
                                <span className={errorMessage.flavors === '' ? styles.checkmarkCheck : styles.checkmarkCheck+' '+styles.invalidCheck}></span>
                                <span className={styles.labelCheck}>Sour</span>
                            </label>
                            <label className={styles.containerCheck}>
                                <input type="checkbox" value='savory' onChange={(e) => addFlavor(e.target.value)} checked={foodData.data.flavors.includes('savory') === true ? true : false} />
                                <span className={errorMessage.flavors === '' ? styles.checkmarkCheck : styles.checkmarkCheck+' '+styles.invalidCheck}></span>
                                <span className={styles.labelCheck}>Savory</span>
                            </label>
                            <label className={styles.containerCheck}>
                                <input type="checkbox" value='bitter' onChange={(e) => addFlavor(e.target.value)} checked={foodData.data.flavors.includes('bitter') === true ? true : false} />
                                <span className={errorMessage.flavors === '' ? styles.checkmarkCheck : styles.checkmarkCheck+' '+styles.invalidCheck}></span>
                                <span className={styles.labelCheck}>Bitter</span>
                            </label>
                            <p className={styles.invalid}>{errorMessage.flavors}</p>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label className={styles.label}>Dish type*</Form.Label>
                                <Form.Control as="select" className={styles.input} custom value={foodData.data.dishType} onChange={(e) => foodData.set({...foodData.data, dishType: e.target.value})} isInvalid={errorMessage.dishType === '' ? false : true} >
                                    <option value='all'>All</option>
                                    <option value='vegan'>Vegan</option>
                                    <option value='snacks'>Snacks</option>
                                    <option value='lowcal'>Low calorie</option>
                                    <option value='soup'>Soup</option>
                                    <option value='stew'>Stew</option>
                                    <option value='grilled'>Grilled</option>
                                    <option value='bakery'>Baked or Bakery</option>
                                    <option value='fried'>Fried</option>
                                    <option value='drinks'>Drinks</option>
                                    <option value='pasta'>Pasta</option>
                                    <option value='noodle'>Noodle</option>
                                    <option value='pizza'>Pizza</option>
                                    <option value='rice'>Rice</option>
                                    <option value='sauce'>Full of sauce</option>
                                </Form.Control>
                                <Form.Text className={styles.invalid}>
                                    {errorMessage.dishType}
                                </Form.Text>
                            </Form.Group>
                        </div>
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