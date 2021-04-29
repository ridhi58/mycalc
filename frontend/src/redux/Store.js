
import { createStore } from 'redux'
import LoginReducer from './LoginRedux/LoginReducer'
import { applyMiddleware } from 'redux'
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()



const Store = createStore(LoginReducer, applyMiddleware(logger))

export default Store