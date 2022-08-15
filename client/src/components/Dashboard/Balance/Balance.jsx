import React, { useEffect, useState } from 'react'
import ChartComponent from './Chart/ChartComponent'
import './Balance.css'
import { getBalance } from '../../../helpers/helpers'

export default function Balance() {
    const [balance, setBalance] = useState()
    useEffect(() => {
        const token = sessionStorage.getItem('token')
        token ? getBalance(token).then(res => setBalance(res)) : location.replace('/login')
    }, [])
  return (
    <section className='balance'>
        <div className="balance-text-info">
            <h1>Hello, <span className="color-primary">Geronimo</span></h1>
            <h2>Your balance is: ${balance} </h2>
        </div>
        <ChartComponent/>
    </section>
  )
}
