export const getLanguage = () => {
    try {
        return localStorage.getItem("lang")
    } catch (error) {
        console.log(error)
        return 'uz';
    }
}

export const setLanguage = language => {
    try {
        localStorage.setItem("lang", language)
    } catch (error) {
        console.log(error)
    }
}