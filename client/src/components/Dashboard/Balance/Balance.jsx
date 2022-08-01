import React, { useEffect, useState } from 'react'
import ChartComponent from './Chart/ChartComponent'
import './Balance.css'
import { getBalance } from '../../../helpers/helpers'

export default function Balance() {
    const [balance, setBalance] = useState()
    useEffect(() => {
        getBalance('62d34380b3954d8270d05ea2').then(res => setBalance(res))
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
