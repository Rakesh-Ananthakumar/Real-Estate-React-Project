import 'react-slideshow-image/dist/styles.css'

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Navbar from './navbar';

const spanStyle = {
  padding: '0',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://c4.wallpaperflare.com/wallpaper/846/173/87/5c1cbaf96bcec-wallpaper-preview.jpg'
  },
  {
    url: 'https://thumbs.dreamstime.com/b/new-home-house-blue-exterior-dramatic-sky-background-206071056.jpg?w=768'
  },
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    url: 'https://images.pexels.com/photos/262405/pexels-photo-262405.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        {/* <Navbar/> */}
        <Slide>
          
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle }}>
                <span style={spanStyle}>{slideImage.caption}</span>
                <img src={slideImage.url} width='100%' height='100%'/>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;