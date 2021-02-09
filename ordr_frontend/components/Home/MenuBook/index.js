import Banner from '../Banner'
import MenuCard from './MenuCard'
import ConfirmModal from '../../ConfirmModal'
import Filter from './Filter'
import Sort from './Sort'
import { useRecoilState } from 'recoil'
import { foodListState } from '../../../state/foods'
import { useEffect, useState } from 'react'
import AddEditMenuCard from './AddEditMenuCard'
import { validateImage, validateCourse, validateFlavors, validateTitle, validateDescription, validatePrice, validateDishType } from '../../../state/foodMenuValidation'
import { replaceItemAtIndex, removeItemAtIndex } from '../../../utils/changeItem'
import { restaurantState } from '../../../state/restaurant'
import { onSortApply, onFilterApply } from '../../../utils/food'

export default function MenuBook() {

    const [restaurant, setRestaurant] = useRecoilState(restaurantState)

    const [foodList, setFoodList] = useRecoilState(foodListState)
    /* for view like filter, search, and sort */
    const [tempList, setTempList] = useState([...foodList])
    const [food, setFood] = useState({
        imgSrc: '',
        title: '',
        description: '',
        price: '',
        favorite: false,
        recommended: false,
        addedDate: new Date(),
        course: '',
        flavors: [],
        dishType: ''
    })

    const [index, setIndex] = useState('')

    const [currentView, setCurrentView] = useState('view')

    const [showFoodModal, setShowFoodModal] = useState(false)
    const [showSortModal, setShowSortModal] = useState(false)
    const [showFilterModal, setShowFilterModal] = useState(false)

    const [valid, setValid] = useState(false)
    const [hasSubmit, setHasSubmit] = useState(false)
    const [disabledSubmit, setDisabledSubmit] = useState(true)

    const [searchKey, setSearchKey] = useState('')

    const [errorMessageImage, setErrorMessageImage] = useState('')
    const [errorMessageTitle, setErrorMessageTitle] = useState('')
    const [errorMessageDescription, setErrorMessageDescription] = useState('')
    const [errorMessagePrice, setErrorMessagePrice] = useState('')
    const [errorMessageCourse, setErrorMessageCourse] = useState('')
    const [errorMessageFlavours, setErrorMessageFlavours] = useState('')
    const [errorMessageDishType, setErrorMessageDishType] = useState('')

    const [isFiltered, setIsFiltered] = useState(false)
    const [isSorted, setIsSorted] = useState(false)

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

    const [layoutModal, setLayoutModal] = useState({
        title: '',
        detail: '',
        cancel: '',
        submit: '',
        image: '',
    })

    const [modalType, setModalType] = useState('food')

    const layoutFoodImageModal = {
        title: layoutModal.title,
        detail: layoutModal.detail,
        cancel: layoutModal.cancel,
        submit: layoutModal.submit,
        image: layoutModal.image,
        showModal: showFoodModal,
        handleConfirm: () => setShowFoodModal(false)
    }

    const foodData = {
        data: food,
        set: setFood
    }

    const setPrice = (values) => {
        var {formattedValue, value} = values;
        setFood({
            ...food,
            price: parseInt(value)
        })
    }

    const fillForm = [{
        label: "Food's name",
        data: food.title,
        setData: (e) => setFood({...food, title: e.target.value}),
        placeholder: "What's your food called?",
        type: 'string',
        control: "formBasicFoodName",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessageTitle
    }, {
        label: "Description",
        data: food.description,
        setData: (e) => setFood({...food, description: e.target.value}),
        placeholder: "What's in your food?",
        type: 'string',
        control: "formBasicFoodDesc",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessageDescription
    }, {
        label: "Price",
        data: food.price,
        setData: setPrice,
        placeholder: "Your food's price",
        type: 'number',
        control: "formBasicFoodPrice",
        disabled: false,
        information: '',
        required: true,
        errorMessage: errorMessagePrice
    }, {
        label: "Favorite",
        data: food.favorite,
        setData: (e) => setFood({...food, favorite: e.target.checked}),
        placeholder: "",
        type: 'switch',
        control: "formBasicFavorite",
        disabled: false,
        information: '',
        required: true,
        errorMessage: ''
    }, {
        label: "Chef's recommendation",
        data: food.recommended,
        setData: (e) => setFood({...food, recommended: e.target.checked}),
        placeholder: "",
        type: 'switch',
        control: "formBasicRecommended",
        disabled: false,
        information: '',
        required: true,
        errorMessage: ''
    }]

    const handleImageTapping = ( food ) => {
        setModalType('food')
        setShowFoodModal(true)
        setLayoutModal({
            ...layoutModal,
            title: food.title,
            detail: food.description,
            image: food.imgSrc,
            submit: 'Close',
        })
    }

    const handleCancelAddEdit = () => {
        setFood({
            imgSrc: '',
            title: '',
            description: '',
            price: '',
            favorite: false,
            recommended: false,
            addedDate: new Date(),
            course: '',
            flavors: [],
            dishType: ''
        })

        setCurrentView('view')
        window.scrollTo(0,0)

        setHasSubmit(false)
    }

    const handleOnEditFood = ( food_item ) => {
        setFood({
            imgSrc: food_item.imgSrc,
            title: food_item.title,
            description: food_item.description,
            price: food_item.price,
            favorite: food_item.favorite,
            recommended: food_item.recommended,
            addedDate: food_item.addedDate,
            course: food_item.course,
            flavors: food_item.flavors,
            dishType: food_item.dishType
        })
        setCurrentView('edit')
        window.scrollTo(0,0)
    }

    const handleOnAddFood = () => {
        setFood({
            imgSrc: '',
            title: '',
            description: '',
            price: '',
            favorite: false,
            recommended: false,
            addedDate: new Date(),
            course: '',
            flavors: [],
            dishType: ''
        })
        setCurrentView('add')
        window.scrollTo(0,0)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        setHasSubmit(true)
        if (valid) {
            setShowFoodModal(true)
        }
    }

    const handleSubmitAddFood = () => {
        /* put post to backend here */
        setFoodList((foodList) => [
            ...foodList,
            {
                imgSrc: food.imgSrc,
                title: food.title,
                description: food.description,
                price: food.price,
                favorite: food.favorite,
                recommended: food.recommended,
                addedDate: new Date(),
                course: food.course,
                flavors: food.flavors,
                dishType: food.dishType
            },
        ])

        var newListFiltered = onFilterApply(filterData, [...tempList, {
            imgSrc: food.imgSrc,
            title: food.title,
            description: food.description,
            price: food.price,
            favorite: food.favorite,
            recommended: food.recommended,
            addedDate: new Date(),
            course: food.course,
            flavors: food.flavors,
            dishType: food.dishType
        }])
        var newListTemp = onSortApply(sortData.by, sortData.type, newListFiltered)

        setTempList(newListTemp)

        setFood({
            imgSrc: '',
            title: '',
            description: '',
            price: '',
            favorite: false,
            recommended: false,
            addedDate: new Date(),
            course: '',
            flavors: [],
            dishType: ''
        })

        setCurrentView('view')
        window.scrollTo(0,0)

        setShowFoodModal(false)
        setHasSubmit(false)
        setDisabledSubmit(false)
        setValid(false)
    }

    const handleSubmitEditFood = (e) => {
        /* put post to backend here */
        const newFood = replaceItemAtIndex(foodList, index, {
            imgSrc: food.imgSrc,
            title: food.title,
            description: food.description,
            price: food.price,
            favorite: food.favorite,
            recommended: food.recommended,
            addedDate: new Date(),
            course: food.course,
            flavors: food.flavors,
            dishType: food.dishType
        });

        var newFoodFiltered = onFilterApply(filterData, replaceItemAtIndex(tempList, index, {
            imgSrc: food.imgSrc,
            title: food.title,
            description: food.description,
            price: food.price,
            favorite: food.favorite,
            recommended: food.recommended,
            addedDate: new Date(),
            course: food.course,
            flavors: food.flavors,
            dishType: ''
        }))
        var newFoodTemp = onSortApply(sortData.by, sortData.type, newFoodFiltered);

        setFoodList(newFood)
        setTempList(newFoodTemp)

        setFood({
            imgSrc: '',
            title: '',
            description: '',
            price: '',
            favorite: false,
            recommended: false,
            addedDate: new Date(),
            course: '',
            flavors: [],
            dishType: ''
        })

        setCurrentView('view')
        window.scrollTo(0,0)

        setHasSubmit(false)
        setShowFoodModal(false)
        setDisabledSubmit(false)
        setValid(false)
    }

    const handleOnDeleteFood = ( food ) => {
        setModalType('delete')
        setShowFoodModal(true)
        setLayoutModal({
            ...layoutModal,
            title: food.title,
        })
    }

    const handleSubmitDeleteFood = () => {
        /* put post to backend here */
        var newFood = removeItemAtIndex(foodList, index)
        var newFoodFiltered = onFilterApply(filterData, removeItemAtIndex(tempList, index))
        var newFoodTemp = onSortApply(sortData.by, sortData.type, newFoodFiltered)

        setFoodList(newFood)
        setTempList(newFoodTemp)
        setShowFoodModal(false)
    }

    const handleCancelConfirmModal = () => {
        setShowFoodModal(false)
    }

    const onCloseSortModal = () => {
        setShowSortModal(false)
    }

    const onCloseFilterModal = () => {
        setShowFilterModal(false)
    }

    const layoutConfirmAddMenu = {
        title: 'Confirm Changes',
        detail: "Are you sure you want to add this food to your menu?",
        cancel: 'Cancel',
        submit: 'Confirm',
        image: '/approval.png',
        showModal: showFoodModal,
        handleCancel: handleCancelConfirmModal,
        handleConfirm: handleSubmitAddFood,
    }

    const layoutConfirmEditMenu = {
        title: 'Confirm Changes',
        detail: "Are you sure you want to edit this menu?",
        cancel: 'Cancel',
        submit: 'Confirm',
        image: '/approval.png',
        showModal: showFoodModal,
        handleCancel: handleCancelConfirmModal,
        handleConfirm: handleSubmitEditFood,
    }

    const layoutDeleteFoodModal = {
        title: 'Confirm Delete',
        detail: 'Are you sure you want to delete '+layoutModal.title+'?',
        cancel: 'Cancel',
        submit: 'Confirm',
        image: '/approval.png',
        showModal: showFoodModal,
        handleConfirm: handleSubmitDeleteFood,
        handleCancel: () => setShowFoodModal(false)
    }

    const layoutAddMenu = {
        title: 'Add Menu',
        description: restaurant.name,
        cancel: 'Cancel',
        submit: 'Submit'
    }

    const layoutEditMenu = {
        title: 'Edit Menu',
        description: restaurant.name,
        cancel: 'Cancel',
        submit: 'Submit'
    }

    const layoutMenu = {
        title: restaurant.name,
        description: restaurant.description,
        addMenuButton: 'Add menu',
        onFilter: () => setShowFilterModal(true),
        onSort: () => setShowSortModal(true)
    }

    const onSearch = (e) => {
        setSearchKey(e.target.value)

        var newListFiltered = onFilterApply(filterData, foodList.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())))
        setTempList(onSortApply(sortData.by, sortData.type, newListFiltered))
    }

    const search = {
        value: searchKey,
        onChange: onSearch
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

    useEffect(() => {
        var { errorStrImage } = validateImage(hasSubmit, food.imgSrc, currentView)
        var { errorStrTitle } = validateTitle(hasSubmit, food.title, currentView)
        var { errorStrDesc } = validateDescription(hasSubmit, food.description, currentView)
        var { errorStrPrice } = validatePrice(hasSubmit, food.price, currentView)
        var { errorStrCourse } = validateCourse(hasSubmit, food.course, currentView)
        var { errorStrFlavors } = validateFlavors(hasSubmit, food.flavors, currentView)
        var { errorStrDishType } = validateDishType(hasSubmit, food.dishType, currentView)

        if ((errorStrPrice === '') && (errorStrTitle === '') && (errorStrImage === '') && (errorStrDesc === '')) {
            setDisabledSubmit(false)
            setValid(true)
        } else if ((errorStrPrice !== 'empty' && errorStrPrice !== '') || (errorStrTitle !== 'empty' && errorStrTitle !== '') || (errorStrImage !== 'empty' && errorStrImage !== '') || (errorStrDesc !== 'empty' && errorStrDesc !== '')) {
            setDisabledSubmit(true)
            setValid(false)
        } else if (!hasSubmit) {
            setDisabledSubmit(false)
            setValid(false)
        } else {
            setDisabledSubmit(true)
            setValid(false)
        }

        if (errorStrImage === 'empty') {
            setErrorMessageImage('')
        } else {
            setErrorMessageImage(errorStrImage)
        }

        if (errorStrTitle === 'empty') {
            setErrorMessageTitle('')
        } else {
            setErrorMessageTitle(errorStrTitle)
        }

        if (errorStrDesc === 'empty') {
            setErrorMessageDescription('')
        } else {
            setErrorMessageDescription(errorStrDesc)
        }

        if (errorStrPrice === 'empty') {
            setErrorMessagePrice('')
        } else {
            setErrorMessagePrice(errorStrPrice)
        }

        if (errorStrCourse === 'empty') {
            setErrorMessageCourse('')
        } else {
            setErrorMessageCourse(errorStrCourse)
        }

        if (errorStrFlavors === 'empty') {
            setErrorMessageFlavours('')
        } else {
            setErrorMessageFlavours(errorStrFlavors)
        }

        if (errorStrDishType === 'empty') {
            setErrorMessageDishType('')
        } else {
            setErrorMessageDishType(errorStrDishType)
        }

    }, [hasSubmit, food, errorMessageTitle, errorMessageDescription, errorMessageImage, errorMessagePrice])

    useEffect(() => {
        var newListFiltered = onFilterApply(filterData, foodList)
        var newListSorted = onSortApply(sortData.by, sortData.type, newListFiltered)
        setTempList(newListSorted)

        if ((filterData.course === '') && (filterData.flavors.length === 0) && (filterData.dishtype == 'all') && (filterData.ratings.length === 0)) {
            setIsFiltered(false)
        } else {
            setIsFiltered(true)
        }

        if (sortData.by === '') {
            setIsSorted(false)
        } else {
            setIsSorted(true)
        }
    }, [filterData, sortData])

    const errorMessages = {
        picture: errorMessageImage,
        course: errorMessageCourse,
        flavors: errorMessageFlavours,
        dishType: errorMessageDishType
    }

    return (
        <div>
            <Banner />
            <ConfirmModal type={(currentView === 'view' && modalType === 'food')  ? 'Food' : 'Confirmation'} layoutData={(currentView === 'view' && modalType === 'food') ? layoutFoodImageModal : (currentView === 'view' && modalType === 'delete') ? layoutDeleteFoodModal : currentView === 'add' ? layoutConfirmAddMenu : currentView === 'edit' ? layoutConfirmEditMenu : ''} />
            <Filter data={filterData} show={showFilterModal} onClose={onCloseFilterModal} onApply={onFilterHandler} />
            <Sort data={sortData} show={showSortModal} onClose={onCloseSortModal} onApply={onSortHandler} />
            {currentView === 'view' ?
                <MenuCard role='admin' isFiltered={isFiltered} isSorted={isSorted} search={search} layout={layoutMenu} numberFood={foodList.length} foods={tempList} handleModal={handleImageTapping} handleAdd={handleOnAddFood} handleEdit={handleOnEditFood} handleDelete={handleOnDeleteFood} setIndexEdit={setIndex} />
            : currentView === 'add' ?
                <AddEditMenuCard layout={layoutAddMenu} image={food.imgSrc} foodForm={fillForm} submitHandler={onSubmitHandler} cancelHandler={handleCancelAddEdit} foodData={foodData} disableSubmit={disabledSubmit} errorMessage={errorMessages} />
            : currentView === 'edit' ?
                <AddEditMenuCard layout={layoutEditMenu} image={food.imgSrc} foodForm={fillForm} submitHandler={onSubmitHandler} cancelHandler={handleCancelAddEdit} foodData={foodData} disableSubmit={disabledSubmit} errorMessage={errorMessages} />
            : ''}
        </div>
    )
}