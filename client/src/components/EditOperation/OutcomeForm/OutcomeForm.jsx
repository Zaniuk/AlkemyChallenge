import React, { useEffect, useState } from 'react'
import {getOne, updateOne } from '../../../helpers/helpers'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
export default function OutcomeForm({id}) {
    const [date, setDate] = useState()
    const [concept, setConcept] = useState('')
    const [amount, setAmount] = useState(0)
    const token = sessionStorage.getItem('token')
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        getOne(id)
            .then(res => {
                setOperation(res)
                setDate(res.date)
                setConcept(res.concept)
                setAmount(res.amount)
                console.log(date)
            })
    }, [])
  return (
    <form onSubmit={e => {
        e.preventDefault()
        updateOne({id, date, concept, amount}).then(res =>{
            if(res.acknowledged === true && res.modifiedCount === 1){
                window.location.href = '/sucess'
            }
            console.log(res)
        })
    }}>
      <label>
        <span>Date</span>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </label>
      <label>
        <span>Concept</span>
        <select id="concept" value={concept} onChange={e => setConcept(e.target.value)}>
          <option value="Taxes">Taxes</option>
          <option value="Games">Games</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </label>
      <label>
        <span>Amount</span>
        <input type="number" id='amount' value={amount} onChange={e => setAmount(e.target.value)}/>
      </label>
      <label>
        <button>Enviar</button>
      </label>
    </form>
  )
}
