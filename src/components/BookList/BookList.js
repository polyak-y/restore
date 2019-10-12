import React from 'react';
import BookListItem from '../BookListItem/BookListItem'
import './BookList.scss'

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="bookList">
      {
        books.map(book => {
            return (
              <li key={book.id}>
                <BookListItem book={book} onAddedToCart={ onAddedToCart } />
              </li>
            )
        })
      }
    </ul>
  )
}

export default BookList