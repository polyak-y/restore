import React from 'react';
import './BookListItem.scss'


const BookListItem = ({ book, onAddedToCart }) => {
  const { id, title, author, price, coverImage } = book

  return (
    <div className="bookListItem">
      <div className="bookCover">
        <img src={ coverImage } alt="cover"/>
      </div>

      <div className="bookDetail">
        <span className="bookTitle">{ title }. </span>
        <div className="bookAuthor">Автор: { author }</div>
        <div className="bookPrice">Цена: ${ price }</div>
        <button 
          className="btn btn-info addToCart"
          onClick={() => onAddedToCart(id) }
        >Add to cart</button>
      </div>      
    </div>
  )
}

export default BookListItem