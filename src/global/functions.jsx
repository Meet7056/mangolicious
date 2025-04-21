const checkLoggedIn = () => {
    return localStorage.getItem("token") ? true : false
}