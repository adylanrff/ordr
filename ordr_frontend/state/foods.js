import { atom, selector } from 'recoil'

export const foodListState = atom({
    key: 'foodListState',
    default: [{
        imgSrc: '/Food/pancake.png',
        title: 'Pancake',
        description: 'Pancake with strawberry syrup and blueberry crumbles',
        price: 45000,
        favorite: true,
        recommended: true,
        addedDate: new Date('2021-01-07T00:00:00'),
        course: 'main',
        flavors: ['sweet'],
        dishType: 'bakery'
    }, {
        imgSrc: '/Food/caesar_salad.png',
        title: 'Caesar Salad',
        description: 'Fresh vegetable salad with delicious eggs',
        price: 50000,
        favorite: true,
        recommended: true,
        addedDate: new Date('2020-08-08T00:00:00'),
        course: 'main',
        flavors: ['savory', 'sour'],
        dishType: 'vegan'
    }, {
        imgSrc: '/Food/sirloin_steak.png',
        title: 'Sirloin Steak',
        description: "Australian's sirloin meat seared with our special seasoning and served with sauted vegetables",
        price: 75000,
        favorite: false,
        recommended: true,
        addedDate: new Date('2020-01-19T00:00:00'),
        course: 'main',
        flavors: ['savory'],
        dishType: 'grilled'
    }, {
        imgSrc: '/Food/beef_taco.png',
        title: 'Beef Taco',
        description: 'Tortilla filled with vegetables and minced meat',
        price: 35000,
        favorite: true,
        recommended: false,
        addedDate: new Date('2021-01-31T00:00:00'),
        course: 'appetizer',
        flavors: ['savory'],
        dishType: 'snacks'
    }, {
        imgSrc: '/Food/nasi_lemak.png',
        title: 'Nasi Lemak',
        description: 'Fragrant rice cooked in coconut milk and pandan leaf, complemented with side dishes',
        price: 40000,
        favorite: false,
        recommended: false,
        addedDate: new Date('2021-01-15T00:00:00'),
        course: 'main',
        flavors: ['savory'],
        dishType: 'rice'
    }]
})