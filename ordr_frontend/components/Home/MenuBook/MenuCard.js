import styles from '../../../styles/MenuBook.module.css'
import { Button, Image, InputGroup, Form } from 'react-bootstrap'
import FoodMenu from './FoodMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter, faSort, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function MenuCard({ search, layout, foods, handleModal, handleAdd, setIndexEdit, handleEdit, handleDelete }) {

    const renderFoodMenu = (foods) => {
        return (
            foods.map((food, index) => (
                <div key={index}>
                    <FoodMenu index={index} food={food} showModal={handleModal} handleEditFood={handleEdit} handleDeleteFood={handleDelete} setIndexEdit={setIndexEdit} />
                </div>
            ))
        )
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>{layout.title}</p>
            <p className={styles.description}>{layout.description}</p>
            {foods.length === 0 && search.value === '' ?
            <div>
                <div className={styles.containerNoFood}>
                    <Image src='no_food.png' className={styles.imageNoFood} />
                    <p className={styles.titleNoFood}>Start creating your menu</p>
                    <p className={styles.descNoFood}>You have not added any menu yet</p>
                </div>
                <div className={styles.buttonContainer}>
                    <Button onClick={handleAdd} className={styles.button}>{layout.addMenuButton}</Button>
                </div>
            </div>
            :
            <div className='row align-item-center' style={{marginTop: '40px', marginBottom: '33px'}}>
                <div className='col-md-6 col-12' style={{display: 'flex', alignItems: 'center'}}>
                    <InputGroup className={styles.search}>
                        <InputGroup.Prepend>
                            <InputGroup.Text className={styles.info}>
                                <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}/>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            className={styles.searchInput}
                            value={search.value}
                            onChange={search.onChange}
                            placeholder='Search'
                        />
                    </InputGroup>
                </div>
                <div className={'col-md-2 col-4 '+styles.colButtons+' '+styles.cornerLeft}>
                    <Button className={styles.buttonFilter}>
                        <FontAwesomeIcon icon={faFilter} className={styles.icons}/>
                        Filter
                    </Button>
                </div>
                <div className={'col-md-2 col-4 '+styles.colButtons}>
                    <Button className={styles.buttonFilter}>
                        <FontAwesomeIcon icon={faSort} className={styles.icons}/>
                        Sort
                    </Button>
                </div>
                <div className={'col-md-2 col-4 '+styles.colButtons+' '+styles.cornerRight}>
                    <Button onClick={handleAdd} className={styles.buttonAdd}>
                        <FontAwesomeIcon icon={faPlus} className={styles.icons}/>
                        Add
                    </Button>
                </div>
            </div>
            }
            {foods.length === 0 && search.value !== '' ?
                <div>
                    <div className={styles.containerNoFood}>
                        <Image src='no_food_filter.png' className={styles.imageNoFood} />
                        <p className={styles.titleNoFood}>No result found</p>
                        <p className={styles.descNoFood} style={{marginBottom: '40px'}}>Try to enter another food</p>
                    </div>
                </div>
            :
                renderFoodMenu(foods)
            }
        </div>
    )
}