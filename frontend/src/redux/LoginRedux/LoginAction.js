export const loginRedux = (user) => {
    return {
        type: 'LOGIN_REDUX',
        payload: user
    }
}

export const logoutRedux = () => {
    return {
        type: 'LOGOUT_REDUX'
    }
}