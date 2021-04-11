// using props , map , destructuring


import React from "react";
import ReactDOM from 'react-dom'
import './index.css'

// setup arrays

const books =  [
     {
          id:101,

          img: 'https://images-na.ssl-images-amazon.com/images/I/51nMyrt3pWL._AC_UL200_SR200,200_.jpg',
          title: 'Apple Iphone XR',
          price: '$273.84',
          Rating: 4.5
},

     {
          id:102,
          img: 'https://m.media-amazon.com/images/I/71zlbKfhFsL._AC_UL320_.jpg',
          title: 'One Plus 8T',
          Rating: 4.6,
          price: 29.999
},
     {
          id:103,
          img: 'https://m.media-amazon.com/images/I/61ku39qVEzL._AC_UL320_.jpg',
          title: ' Boat Rockerz 255 spot',
          Rating: 4.0,
          price: 699
},

]

const BookList = () => {
     return (
               <section className='booklist'>
                    {books.map((book)=>{
                         // console.log(book)
                         // const {img, title, price, Rating} = book
                         return(
                              <Book key={book.id} book={book}></Book>

                              // {/* <img src={img} alt='' />
                              // <h3>{title}</h3>
                              // <h4>{price}</h4>
                              // <h5>{Rating}</h5> */}
                         )
                    })}
               </section>
     )
}

const Book = (props) => {
     const { img, title, price, Rating } = props.book
     return (
          <article className='book'>
               <img src={img} alt='' />
               <h1>{title}</h1>
               <h4>Price : {price}</h4>
               <h4>Rating : {Rating}</h4>
          </article>
     )
}

ReactDOM.render(<BookList />, document.getElementById('root'))