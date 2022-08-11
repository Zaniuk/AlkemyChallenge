import React, { useEffect, useState } from 'react'
import ChartComponent from './Chart/ChartComponent'
import './Balance.css'
import { getBalance } from '../../../helpers/helpers'

export default function Balance() {
    const [balance, setBalance] = useState()
    useEffect(() => {
        getBalance('950620a4-9a95-4a1e-b34d-470d5096498a').then(res => setBalance(res))
    }, [])
  return (
    <section className='balance'>
        <div className="balance-text-info">
            <h1>Hola, <span className="color-primary">Geronimo</span></h1>
            <h2>Tu balance es: ${balance} </h2>
        </div>
        <ChartComponent/>
    </section>
  )
}
