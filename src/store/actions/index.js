export const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  }
}

export const loadingTrue = () => {
  return {
    type: 'LOADING_TRUE'
  }
}

export const booksError = (error) => {
  return {
    type: 'BOOKS_ERROR',
    payload: error
  }
}

export const bookAddedToCart = (newCartValue) => {
  return {
    type: "ADDED_TO_CART",
    payload: newCartValue
  }
}

export const bookUpdateToCart = (bookId, num) => {
  return {
    type: "UPDATE_TO_CART",
    payload: bookId,
    num
  }
}

export const deleteCarItems = (newCarItems) => {
  return {
    type: 'DELETE_CARITEMS',
    payload: newCarItems
  }
}

export const sumTotal = (total) => {
  return {
    type: 'SUM_TOTAL',
    payload: total
  }
} 