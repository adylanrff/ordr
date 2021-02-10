export const onFilterApply = (filterData, list) => {
    var newList = [...list]
    if (filterData.course !== '') {
        newList = newList.filter(item => item.course === filterData.course)  
    }

    if (filterData.flavors.length !== 0) {
        newList = newList.filter(item => filterData.flavors.every(flavor => item.flavors.includes(flavor)))
    }

    if (filterData.dishtype !== 'all') {
        newList = newList.filter(item => item.dishType === filterData.dishtype)
    }

    if (filterData.ratings.length !== 0) {
        if (filterData.ratings.includes('recommended')) {
            newList = newList.filter(item => item.recommended === true)
        }

        if (filterData.ratings.includes('favorite')) {
            newList = newList.filter(item => item.favorite === true)
        }
    }

    return newList
}

export const onSortApply = (sortby, type, list) => {
    if (sortby === 'price') {
        if (type === 'ascending') {
            return list.slice().sort((a,b) => a.price - b.price)
        } else {
            return list.slice().sort((a,b) => b.price - a.price)
        }
    } else if (sortby === 'release') {
        if (type === 'ascending') {
            return list.slice().sort((a,b) => a.addedDate.getTime() - b.addedDate.getTime())
        } else {
            return list.slice().sort((a,b) => b.addedDate.getTime() - a.addedDate.getTime())
        }
    } else if (sortby === 'favorite') {
        if (type === 'ascending') {
            return list.slice().sort((a,b) => a.favorite - b.favorite)
        } else {
            return list.slice().sort((a,b) => b.favorite - a.favorite)
        }
    } else if (sortby === 'recommended') {
        if (type === 'ascending') {
            return list.slice().sort((a,b) => a.recommended - b.recommended)
        } else {
            return list.slice().sort((a,b) => b.recommended - a.recommended)
        }
    } else {
        if (type === 'ascending') {
            return list.slice().sort(function (a, b) {
                if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1;
                }
                if (b.title.toLowerCase() < a.title.toLowerCase()) {
                    return 1;
                }
                return 0;
            })
        } else {
            return list.slice().sort(function (a, b) {
                if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return -1;
                }
                if (b.title.toLowerCase() > a.title.toLowerCase()) {
                    return 1;
                }
                return 0;
            })
        }
    }
}