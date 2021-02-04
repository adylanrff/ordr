import Banner from '../Banner'
import MenuCard from './MenuCard'
import ConfirmModal from '../../ConfirmModal'
import { useRecoilState } from 'recoil'
import { foodListState } from '../../../state/foods'
import { useEffect, useState } from 'react'
import AddEditMenuCard from './AddEditMenuCard'
import { validateImage, validateTitle, validateDescription, validatePrice } from '../../../state/foodMenuValidation'
import { replaceItemAtIndex, removeItemAtIndex } from '../../../utils/changeItem'
import { restaurantState } from '../../../state/restaurant'

export default function MenuBook() {

    const [restaurant, setRestaurant] = useRecoilState(restaurantState)

    const [foodList, setFoodList] = useRecoilState(foodListState)
    const [tempList, setTempList] = useState([...foodList])
    const [food, setFood] = useState({
        imgSrc: '',
        title: '',
        description: '',
        price: '',
        favorite: false
    })

    const [index, setIndex] = useState('')

    const [currentView, setCurrentView] = useState('view')

    const [showFoodModal, setShowFoodModal] = useState(false)

    const [valid, setValid] = useState(false)
    const [hasSubmit, setHasSubmit] = useState(false)
    const [disabledSubmit, setDisabledSubmit] = useState(true)

    const [searchKey, setSearchKey] = useState('')

    const [errorMessageFood, setErrorMessageFood] = useState({
        imgSrc: '',
        title: '',
        description: '',
        price: '',
        favorite: ''
    })

    const [errorMessageImage, setErrorMessageImage] = useState('')
    const [errorMessageTitle, setErrorMessageTitle] = useState('')
    const [errorMessageDescription, setErrorMessageDescription] = useState('')
    const [errorMessagePrice, setErrorMessagePrice] = useState('')

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
            favorite: false
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
            favorite: food_item.favorite
        })
        setCurrentView('edit')
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
        setFoodList((foodList) => [
            ...foodList,
            {
                imgSrc: food.imgSrc,
                title: food.title,
                description: food.description,
                price: food.price,
                favorite: food.favorite
            },
        ].sort((a,b) => b.favorite - a.favorite));

        setTempList((tempList) => [
            ...tempList,
            {
                imgSrc: food.imgSrc,
                title: food.title,
                description: food.description,
                price: food.price,
                favorite: food.favorite
            },
        ].sort((a,b) => b.favorite - a.favorite));

        setFood({
            imgSrc: '',
            title: '',
            description: '',
            price: '',
            favorite: false
        })

        setCurrentView('view')
        window.scrollTo(0,0)

        setShowFoodModal(false)
        setHasSubmit(false)
        setDisabledSubmit(false)
        setValid(false)
    }

    const handleSubmitEditFood = (e) => {
        const newFood = replaceItemAtIndex(foodList, index, {
            imgSrc: food.imgSrc,
            title: food.title,
            description: food.description,
            price: food.price,
            favorite: food.favorite
        });

        newFood.sort((a,b) => b.favorite - a.favorite)

        setFoodList(newFood)
        setTempList(newFood)

        setFood({
            imgSrc: '',
            title: '',
            description: '',
            price: '',
            favorite: false
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
        const newFood = removeItemAtIndex(foodList, index)

        setFoodList(newFood)
        setTempList(newFood)
        setShowFoodModal(false)
    }

    const handleCancelConfirmModal = () => {
        setShowFoodModal(false)
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
        addMenuButton: 'Add menu'
    }

    const onSearch = (e) => {
        setSearchKey(e.target.value)

        setFoodList(tempList.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    const search = {
        value: searchKey,
        onChange: onSearch
    }

    useEffect(() => {
        var { errorStrImage } = validateImage(hasSubmit, food.imgSrc)
        var { errorStrTitle } = validateTitle(hasSubmit, food.title)
        var { errorStrDesc } = validateDescription(hasSubmit, food.description)
        var { errorStrPrice } = validatePrice(hasSubmit, food.price)

        if ((errorStrPrice === '') && (errorStrTitle === '') && (errorStrImage === '') && (errorStrDesc === '')) {
            setDisabledSubmit(false)
            setValid(true)
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

    }, [hasSubmit, food, errorMessageTitle, errorMessageDescription, errorMessageImage, errorMessagePrice])

    return (
        <div>
            <Banner />
            <ConfirmModal type={(currentView === 'view' && modalType === 'food')  ? 'Food' : 'Confirmation'} layoutData={(currentView === 'view' && modalType === 'food') ? layoutFoodImageModal : (currentView === 'view' && modalType === 'delete') ? layoutDeleteFoodModal : currentView === 'add' ? layoutConfirmAddMenu : currentView === 'edit' ? layoutConfirmEditMenu : ''} />
            {currentView === 'view' ?
                <MenuCard search={search} layout={layoutMenu} foods={foodList} handleModal={handleImageTapping} setView={setCurrentView} handleEdit={handleOnEditFood} handleDelete={handleOnDeleteFood} setIndexEdit={setIndex} />
            : currentView === 'add' ?
                <AddEditMenuCard layout={layoutAddMenu} image={food.imgSrc} foodForm={fillForm} submitHandler={onSubmitHandler} cancelHandler={handleCancelAddEdit} foodData={foodData} disableSubmit={disabledSubmit} errorMessagePicture={errorMessageImage} />
            : currentView === 'edit' ?
                <AddEditMenuCard layout={layoutEditMenu} image={food.imgSrc} foodForm={fillForm} submitHandler={onSubmitHandler} cancelHandler={handleCancelAddEdit} foodData={foodData} disableSubmit={disabledSubmit} errorMessagePicture={errorMessageImage} />
            : ''}
        </div>
    )
}