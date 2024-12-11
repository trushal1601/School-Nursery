import {createStore,applyMiddleware} from 'redux'
import {mainReducer} from './Recuder'
import rootReducer from './RootReducer'
 
export const store = createStore(rootReducer)