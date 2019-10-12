import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ShoppingCartTable.scss'
import { deleteCarItems, bookUpdateToCart } from '../../store/actions'

const ShoppingCartTable = () => {
  const { cartItems: items, orderTotal: total } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const onIncrease = (id) => {
    dispatch(bookUpdateToCart(id, 1))
  }

  const onDecrease = (id) => {
    const ind = items.findIndex(elem => elem.id === id)

    if(items[ind].count - 1 === 0) {
      onDelete(id)
      return
    }
    dispatch(bookUpdateToCart(id, -1))
  }

  const onDelete = (id) => {
    const newCarItems = items.filter(elem => elem.id !== id)
    dispatch(deleteCarItems(newCarItems))
  }

  return (
    <div className="shoopingCartTable">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            items.map((item, index) => {
              const { id, title, count, total } = item
              return (
                <tr key={ id + Math.random() }>
                  <td>{ index + 1 }</td>
                  <td>{ title }</td>
                  <td>{ count }</td>
                  <td>${ total }</td>
                  <td>                    
                    <button className="btn btn-outline-success" onClick={() => onIncrease(id)}>
                      <i className="fa fa-plus-circle"></i>
                    </button>
                    
                    <button className="btn btn-outline-warning" onClick={() => onDecrease(id)}>
                      <i className="fa fa-minus-circle"></i>
                    </button>

                    <button className="btn btn-outline-danger" onClick={() => onDelete(id)}>
                      <i className="fa fa-trash-o"></i>
                    </button>
                  </td>
                </tr>
              )
            })
          }          
        </tbody>
      </table>

      <div className="total">
        Total: ${ total }
      </div>
    </div>
  )
}

export default ShoppingCartTable