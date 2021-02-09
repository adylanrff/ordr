import { useEffect, useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import styles from '../../../styles/Sort.module.css'

export default function Filter({data, show, onClose, onApply}) {

    const [course, setCourse] = useState(data.course)
    const [flavour, setFlavour] = useState(data.flavors)
    const [dishType, setDishType] = useState(data.dishtype)
    const [ratings, setRatings] = useState(data.ratings)

    const addFlavor = (flavor) => {
        var newFlavour = [...flavour]
        if (flavour.includes(flavor) === true) {
            var index = flavour.indexOf(flavor);
            newFlavour.splice(index, 1)
        } else {
            newFlavour.push(flavor)
        }
        setFlavour(newFlavour)
    }

    const addRating = (rating) => {
        var newRatings = [...ratings]
        if (ratings.includes(rating) === true) {
            var index = ratings.indexOf(rating);
            newRatings.splice(index, 1)
        } else {
            newRatings.push(rating)
        }
        setRatings(newRatings)
    }

    const onReset = () => {
        setCourse('')
        setFlavour([])
        setDishType('all')
        setRatings([])
    }

    const onApplyHandler = () => {
        onApply(course, flavour, dishType, ratings)
    }

    const onCancel = () => {
        onClose()
        setCourse(data.course)
        setFlavour(data.flavors)
        setDishType(data.dishtype)
        setRatings(data.ratings)
    }

    return (
        <Modal show={show} centered={true} onHide={onClose} contentClassName={styles.modal} backdropClassName={styles.backdrop} backdrop="static" keyboard={false} >
            <Modal.Body>
                <p className={styles.mainTitle}>Filter by</p>
                <div style={{marginBottom: '25px'}}>
                    <p className={styles.titleFilter}>Course</p>
                    <label className={styles.container}>
                        <input value='' onChange={(e) => setCourse(e.target.value)} type="radio" name="radio" checked={course === '' ? true: false} />
                        <span className={styles.checkmark}></span>
                        <span className={styles.label}>All (Default)</span>
                    </label>
                    <label className={styles.container}>
                        <input value='appetizer' onChange={(e) => setCourse(e.target.value)} type="radio" name="radio" checked={course === 'appetizer' ? true: false} />
                        <span className={styles.checkmark}></span>
                        <span className={styles.label}>Appetizer</span>
                    </label>
                    <label className={styles.container}>
                        <input value='main' onChange={(e) => setCourse(e.target.value)} type="radio" name="radio" checked={course === 'main' ? true: false} />
                        <span className={styles.checkmark}></span>
                        <span className={styles.label}>Main course</span>
                    </label>
                    <label className={styles.container}>
                        <input value='dessert' onChange={(e) => setCourse(e.target.value)} type="radio" name="radio" checked={course === 'dessert' ? true: false} />
                        <span className={styles.checkmark}></span>
                        <span className={styles.label}>Dessert</span>
                    </label>
                </div>
                <div style={{marginBottom: '25px'}}>
                    <p className={styles.title}>Flavors</p>
                    <p className={styles.info}>Pick two or more for combinations</p>
                    <label className={styles.containerCheck}>
                        <input type="checkbox" value='sweet' onChange={(e) => addFlavor(e.target.value)} checked={flavour.includes('sweet') === true ? true : false} />
                        <span className={styles.checkmarkCheck}></span>
                        <span className={styles.label}>Sweet</span>
                    </label>
                    <label className={styles.containerCheck}>
                        <input type="checkbox" value='sour' onChange={(e) => addFlavor(e.target.value)} checked={flavour.includes('sour') === true ? true : false} />
                        <span className={styles.checkmarkCheck}></span>
                        <span className={styles.label}>Sour</span>
                    </label>
                    <label className={styles.containerCheck}>
                        <input type="checkbox" value='savory' onChange={(e) => addFlavor(e.target.value)} checked={flavour.includes('savory') === true ? true : false} />
                        <span className={styles.checkmarkCheck}></span>
                        <span className={styles.label}>Savory</span>
                    </label>
                    <label className={styles.containerCheck}>
                        <input type="checkbox" value='bitter' onChange={(e) => addFlavor(e.target.value)} checked={flavour.includes('bitter') === true ? true : false} />
                        <span className={styles.checkmarkCheck}></span>
                        <span className={styles.label}>Bitter</span>
                    </label>
                </div>
                <div style={{marginBottom: '25px'}}>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label className={styles.titleFilter}>Dish type</Form.Label>
                        <Form.Control as="select" className={styles.input} custom value={dishType} onChange={(e) => setDishType(e.target.value)}>
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
                    </Form.Group>
                </div>
                <div style={{marginBottom: '30px'}}>
                    <p className={styles.titleFilter}>Other's rating</p>
                    <label className={styles.containerCheck}>
                        <input type="checkbox" value='favorite' onChange={(e) => addRating(e.target.value)} checked={ratings.includes('favorite') === true ? true : false} />
                        <span className={styles.checkmarkCheck}></span>
                        <span className={styles.label}>Customer's favorite</span>
                    </label>
                    <label className={styles.containerCheck}>
                        <input type="checkbox" value='recommended' onChange={(e) => addRating(e.target.value)} checked={ratings.includes('recommended') === true ? true : false} />
                        <span className={styles.checkmarkCheck}></span>
                        <span className={styles.label}>Chef's recommendation</span>
                    </label>
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button onClick={onCancel} className={styles.button+' '+styles.cancel}>Cancel</Button>
                    <Button className={styles.button} onClick={onApplyHandler} >Apply</Button>
                </div>
                <div style={{textAlign: 'center'}}>
                    <p className={styles.resetButton} onClick={onReset} >Reset filter</p>
                </div>
            </Modal.Body>
        </Modal>
    )
}