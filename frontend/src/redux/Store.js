
import { createStore } from 'redux'
import LoginReducer from './LoginRedux/LoginReducer'
import { applyMiddleware } from 'redux'
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

function saveToLocalStorage(state) {
    try {
        const myState = JSON.stringify(state)
        localStorage.setItem('state', myState)
    } catch (e) {
        console.log(e)
    }
}

function LoadFromLocalStorage() {
    try {
        const myState = localStorage.getItem('state')
        if (myState == null)
            return undefined
        else
            return JSON.parse(myState)
    }
    catch (e) {
        console.log(e)
        return undefined
    }
}

const persistedState = LoadFromLocalStorage()


const Store = createStore(LoginReducer, persistedState, applyMiddleware(logger))
Store.subscribe(() => saveToLocalStorage(Store.getState()))
export default Store