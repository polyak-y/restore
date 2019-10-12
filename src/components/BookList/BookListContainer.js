import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { BookContext } from '../../context/BookStoreServiceContext';
import { booksLoaded, loadingTrue, booksError, bookAddedToCart, bookUpdateToCart } from '../../store/actions';
import Spinner from '../Spinner/Spinner'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'
import BookList from './BookList' 

const BookListContainer = () => { 
  const bookContext = useContext(BookContext) //для получений фукнций служащих для работы с сервером
 
  const { books, loading, error } = useSelector(state => state.book)
  const { cartItems } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => { // при монтировании комопонента передаем данные от сервера в хранилище редакса
    bookContext.getBooks()
    .then(data => { // фукнция по получению массива от сервера
      dispatch(booksLoaded(data))
    })
    .catch((err) => {
      dispatch(booksError(err))
    })  
    
    return () => { //аналог componentWillUnmount - то есть при размонтировании происходит то что происходит
      dispatch(loadingTrue())
    }
    // eslint-disable-next-line
  }, []) 

  const onAddedToCart = (id) => { //клик на кнопку "add to cart"

    if(cartItems.some(elem => elem.id === id)) { //если книжка уже есть в корзине
      dispatch(bookUpdateToCart(id, 1))
    } else { 
      const book = books.find(elem => elem.id === id)
      
      const newItem = {
        id: book.id,
        title: book.title,
        count: 1, 
        total: book.price
      }      

      dispatch(bookAddedToCart(newItem))
    }   

    
  }  

  if(error) {
    return <ErrorIndicator />
  }

  return (
    <>
      { 
        !loading 
          ? <BookList books={books} onAddedToCart={onAddedToCart} />
          : <Spinner />        
      }
    </>    
  )
}

export default BookListContainer