import React, { useEffect } from 'react';
import './ShopHeader.scss'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { sumTotal } from '../../store/actions';
 
const ShopHeader = () => {
  const { cartItems, orderTotal } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const numItems = cartItems.reduce((sum, elem) => sum + elem.count, 0)

  useEffect(() => {
    const total = cartItems.reduce((sum, elem) => sum + elem.total, 0)
    dispatch(sumTotal(total))   
    // eslint-disable-next-line
  }, [cartItems]);  
 

  return (
    <header className="shopHeader row">
      <Link to="/" className="logo text-dark">ReStore</Link>
      <Link to="/cart" className="cartIcon">
        <i className="cart-icon fa fa-shopping-cart" />
        { numItems } items (${ orderTotal })        
      </Link>
    </header>
  )
}

export default ShopHeader 