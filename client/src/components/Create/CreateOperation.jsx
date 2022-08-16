import React from 'react'
import SelectConcept from '../Reusable/SelectConcept'
import { useState } from 'react'
import { createOpr } from '../../helpers/helpers.js'
import DatePicker from 'react-datepicker'

export default function CreateOperation() {
    const [concept, setConcept] = useState('Services')
    const [type, setType] = useState('outcome')
    const [amount, setAmount] = useState(1)
    const token = sessionStorage.getItem('token')
    const [startDate, setStartDate] = useState(new Date());

    return (
        <section className="container">
            <form onSubmit={e => {
                e.preventDefault()
                if (token) {
                    const date = new Date(startDate).toISOString()
                    
                    createOpr({ concept, amount, type, token, date })
                        .then(res => {
                            if (!res.error) {
                                location.replace('/')
                            }
                        })
                } else {
                    location.replace('/login')
                }

            }}>
                <label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </label>
                <label>
                    <span>Operation type</span>
                    <select name="type" id="type" value={type} onChange={e => {
                        setType(e.target.value)
                        if (e.target.value === 'income') {
                            setConcept('Salary')
                        }
                    }}>
                        <option value="outcome">outcome</option>
                        <option value="income">income</option>
                    </select>
                </label>
                <SelectConcept key={type} type={type} concept={concept} setConcept={setConcept} />
                <label>
                    <span>Operation amount</span>
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
                </label>
                <label>
                    <button type="submit">Enviar</button>
                </label>
            </form>
        </section>
    )
}
