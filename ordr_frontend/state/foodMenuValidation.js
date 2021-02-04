export const validateImage = (hasSubmit, imgSrc) => {
    if (!imgSrc && hasSubmit) {
        return {
            errorStrImage: 'Please upload a picture of your food'
        }
    } else if (!imgSrc && !hasSubmit) {
        return {
            errorStrImage: 'empty'
        }
    } else {
        return {
            errorStrImage: ''
        }
    }
}

export const validateTitle = (hasSubmit, title) => {
    if (!title && hasSubmit) {
        return {
            errorStrTitle: "Please enter your food's name"
        }
    } else if (!title && !hasSubmit) {
        return {
            errorStrTitle: 'empty'
        }
    } else {
        return {
            errorStrTitle: ''
        }
    }
}

export const validateDescription = (hasSubmit, description) => {
    if (!description && hasSubmit) {
        return {
            errorStrDesc: "Please enter your food's description"
        }
    } else if (!description && !hasSubmit) {
        return {
            errorStrDesc: 'empty'
        }
    } else {
        return {
            errorStrDesc: ''
        } 
    }
}

export const validatePrice = (hasSubmit, price) => {
    if (!price && hasSubmit) {
        return {
            errorStrPrice: "Please enter your food's price"
        }
    } else if (!price && !hasSubmit) {
        return {
            errorStrPrice: 'empty'
        }
    } else {
        return {
            errorStrPrice: ''
        }
    }
}