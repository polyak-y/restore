import {combineReducers} from 'redux'
import bookListReducer from './bookListReducer'
import shoppingCartReducer from './shoppingCartReducer'

export default combineReducers({
  book: bookListReducer,
  cart: shoppingCartReducer 
})

