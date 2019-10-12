const initialState = {  
  books: [],
  loading: true,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOADING_TRUE': 
      return {
        ...state,
        loading: true,
        books: [],
        error: null
      }

    case 'BOOKS_LOADED':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      }
    
    case 'BOOKS_ERROR': 
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      }  

    default: 
      return state
  }
} 