import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App/App'
import reducer from './store/reducers/index'

const logMiddleware = ({ getState }) =>  (next) => (action) => { //модифицирует то как работает диспасть это смысл middleware, next - ссылка на следующий middleware
  console.log("acton.type",action.type)
  console.log('state', getState())
  return next(action)
}

const stringMidlleware = () => (dispatch) => (action) => {//модифицирует то как работает диспасть это смысл middleware
  if(typeof action === 'string') {
    return dispatch ({
      type: action
    })
  }
  return dispatch(action)
}

const store = createStore(reducer, applyMiddleware(stringMidlleware, logMiddleware)) //applyMiddleware - функция чтобы мы могли использовать middleware, сначала отрабатываем logMiddleware, а потом dtringMiddleware. Очередь имеет значение

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render (
  app, 
  document.getElementById('root')
)