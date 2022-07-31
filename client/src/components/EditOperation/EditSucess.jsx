import React from 'react'
import SucessIMG from '../../assets/circle-check-solid.svg'
import './css/EditSucess.css'
export default function EditSucess() {
  return (
    <section className='container sucess-msg'>
        <div className="sucess-img-container"><img className='sucess-img' src={SucessIMG} alt="Sucess" /></div>
        <h1>Sucess!</h1>
        <div className="button-container"><a href="/"><button>Go Home</button></a></div>
    </section>
  )
}
