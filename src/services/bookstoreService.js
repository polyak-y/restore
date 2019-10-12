export default class BookstoreService  {
  data = [
    {
      id: 1, 
      title: 'Книга про реакт', 
      author: 'Джордано Бруно',
      price: 32,
      coverImage: 'https://cdn1.ozone.ru/multimedia/c1200/1021367273.jpg'
    },
    {
      id: 2, 
      title: 'Как поймать Чебурашку', 
      author: 'Иван Нигга',
      price: 45,
      coverImage: 'https://cdn1.ozone.ru/multimedia/c1200/1027435834.jpg'
    }
  ] 

  getBooks = () => {
    return  new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(this.data)
      }, 700)
    })
  }
}
