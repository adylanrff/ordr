import { atom, selector } from 'recoil'

export const foodListState = atom({
    key: 'foodListState',
    default: [{
        imgSrc: '/Food/pancake.png',
        title: 'Pancake',
        description: 'Pancake with strawberry syrup and blueberry crumbles',
        price: 45000,
        favorite: true
    }, {
        imgSrc: '/Food/caesar_salad.png',
        title: 'Caesar Salad',
        description: 'Fresh vegetable salad with delicious eggs',
        price: 50000,
        favorite: true 
    }, {
        imgSrc: '/Food/sirloin_steak.png',
        title: 'Sirloin Steak',
        description: "Australian's sirloin meat seared with our special seasoning and served with sauted vegetables",
        price: 75000,
        favorite: false 
    }, {
        imgSrc: '/Food/beef_taco.png',
        title: 'Beef Taco',
        description: 'Tortilla filled with vegetables and minced meat',
        price: 35000,
        favorite: false 
    }, {
        imgSrc: '/Food/nasi_lemak.png',
        title: 'Nasi Lemak',
        description: 'Fragrant rice cooked in coconut milk and pandan leaf, complemented with side dishes',
        price: 40000,
        favorite: false 
    }]
})