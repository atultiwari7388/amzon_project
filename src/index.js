import React from "react";
import ReactDOM from 'react-dom'
import './index.css'
import Heading from './Heading'


const googlePixel = {
     img: 'https://images-na.ssl-images-amazon.com/images/I/71Ns3Z6KFcL._AC_UL200_SR200,200_.jpg',
     title: 'Google Pixel 4A',
     price: 26.999,
     Rating: 4.5
}

const samsungGalaxy = {
     img: 'https://images-na.ssl-images-amazon.com/images/I/61qeRQ18AkL._AC_UL200_SR200,200_.jpg',
     title: 'Samsung Galaxy S20 5g',
     price: 55.999,
     Rating: 4.3
}

const appleIphone = {
     img: 'https://images-na.ssl-images-amazon.com/images/I/51nMyrt3pWL._AC_UL200_SR200,200_.jpg',
     title: 'Apple Iphone XR',
     price: '$273.84',
     Rating: 4.5
}


const redmiNote10 = {
     img: 'https://m.media-amazon.com/images/I/71IqJQM2stL._AC_UL320_.jpg',
     title: 'Redmi Note 10',
     price: '$273.84',
     Rating: 4.5
}

const onePlus = {
     img: 'https://m.media-amazon.com/images/I/71zlbKfhFsL._AC_UL320_.jpg',
     title: 'One Plus 8T',
     Rating: 4.6,
     price: 29.999
}

const boat = {
     img: 'https://m.media-amazon.com/images/I/61ku39qVEzL._AC_UL320_.jpg',
     title: ' Boat Rockerz 255 spot',
     Rating: 4.0,
     price: 699
}


const PhoneList = () => {
     return (
          <>
          <Heading/>
          <section className='phonelist'>
               <Phone
                    img={googlePixel.img}
                    title={googlePixel.title}
                    price={googlePixel.price}
                    Rating={googlePixel.Rating}
               />

               <Phone
                    img={samsungGalaxy.img}
                    title={samsungGalaxy.title}
                    price={samsungGalaxy.price}
                    Rating={samsungGalaxy.Rating}
               />

               <Phone
                    img={appleIphone.img}
                    title={appleIphone.title}
                    price={appleIphone.price}
                    Rating={appleIphone.Rating}
               />

               <Phone
                    img={redmiNote10.img}
                    title={redmiNote10.title}
                    price={redmiNote10.price}
                    Rating={redmiNote10.Rating}
               />

               <Phone
                    img={onePlus.img}
                    title={onePlus.title}
                    price={onePlus.price}
                    Rating={onePlus.Rating}
               />

               <Phone
                    img={boat.img}
                    title={boat.title}
                    price={boat.price}
                    Rating={boat.Rating}
               />

          </section>
          </>
     )
}

const Phone = (props) => {
     console.log(props)
     return (
          <article className='phone'>
               <img src={props.img} alt='' />
               <h1>{props.title}</h1>
               <h4>Price : {props.price}</h4>
               <h4>Rating : {props.Rating}</h4>
          </article>
     )
}

ReactDOM.render(<PhoneList />, document.getElementById('root'))