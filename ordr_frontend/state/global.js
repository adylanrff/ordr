import { atom } from 'recoil'

export const toggleMenuState = atom({
    key: 'toggleMenuState',
    default: false
})

export const LANDING_PAGE_REDIRECTS = {
    INTRO: "INTRO",
    HOW: "HOW",
    CONTACT: "CONTACT"
}

export const landingPageRefs = atom({
    key: 'landingPageRef', 
    default: "",
})

export const currentMenuState = atom({
    key: 'currentMenuState',
    default: '1'
})