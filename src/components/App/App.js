import React from 'react';
import './App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry'
import BookStoreServiceState from '../../context/BookStoreServiceState'
import HomePage from '../pages/HomePage/HomePage'
import CartPage from '../pages/CartPage/CartPage'
import ShopHeader from '../ShopHeader/ShopHeader'


const App = () => {
  return (
    <BookStoreServiceState>
      <ErrorBoundry>
        <BrowserRouter>
          <main role="main" className="container">
            <ShopHeader />
            <Switch>
              <Route path="/" exact component={ HomePage } />
              <Route path="/cart" component={ CartPage } />
            </Switch>
          </main>
        </BrowserRouter>
      </ErrorBoundry>
    </BookStoreServiceState>
  )
}

export default App