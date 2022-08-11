import React from 'react'
import SelectConcept from '../Reusable/SelectConcept'
import { useState } from 'react'
import { createOpr } from '../../helpers/helpers.js'

export default function CreateOperation() {
    const [concept, setConcept] = useState('Taxes')
    const [type, setType] = useState('outcome')
    const [amount, setAmount] = useState(1)
    const token = '950620a4-9a95-4a1e-b34d-470d5096498a'
    return (
        <section className="container">
            <form onSubmit={e => {
                e.preventDefault()
                createOpr({ concept, amount, type, token })
                    .then(res => {
                       if(res) {
                        setTimeout(() => {
                            window.location.replace('/')
                        }, 500)
                       }
                    })
                
            }}>
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
