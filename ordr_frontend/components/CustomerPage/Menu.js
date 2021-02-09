import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { foodListState } from '../../state/foods'
import MenuCard from '../Home/MenuBook/MenuCard'
import ConfirmModal from '../ConfirmModal'
import Filter from '../Home/MenuBook/Filter'
import Sort from '../Home/MenuBook/Sort'
import { onSortApply, onFilterApply } from '../../utils/food'
import styles from '../../styles/MenuPage.module.css'

export default function Menu({ restaurant }) {

    const [showFoodModal, setShowFoodModal] = useState(false)
    const [showSortModal, setShowSortModal] = useState(false)
    const [showFilterModal, setShowFilterModal] = useState(false)
    
    const [foodList, setFoodList] = useRecoilState(foodListState)
    /* for view like filter, search, and sort */
    const [tempList, setTempList] = useState([...foodList])

    const [layoutModal, setLayoutModal] = useState({
        title: '',
        detail: '',
        cancel: '',
        submit: '',
        image: '',
    })

    /* Sort and filter */
    const [sortData, setSortData] = useState({
        by: '',
        type: 'ascending'
    })

    const [filterData, setFilterData] = useState({
        course: '',
        flavors: [],
        dishtype: 'all',
        ratings: []
    })

    const [searchKey, setSearchKey] = useState('')

    const layoutFoodImageModal = {
        title: layoutModal.title,
        detail: layoutModal.detail,
        cancel: layoutModal.cancel,
        submit: layoutModal.submit,
        image: layoutModal.image,
        showModal: showFoodModal,
        handleConfirm: () => setShowFoodModal(false)
    }

    const onSortHandler = (sortby, sorttype) => {
        setSortData({
            by: sortby,
            type: sorttype
        })
        setShowSortModal(false)
    }

    const onFilterHandler = (course, flavour, dishType, rating) => {
        setFilterData({
            course: course,
            flavors: flavour,
            dishtype: dishType,
            ratings: rating
        })
        setShowFilterModal(false)
    }

    const onSearch = (e) => {
        setSearchKey(e.target.value)

        var newListFiltered = onFilterApply(filterData, foodList.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())))
        setTempList(onSortApply(sortData.by, sortData.type, newListFiltered))
    }

    const handleImageTapping = ( food ) => {
        setShowFoodModal(true)
        setLayoutModal({
            ...layoutModal,
            title: food.title,
            detail: food.description,
            image: food.imgSrc,
            submit: 'Close',
        })
    }

    const layoutMenu = {
        title: restaurant.name,
        description: restaurant.description,
        onFilter: () => setShowFilterModal(true),
        onSort: () => setShowSortModal(true)
    }

    const search = {
        value: searchKey,
        onChange: onSearch
    }

    useEffect(() => {
        var newListFiltered = onFilterApply(filterData, foodList)
        var newListSorted = onSortApply(sortData.by, sortData.type, newListFiltered)
        setTempList(newListSorted)
    }, [filterData, sortData])

    return (
        <div className={styles.container}>
            <div className='row'>
                <div className='col-sm-2'></div>
                <div className='col-sm-8 col-12'>
                    <MenuCard role='customer' search={search} layout={layoutMenu} numberFood={foodList.length} foods={tempList} handleModal={handleImageTapping} />
                </div>
                <div className='col-sm-2'></div>
            </div>
            <ConfirmModal type={'Food'} layoutData={layoutFoodImageModal} />
            <Filter data={filterData} show={showFilterModal} onClose={() => setShowFilterModal(false)} onApply={onFilterHandler} />
            <Sort data={sortData} setData={setSortData} show={showSortModal} onClose={() => setShowSortModal(false)} onApply={onSortHandler} />
        </div>
    )
}