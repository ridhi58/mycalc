const initialState = {
    isLogged: false,
}

const LoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOGIN_REDUX': return {
            ...state,
            isLogged: true
        }

        case 'LOGOUT_REDUX': return {
            ...state,
            isLogged: false
        }

        default: return state
    }
}

export default LoginReducer