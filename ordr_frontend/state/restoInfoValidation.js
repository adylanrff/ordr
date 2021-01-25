export const validateRestoName = (restoName) => {
    if (!restoName) {
        return {
            errorStrRestoName: 'empty'
        }
    } else {
        return {
            errorStrRestoName: ''
        }
    }
}

export const validateRestoAddress = (restoAddress) => {
    if (!restoAddress) {
        return {
            errorStrRestoAddress: 'empty'
        }
    } else {
        return {
            errorStrRestoAddress: ''
        }
    }
}

export const validateRestoPhoneNumber = (phoneNumber, countryCode) => {
    if (!phoneNumber || phoneNumber === countryCode) {
        return {
            errorStrRestoPhoneNumber: ''
        }
    } else {
        if (countryCode === '62') {
            const MINIMUM_NUMBER_LENGTH = 11
            const MAX_NUMBER_LENGTH = 14
            var phoneLength = phoneNumber.length
            if ((phoneLength >= MINIMUM_NUMBER_LENGTH) && (phoneLength <= MAX_NUMBER_LENGTH)) {
                return {
                    errorStrRestoPhoneNumber: ''
                }  
            } else {
                return {
                    errorStrRestoPhoneNumber: 'A valid Indonesian phone number must be between 11 and 14 characters long'
                }                
            }
        } else {
            return {
                errorStrRestoPhoneNumber: ''
            }
        }
    }
}