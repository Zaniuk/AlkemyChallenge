import React from 'react'
import { useState , useEffect} from 'react'
import {getOne, updateOne } from '../../../helpers/helpers'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
export default function IncomeForm({id}) {
  const [operation, setOperation] = useState({})
    const [date, setDate] = useState()
    const [concept, setConcept] = useState('')
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        getOne(id)
            .then(res => {
                setOperation(res)
                setDate(new Date(res.date))
                setConcept(res.concept)
                setAmount(res.amount)
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
        <DatePicker selected={date} onChange={date => {
            console.log(date)
        }}/>
      </label>
      <label>
        <span>Concept</span>
        <select id="concept" required>
          <option value="Salary">Salary</option>
        </select>
      </label>
      <label>
        <span>Amount</span>
        <input type="number" id='amount' value={amount} onChange={e => setAmount(e.target.value)}/>
      </label>
      <label>
        <button type="submit">Enviar</button>
      </label>
    </form>
  )
}
