import { atom, selector } from 'recoil'

export const restaurantState = atom({
    key: 'restaurantState',
    default: {
        name: "My Restaurant",
        phoneNumber: '',
        address: 'Jl. Jalan Yuk 123',
        description: 'Restoran enak mantap asik yahud'
    }
})

export const restoNameState = selector({
    key: 'restoNameState',
    get: ({get}) => {
        const resto = get(restaurantState)
        return resto.name
    }
})

export const restoPhoneNumberState = selector({
    key: 'restoPhoneNumberState',
    get: ({get}) => {
        const resto = get(restaurantState)
        return resto.phoneNumber
    }
})

export const restoAddressState = selector({
    key: 'restoAddressState',
    get: ({get}) => {
        const resto = get(restaurantState)
        return resto.address
    }
})

export const restoDescriptionState = selector({
    key: 'restoDescriptionState',
    get: ({get}) => {
        const resto = get(restaurantState)
        return resto.description
    }
})