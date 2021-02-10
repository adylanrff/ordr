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

export const validateCourse = (hasSubmit, course, currentView) => {
    if (!course && !hasSubmit && currentView === 'add') {
        return {
            errorStrCourse: 'empty'
        }
    } else if (!course) {
        return {
            errorStrCourse: "Please select one of the meal's course above"
        }
    } else {
        return {
            errorStrCourse: ''
        }
    }
}

export const validateFlavors = (hasSubmit, flavors, currentView) => {
    if (flavors.length === 0 && !hasSubmit && currentView === 'add') {
        return {
            errorStrFlavors: 'empty'
        }
    } else if (flavors.length === 0) {
        return {
            errorStrFlavors: "Please select one of the meal's flavor above (or more)"
        }
    } else {
        return {
            errorStrFlavors: ''
        }
    }
}

export const validateDishType = (hasSubmit, dishType, currentView) => {
    if (!dishType && !hasSubmit && currentView === 'add') {
        return {
            errorStrDishType: 'empty'
        }
    } else if (!dishType) {
        return {
            errorStrDishType: "Please select one of type of the dish above"
        }
    } else {
        return {
            errorStrDishType: ''
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