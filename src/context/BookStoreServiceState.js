import React from 'react';
import { BookContext } from './BookStoreServiceContext'
import BookstoreService from '../services/bookstoreService'

const BookStoreServiceState = ({ children }) => {
  const service = new BookstoreService()
  const { getBooks } = service

  return (
    <BookContext.Provider value={{getBooks}}>
      {children}
    </BookContext.Provider>
  )
}

export default BookStoreServiceState