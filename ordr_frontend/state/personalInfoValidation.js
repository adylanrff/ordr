export const validateFullName = (fullName) => {
    if (!fullName) {
        return {
            errorStrFullName: 'empty'
        }
    } else {
        return {
            errorStrFullName: ''
        }
    }
}

export const validatePhoneNumber = (phoneNumber, countryCode) => {
    if (!phoneNumber || phoneNumber === countryCode) {
        return {
            errorStrPhoneNumber: 'empty'
        }
    } else {
        if (countryCode === '62') {
            const MINIMUM_NUMBER_LENGTH = 11
            const MAX_NUMBER_LENGTH = 14
            var phoneLength = phoneNumber.length
            if ((phoneLength >= MINIMUM_NUMBER_LENGTH) && (phoneLength <= MAX_NUMBER_LENGTH)) {
                return {
                    errorStrPhoneNumber: ''
                }  
            } else {
                return {
                    errorStrPhoneNumber: 'A valid Indonesian phone number must be between 11 and 14 characters long'
                }                
            }
        } else {
            return {
                errorStrPhoneNumber: ''
            }
        }
    }
}

export const validateOldPassword = (oldPassword, password) => {
    if (!oldPassword) {
        return {
            errorStrOldPassword: 'empty'
        }
    } else {
        if (oldPassword !== password) {
            return {
                errorStrOldPassword: "Your password is incorrect"
            }
        } else {
            return {
                errorStrOldPassword: ''
            } 
        }
    }
}

export const validateNewPassword = (newPassword) => {
    if (!newPassword) {
        return {
            errorStrNewPassword: 'empty'
        }
    } else {
        const MINIMUM_NUMBER_LENGTH = 8
        var passLength = newPassword.length
        if (passLength < MINIMUM_NUMBER_LENGTH) {
            return {
                errorStrNewPassword: 'A password must be at least 8 characters long'
            }
        } else {
            return {
                errorStrNewPassword: ''
            }
        }
    }
}

export const validateConfirmPassword = (newPassword, confirmPassword) => {
    if (!confirmPassword) {
        return {
            errorStrConfirmPassword: 'empty'
        }
    } else {
        if (confirmPassword !== newPassword) {
            return {
                errorStrConfirmPassword: "Password's confirmation doesn't match the password"
            }
        } else {
            return {
                errorStrConfirmPassword: ''
            } 
        }
    }
}