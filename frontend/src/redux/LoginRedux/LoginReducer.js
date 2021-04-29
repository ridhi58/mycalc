const initialState = {
    isLogged: false,
    user: ""
}

const LoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOGIN_REDUX': return {
            ...state,
            isLogged: true,
            user: action.payload
        }

        case 'LOGOUT_REDUX': return {
            ...state,
            isLogged: false,
            user: ""
        }

        default: return state
    }
}

export default LoginReducer