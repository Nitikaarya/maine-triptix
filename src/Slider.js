import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider(){
     return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="i1.jpg"
      alt="First slide" 
    />
    <Carousel.Caption style={{marginBottom: "10%"}}>
      <h3>Stop Wasting Time!</h3>
      <h1>Use the Maine Trip Tix App for all of your state compilance needs!</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="i2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption style={{marginBottom: "10%"}}>
      <h3>App works on multiple devices!</h3>
      <h1>Use this app on your phone to fill out trip tickets. No more paperwork!</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="i3.jpg"
      alt="Third slide"
    />
      <Carousel.Caption style={{marginBottom: "10%"}}>
       <h3>Time Stamp each trip with the press of a button</h3>
       <h1>Save each Trip Tickets as a PDF on your device or in storage for Official use </h1>
      </Carousel.Caption>
     </Carousel.Item>
  </Carousel>
   )
 }
export default Slider