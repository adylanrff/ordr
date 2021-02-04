import { Image, Button } from 'react-bootstrap'
import styles from '../../../styles/MenuBook.module.css'
import convertIntToIdrString from '../../../utils/currency'
import classNames from 'classnames'

export default function FoodMenu({ index, food, showModal, setIndexEdit, handleEditFood, handleDeleteFood }) {
    const colImageFood = classNames('col-lg-3 col-md-4 col-sm-4 col-4', styles.foodImgContainer)
    const colFavorite = classNames('col-3 col-sm-2', styles.favoriteContainer)

    const handleImageTapping = () => {
        showModal(food)
    }

    const handleEdit = () => {
        setIndexEdit(index)
        handleEditFood(food)
    }

    const handleDelete = () => {
        setIndexEdit(index)
        handleDeleteFood(food)
    }

    return (
        <div className={styles.containerMenu}>
            <hr className={styles.line} />
            <div className='row'>
                <div onClick={handleImageTapping} className={colImageFood}>
                    <Image className={styles.image} src={food.imgSrc} />
                    <div className={styles.overlay}>
                        <p className={styles.tapNotes}>Tap image to zoom in</p>
                    </div>
                </div>
                <div className='col-lg-9 col-md-8 col-sm-8 col-8' style={{marginLeft: '-15px', marginRight:'-5px'}}>
                    <div className='row'>
                        <div className='col-9 col-sm-10'>
                            <p className={styles.titleFood}>{food.title}</p>
                        </div>
                        <div className={colFavorite}>
                            {food.favorite === true ?
                                <Image className={styles.favorite} src='/heart.png'/>
                            : ''}
                        </div>
                    </div>
                    <p className={styles.descFood}>{food.description}</p>
                    <p className={styles.priceFood}>{convertIntToIdrString(food.price)}</p>
                </div>
            </div>
            <div className={'row '+styles.rowButton}>
                <div className='col-6'>
                    <div className={styles.buttonDeleteContainer+' '+styles.mobile}>
                        <Button className={styles.buttonDelete} onClick={handleDelete} >Delete</Button>
                    </div>
                </div>
                <div className='col-6' style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <div className={styles.buttonDeleteContainer+' '+styles.desktop}>
                        <Button className={styles.buttonDelete} onClick={handleDelete} >Delete</Button>
                    </div>
                    <div className={styles.buttonEditContainer}>
                        <Button className={styles.buttonEdit} onClick={handleEdit} >Edit</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}