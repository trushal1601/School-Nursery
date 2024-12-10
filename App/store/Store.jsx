import {createStore} from 'redux'
import {mainReducer} from './Recuder'
 
export const store = createStore(mainReducer)