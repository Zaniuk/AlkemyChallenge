import React from 'react'

export default function IncomeForm() {
  return (
    <form onSubmit={e => {
        e.preventDefault()
        console.log(e.target.amount.value)
    }}>
      <label>
        <span>Date</span>
        <input type="date" name="date" id="date"  required/>
      </label>
      <label>
        <span>Concept</span>
        <select id="concept" required>
          <option value="Salary">Salary</option>
        </select>
      </label>
      <label>
        <span>Amount</span>
        <input type="number" id='amount' required />
      </label>
      <label>
        <button type="submit">Enviar</button>
      </label>
    </form>
  )
}
