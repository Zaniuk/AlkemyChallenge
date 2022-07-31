import React from 'react'

export default function SelectConcept({ setConcept, type, concept }) {
    if (type == 'income') {
        return (
            <label>
                <span>Operation concept</span>
                <select name="concept-outcome" id="concept" value={'Salary'}  onChange={e => setConcept(e.target.value)}>
                    <option value="Salary">Salary</option>
                </select>
            </label>
        )
    } 
    if(type == 'outcome'){
        return (
            <label>
                <span>Operation concept</span>
                <select name="concept" id="concept" defaultValue={'Taxes'} onChange={e => setConcept(e.target.value)}>
                    
                    <option value="Taxes">Taxes</option>
                    <option value="Food">Food</option>
                    <option value="Games">Games</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
            </label>
        )
    }
}
