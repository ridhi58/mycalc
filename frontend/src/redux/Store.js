import { createStore } from 'redux'
import LoginReducer from './LoginRedux/LoginReducer'


const Store = createStore(LoginReducer)

export default Store