const initialState = {
  cartItems: [
    {
      id: 131998,
      title: 'Book 1',
      count: 3, 
      total: 150
    },
    {
      id: 958409,
      title: 'Book 2',
      count: 2, 
      total: 70
    }
  ],
  orderTotal: 0  
}

export default (state = initialState, action) => {
  switch(action.type) {        
    case 'ADDED_TO_CART': 
       return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }

    case 'UPDATE_TO_CART': 
      const newCartItems = [...state.cartItems]
      const numUpdate = newCartItems.findIndex(elem => elem.id === action.payload)
      newCartItems[numUpdate].total += (newCartItems[numUpdate].total / newCartItems[numUpdate].count) * action.num        
      newCartItems[numUpdate].count += action.num

      return {
        ...state,
        cartItems: [...newCartItems]
      }
    
    case 'DELETE_CARITEMS':
      return {
        ...state,
        cartItems: action.payload
      }
    
    case 'SUM_TOTAL': 
      return {
        ...state,
        orderTotal: action.payload
      }

    default: 
      return state
  }
}
