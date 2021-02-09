import styles from '../../../styles/MenuBook.module.css'
import { Button, Image, InputGroup, Form } from 'react-bootstrap'
import FoodMenu from './FoodMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter, faSort, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function MenuCard({ role, isFiltered, isSorted, search, layout, numberFood, foods, handleModal, handleAdd, setIndexEdit, handleEdit, handleDelete }) {

    const renderFoodMenu = (foods) => {
        return (
            foods.map((food, index) => (
                <div key={index}>
                    <FoodMenu role={role} index={index} food={food} showModal={handleModal} handleEditFood={handleEdit} handleDeleteFood={handleDelete} setIndexEdit={setIndexEdit} />
                </div>
            ))
        )
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>{layout.title}</p>
            <p className={styles.description}>{layout.description}</p>
            {foods.length === 0 && numberFood === 0 && role === 'admin' ?
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
            : foods.length === 0 && numberFood === 0 && role === 'customer' ?
            <div>
                <div className={styles.containerNoFood}>
                    <Image src='no_food.png' className={styles.imageNoFood} />
                    <p className={styles.titleNoFood}>No food in this restaurant</p>
                    <p className={styles.descNoFood} style={{marginBottom: '40px'}}>Please contact your restaurant for more information</p>
                </div>
            </div>
            :
            <div className='row align-item-center' style={{marginTop: '30px', marginBottom: '20px'}}>
                <div className={role === 'admin' ? 'col-md-6 col-12' : 'col-lg-8 col-md-6 col-12'} style={{display: 'flex', alignItems: 'center'}}>
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
                <div className={role === 'admin' ? 'col-md-2 col-4 '+styles.colButtons+' '+styles.cornerLeft : 'col-lg-2 col-md-3 col-6 '+styles.colButtons+' '+styles.cornerLeft}>
                    <Button onClick={layout.onFilter} className={isFiltered === false ? styles.buttonFilter : styles.buttonFilter+' '+styles.filtered}>
                        <FontAwesomeIcon icon={faFilter} className={styles.icons}/>
                        Filter
                    </Button>
                </div>
                <div className={role === 'admin' ? 'col-md-2 col-4 '+styles.colButtons : 'col-lg-2 col-md-3 col-6 '+styles.colButtons}>
                    <Button onClick={layout.onSort} className={isSorted === false ? styles.buttonFilter : styles.buttonFilter+' '+styles.filtered}>
                        <FontAwesomeIcon icon={faSort} className={styles.icons}/>
                        Sort
                    </Button>
                </div>
                {role === 'admin' ? <div className={'col-md-2 col-4 '+styles.colButtons+' '+styles.cornerRight}>
                    <Button onClick={handleAdd} className={styles.buttonAdd}>
                        <FontAwesomeIcon icon={faPlus} className={styles.icons}/>
                        Add
                    </Button>
                </div> : ''}
            </div>
            }
            {foods.length === 0 && numberFood !== 0 ?
                <div>
                    <div className={styles.containerNoFood}>
                        <Image src='no_food_filter.png' className={styles.imageNoFood} />
                        <p className={styles.titleNoFood}>No result found</p>
                        <p className={styles.descNoFood} style={{marginBottom: '40px'}}>Try to enter another keyword or filter</p>
                    </div>
                </div>
            : foods.length === 0 && numberFood === 0 ?
            ''
            :
                <div>
                    <div className={styles.rowIcons}>
                        <div className={styles.heartIconInfo}>
                            <Image src='/heart.png' className={styles.icon} />
                            <span className={styles.iconText}> &nbsp;: customer's favorite</span>
                        </div>
                        <div>
                            <Image src='/recommended.png' className={styles.icon} />
                            <span className={styles.iconText}> &nbsp;: chef's recommendation</span>
                        </div>
                    </div>
                    {renderFoodMenu(foods)}
                </div>
            }
        </div>
    )
}