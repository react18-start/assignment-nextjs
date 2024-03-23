/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import 'C:/Users/Faisal/Desktop/figma-app/src/Card.css';

const Card = ({image,btnLink,btnTitle,heading,description}) => {
  return (
    <div className='card'>
      <img src={image}/>
      <button>{btnTitle}</button>
      <h6>{heading}</h6>
      <div className='pgh'>{description}</div>
    </div>
  )
}

export default Card
