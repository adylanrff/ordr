export const validateImage = (hasSubmit, imgSrc, currentView) => {
    if (!imgSrc && !hasSubmit && currentView === 'add') {
        return {
            errorStrImage: 'empty'
        }
    } else if (!imgSrc) {
        return {
            errorStrImage: 'Please upload a picture of your food'
        }
    } else {
        return {
            errorStrImage: ''
        }
    }
}

export const validateTitle = (hasSubmit, title, currentView) => {
    if (!title && !hasSubmit && currentView === 'add') {
        return {
            errorStrTitle: 'empty'
        }
    } else if (!title) {
        return {
            errorStrTitle: "Please enter your food's name"
        }
    } else {
        return {
            errorStrTitle: ''
        }
    }
}

export const validateDescription = (hasSubmit, description, currentView) => {
    if (!description && !hasSubmit && currentView === 'add') {
        return {
            errorStrDesc: 'empty'
        }
    } else if (!description) {
        return {
            errorStrDesc: "Please enter your food's description"
        }
    } else {
        return {
            errorStrDesc: ''
        } 
    }
}

export const validatePrice = (hasSubmit, price, currentView) => {
    if (!price && !hasSubmit && currentView === 'add') {
        return {
            errorStrPrice: 'empty'
        }
    } else if (!price) {
        return {
            errorStrPrice: "Please enter your food's price"
        }
    } else {
        return {
            errorStrPrice: ''
        }
    }
}