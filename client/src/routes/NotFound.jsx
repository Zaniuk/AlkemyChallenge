import React from 'react'
import ErrImage from '../assets/xmark-solid.svg'
import './css/NotFound.css'

export default function NotFound() {
  return (
    <section className="container error-component">
      
      <div className='error-img-container' ><img  className='error-img' src={ErrImage} alt="Error"/></div>
      <h1>Error 404: Not Found</h1>
      <div className='button-container'><a href="/"><button>Go Home</button></a></div>
    </section>
  )
}
